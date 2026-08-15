# Installation & Setup Guide

Getting started with NSDAHR resources locally or accessing the platform online is fast and simple.

---

## ⚡ Quick Start Options

### Option 1: Access Online
Simply navigate to the NSDAHR Learning Hub page at `/docs/docs.html` in your browser. All study guides, practice questions, and code examples are available instantly without any account creation.

---

### Option 2: Run Locally (Local HTTP Server)

To run the platform locally on your machine, clone the GitHub repository and serve the files using any static local web server.


#### 1. Clone the repository
```bash
git clone https://github.com/alrifatsabbir/nsdahr.git
```
#### 2. Navigate to the project directory
```bash
cd nsdahr
```
#### 3. Start a local server (Python example)
```bash
python3 -m http.server 8080
```

#### Or using Node.js npx serve

```bash
npx serve .
```

Then open `http://localhost:8080` in your web browser.

---

## 🎨 Tailwind CSS Installation

If you want to practice or extend the `qa-tailwindcss` resources with a live Tailwind build, set it up as follows.

### Option A: CDN (Fastest, no build step)

```html
<script src="https://cdn.tailwindcss.com"></script>
```

Add this inside your `<head>` tag and start using Tailwind utility classes right away — ideal for quickly testing snippets from `tailwindcss.md`.

### Option B: Local Install via npm (Recommended for projects)

```bash
# 1. Initialize npm (if not already done)
npm init -y

# 2. Install Tailwind CSS
npm install -D tailwindcss

# 3. Generate the Tailwind config file
npx tailwindcss init

# 4. Add the Tailwind directives to your CSS (e.g., src/input.css)
# @tailwind base;
# @tailwind components;
# @tailwind utilities;

# 5. Start the build process (watch mode)
npx tailwindcss -i ./src/input.css -o ./dist/output.css --watch
```

Then link `dist/output.css` in your HTML file's `<head>`.

---

## 🅱️ Bootstrap Installation

If you want to practice or extend the `qa-bootstrap` resources with a working Bootstrap setup, set it up as follows.

### Option A: CDN (Fastest, no build step)

```html
<!-- CSS -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">

<!-- JS Bundle (includes Popper) -->
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
```

Add the CSS link inside `<head>` and the JS bundle just before the closing `</body>` tag — ideal for quickly testing snippets from `bootstrap.md`.

### Option B: Local Install via npm (Recommended for projects)

```bash
# 1. Initialize npm (if not already done)
npm init -y

# 2. Install Bootstrap
npm install bootstrap

# 3. Import in your main CSS or JS entry file
# @import "bootstrap/dist/css/bootstrap.min.css";
# import "bootstrap/dist/js/bootstrap.bundle.min.js";
```

Then bundle your entry file with your preferred bundler (Vite, Webpack, Parcel, etc.).

---

## 🛠️ Project Structure

```text
nsda/
├── home.html                     # Landing page HTML
├── style.css                     # Landing page styles
├── script.js                     # Landing page script
├── intro/
│   ├── intro.md                  # Introduction page
│   └── install.md                # Installation guide
├── docs/
│   ├── docs.html                 # Learning hub container
│   ├── docs.css                  # Learning hub styles
│   ├── docs.js                   # Navigation & Markdown parser logic
│   └── docs.json                 # Navigation configuration
├── qa-html/                      # HTML Q&A resources
├── qa-css/                       # CSS Q&A resources
├── qa-js/                        # JavaScript Q&A resources
├── qa-tailwindcss/               # Tailwind CSS Q&A resources
│   ├── tailwindcss-question.md   # Practice questions
│   └── tailwindcss.md            # Questions with answers
└── qa-bootstrap/                 # Bootstrap Q&A resources
    ├── bootstrap-question.md     # Practice questions
    └── bootstrap.md              # Questions with answers
```

---

> [!NOTE]
> Maintained & Managed by [**alrifatsabbir**](https://alriftsabbir.me). Feel free to star the project on [GitHub](https://github.com/alrifatsabbir/nsdahr.git)!