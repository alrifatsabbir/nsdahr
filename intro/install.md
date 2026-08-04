# Installation & Setup Guide

Getting started with NSDAHR resources locally or accessing the platform online is fast and simple.

---

## ⚡ Quick Start Options

### Option 1: Access Online
Simply navigate to the NSDAHR Learning Hub page at `/docs/docs.html` in your browser. All study guides, practice questions, and code examples are available instantly without any account creation.

---

### Option 2: Run Locally (Local HTTP Server)

To run the platform locally on your machine, clone the GitHub repository and serve the files using any static local web server.

```bash
# 1. Clone the repository
git clone https://github.com/alrifatsabbir/nsdahr.git

# 2. Navigate to the project directory
cd nsdahr

# 3. Start a local server (Python example)
python3 -m http.server 8080

# Or using Node.js npx serve
npx serve .
```

Then open `http://localhost:8080` in your web browser.

---

## 🛠️ Project Structure

```text
nsda/
├── home.html           # Landing page HTML
├── style.css           # Landing page styles
├── script.js           # Landing page script
├── intro/
│   ├── intro.md        # Introduction page
│   └── install.md      # Installation guide
├── docs/
│   ├── docs.html       # Learning hub container
│   ├── docs.css        # Learning hub styles
│   ├── docs.js         # Navigation & Markdown parser logic
│   └── docs.json       # Navigation configuration
├── qa-html/            # HTML Q&A resources
├── qa-css/             # CSS Q&A resources
└── qa-js/              # JavaScript Q&A resources
```

---

> [!NOTE]
> Maintained & Managed by **alrifatsabbir**. Feel free to star the project on [GitHub](https://github.com/alrifatsabbir/nsdahr.git)!
