(function loadExternalLibs() {
  function addScript(src) {
    return new Promise((resolve) => {
      const s = document.createElement('script');
      s.src = src;
      s.onload = () => resolve(true);
      s.onerror = () => resolve(false);
      document.head.appendChild(s);
    });
  }

  window.__libsReady = (async () => {
    await addScript('https://cdn.jsdelivr.net/npm/highlight.js@11.9.0/dist/highlight.min.js');
    await addScript('https://cdn.jsdelivr.net/npm/marked@11.1.1/lib/marked.umd.js');
    await addScript('https://cdn.jsdelivr.net/npm/marked-highlight@2.1.1/lib/index.umd.js');

    if (typeof window.marked === 'undefined') {
      await addScript('https://cdnjs.cloudflare.com/ajax/libs/marked/11.1.1/marked.min.js');
    }
    if (typeof window.hljs === 'undefined') {
      await addScript('https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/highlight.min.js');
    }

    if (typeof window.marked !== 'undefined' && typeof window.markedHighlight !== 'undefined') {
      window.marked.use(window.markedHighlight.markedHighlight({
        langPrefix: 'hljs language-',
        highlight(code, lang) {
          if (typeof window.hljs === 'undefined') return code;
          if (lang && window.hljs.getLanguage(lang)) {
            return window.hljs.highlight(code, { language: lang }).value;
          }
          return window.hljs.highlightAuto(code).value;
        }
      }));
    }
  })();
})();

function fallbackMarkdownToHtml(md) {
  const escapeHtml = (s) => s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
  const lines = md.replace(/\r\n/g, '\n').split('\n');
  let html = '';
  let inCode = false, codeBuf = '';
  let inList = null;

  function closeList() {
    if (inList) { html += `</${inList}>`; inList = null; }
  }
  function inline(text) {
    text = escapeHtml(text);
    text = text.replace(/`([^`]+)`/g, '<code>$1</code>');
    text = text.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
    text = text.replace(/\*([^*]+)\*/g, '<em>$1</em>');
    text = text.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>');
    return text;
  }

  for (let raw of lines) {
    const fence = raw.match(/^```(\w*)/);
    if (fence) {
      if (!inCode) { inCode = true; codeBuf = ''; closeList(); }
      else { html += `<pre><code>${escapeHtml(codeBuf)}</code></pre>`; inCode = false; }
      continue;
    }
    if (inCode) { codeBuf += raw + '\n'; continue; }

    let m;
    if ((m = raw.match(/^(#{1,6})\s+(.*)$/))) {
      closeList();
      const level = m[1].length;
      html += `<h${level}>${inline(m[2])}</h${level}>`;
      continue;
    }
    if ((m = raw.match(/^>\s?(.*)$/))) {
      closeList();
      html += `<blockquote><p>${inline(m[1])}</p></blockquote>`;
      continue;
    }
    if ((m = raw.match(/^\s*[-*]\s+(.*)$/))) {
      if (inList !== 'ul') { closeList(); html += '<ul>'; inList = 'ul'; }
      html += `<li>${inline(m[1])}</li>`;
      continue;
    }
    if ((m = raw.match(/^\s*\d+\.\s+(.*)$/))) {
      if (inList !== 'ol') { closeList(); html += '<ol>'; inList = 'ol'; }
      html += `<li>${inline(m[1])}</li>`;
      continue;
    }
    if (raw.trim() === '') { closeList(); continue; }
    if (raw.trim() === '---') { closeList(); html += '<hr>'; continue; }

    closeList();
    html += `<p>${inline(raw)}</p>`;
  }
  closeList();
  if (inCode) html += `<pre><code>${escapeHtml(codeBuf)}</code></pre>`;
  return html;
}

function renderMarkdown(md) {
  if (typeof window.marked !== 'undefined') {
    return window.marked.parse(md);
  }
  return fallbackMarkdownToHtml(md);
}

// Fallback config if docs.json cannot be fetched
const DEFAULT_NAV = [
  {
    section: "Getting Started",
    pages: [
      { slug: "introduction", title: "Introduction", file: "../intro/intro.md" },
      { slug: "installation", title: "Installation & Setup", file: "../intro/install.md" }
    ]
  },
  {
    section: "Questions & Answers",
    pages: [
      { slug: "html-guide", title: "HTML5 Q&A Guide", file: "../qa-html/html-question.md" },
      { slug: "css-guide", title: "CSS3 Q&A Guide", file: "../qa-css/css-question.md" },
      { slug: "javascript-guide", title: "JavaScript Q&A Guide", file: "../qa-js/js-question.md" }
    ]
  },
  {
    section: "Practice & Exam Prep",
    pages: [
      { slug: "html-qanda", title: "HTML Practice Set", file: "../qa-html/index.md" },
      { slug: "css-qanda", title: "CSS Styling Practice", file: "../qa-css/style.md" },
      { slug: "js-qanda", title: "JS Scripting Practice", file: "../qa-js/script.md" }
    ]
  }
];

let NAV = DEFAULT_NAV;
let FLAT_PAGES = NAV.flatMap(s => s.pages);

async function loadNavConfig() {
  try {
    const res = await fetch('docs.json');
    if (res.ok) {
      NAV = await res.json();
      FLAT_PAGES = NAV.flatMap(s => s.pages);
    }
  } catch (err) {
    console.warn('Using default NAV configuration');
  }
}

function slugify(text){
  return text.toLowerCase().trim().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-');
}

const sidebarNav = document.getElementById('sidebar-nav');
function renderSidebar(activeSlug, filterText = '') {
  sidebarNav.innerHTML = '';
  const q = filterText.trim().toLowerCase();
  NAV.forEach(section => {
    const pages = section.pages.filter(p => !q || p.title.toLowerCase().includes(q));
    if (!pages.length) return;
    const label = document.createElement('div');
    label.className = 'nav-section-label';
    label.textContent = section.section;
    sidebarNav.appendChild(label);
    pages.forEach(p => {
      const a = document.createElement('a');
      a.href = '#' + p.slug;
      a.className = 'nav-item' + (p.slug === activeSlug ? ' active' : '');
      a.innerHTML = `<span>${p.title}</span>`;
      sidebarNav.appendChild(a);
    });
  });
  if (q && !sidebarNav.children.length) {
    sidebarNav.innerHTML = '<p class="text-sm text-muted px-3 py-4">No topics match "' + filterText + '".</p>';
  }
}

document.getElementById('sidebar-search').addEventListener('input', (e) => {
  renderSidebar(currentSlug, e.target.value);
});

const contentEl = document.getElementById('content');
const breadcrumbEl = document.getElementById('breadcrumb');
const tocEl = document.getElementById('toc');
const pageNavEl = document.getElementById('page-nav');
let currentSlug = null;

async function loadMarkdown(path) {
  try {
    const res = await fetch(path, { cache: 'no-store' });
    if (!res.ok) throw new Error('not ok');
    return await res.text();
  } catch (err) {
    return `# Resource Page\n\nCould not load resource from **${path}**. Please ensure you are serving files through a local server.`;
  }
}

function findPage(slug) {
  return FLAT_PAGES.find(p => p.slug === slug);
}

function findSection(slug) {
  return NAV.find(s => s.pages.some(p => p.slug === slug));
}

async function renderPage(slug) {
  const page = findPage(slug) || FLAT_PAGES[0];
  currentSlug = page.slug;

  contentEl.innerHTML = `<div class="space-y-4">
    <div class="skeleton h-10 w-2/3"></div>
    <div class="skeleton h-4 w-full"></div>
    <div class="skeleton h-4 w-5/6"></div>
    <div class="skeleton h-4 w-4/6"></div>
  </div>`;

  if (window.__libsReady) {
    await Promise.race([window.__libsReady, new Promise(r => setTimeout(r, 3000))]);
  }

  const md = await loadMarkdown(page.file);
  const html = renderMarkdown(md);
  contentEl.innerHTML = html;
  contentEl.style.animation = 'none';
  void contentEl.offsetWidth;
  contentEl.style.animation = '';

  const section = findSection(page.slug);
  breadcrumbEl.innerHTML = `
    <span>Resources</span>
    <svg class="w-3 h-3 text-muted/60" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="m9 18 6-6-6-6"/></svg>
    <span>${section ? section.section : ''}</span>
    <svg class="w-3 h-3 text-muted/60" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="m9 18 6-6-6-6"/></svg>
    <span class="text-ink font-semibold">${page.title}</span>
  `;

  const headings = contentEl.querySelectorAll('h2, h3');
  tocEl.innerHTML = '';
  headings.forEach(h => {
    const id = slugify(h.textContent);
    h.id = id;
    const a = document.createElement('a');
    a.href = '#' + slug + '--' + id;
    a.textContent = h.textContent;
    a.className = 'toc-link block' + (h.tagName === 'H3' ? ' toc-h3' : '');
    a.addEventListener('click', (e) => {
      e.preventDefault();
      h.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
    tocEl.appendChild(a);
  });
  if (!headings.length) {
    tocEl.innerHTML = '<p class="text-xs text-muted">No sections on this page.</p>';
  }

  const idx = FLAT_PAGES.findIndex(p => p.slug === page.slug);
  const prev = FLAT_PAGES[idx - 1];
  const next = FLAT_PAGES[idx + 1];
  pageNavEl.innerHTML = `
    ${prev ? `<a href="#${prev.slug}" class="group flex-1 rounded-2xl border border-ink/8 p-4 hover:border-primary/40 hover:bg-card transition-colors">
      <div class="text-xs text-muted mb-1">&larr; Previous Topic</div>
      <div class="text-sm font-semibold text-ink group-hover:text-primary transition-colors">${prev.title}</div>
    </a>` : '<div class="flex-1"></div>'}
    ${next ? `<a href="#${next.slug}" class="group flex-1 rounded-2xl border border-ink/8 p-4 text-right hover:border-primary/40 hover:bg-card transition-colors">
      <div class="text-xs text-muted mb-1">Next Topic &rarr;</div>
      <div class="text-sm font-semibold text-ink group-hover:text-primary transition-colors">${next.title}</div>
    </a>` : '<div class="flex-1"></div>'}
  `;

  renderSidebar(slug, document.getElementById('sidebar-search').value);
  window.scrollTo({ top: 0, behavior: 'instant' in window ? 'instant' : 'auto' });
  closeSidebarMobile();
  setupScrollSpy(headings, slug);
}

let spyObserver = null;
function setupScrollSpy(headings, slug) {
  if (spyObserver) spyObserver.disconnect();
  if (!headings.length) return;
  spyObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      const id = entry.target.id;
      const link = tocEl.querySelector(`a[href="#${slug}--${id}"]`);
      if (!link) return;
      if (entry.isIntersecting) {
        tocEl.querySelectorAll('.toc-link').forEach(l => l.classList.remove('active'));
        link.classList.add('active');
      }
    });
  }, { rootMargin: '-90px 0px -70% 0px' });
  headings.forEach(h => spyObserver.observe(h));
}

function currentSlugFromHash() {
  const hash = window.location.hash.replace('#', '');
  return hash || (FLAT_PAGES[0] ? FLAT_PAGES[0].slug : 'introduction');
}

window.addEventListener('hashchange', () => renderPage(currentSlugFromHash()));

// Init
(async () => {
  await loadNavConfig();
  renderPage(currentSlugFromHash());
})();

const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 8);
});

const sidebar = document.getElementById('sidebar');
const overlay = document.getElementById('sidebar-overlay');
document.getElementById('sidebar-toggle').addEventListener('click', () => {
  sidebar.classList.add('open');
  overlay.classList.remove('hidden');
});
overlay.addEventListener('click', closeSidebarMobile);
function closeSidebarMobile() {
  sidebar.classList.remove('open');
  overlay.classList.add('hidden');
}

window.addEventListener('keydown', (e) => {
  if (e.key === '/' && document.activeElement.tagName !== 'INPUT') {
    e.preventDefault();
    document.getElementById('sidebar-search').focus();
  }
});
