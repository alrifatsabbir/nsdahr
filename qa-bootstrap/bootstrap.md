# Bootstrap 5 Practice Questions & Answers (200 Items)

---

> ## 🟢 Level 1: Beginner (1–50)

### 1. Add Bootstrap 5 to an HTML page using a CDN link.

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
  <title>Bootstrap Starter</title>
</head>
<body>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>
```

### 2. Create a Bootstrap page with a container, heading, and paragraph.

```html
<div class="container">
  <h1>Welcome to Bootstrap</h1>
  <p>This is a paragraph inside a Bootstrap container.</p>
</div>
```

### 3. Add a responsive meta viewport tag to a Bootstrap page.

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

### 4. Create a Bootstrap page with a `.container-fluid` that spans full width.

```html
<div class="container-fluid">
  <h1>Full Width Container</h1>
  <p>This spans 100% of the viewport width.</p>
</div>
```

### 5. Verify Bootstrap is working by displaying a styled alert.

```html
<div class="container mt-4">
  <div class="alert alert-success" role="alert">
    🎉 Bootstrap is working correctly!
  </div>
</div>
```

### 6. Create a two-column layout using the Bootstrap grid.

```html
<div class="container">
  <div class="row">
    <div class="col">Left column</div>
    <div class="col">Right column</div>
  </div>
</div>
```

### 7. Create a three-column equal-width layout.

```html
<div class="container">
  <div class="row">
    <div class="col">Column 1</div>
    <div class="col">Column 2</div>
    <div class="col">Column 3</div>
  </div>
</div>
```

### 8. Create a layout where one column is wider than the others.

```html
<div class="container">
  <div class="row">
    <div class="col-6">Main content (half width)</div>
    <div class="col-3">Sidebar</div>
    <div class="col-3">Extra column</div>
  </div>
</div>
```

### 9. Create a single-column layout that is centered on the page.

```html
<div class="container">
  <div class="row justify-content-center">
    <div class="col-md-6">Centered column</div>
  </div>
</div>
```

### 10. Add spacing between columns using gutters.

```html
<div class="container">
  <div class="row g-4">
    <div class="col"><div class="p-3 bg-light">Gutter 1</div></div>
    <div class="col"><div class="p-3 bg-light">Gutter 2</div></div>
    <div class="col"><div class="p-3 bg-light">Gutter 3</div></div>
  </div>
</div>
```

### 11. Display a page heading using Bootstrap's display classes.

```html
<h1 class="display-1">Display 1</h1>
<h1 class="display-4">Display 4</h1>
<h1 class="display-6">Display 6</h1>
```

### 12. Style a paragraph using `.lead` for introductory text.

```html
<p class="lead">
  This lead paragraph stands out with larger font size and lighter weight.
</p>
```

### 13. Use `.text-muted` to style secondary text.

```html
<p>This is primary text.</p>
<p class="text-muted">This is secondary, muted text.</p>
```

### 14. Make a word bold using a Bootstrap utility class.

```html
<p>This is a <strong class="fw-bold">bold word</strong> inside a paragraph.</p>
```

### 15. Create a blockquote with a source citation using Bootstrap styles.

```html
<figure>
  <blockquote class="blockquote">
    <p>The only way to do great work is to love what you do.</p>
  </blockquote>
  <figcaption class="blockquote-footer">
    Steve Jobs, <cite title="Source Title">Apple Inc.</cite>
  </figcaption>
</figure>
```

### 16. Create a div with a primary background color.

```html
<div class="bg-primary text-white p-3">This div has a primary background.</div>
```

### 17. Apply danger text color to a paragraph.

```html
<p class="text-danger">This paragraph uses the danger text color.</p>
```

### 18. Create a card with a success background and white text.

```html
<div class="card bg-success text-white">
  <div class="card-body">
    <h5 class="card-title">Success Card</h5>
    <p class="card-text">Success background with white text.</p>
  </div>
</div>
```

### 19. Add a light background to a section.

```html
<section class="bg-light p-5">
  <h2>Light Section</h2>
  <p>This section has a light background.</p>
</section>
```

### 20. Apply a dark background and light text to a footer.

```html
<footer class="bg-dark text-white text-center py-4">
  <p class="mb-0">&copy; 2026 My Website</p>
</footer>
```

### 21. Create buttons for all Bootstrap color variants.

```html
<button class="btn btn-primary">Primary</button>
<button class="btn btn-secondary">Secondary</button>
<button class="btn btn-success">Success</button>
<button class="btn btn-danger">Danger</button>
<button class="btn btn-warning">Warning</button>
<button class="btn btn-info">Info</button>
<button class="btn btn-light">Light</button>
<button class="btn btn-dark">Dark</button>
<button class="btn btn-link">Link</button>
```

### 22. Create outline buttons for all color variants.

```html
<button class="btn btn-outline-primary">Primary</button>
<button class="btn btn-outline-secondary">Secondary</button>
<button class="btn btn-outline-success">Success</button>
<button class="btn btn-outline-danger">Danger</button>
<button class="btn btn-outline-warning">Warning</button>
<button class="btn btn-outline-info">Info</button>
<button class="btn btn-outline-dark">Dark</button>
```

### 23. Create a large and a small button.

```html
<button class="btn btn-primary btn-lg">Large Button</button>
<button class="btn btn-primary btn-sm">Small Button</button>
```

### 24. Create a full-width block button.

```html
<button class="btn btn-primary d-grid w-100">Full Width Button</button>
<!-- or wrap in a d-grid container -->
<div class="d-grid">
  <button class="btn btn-primary" type="button">Block Button</button>
</div>
```

### 25. Create a disabled button.

```html
<button class="btn btn-primary" disabled>Disabled Button</button>
<a href="#" class="btn btn-primary disabled" aria-disabled="true">Disabled Link Button</a>
```

### 26. Create an alert for each Bootstrap color variant.

```html
<div class="alert alert-primary">Primary alert</div>
<div class="alert alert-secondary">Secondary alert</div>
<div class="alert alert-success">Success alert</div>
<div class="alert alert-danger">Danger alert</div>
<div class="alert alert-warning">Warning alert</div>
<div class="alert alert-info">Info alert</div>
<div class="alert alert-light">Light alert</div>
<div class="alert alert-dark">Dark alert</div>
```

### 27. Create a dismissible alert.

```html
<div class="alert alert-warning alert-dismissible fade show" role="alert">
  <strong>Warning!</strong> This alert can be dismissed.
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
```

### 28. Add a heading inside an alert.

```html
<div class="alert alert-success" role="alert">
  <h4 class="alert-heading">Well done!</h4>
  <p>You successfully completed the action. Keep up the good work.</p>
</div>
```

### 29. Create an alert with an icon.

```html
<div class="alert alert-info d-flex align-items-center" role="alert">
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-info-circle-fill flex-shrink-0 me-2" viewBox="0 0 16 16">
    <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.08.082-.38 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"/>
  </svg>
  <div>An example info alert with an icon.</div>
</div>
```

### 30. Create an alert that links to another page.

```html
<div class="alert alert-primary" role="alert">
  A simple alert with <a href="#" class="alert-link">an example link</a>. Give it a click if you like.
</div>
```

### 31. Create a basic Bootstrap card with title, text, and button.

```html
<div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">Card Title</h5>
    <p class="card-text">Some quick example text to build on the card title.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
```

### 32. Create a card with a header and footer.

```html
<div class="card">
  <div class="card-header">Featured</div>
  <div class="card-body">
    <h5 class="card-title">Special Title Treatment</h5>
    <p class="card-text">With supporting text below as a natural lead-in.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
  <div class="card-footer text-muted">2 days ago</div>
</div>
```

### 33. Create a card with an image at the top.

```html
<div class="card" style="width: 18rem;">
  <img src="https://via.placeholder.com/300" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title.</p>
  </div>
</div>
```

### 34. Create a card with a list group inside.

```html
<div class="card" style="width: 18rem;">
  <div class="card-header">Card Header</div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">An item</li>
    <li class="list-group-item">A second item</li>
    <li class="list-group-item">A third item</li>
  </ul>
</div>
```

### 35. Create a group of three cards side by side.

```html
<div class="card-group">
  <div class="card">
    <div class="card-body">
      <h5 class="card-title">Card 1</h5>
      <p class="card-text">First card content.</p>
    </div>
  </div>
  <div class="card">
    <div class="card-body">
      <h5 class="card-title">Card 2</h5>
      <p class="card-text">Second card content.</p>
    </div>
  </div>
  <div class="card">
    <div class="card-body">
      <h5 class="card-title">Card 3</h5>
      <p class="card-text">Third card content.</p>
    </div>
  </div>
</div>
```

### 36. Create a basic Bootstrap navigation bar.

```html
<nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
  </div>
</nav>
```

### 37. Add a brand logo/name to the navbar.

```html
<nav class="navbar bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">
      <img src="https://via.placeholder.com/30" alt="Logo" width="30" height="24" class="d-inline-block align-text-top">
      MyBrand
    </a>
  </div>
</nav>
```

### 38. Add navigation links to the navbar.

```html
<nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <ul class="navbar-nav">
      <li class="nav-item"><a class="nav-link active" href="#">Home</a></li>
      <li class="nav-item"><a class="nav-link" href="#">Features</a></li>
      <li class="nav-item"><a class="nav-link" href="#">Pricing</a></li>
    </ul>
  </div>
</nav>
```

### 39. Make the navbar collapsible on mobile.

```html
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">MySite</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item"><a class="nav-link" href="#">Home</a></li>
        <li class="nav-item"><a class="nav-link" href="#">Features</a></li>
      </ul>
    </div>
  </div>
</nav>
```

### 40. Add a search form to the navbar.

```html
<nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <form class="d-flex" role="search">
      <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
      <button class="btn btn-outline-success" type="submit">Search</button>
    </form>
  </div>
</nav>
```

### 41. Create a basic Bootstrap table.

```html
<table class="table">
  <thead>
    <tr><th>#</th><th>Name</th><th>Email</th></tr>
  </thead>
  <tbody>
    <tr><td>1</td><td>Jane Doe</td><td>jane@example.com</td></tr>
    <tr><td>2</td><td>John Smith</td><td>john@example.com</td></tr>
  </tbody>
</table>
```

### 42. Create a striped table.

```html
<table class="table table-striped">
  <thead><tr><th>#</th><th>Name</th></tr></thead>
  <tbody>
    <tr><td>1</td><td>Row one</td></tr>
    <tr><td>2</td><td>Row two</td></tr>
  </tbody>
</table>
```

### 43. Create a table with bordered cells.

```html
<table class="table table-bordered">
  <thead><tr><th>#</th><th>Name</th></tr></thead>
  <tbody><tr><td>1</td><td>Row one</td></tr></tbody>
</table>
```

### 44. Create a hoverable table.

```html
<table class="table table-hover">
  <thead><tr><th>#</th><th>Name</th></tr></thead>
  <tbody>
    <tr><td>1</td><td>Row one</td></tr>
    <tr><td>2</td><td>Row two</td></tr>
  </tbody>
</table>
```

### 45. Create a dark-themed table.

```html
<table class="table table-dark">
  <thead><tr><th>#</th><th>Name</th></tr></thead>
  <tbody><tr><td>1</td><td>Row one</td></tr></tbody>
</table>
```

### 46. Create a form with name and email fields.

```html
<form>
  <div class="mb-3">
    <label for="name" class="form-label">Name</label>
    <input type="text" class="form-control" id="name">
  </div>
  <div class="mb-3">
    <label for="email" class="form-label">Email</label>
    <input type="email" class="form-control" id="email">
  </div>
</form>
```

### 47. Add a password field with a label.

```html
<div class="mb-3">
  <label for="password" class="form-label">Password</label>
  <input type="password" class="form-control" id="password">
</div>
```

### 48. Create a textarea for a message.

```html
<div class="mb-3">
  <label for="message" class="form-label">Message</label>
  <textarea class="form-control" id="message" rows="4"></textarea>
</div>
```

### 49. Add a submit button to a form.

```html
<button type="submit" class="btn btn-primary">Submit</button>
```

### 50. Create a form with a checkbox and radio button.

```html
<form>
  <div class="form-check mb-2">
    <input class="form-check-input" type="checkbox" id="subscribe">
    <label class="form-check-label" for="subscribe">Subscribe to newsletter</label>
  </div>
  <div class="form-check">
    <input class="form-check-input" type="radio" name="plan" id="planFree" checked>
    <label class="form-check-label" for="planFree">Free plan</label>
  </div>
  <div class="form-check">
    <input class="form-check-input" type="radio" name="plan" id="planPro">
    <label class="form-check-label" for="planPro">Pro plan</label>
  </div>
</form>
```

---

> ## 🟡 Level 2: Medium (51–100)

### 51. Create a responsive layout that stacks on mobile and shows three columns on desktop.

```html
<div class="container">
  <div class="row">
    <div class="col-12 col-md-4">Column 1</div>
    <div class="col-12 col-md-4">Column 2</div>
    <div class="col-12 col-md-4">Column 3</div>
  </div>
</div>
```

### 52. Create a grid where one column is offset by two units.

```html
<div class="container">
  <div class="row">
    <div class="col-md-4">Column</div>
    <div class="col-md-4 offset-md-2">Offset Column</div>
  </div>
</div>
```

### 53. Use auto-layout columns to create an equal-width responsive row.

```html
<div class="container">
  <div class="row">
    <div class="col">1 of 3</div>
    <div class="col">1 of 3</div>
    <div class="col">1 of 3</div>
  </div>
</div>
```

### 54. Create a grid where columns reorder on mobile using `order-*` classes.

```html
<div class="container">
  <div class="row">
    <div class="col order-2 order-md-1">First on desktop, second on mobile</div>
    <div class="col order-1 order-md-2">First on mobile, second on desktop</div>
  </div>
</div>
```

### 55. Create a full-width hero section using a container-fluid with centered content.

```html
<div class="container-fluid bg-dark text-white text-center py-5">
  <div class="container">
    <h1 class="display-4">Hero Title</h1>
    <p class="lead">Full-width background with a constrained, centered content column.</p>
  </div>
</div>
```

### 56. Build a sidebar layout with a fixed-width sidebar and flexible main content area.

```html
<div class="d-flex">
  <nav class="bg-light p-3" style="width: 250px; min-height: 100vh;">Sidebar</nav>
  <main class="flex-grow-1 p-3">Main content area</main>
</div>
```

### 57. Create a masonry-like card grid using Bootstrap's grid.

```html
<div class="container">
  <div class="row row-cols-1 row-cols-md-3 g-4">
    <div class="col"><div class="card"><div class="card-body">Short card</div></div></div>
    <div class="col"><div class="card"><div class="card-body">Taller card with more content that wraps across several lines to vary height.</div></div></div>
    <div class="col"><div class="card"><div class="card-body">Card</div></div></div>
  </div>
</div>
```

### 58. Build a responsive pricing table with three equal columns.

```html
<div class="container">
  <div class="row row-cols-1 row-cols-md-3 g-4 text-center">
    <div class="col">
      <div class="card h-100">
        <div class="card-header">Free</div>
        <div class="card-body">
          <h1 class="card-title">$0</h1>
          <a href="#" class="btn btn-outline-primary w-100">Sign up</a>
        </div>
      </div>
    </div>
    <div class="col">
      <div class="card h-100">
        <div class="card-header">Pro</div>
        <div class="card-body">
          <h1 class="card-title">$15</h1>
          <a href="#" class="btn btn-primary w-100">Sign up</a>
        </div>
      </div>
    </div>
    <div class="col">
      <div class="card h-100">
        <div class="card-header">Enterprise</div>
        <div class="card-body">
          <h1 class="card-title">$29</h1>
          <a href="#" class="btn btn-outline-primary w-100">Contact us</a>
        </div>
      </div>
    </div>
  </div>
</div>
```

### 59. Create a layout that changes from 4 columns on xl to 2 on md to 1 on mobile.

```html
<div class="container">
  <div class="row row-cols-1 row-cols-md-2 row-cols-xl-4 g-3">
    <div class="col">1</div>
    <div class="col">2</div>
    <div class="col">3</div>
    <div class="col">4</div>
  </div>
</div>
```

### 60. Build a dashboard layout with a fixed sidebar and scrollable main content.

```html
<div class="d-flex" style="height: 100vh;">
  <nav class="bg-dark text-white p-3" style="width: 240px; overflow-y: auto;">
    <h5>Dashboard</h5>
    <ul class="nav flex-column">
      <li class="nav-item"><a class="nav-link text-white" href="#">Overview</a></li>
      <li class="nav-item"><a class="nav-link text-white" href="#">Reports</a></li>
    </ul>
  </nav>
  <main class="flex-grow-1 p-4" style="overflow-y: auto;">
    <h2>Main Content</h2>
    <p>Scrollable dashboard content goes here.</p>
  </main>
</div>
```
### 61. Center a div both horizontally and vertically using Bootstrap flex utilities.

```html
<div class="d-flex justify-content-center align-items-center" style="height: 300px;">
  <div class="bg-primary text-white p-3">Centered</div>
</div>
```

### 62. Create a navigation bar where items are spaced with `justify-content-between`.

```html
<nav class="navbar bg-light">
  <div class="container-fluid d-flex justify-content-between">
    <a class="navbar-brand" href="#">Brand</a>
    <a class="nav-link" href="#">Contact</a>
  </div>
</nav>
```

### 63. Use `ms-auto` to push navigation links to the right side of a flex container.

```html
<nav class="navbar navbar-expand-lg bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Brand</a>
    <ul class="navbar-nav ms-auto">
      <li class="nav-item"><a class="nav-link" href="#">Home</a></li>
      <li class="nav-item"><a class="nav-link" href="#">About</a></li>
    </ul>
  </div>
</nav>
```

### 64. Build a card footer where two items are at opposite ends using flex utilities.

```html
<div class="card">
  <div class="card-body">Card content</div>
  <div class="card-footer d-flex justify-content-between align-items-center">
    <small class="text-muted">3 days ago</small>
    <button class="btn btn-sm btn-primary">Reply</button>
  </div>
</div>
```

### 65. Create a horizontal stacked component using `.hstack` and `.vr`.

```html
<div class="hstack gap-3">
  <div>Item 1</div>
  <div class="vr"></div>
  <div>Item 2</div>
  <div class="vr"></div>
  <div>Item 3</div>
</div>
```

### 66. Use `flex-wrap` to create a tag cloud that wraps to multiple lines.

```html
<div class="d-flex flex-wrap gap-2">
  <span class="badge bg-secondary">Design</span>
  <span class="badge bg-secondary">Development</span>
  <span class="badge bg-secondary">Bootstrap</span>
  <span class="badge bg-secondary">CSS</span>
  <span class="badge bg-secondary">JavaScript</span>
  <span class="badge bg-secondary">Accessibility</span>
</div>
```

### 67. Build a media object (image + text side by side) using Bootstrap flex.

```html
<div class="d-flex">
  <img src="https://via.placeholder.com/64" class="flex-shrink-0 me-3 rounded" alt="...">
  <div>
    <h5 class="mt-0">Media heading</h5>
    <p>Supporting text next to the image, aligned in a flex row.</p>
  </div>
</div>
```

### 68. Create a centered hero section using `d-flex` with full viewport height.

```html
<div class="d-flex flex-column justify-content-center align-items-center text-center bg-dark text-white" style="height: 100vh;">
  <h1 class="display-3">Full Height Hero</h1>
  <p class="lead">Centered content that fills the viewport.</p>
</div>
```

### 69. Use `gap-*` to add consistent spacing between flex children.

```html
<div class="d-flex gap-3">
  <button class="btn btn-primary">One</button>
  <button class="btn btn-primary">Two</button>
  <button class="btn btn-primary">Three</button>
</div>
```

### 70. Build a responsive flex grid that wraps items with equal width using `col`.

```html
<div class="d-flex flex-wrap">
  <div class="col-6 col-md-3 p-2"><div class="bg-light p-3">Item 1</div></div>
  <div class="col-6 col-md-3 p-2"><div class="bg-light p-3">Item 2</div></div>
  <div class="col-6 col-md-3 p-2"><div class="bg-light p-3">Item 3</div></div>
  <div class="col-6 col-md-3 p-2"><div class="bg-light p-3">Item 4</div></div>
</div>
```

### 71. Create a modal with a title, body text, and close button.

```html
<div class="modal fade" id="basicModal" tabindex="-1" aria-labelledby="basicModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="basicModalLabel">Modal Title</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">This is the modal body content.</div>
    </div>
  </div>
</div>
```

### 72. Create a modal that opens when a button is clicked.

```html
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Launch Modal
</button>

<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal Title</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">This is the modal body content.</div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
```

### 73. Create a scrollable modal for long content.

```html
<div class="modal fade" id="scrollableModal" tabindex="-1" aria-hidden="true">
  <div class="modal-dialog modal-dialog-scrollable">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Scrollable Modal</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
      </div>
      <div class="modal-body">
        <p>Long content repeated many times...</p>
      </div>
    </div>
  </div>
</div>
```

### 74. Create a centered modal dialog.

```html
<div class="modal fade" id="centeredModal" tabindex="-1" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Centered Modal</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
      </div>
      <div class="modal-body">This modal is vertically centered.</div>
    </div>
  </div>
</div>
```

### 75. Create a fullscreen modal that activates on mobile only.

```html
<div class="modal fade" id="fsModal" tabindex="-1" aria-hidden="true">
  <div class="modal-dialog modal-fullscreen-sm-down">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Fullscreen on Mobile</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
      </div>
      <div class="modal-body">Fills the screen below the sm breakpoint only.</div>
    </div>
  </div>
</div>
```

### 76. Create a dropdown menu with three items.

```html
<div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Dropdown button
  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
    <li><a class="dropdown-item" href="#">Something else here</a></li>
  </ul>
</div>
```

### 77. Create a dropdown with a divider and header.

```html
<div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown">Menu</button>
  <ul class="dropdown-menu">
    <li><h6 class="dropdown-header">Account</h6></li>
    <li><a class="dropdown-item" href="#">Profile</a></li>
    <li><a class="dropdown-item" href="#">Settings</a></li>
    <li><hr class="dropdown-divider"></li>
    <li><a class="dropdown-item" href="#">Log out</a></li>
  </ul>
</div>
```

### 78. Create a split button with a dropdown arrow.

```html
<div class="btn-group">
  <button type="button" class="btn btn-primary">Action</button>
  <button type="button" class="btn btn-primary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
    <span class="visually-hidden">Toggle Dropdown</span>
  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">Option 1</a></li>
    <li><a class="dropdown-item" href="#">Option 2</a></li>
  </ul>
</div>
```

### 79. Create a navigation dropdown with nested links.

```html
<nav class="navbar navbar-expand-lg bg-light">
  <div class="container-fluid">
    <ul class="navbar-nav">
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">Services</a>
        <ul class="dropdown-menu">
          <li><a class="dropdown-item" href="#">Consulting</a></li>
          <li><a class="dropdown-item" href="#">Development</a></li>
          <li><a class="dropdown-item" href="#">Support</a></li>
        </ul>
      </li>
    </ul>
  </div>
</nav>
```

### 80. Create a dropdown that appears on hover using custom CSS.

```html
<style>
  .dropdown:hover .dropdown-menu {
    display: block;
    margin-top: 0;
  }
</style>
<div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button">Hover Menu</button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
  </ul>
</div>
```

### 81. Create a navbar with a brand, links, and a collapse button for mobile.

```html
<nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">MySite</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navMenu">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navMenu">
      <ul class="navbar-nav">
        <li class="nav-item"><a class="nav-link active" href="#">Home</a></li>
        <li class="nav-item"><a class="nav-link" href="#">Features</a></li>
        <li class="nav-item"><a class="nav-link" href="#">Pricing</a></li>
      </ul>
    </div>
  </div>
</nav>
```

### 82. Add a dropdown menu inside a navbar.

```html
<nav class="navbar navbar-expand-lg bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Brand</a>
    <ul class="navbar-nav">
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">Products</a>
        <ul class="dropdown-menu">
          <li><a class="dropdown-item" href="#">Item A</a></li>
          <li><a class="dropdown-item" href="#">Item B</a></li>
        </ul>
      </li>
    </ul>
  </div>
</nav>
```

### 83. Create a dark-themed navbar with white links.

```html
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">MySite</a>
    <ul class="navbar-nav">
      <li class="nav-item"><a class="nav-link" href="#">Home</a></li>
      <li class="nav-item"><a class="nav-link" href="#">About</a></li>
    </ul>
  </div>
</nav>
```

### 84. Add a search form inside a navbar.

```html
<nav class="navbar navbar-expand-lg bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Brand</a>
    <form class="d-flex" role="search">
      <input class="form-control me-2" type="search" placeholder="Search">
      <button class="btn btn-outline-success" type="submit">Search</button>
    </form>
  </div>
</nav>
```

### 85. Create a fixed-top navbar.

```html
<nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
  <div class="container">
    <a class="navbar-brand" href="#">Fixed Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item"><a class="nav-link" href="#">Home</a></li>
        <li class="nav-item"><a class="nav-link" href="#">Pricing</a></li>
      </ul>
    </div>
  </div>
</nav>
```

### 86. Build a tabbed interface with three tabs using Bootstrap nav-tabs.

```html
<ul class="nav nav-tabs" id="myTab" role="tablist">
  <li class="nav-item" role="presentation">
    <button class="nav-link active" data-bs-toggle="tab" data-bs-target="#home" type="button">Home</button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link" data-bs-toggle="tab" data-bs-target="#profile" type="button">Profile</button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link" data-bs-toggle="tab" data-bs-target="#contact" type="button">Contact</button>
  </li>
</ul>
<div class="tab-content" id="myTabContent">
  <div class="tab-pane fade show active" id="home">Home content goes here.</div>
  <div class="tab-pane fade" id="profile">Profile content goes here.</div>
  <div class="tab-pane fade" id="contact">Contact content goes here.</div>
</div>
```

### 87. Create a pills-style navigation with `.nav-pills`.

```html
<ul class="nav nav-pills">
  <li class="nav-item"><a class="nav-link active" href="#">Home</a></li>
  <li class="nav-item"><a class="nav-link" href="#">Profile</a></li>
  <li class="nav-item"><a class="nav-link" href="#">Messages</a></li>
</ul>
```

### 88. Build a vertical tab navigation using `.flex-column`.

```html
<div class="d-flex align-items-start">
  <div class="nav flex-column nav-pills me-3" role="tablist" aria-orientation="vertical">
    <button class="nav-link active" data-bs-toggle="pill" data-bs-target="#v-home" type="button">Home</button>
    <button class="nav-link" data-bs-toggle="pill" data-bs-target="#v-profile" type="button">Profile</button>
  </div>
  <div class="tab-content">
    <div class="tab-pane fade show active" id="v-home">Home content.</div>
    <div class="tab-pane fade" id="v-profile">Profile content.</div>
  </div>
</div>
```

### 89. Create a tab interface where content changes with JavaScript.

```html
<div class="btn-group mb-3">
  <button class="btn btn-outline-primary" onclick="showTab('a')">Tab A</button>
  <button class="btn btn-outline-primary" onclick="showTab('b')">Tab B</button>
</div>
<div id="tabA">Content for Tab A</div>
<div id="tabB" class="d-none">Content for Tab B</div>

<script>
function showTab(tab) {
  document.getElementById('tabA').classList.toggle('d-none', tab !== 'a');
  document.getElementById('tabB').classList.toggle('d-none', tab !== 'b');
}
</script>
```

### 90. Add icons to navigation tab links.

```html
<ul class="nav nav-tabs">
  <li class="nav-item">
    <a class="nav-link active" href="#"><i class="bi bi-house-door me-1"></i>Home</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#"><i class="bi bi-person me-1"></i>Profile</a>
  </li>
</ul>
```
### 91. Create a horizontal form with labels and inputs on the same row.

```html
<form class="row g-3">
  <div class="col-md-6">
    <label for="inputEmail4" class="form-label">Email</label>
    <input type="email" class="form-control" id="inputEmail4">
  </div>
  <div class="col-md-6">
    <label for="inputPassword4" class="form-label">Password</label>
    <input type="password" class="form-control" id="inputPassword4">
  </div>
  <div class="col-12">
    <button type="submit" class="btn btn-primary">Sign in</button>
  </div>
</form>
```

### 92. Create a form with inline layout for a simple search bar.

```html
<form class="d-flex" role="search">
  <input class="form-control me-2" type="search" placeholder="Search">
  <button class="btn btn-outline-success" type="submit">Search</button>
</form>
```

### 93. Add floating labels to input fields.

```html
<form>
  <div class="form-floating mb-3">
    <input type="email" class="form-control" id="floatingEmail" placeholder="name@example.com">
    <label for="floatingEmail">Email Address</label>
  </div>
  <div class="form-floating">
    <input type="password" class="form-control" id="floatingPassword" placeholder="Password">
    <label for="floatingPassword">Password</label>
  </div>
</form>
```

### 94. Create a form with client-side validation using Bootstrap's styles.

```html
<form class="needs-validation" novalidate>
  <div class="mb-3">
    <label for="validationCustom01" class="form-label">First Name</label>
    <input type="text" class="form-control" id="validationCustom01" required>
    <div class="valid-feedback">Looks good!</div>
    <div class="invalid-feedback">First name is required.</div>
  </div>
  <button class="btn btn-primary" type="submit">Submit</button>
</form>
<script>
  (() => {
    'use strict';
    document.querySelectorAll('.needs-validation').forEach(form => {
      form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
      }, false);
    });
  })();
</script>
```

### 95. Create a select dropdown with a custom Bootstrap style.

```html
<div class="mb-3">
  <label for="customSelect" class="form-label">Custom Select</label>
  <select class="form-select" id="customSelect">
    <option selected>Choose an option...</option>
    <option value="1">Option 1</option>
    <option value="2">Option 2</option>
  </select>
</div>
```

### 96. Build a file upload input with Bootstrap styling.

```html
<div class="mb-3">
  <label for="formFile" class="form-label">Upload a file</label>
  <input class="form-control" type="file" id="formFile">
</div>
```

### 97. Create a range slider with a label.

```html
<div class="mb-3">
  <label for="customRange" class="form-label">Adjust the volume</label>
  <input type="range" class="form-range" id="customRange" min="0" max="100">
</div>
```

### 98. Build a form with input groups (prepended icon + input).

```html
<div class="input-group mb-3">
  <span class="input-group-text">@</span>
  <input type="text" class="form-control" placeholder="Username">
</div>
<div class="input-group mb-3">
  <input type="text" class="form-control" placeholder="Recipient's username">
  <span class="input-group-text">@example.com</span>
</div>
```

### 99. Create a multi-step form appearance using multiple form sections.

```html
<div class="progress mb-3" style="height: 4px;">
  <div class="progress-bar" style="width: 33%;"></div>
</div>
<div id="step1">
  <h5>Step 1: Account Info</h5>
  <input type="text" class="form-control mb-2" placeholder="Username">
  <button class="btn btn-primary" onclick="nextStep(1)">Next</button>
</div>
<div id="step2" class="d-none">
  <h5>Step 2: Profile Info</h5>
  <input type="text" class="form-control mb-2" placeholder="Full name">
  <button class="btn btn-primary" onclick="nextStep(2)">Next</button>
</div>
<div id="step3" class="d-none">
  <h5>Step 3: Confirmation</h5>
  <button class="btn btn-success">Submit</button>
</div>
<script>
function nextStep(current) {
  document.getElementById('step' + current).classList.add('d-none');
  document.getElementById('step' + (current + 1)).classList.remove('d-none');
}
</script>
```

### 100. Add a password strength indicator below a password field.

```html
<div class="mb-3">
  <label for="password" class="form-label">Password</label>
  <input type="password" class="form-control" id="password" oninput="checkStrength()">
  <div class="progress mt-2" style="height: 6px;">
    <div id="strengthBar" class="progress-bar" style="width: 0%;"></div>
  </div>
  <small id="strengthText" class="form-text">Password strength: None</small>
</div>
<script>
function checkStrength() {
  const val = document.getElementById('password').value;
  let strength = 0;
  if (val.length >= 8) strength += 25;
  if (/[A-Z]/.test(val)) strength += 25;
  if (/[0-9]/.test(val)) strength += 25;
  if (/[^A-Za-z0-9]/.test(val)) strength += 25;
  const bar = document.getElementById('strengthBar');
  bar.style.width = strength + '%';
  bar.className = 'progress-bar ' + (strength < 50 ? 'bg-danger' : strength < 100 ? 'bg-warning' : 'bg-success');
  document.getElementById('strengthText').textContent =
    'Password strength: ' + (strength < 50 ? 'Weak' : strength < 100 ? 'Medium' : 'Strong');
}
</script>
```

---

> ## 🟠 Level 3: Professional (101–150)

### 101. Build a complete responsive landing page with navbar, hero, features, and footer.

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Landing Page</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container">
      <a class="navbar-brand" href="#">MySite</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item"><a class="nav-link" href="#">Home</a></li>
          <li class="nav-item"><a class="nav-link" href="#">Features</a></li>
          <li class="nav-item"><a class="nav-link" href="#">Contact</a></li>
        </ul>
      </div>
    </div>
  </nav>

  <section class="bg-dark text-white text-center py-5">
    <div class="container">
      <h1 class="display-4 fw-bold">Welcome to MySite</h1>
      <p class="lead">A modern, responsive landing page built with Bootstrap 5.</p>
      <a href="#" class="btn btn-primary btn-lg">Get Started</a>
    </div>
  </section>

  <section class="py-5">
    <div class="container">
      <div class="row text-center g-4">
        <div class="col-md-4">
          <h3>Fast</h3>
          <p>Optimized for speed and performance.</p>
        </div>
        <div class="col-md-4">
          <h3>Secure</h3>
          <p>We prioritize security and data protection.</p>
        </div>
        <div class="col-md-4">
          <h3>Responsive</h3>
          <p>Works seamlessly on all devices.</p>
        </div>
      </div>
    </div>
  </section>

  <footer class="bg-dark text-white py-4">
    <div class="container text-center">
      <p class="mb-0">&copy; 2026 MySite. All rights reserved.</p>
    </div>
  </footer>

  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>
```

### 102. Create a responsive e-commerce product grid that adapts from 1 to 4 columns.

```html
<div class="container py-5">
  <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
    <div class="col">
      <div class="card h-100">
        <img src="https://via.placeholder.com/300" class="card-img-top" alt="Product">
        <div class="card-body">
          <h5 class="card-title">Product 1</h5>
          <p class="card-text">$19.99</p>
          <a href="#" class="btn btn-primary">Add to Cart</a>
        </div>
      </div>
    </div>
    <!-- Repeat .col blocks for additional products -->
  </div>
</div>
```

### 103. Build a responsive blog layout with a main content area and sidebar.

```html
<div class="container py-5">
  <div class="row">
    <div class="col-lg-8">
      <article class="mb-5">
        <h2>Blog Post Title</h2>
        <p class="text-muted">Posted on Jan 1, 2026 by Admin</p>
        <img src="https://via.placeholder.com/800x400" class="img-fluid mb-3" alt="...">
        <p>Article content goes here...</p>
        <a href="#" class="btn btn-primary">Read More</a>
      </article>
    </div>
    <div class="col-lg-4">
      <div class="card mb-4">
        <div class="card-body">
          <h5 class="card-title">About</h5>
          <p class="card-text">Sidebar content.</p>
        </div>
      </div>
    </div>
  </div>
</div>
```

### 104. Create a responsive profile page with an avatar, bio, and tabbed content.

```html
<div class="container py-5">
  <div class="row">
    <div class="col-md-4 text-center">
      <img src="https://via.placeholder.com/150" class="rounded-circle mb-3" alt="Avatar">
      <h4>Jane Doe</h4>
      <p class="text-muted">Frontend Developer</p>
    </div>
    <div class="col-md-8">
      <ul class="nav nav-tabs" id="profileTab">
        <li class="nav-item"><button class="nav-link active" data-bs-toggle="tab" data-bs-target="#about">About</button></li>
        <li class="nav-item"><button class="nav-link" data-bs-toggle="tab" data-bs-target="#posts">Posts</button></li>
      </ul>
      <div class="tab-content pt-3">
        <div class="tab-pane fade show active" id="about">Bio content goes here.</div>
        <div class="tab-pane fade" id="posts">User posts go here.</div>
      </div>
    </div>
  </div>
</div>
```

### 105. Build a responsive admin dashboard with a sidebar, header, and widget grid.

```html
<div class="d-flex">
  <nav class="bg-dark text-white p-3 vh-100" style="width: 220px;">
    <h5>Admin</h5>
    <ul class="nav flex-column">
      <li class="nav-item"><a class="nav-link text-white" href="#">Dashboard</a></li>
      <li class="nav-item"><a class="nav-link text-white" href="#">Users</a></li>
    </ul>
  </nav>
  <div class="flex-grow-1">
    <header class="bg-light p-3 border-bottom d-flex justify-content-between">
      <span>Dashboard</span>
      <span>Welcome, Admin</span>
    </header>
    <main class="p-4">
      <div class="row g-3">
        <div class="col-md-4"><div class="card p-3">Users: 1,204</div></div>
        <div class="col-md-4"><div class="card p-3">Revenue: $8,320</div></div>
        <div class="col-md-4"><div class="card p-3">Orders: 342</div></div>
      </div>
    </main>
  </div>
</div>
```

### 106. Create a magazine-style layout with featured article and secondary article cards.

```html
<div class="container py-5">
  <div class="row g-4">
    <div class="col-md-7">
      <img src="https://via.placeholder.com/700x400" class="img-fluid mb-3" alt="Featured">
      <h2>Featured Article Title</h2>
      <p>Lead paragraph summarizing the featured story...</p>
    </div>
    <div class="col-md-5">
      <div class="d-flex mb-3">
        <img src="https://via.placeholder.com/100" class="me-3" alt="Thumb">
        <div><h6>Secondary Article One</h6><small class="text-muted">2 hours ago</small></div>
      </div>
      <div class="d-flex mb-3">
        <img src="https://via.placeholder.com/100" class="me-3" alt="Thumb">
        <div><h6>Secondary Article Two</h6><small class="text-muted">5 hours ago</small></div>
      </div>
    </div>
  </div>
</div>
```

### 107. Build a responsive FAQ page using Bootstrap's accordion component.

```html
<div class="container py-5">
  <div class="accordion" id="faqAccordion">
    <div class="accordion-item">
      <h2 class="accordion-header">
        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#faq1">
          What is Bootstrap?
        </button>
      </h2>
      <div id="faq1" class="accordion-collapse collapse show" data-bs-parent="#faqAccordion">
        <div class="accordion-body">Bootstrap is a popular CSS framework.</div>
      </div>
    </div>
    <div class="accordion-item">
      <h2 class="accordion-header">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq2">
          Is it free to use?
        </button>
      </h2>
      <div id="faq2" class="accordion-collapse collapse" data-bs-parent="#faqAccordion">
        <div class="accordion-body">Yes, Bootstrap is open source and free.</div>
      </div>
    </div>
  </div>
</div>
```

### 108. Create a timeline layout using Bootstrap grid and custom CSS.

```html
<style>
  .timeline { position: relative; padding-left: 2rem; border-left: 2px solid var(--bs-primary); }
  .timeline-item { position: relative; margin-bottom: 2rem; }
  .timeline-item::before {
    content: ''; position: absolute; left: -2.45rem; top: 0.25rem;
    width: 12px; height: 12px; border-radius: 50%; background: var(--bs-primary);
  }
</style>
<div class="container py-5">
  <div class="timeline">
    <div class="timeline-item">
      <h6>2024 — Started the project</h6>
      <p class="text-muted">Initial idea and prototype.</p>
    </div>
    <div class="timeline-item">
      <h6>2025 — Launched v1.0</h6>
      <p class="text-muted">First public release.</p>
    </div>
  </div>
</div>
```

### 109. Build a responsive image gallery with a lightbox-style modal.

```html
<div class="container py-5">
  <div class="row row-cols-2 row-cols-md-4 g-3">
    <div class="col">
      <img src="https://via.placeholder.com/300" class="img-fluid rounded" data-bs-toggle="modal" data-bs-target="#imgModal1" style="cursor:pointer;" alt="...">
    </div>
  </div>
</div>
<div class="modal fade" id="imgModal1" tabindex="-1" aria-hidden="true">
  <div class="modal-dialog modal-lg modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-body p-0">
        <img src="https://via.placeholder.com/800" class="img-fluid" alt="...">
      </div>
    </div>
  </div>
</div>
```

### 110. Create a footer with multi-column links, social icons, and copyright.

```html
<footer class="bg-dark text-white pt-5 pb-3">
  <div class="container">
    <div class="row g-4">
      <div class="col-md-4">
        <h5>MySite</h5>
        <p class="text-muted">Building great products since 2020.</p>
      </div>
      <div class="col-md-2">
        <h6>Company</h6>
        <ul class="list-unstyled">
          <li><a href="#" class="text-white-50 text-decoration-none">About</a></li>
          <li><a href="#" class="text-white-50 text-decoration-none">Careers</a></li>
        </ul>
      </div>
      <div class="col-md-2">
        <h6>Support</h6>
        <ul class="list-unstyled">
          <li><a href="#" class="text-white-50 text-decoration-none">Help</a></li>
          <li><a href="#" class="text-white-50 text-decoration-none">Contact</a></li>
        </ul>
      </div>
      <div class="col-md-4">
        <h6>Follow Us</h6>
        <a href="#" class="text-white me-2"><i class="bi bi-twitter"></i></a>
        <a href="#" class="text-white me-2"><i class="bi bi-facebook"></i></a>
        <a href="#" class="text-white"><i class="bi bi-instagram"></i></a>
      </div>
    </div>
    <hr class="border-secondary">
    <p class="text-center text-muted mb-0">&copy; 2026 MySite. All rights reserved.</p>
  </div>
</footer>
```
### 111. Set up a Bootstrap Sass build and override the primary color.

```scss
// custom.scss
$primary: #6f42c1;

@import "bootstrap/scss/bootstrap";
```

```bash
npm install bootstrap sass
sass custom.scss custom.css
```

### 112. Create a custom theme by overriding the entire `$theme-colors` map.

```scss
$theme-colors: (
  "primary":   #6f42c1,
  "secondary": #6c757d,
  "success":   #198754,
  "info":      #0dcaf0,
  "warning":   #ffc107,
  "danger":    #dc3545,
  "light":     #f8f9fa,
  "dark":      #212529
);

@import "bootstrap/scss/bootstrap";
```

### 113. Change the default font family across the entire Bootstrap build.

```scss
$font-family-sans-serif: "Inter", system-ui, -apple-system, sans-serif;
$font-family-base: $font-family-sans-serif;

@import "bootstrap/scss/bootstrap";
```

### 114. Override Bootstrap's default border-radius to remove all rounded corners.

```scss
$border-radius: 0;
$border-radius-sm: 0;
$border-radius-lg: 0;
$enable-rounded: false;

@import "bootstrap/scss/bootstrap";
```

### 115. Add a custom breakpoint (e.g., `xs: 0`, with a new `xxs` below 400px).

```scss
$grid-breakpoints: (
  xxs: 0,
  xs: 400px,
  sm: 576px,
  md: 768px,
  lg: 992px,
  xl: 1200px,
  xxl: 1400px
);

$container-max-widths: (
  sm: 540px,
  md: 720px,
  lg: 960px,
  xl: 1140px,
  xxl: 1320px
);

@import "bootstrap/scss/bootstrap";
```

### 116. Create a custom spacing scale by overriding the `$spacers` map.

```scss
$spacer: 1rem;
$spacers: (
  0: 0,
  1: $spacer * .25,
  2: $spacer * .5,
  3: $spacer,
  4: $spacer * 1.5,
  5: $spacer * 3,
  6: $spacer * 4.5
);

@import "bootstrap/scss/bootstrap";
```

### 117. Override Bootstrap's box shadow variables to create a flat design.

```scss
$enable-shadows: false;
$box-shadow: none;
$box-shadow-sm: none;
$box-shadow-lg: none;
$btn-box-shadow: none;
$btn-focus-box-shadow: none;

@import "bootstrap/scss/bootstrap";
```

### 118. Create a custom color palette with tints and shades using Bootstrap's color functions.

```scss
@import "bootstrap/scss/functions";

$brand: #4361ee;
$brand-100: tint-color($brand, 80%);
$brand-300: tint-color($brand, 40%);
$brand-700: shade-color($brand, 40%);
$brand-900: shade-color($brand, 80%);

@import "bootstrap/scss/variables";
@import "bootstrap/scss/bootstrap";
```

### 119. Disable Bootstrap's gradients and shadows globally using `$enable-*` flags.

```scss
$enable-gradient: false;
$enable-shadows: false;

@import "bootstrap/scss/bootstrap";
```

### 120. Build a dark-by-default Bootstrap theme using `$body-bg` and `$body-color` overrides.

```scss
$body-bg: #121212;
$body-color: #e9ecef;
$border-color: #343a40;

@import "bootstrap/scss/bootstrap";
```

```html
<!-- Or simply use Bootstrap's built-in color mode -->
<html data-bs-theme="dark">
```

---

### 121. Initialize a Bootstrap modal programmatically using the JavaScript API.

```javascript
const modalEl = document.getElementById('exampleModal');
const modal = new bootstrap.Modal(modalEl, { backdrop: true, keyboard: true });
modal.show();
```

### 122. Listen for the `shown.bs.modal` event and focus an input when the modal opens.

```javascript
const modalEl = document.getElementById('exampleModal');
modalEl.addEventListener('shown.bs.modal', () => {
  document.getElementById('modalInput').focus();
});
```

### 123. Prevent a modal from closing when clicking the backdrop using `keyboard: false`.

```javascript
const modal = new bootstrap.Modal(document.getElementById('exampleModal'), {
  backdrop: 'static',
  keyboard: false
});
```

### 124. Build a multi-step modal that navigates between steps using JavaScript.

```html
<div class="modal-body">
  <div id="modalStep1">Step 1 content <button class="btn btn-primary" onclick="goToStep(2)">Next</button></div>
  <div id="modalStep2" class="d-none">Step 2 content <button class="btn btn-primary" onclick="goToStep(3)">Next</button></div>
  <div id="modalStep3" class="d-none">Final step <button class="btn btn-success">Finish</button></div>
</div>
<script>
function goToStep(step) {
  document.querySelectorAll('[id^="modalStep"]').forEach(el => el.classList.add('d-none'));
  document.getElementById('modalStep' + step).classList.remove('d-none');
}
</script>
```

### 125. Initialize Bootstrap tooltips on all elements with `data-bs-toggle="tooltip"`.

```javascript
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
[...tooltipTriggerList].map(el => new bootstrap.Tooltip(el));
```

### 126. Create dynamic popovers that load content from a data attribute.

```html
<button class="btn btn-secondary" data-bs-toggle="popover" data-bs-content="Loaded content" title="Popover Title">
  Click me
</button>
<script>
  document.querySelectorAll('[data-bs-toggle="popover"]').forEach(el => new bootstrap.Popover(el));
</script>
```

### 127. Build an auto-dismissing alert that disappears after 5 seconds.

```html
<div id="autoAlert" class="alert alert-info alert-dismissible fade show">
  This alert will disappear automatically.
  <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
</div>
<script>
  setTimeout(() => {
    const alertEl = document.getElementById('autoAlert');
    bootstrap.Alert.getOrCreateInstance(alertEl).close();
  }, 5000);
</script>
```

### 128. Initialize a Bootstrap carousel and control it programmatically (next, prev, pause).

```javascript
const carouselEl = document.getElementById('myCarousel');
const carousel = new bootstrap.Carousel(carouselEl, { interval: 3000, ride: true });

document.getElementById('nextBtn').addEventListener('click', () => carousel.next());
document.getElementById('prevBtn').addEventListener('click', () => carousel.prev());
document.getElementById('pauseBtn').addEventListener('click', () => carousel.pause());
```

### 129. Implement Scrollspy on a single-page website with a sticky navbar.

```html
<body data-bs-spy="scroll" data-bs-target="#navbar-example" data-bs-offset="70" tabindex="0">
  <nav id="navbar-example" class="navbar sticky-top bg-light">
    <ul class="nav">
      <li class="nav-item"><a class="nav-link" href="#section1">Section 1</a></li>
      <li class="nav-item"><a class="nav-link" href="#section2">Section 2</a></li>
    </ul>
  </nav>
  <div id="section1" style="height: 500px;">Section 1</div>
  <div id="section2" style="height: 500px;">Section 2</div>
</body>
```

### 130. Build a dynamic tab system where tabs are generated from a data array.

```javascript
const tabs = [
  { id: 'tab1', label: 'Overview', content: 'Overview content' },
  { id: 'tab2', label: 'Details', content: 'Details content' }
];

const navEl = document.getElementById('dynamicTabs');
const contentEl = document.getElementById('dynamicTabContent');

tabs.forEach((tab, i) => {
  navEl.insertAdjacentHTML('beforeend', `
    <li class="nav-item">
      <button class="nav-link ${i === 0 ? 'active' : ''}" data-bs-toggle="tab" data-bs-target="#${tab.id}">${tab.label}</button>
    </li>`);
  contentEl.insertAdjacentHTML('beforeend', `
    <div class="tab-pane fade ${i === 0 ? 'show active' : ''}" id="${tab.id}">${tab.content}</div>`);
});
```

### 131. Audit a Bootstrap navbar for accessibility issues and fix them.

```html
<!-- Fixes: aria-label on toggler, aria-current on active link, aria-expanded state -->
<nav class="navbar navbar-expand-lg" aria-label="Main navigation">
  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#nav"
          aria-controls="nav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="nav">
    <ul class="navbar-nav">
      <li class="nav-item"><a class="nav-link active" aria-current="page" href="#">Home</a></li>
      <li class="nav-item"><a class="nav-link" href="#">About</a></li>
    </ul>
  </div>
</nav>
```

### 132. Create an accessible modal with proper focus trapping and ARIA attributes.

```html
<div class="modal fade" id="a11yModal" tabindex="-1" aria-labelledby="a11yModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="a11yModalLabel">Accessible Modal</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">Bootstrap's modal already traps focus and restores it to the trigger on close.</div>
    </div>
  </div>
</div>
<!-- Bootstrap automatically manages aria-hidden and focus trapping via the JS plugin -->
```

### 133. Build an accessible dropdown that is fully keyboard navigable.

```html
<div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Menu
  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
  </ul>
</div>
<!-- Bootstrap's dropdown plugin supports Arrow keys, Home/End, Esc, and Tab out of the box -->
```

### 134. Add `aria-live` to a Bootstrap alert region that shows dynamic messages.

```html
<div id="liveAlertRegion" aria-live="polite" aria-atomic="true"></div>
<script>
function showAlert(message, type = 'info') {
  document.getElementById('liveAlertRegion').innerHTML = `
    <div class="alert alert-${type} alert-dismissible fade show" role="alert">
      ${message}
      <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
    </div>`;
}
</script>
```

### 135. Create a form with proper accessible labels, error messages, and descriptions.

```html
<form novalidate>
  <div class="mb-3">
    <label for="email" class="form-label">Email address</label>
    <input type="email" class="form-control" id="email" aria-describedby="emailHelp emailError" required>
    <div id="emailHelp" class="form-text">We'll never share your email.</div>
    <div id="emailError" class="invalid-feedback">Please provide a valid email.</div>
  </div>
</form>
```

### 136. Add skip navigation to a Bootstrap page for screen reader users.

```html
<a class="visually-hidden-focusable btn btn-primary" href="#main-content">Skip to main content</a>
<nav class="navbar">...</nav>
<main id="main-content">
  <h1>Page Content</h1>
</main>
```

### 137. Ensure color contrast meets WCAG AA using Bootstrap's semantic color utilities.

```html
<!-- Prefer text-bg-* utilities, which pair a background with an automatically contrasting text color -->
<div class="p-3 text-bg-primary">AA-compliant contrast pairing</div>
<div class="p-3 text-bg-warning">Warning background auto-pairs with dark text</div>
```

### 138. Create accessible icon-only buttons using `aria-label` and visually hidden text.

```html
<button type="button" class="btn btn-primary" aria-label="Close">
  <i class="bi bi-x-lg" aria-hidden="true"></i>
</button>

<button type="button" class="btn btn-primary">
  <i class="bi bi-trash" aria-hidden="true"></i>
  <span class="visually-hidden">Delete item</span>
</button>
```

### 139. Implement a focus-visible pattern that shows focus styles only for keyboard users.

```css
/* Bootstrap 5.3+ uses :focus-visible by default on interactive elements */
.btn:focus:not(:focus-visible) {
  box-shadow: none;
}
.btn:focus-visible {
  box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.5);
}
```

### 140. Build an accessible data table with Bootstrap using `scope`, `caption`, and ARIA.

```html
<table class="table" aria-describedby="tableDesc">
  <caption id="tableDesc">Monthly sales by region</caption>
  <thead>
    <tr>
      <th scope="col">Region</th>
      <th scope="col">Sales</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">North</th>
      <td>$12,300</td>
    </tr>
  </tbody>
</table>
```
### 141. Integrate Bootstrap 5 into a React project using `react-bootstrap`.

```bash
npm install react-bootstrap bootstrap
```

```jsx
// index.js
import 'bootstrap/dist/css/bootstrap.min.css';

// App.jsx
import { Button, Container } from 'react-bootstrap';

function App() {
  return (
    <Container>
      <Button variant="primary">Click me</Button>
    </Container>
  );
}
export default App;
```

### 142. Set up Bootstrap in a Vue project using `bootstrap-vue-next`.

```bash
npm install bootstrap bootstrap-vue-next
```

```javascript
// main.js
import { createApp } from 'vue';
import BootstrapVueNext from 'bootstrap-vue-next';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-vue-next/dist/bootstrap-vue-next.css';
import App from './App.vue';

createApp(App).use(BootstrapVueNext).mount('#app');
```

### 143. Configure Bootstrap with webpack to import only needed components.

```javascript
// webpack.config.js entry
import 'bootstrap/js/dist/modal';
import 'bootstrap/js/dist/collapse';
import 'bootstrap/js/dist/dropdown';
```

```scss
// custom.scss - import only needed styles
@import "bootstrap/scss/functions";
@import "bootstrap/scss/variables";
@import "bootstrap/scss/mixins";
@import "bootstrap/scss/root";
@import "bootstrap/scss/reboot";
@import "bootstrap/scss/grid";
@import "bootstrap/scss/buttons";
```

### 144. Set up Bootstrap with Vite for a fast development workflow.

```bash
npm create vite@latest my-app
cd my-app
npm install bootstrap
```

```javascript
// main.js
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
```

### 145. Build a Bootstrap component library with reusable HTML snippets.

```html
<!-- components/button.html -->
<button class="btn btn-primary rounded-pill px-4">{{label}}</button>

<!-- components/card.html -->
<div class="card shadow-sm">
  <div class="card-body">
    <h5 class="card-title">{{title}}</h5>
    <p class="card-text">{{text}}</p>
  </div>
</div>
<!-- Use a templating tool (Handlebars, Nunjucks, or a build step) to inject values into these reusable partials -->
```

### 146. Create a design token system by mapping Bootstrap CSS variables to a custom theme.

```css
:root {
  --brand-primary: var(--bs-primary);
  --brand-radius: var(--bs-border-radius);
  --brand-spacing-md: var(--bs-spacer, 1rem);
}
[data-bs-theme="dark"] {
  --brand-surface: #1a1a1a;
}
```

### 147. Build a Bootstrap-based email template using table-based layout.

```html
<table role="presentation" width="100%" cellpadding="0" cellspacing="0">
  <tr>
    <td align="center" bgcolor="#f8f9fa" style="padding: 20px;">
      <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff; border-radius:8px;">
        <tr><td style="padding:24px; font-family: Arial, sans-serif;">
          <h2 style="color:#0d6efd;">Newsletter</h2>
          <p>Email clients don't support Bootstrap CSS/JS — inline table layouts with hand-rolled styles mimicking Bootstrap classes are required.</p>
          <a href="#" style="background:#0d6efd; color:#fff; padding:10px 20px; text-decoration:none; border-radius:4px; display:inline-block;">Read More</a>
        </td></tr>
      </table>
    </td>
  </tr>
</table>
```

### 148. Create a Bootstrap-based print stylesheet for a document.

```css
@media print {
  .navbar, .btn, footer, .no-print { display: none !important; }
  .container { width: 100% !important; max-width: none !important; }
  body { font-size: 12pt; color: #000; }
  a[href]::after { content: " (" attr(href) ")"; font-size: 0.8em; }
}
```

### 149. Implement Bootstrap's dark mode using `data-bs-theme` with a toggle button.

```html
<button id="themeToggle" class="btn btn-outline-secondary">Toggle Theme</button>

<script>
document.getElementById('themeToggle').addEventListener('click', () => {
  const html = document.documentElement;
  const current = html.getAttribute('data-bs-theme');
  html.setAttribute('data-bs-theme', current === 'dark' ? 'light' : 'dark');
});
</script>
```

### 150. Configure PurgeCSS with a Bootstrap build to remove unused styles in production.

```javascript
// postcss.config.js
const purgecss = require('@fullhuman/postcss-purgecss');

module.exports = {
  plugins: [
    require('autoprefixer'),
    purgecss({
      content: ['./src/**/*.html', './src/**/*.js'],
      safelist: [/^show$/, /^collapse/, /^modal/, /^fade/, /^offcanvas/]
    })
  ]
};
```

---

> ## 🔴 Level 4: Expert (151–200)

### 151. Build a Bootstrap theme where buttons have no border-radius and use uppercase text.

```scss
$btn-border-radius: 0;
$btn-border-radius-sm: 0;
$btn-border-radius-lg: 0;

@import "bootstrap/scss/bootstrap";

.btn { text-transform: uppercase; letter-spacing: 0.05em; }
```

### 152. Create a custom Bootstrap icon set integration using CSS background images.

```css
.icon {
  display: inline-block;
  width: 1.25rem;
  height: 1.25rem;
  background-size: contain;
  background-repeat: no-repeat;
  vertical-align: -0.2em;
}
.icon-cart { background-image: url("/icons/cart.svg"); }
.icon-user { background-image: url("/icons/user.svg"); }
```

```html
<button class="btn btn-primary"><span class="icon icon-cart"></span> Cart</button>
```

### 153. Extend Bootstrap's grid with a 16-column option by modifying `$grid-columns`.

```scss
$grid-columns: 16;
$grid-gutter-width: 1rem;

@import "bootstrap/scss/bootstrap";
```

```html
<div class="row">
  <div class="col-8">Half width (8 of 16)</div>
  <div class="col-8">Half width (8 of 16)</div>
</div>
```

### 154. Add a new `subtle` button variant using Bootstrap's `button-variant()` mixin.

```scss
@import "bootstrap/scss/functions";
@import "bootstrap/scss/variables";
@import "bootstrap/scss/mixins";

.btn-subtle {
  @include button-variant(
    $background: tint-color($primary, 80%),
    $border: tint-color($primary, 80%),
    $color: $primary,
    $hover-background: tint-color($primary, 70%),
    $hover-color: $primary
  );
}

@import "bootstrap/scss/bootstrap";
```

### 155. Create a custom card variant with a left-border accent using Bootstrap mixins.

```scss
.card-accent {
  border-left: 4px solid $primary;
  border-radius: 0 $card-border-radius $card-border-radius 0;
}
```

```html
<div class="card card-accent">
  <div class="card-body">Accented card</div>
</div>
```

### 156. Implement a responsive font size scale using Bootstrap's RFS mixin on custom headings.

```scss
@import "bootstrap/scss/functions";
@import "bootstrap/scss/variables";
@import "bootstrap/scss/mixins/rfs";

.custom-heading {
  @include rfs(3rem, font-size);
}
```

### 157. Override Bootstrap's form control focus ring to use a brand color with correct opacity.

```scss
$input-focus-border-color: $primary;
$input-focus-box-shadow: 0 0 0 0.25rem rgba($primary, 0.25);

@import "bootstrap/scss/bootstrap";
```

### 158. Create a custom `badge-*` set for new semantic colors using Bootstrap's badge variables.

```scss
$custom-colors: (
  "purple": #6f42c1,
  "teal": #20c997
);
$theme-colors: map-merge($theme-colors, $custom-colors);

@import "bootstrap/scss/bootstrap";
```

```html
<span class="badge text-bg-purple">Purple</span>
<span class="badge text-bg-teal">Teal</span>
```

### 159. Build a completely stripped Bootstrap build containing only grid and spacing utilities.

```scss
@import "bootstrap/scss/functions";
@import "bootstrap/scss/variables";
@import "bootstrap/scss/mixins";
@import "bootstrap/scss/root";
@import "bootstrap/scss/grid";
@import "bootstrap/scss/utilities";
@import "bootstrap/scss/utilities/api";
```

### 160. Add CSS custom property fallback chains to Bootstrap component variables for runtime theming.

```css
.btn-primary {
  --bs-btn-bg: var(--brand-primary, var(--bs-primary, #0d6efd));
  --bs-btn-border-color: var(--brand-primary, var(--bs-primary, #0d6efd));
}
```

### 161. Build a reusable Bootstrap card component as a Web Component with Shadow DOM.

```javascript
class BsCard extends HTMLElement {
  connectedCallback() {
    const shadow = this.attachShadow({ mode: 'open' });
    const title = this.getAttribute('title') || '';
    const text = this.getAttribute('text') || '';
    shadow.innerHTML = `
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">${title}</h5>
          <p class="card-text">${text}</p>
        </div>
      </div>`;
  }
}
customElements.define('bs-card', BsCard);
```

```html
<bs-card title="Hello" text="A Bootstrap card in a Web Component."></bs-card>
```

### 162. Create a Bootstrap-based design system with documented component variants in a style guide.

```html
<div class="container py-5">
  <h1>Design System</h1>
  <section class="mb-5">
    <h2>Buttons</h2>
    <p class="text-muted">Use <code>.btn-primary</code> for primary actions.</p>
    <button class="btn btn-primary">Primary</button>
    <button class="btn btn-outline-primary">Outline</button>
  </section>
  <section class="mb-5">
    <h2>Color Palette</h2>
    <div class="d-flex gap-2">
      <div class="p-3 text-bg-primary">Primary</div>
      <div class="p-3 text-bg-secondary">Secondary</div>
    </div>
  </section>
</div>
```

### 163. Build a dynamic data table component using Bootstrap table classes and JavaScript sorting.

```html
<table class="table table-hover" id="sortableTable">
  <thead>
    <tr>
      <th data-key="name" style="cursor:pointer;">Name ⇅</th>
      <th data-key="age" style="cursor:pointer;">Age ⇅</th>
    </tr>
  </thead>
  <tbody id="tableBody"></tbody>
</table>
<script>
let data = [{name: 'Bob', age: 30}, {name: 'Amy', age: 25}];
function render() {
  document.getElementById('tableBody').innerHTML =
    data.map(r => `<tr><td>${r.name}</td><td>${r.age}</td></tr>`).join('');
}
document.querySelectorAll('#sortableTable th').forEach(th => {
  th.addEventListener('click', () => {
    const key = th.dataset.key;
    data.sort((a, b) => a[key] > b[key] ? 1 : -1);
    render();
  });
});
render();
</script>
```

### 164. Implement a Bootstrap-based WYSIWYG toolbar using button groups and dropdowns.

```html
<div class="btn-toolbar" role="toolbar" aria-label="Text formatting toolbar">
  <div class="btn-group me-2">
    <button class="btn btn-outline-secondary" onclick="document.execCommand('bold')"><b>B</b></button>
    <button class="btn btn-outline-secondary" onclick="document.execCommand('italic')"><i>I</i></button>
    <button class="btn btn-outline-secondary" onclick="document.execCommand('underline')"><u>U</u></button>
  </div>
  <div class="btn-group">
    <button class="btn btn-outline-secondary dropdown-toggle" data-bs-toggle="dropdown">Heading</button>
    <ul class="dropdown-menu">
      <li><a class="dropdown-item" href="#" onclick="document.execCommand('formatBlock', false, 'H1')">H1</a></li>
      <li><a class="dropdown-item" href="#" onclick="document.execCommand('formatBlock', false, 'H2')">H2</a></li>
    </ul>
  </div>
</div>
<div class="border p-3 mt-2" contenteditable="true" style="min-height: 150px;"></div>
```

### 165. Create a Bootstrap multi-select component with tag-style selected item display.

```html
<div class="mb-3">
  <label class="form-label">Skills</label>
  <div id="selectedTags" class="d-flex flex-wrap gap-2 mb-2"></div>
  <select class="form-select" id="skillSelect">
    <option value="">Add a skill...</option>
    <option value="html">HTML</option>
    <option value="css">CSS</option>
    <option value="js">JavaScript</option>
  </select>
</div>
<script>
document.getElementById('skillSelect').addEventListener('change', function () {
  if (!this.value) return;
  const label = this.options[this.selectedIndex].text;
  document.getElementById('selectedTags').insertAdjacentHTML('beforeend',
    `<span class="badge bg-primary">${label} <a href="#" class="text-white ms-1" onclick="this.parentElement.remove()">&times;</a></span>`);
  this.value = '';
});
</script>
```

### 166. Build a Bootstrap-based drag-and-drop Kanban board with column cards.

```html
<div class="row g-3">
  <div class="col-md-4">
    <div class="card">
      <div class="card-header">To Do</div>
      <div class="card-body kanban-col" ondrop="drop(event)" ondragover="event.preventDefault()">
        <div class="card p-2 mb-2" draggable="true" ondragstart="event.dataTransfer.setData('text', event.target.id)" id="task1">Task 1</div>
      </div>
    </div>
  </div>
  <div class="col-md-4">
    <div class="card">
      <div class="card-header">In Progress</div>
      <div class="card-body kanban-col" ondrop="drop(event)" ondragover="event.preventDefault()"></div>
    </div>
  </div>
</div>
<script>
function drop(e) {
  e.preventDefault();
  const id = e.dataTransfer.getData('text');
  e.currentTarget.appendChild(document.getElementById(id));
}
</script>
```

### 167. Implement a virtual scroll list using Bootstrap's list group and IntersectionObserver.

```html
<ul class="list-group" style="max-height: 400px; overflow-y: auto;" id="virtualList"></ul>
<div id="sentinel"></div>
<script>
let loaded = 0;
function loadMore() {
  const list = document.getElementById('virtualList');
  for (let i = 0; i < 20; i++) {
    loaded++;
    list.insertAdjacentHTML('beforeend', `<li class="list-group-item">Item ${loaded}</li>`);
  }
}
loadMore();
new IntersectionObserver(entries => {
  if (entries[0].isIntersecting) loadMore();
}).observe(document.getElementById('sentinel'));
</script>
```

### 168. Create a Bootstrap-based autocomplete input with dropdown suggestions.

```html
<div class="dropdown">
  <input type="text" class="form-control" id="autocompleteInput" placeholder="Search fruits..." autocomplete="off">
  <ul class="dropdown-menu w-100" id="suggestions"></ul>
</div>
<script>
const fruits = ['Apple', 'Banana', 'Cherry', 'Mango', 'Orange'];
const input = document.getElementById('autocompleteInput');
const menu = document.getElementById('suggestions');
input.addEventListener('input', () => {
  const val = input.value.toLowerCase();
  const matches = fruits.filter(f => f.toLowerCase().includes(val));
  menu.innerHTML = matches.map(m => `<li><a class="dropdown-item" href="#">${m}</a></li>`).join('');
  bootstrap.Dropdown.getOrCreateInstance(input).show();
});
</script>
```

### 169. Build a Bootstrap stepper component for multi-step processes with progress indicator.

```html
<div class="d-flex justify-content-between mb-4">
  <div class="text-center flex-fill">
    <div class="rounded-circle bg-primary text-white d-inline-flex align-items-center justify-content-center" style="width:32px;height:32px;">1</div>
    <div class="small">Account</div>
  </div>
  <div class="text-center flex-fill">
    <div class="rounded-circle bg-secondary text-white d-inline-flex align-items-center justify-content-center" style="width:32px;height:32px;">2</div>
    <div class="small">Profile</div>
  </div>
  <div class="text-center flex-fill">
    <div class="rounded-circle bg-secondary text-white d-inline-flex align-items-center justify-content-center" style="width:32px;height:32px;">3</div>
    <div class="small">Confirm</div>
  </div>
</div>
<div class="progress mb-3" style="height: 4px;">
  <div class="progress-bar" style="width: 33%;"></div>
</div>
```

### 170. Implement a Bootstrap date range picker using two popover-linked date inputs.

```html
<div class="row g-2">
  <div class="col">
    <label class="form-label">Start Date</label>
    <input type="date" class="form-control" id="startDate">
  </div>
  <div class="col">
    <label class="form-label">End Date</label>
    <input type="date" class="form-control" id="endDate">
  </div>
</div>
<script>
document.getElementById('startDate').addEventListener('change', function () {
  document.getElementById('endDate').min = this.value;
});
</script>
```
### 171. Measure and optimize Bootstrap's CSS specificity using a CSS analyzer tool.

```bash
npm install -g specificity-graph
specificity-graph dist/css/bootstrap.min.css -o report.html
```
Bootstrap intentionally keeps specificity low (mostly single-class selectors) so overrides work with a single class; avoid ID selectors and `!important` in custom CSS to keep the graph flat and predictable.

### 172. Set up critical CSS extraction for a Bootstrap page using `critters` or similar tools.

```javascript
// build.js
const Critters = require('critters');
const critters = new Critters({ path: 'dist' });

const fs = require('fs');
const html = fs.readFileSync('dist/index.html', 'utf8');
critters.process(html).then(inlined => {
  fs.writeFileSync('dist/index.html', inlined);
});
```

### 173. Configure a Content Security Policy that works with Bootstrap's inline styles and scripts.

```html
<meta http-equiv="Content-Security-Policy"
  content="default-src 'self'; style-src 'self' https://cdn.jsdelivr.net 'unsafe-hashes' 'sha256-<hash>'; script-src 'self' https://cdn.jsdelivr.net;">
```
Bootstrap 5's JS avoids `eval` and inline `on*` handlers, so a strict CSP mostly needs to allowlist the CDN origin; for inline `style` attributes Bootstrap sets programmatically (e.g. carousel/collapse transitions), use hashes or `style-src-attr 'unsafe-inline'` scoped narrowly.

### 174. Implement Bootstrap's lazy-loaded modal: fetch modal HTML from a server on first open.

```javascript
document.querySelectorAll('[data-remote-modal]').forEach(btn => {
  btn.addEventListener('click', async () => {
    const url = btn.dataset.remoteModal;
    const container = document.getElementById('modalContainer');
    const res = await fetch(url);
    container.innerHTML = await res.text();
    const modal = new bootstrap.Modal(container.querySelector('.modal'));
    modal.show();
  });
});
```

### 175. Build a progressive enhancement strategy where Bootstrap enhances a fully functional no-JS page.

```html
<!-- Base: a working <details> element and native form work without JS -->
<details class="border rounded p-2">
  <summary>More info</summary>
  <p>Content visible even without JavaScript.</p>
</details>

<script>
// Enhance only if JS + Bootstrap loaded
document.querySelectorAll('details.border').forEach(d => {
  d.classList.add('accordion-item'); // swap in richer Bootstrap accordion behavior
});
</script>
```

### 176. Configure Bootstrap with PostCSS autoprefixer for broad browser compatibility.

```javascript
// postcss.config.js
module.exports = {
  plugins: [
    require('autoprefixer')({
      overrideBrowserslist: ['last 2 versions', '> 1%', 'not dead']
    })
  ]
};
```

### 177. Implement Bootstrap component lazy loading — only initialize components when visible.

```javascript
const lazyEls = document.querySelectorAll('[data-lazy-component]');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const type = entry.target.dataset.lazyComponent;
      if (type === 'tooltip') new bootstrap.Tooltip(entry.target);
      if (type === 'carousel') new bootstrap.Carousel(entry.target);
      observer.unobserve(entry.target);
    }
  });
});
lazyEls.forEach(el => observer.observe(el));
```

### 178. Build a Bootstrap page that achieves a 95+ Lighthouse performance score.

```html
<!-- Key steps: purge unused CSS, load JS with defer, preconnect to the CDN,
     use responsive/lazy images, and avoid render-blocking bundle.js -->
<link rel="preconnect" href="https://cdn.jsdelivr.net">
<link href="/dist/bootstrap.min.css" rel="stylesheet">
<img src="hero.jpg" loading="lazy" class="img-fluid" alt="...">
<script src="/dist/bootstrap.bundle.min.js" defer></script>
```

### 179. Create a Bootstrap-based offline page using Service Worker caching.

```javascript
// sw.js
const CACHE = 'bootstrap-app-v1';
const ASSETS = ['/', '/index.html', '/css/bootstrap.min.css', '/js/bootstrap.bundle.min.js', '/offline.html'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(cache => cache.addAll(ASSETS)));
});

self.addEventListener('fetch', e => {
  e.respondWith(
    fetch(e.request).catch(() => caches.match(e.request).then(r => r || caches.match('/offline.html')))
  );
});
```

### 180. Implement a Bootstrap theme editor where users can adjust CSS variables via a UI panel.

```html
<div class="p-3 border">
  <label class="form-label">Primary Color</label>
  <input type="color" class="form-control form-control-color" id="primaryPicker" value="#0d6efd">
</div>
<script>
document.getElementById('primaryPicker').addEventListener('input', e => {
  document.documentElement.style.setProperty('--bs-primary', e.target.value);
  document.documentElement.style.setProperty('--bs-primary-rgb', hexToRgb(e.target.value));
});
function hexToRgb(hex) {
  const n = parseInt(hex.slice(1), 16);
  return `${(n >> 16) & 255}, ${(n >> 8) & 255}, ${n & 255}`;
}
</script>
```

### 181. Write unit tests for a custom Bootstrap JavaScript component using Jest.

```javascript
// strengthMeter.test.js
import { getPasswordStrength } from './strengthMeter';

test('weak password scores low', () => {
  expect(getPasswordStrength('abc')).toBeLessThan(50);
});

test('strong password scores high', () => {
  expect(getPasswordStrength('Abcdef1!23')).toBeGreaterThanOrEqual(100);
});
```

### 182. Write Playwright end-to-end tests for a Bootstrap modal open/close flow.

```javascript
import { test, expect } from '@playwright/test';

test('modal opens and closes', async ({ page }) => {
  await page.goto('/');
  await page.click('[data-bs-target="#exampleModal"]');
  await expect(page.locator('#exampleModal')).toBeVisible();
  await page.click('#exampleModal .btn-close');
  await expect(page.locator('#exampleModal')).toBeHidden();
});
```

### 183. Debug a Bootstrap z-index layering issue where a dropdown appears behind a sticky header.

```css
/* Bootstrap's z-index scale: dropdown = 1000, sticky = 1020, fixed = 1030, modal = 1055 */
/* If a dropdown is nested inside an element with a lower stacking context, raise it explicitly */
.navbar { z-index: 1030; }
.dropdown-menu { z-index: 1035; } /* above the sticky header's 1020/1030 */
```
Check for a parent with `overflow: hidden` or a conflicting `transform`, either of which creates a new stacking context that traps the dropdown beneath the header regardless of z-index.

### 184. Debug a Bootstrap grid alignment issue where columns wrap unexpectedly on a specific breakpoint.

```html
<!-- Common cause: total column widths exceed 12 at that breakpoint, or a fixed-width
     child (e.g. an image without img-fluid) is forcing overflow -->
<div class="row">
  <div class="col-md-6">A</div>
  <div class="col-md-7">B</div> <!-- 6 + 7 = 13 > 12, causes wrap -->
</div>
<!-- Fix: reduce to col-md-6, or use col-md so Bootstrap distributes evenly -->
```
Also check for missing `img-fluid` on images and stray `white-space: nowrap` that prevents column content from shrinking.

### 185. Write a CSS regression test that captures Bootstrap component screenshots for visual diffing.

```javascript
// visual.spec.js (Playwright)
import { test, expect } from '@playwright/test';

test('button group visual snapshot', async ({ page }) => {
  await page.goto('/components/buttons.html');
  await expect(page.locator('.btn-group')).toHaveScreenshot('btn-group.png');
});
```

### 186. Audit a Bootstrap page with axe-core for accessibility violations.

```javascript
const { AxePuppeteer } = require('@axe-core/puppeteer');
const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('http://localhost:3000');
  const results = await new AxePuppeteer(page).analyze();
  console.log(results.violations);
  await browser.close();
})();
```

### 187. Debug a Bootstrap Scrollspy that does not highlight the correct nav item.

```html
<!-- Common causes: target IDs don't match nav href="#id" exactly, the scroll
     container isn't the one Scrollspy is watching, or data-bs-offset is wrong -->
<body data-bs-spy="scroll" data-bs-target="#navbar-example" data-bs-offset="70">
```
Verify each section has a unique `id` matching its `href="#id"` exactly (case-sensitive), and that `data-bs-target` points to the actual nav container. If content scrolls inside a nested `<div>` rather than `<body>`, Scrollspy must be initialized on that scrollable element instead.

### 188. Write a Cypress test that validates a Bootstrap form with all validation states.

```javascript
describe('Signup form validation', () => {
  it('shows invalid feedback for empty required field', () => {
    cy.visit('/signup');
    cy.get('form.needs-validation button[type=submit]').click();
    cy.get('#validationCustom01').should('have.class', 'is-invalid');
    cy.get('.invalid-feedback').should('be.visible');
  });

  it('shows valid feedback for correct input', () => {
    cy.get('#validationCustom01').type('Jane');
    cy.get('form.needs-validation button[type=submit]').click();
    cy.get('#validationCustom01').should('have.class', 'is-valid');
  });
});
```

### 189. Debug a Bootstrap carousel autoplay issue on iOS Safari.

```javascript
// iOS Safari sometimes pauses rAF-based transitions in background tabs / low-power mode.
// Ensure touch events aren't being intercepted and that `data-bs-touch` isn't disabled unintentionally.
const carousel = new bootstrap.Carousel(document.getElementById('myCarousel'), {
  interval: 4000,
  touch: true,
  pause: 'hover'
});
```
Also confirm the carousel isn't inside an element with `overflow: hidden` combined with `-webkit-overflow-scrolling`, which can block Safari's touch-driven slide detection and stall autoplay after the first swipe.

### 190. Trace a Bootstrap CSS specificity conflict where custom styles are not being applied.

```css
/* Bootstrap's .btn-primary has specificity (0,1,0). A same-specificity custom rule
   loses if Bootstrap's stylesheet is loaded after it. */
.btn.btn-primary.my-custom-btn { background-color: #ff6600; } /* raise specificity, or... */
```
```html
<!-- ...or simply load the custom stylesheet AFTER bootstrap.min.css so source order wins -->
<link href="bootstrap.min.css" rel="stylesheet">
<link href="custom.css" rel="stylesheet">
```

---

### 191. Build a complete SaaS landing page using Bootstrap: navbar, hero, features, pricing, testimonials, footer.

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>SaaS Landing Page</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container">
      <a class="navbar-brand" href="#">SaaSly</a>
      <button class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#nav"><span class="navbar-toggler-icon"></span></button>
      <div class="collapse navbar-collapse" id="nav">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item"><a class="nav-link" href="#features">Features</a></li>
          <li class="nav-item"><a class="nav-link" href="#pricing">Pricing</a></li>
        </ul>
      </div>
    </div>
  </nav>

  <section class="bg-primary text-white text-center py-5">
    <div class="container">
      <h1 class="display-4 fw-bold">Automate Your Workflow</h1>
      <p class="lead">The all-in-one platform for growing teams.</p>
      <a href="#" class="btn btn-light btn-lg">Start Free Trial</a>
    </div>
  </section>

  <section id="features" class="py-5">
    <div class="container">
      <div class="row text-center g-4">
        <div class="col-md-4"><h4>Automation</h4><p>Save hours every week.</p></div>
        <div class="col-md-4"><h4>Analytics</h4><p>Understand your data.</p></div>
        <div class="col-md-4"><h4>Integrations</h4><p>Connect your favorite tools.</p></div>
      </div>
    </div>
  </section>

  <section id="pricing" class="bg-light py-5">
    <div class="container">
      <div class="row row-cols-1 row-cols-md-3 g-4 text-center">
        <div class="col"><div class="card h-100"><div class="card-body"><h5>Starter</h5><h2>$9</h2><a class="btn btn-outline-primary" href="#">Choose</a></div></div></div>
        <div class="col"><div class="card h-100 border-primary"><div class="card-body"><h5>Pro</h5><h2>$29</h2><a class="btn btn-primary" href="#">Choose</a></div></div></div>
        <div class="col"><div class="card h-100"><div class="card-body"><h5>Enterprise</h5><h2>$99</h2><a class="btn btn-outline-primary" href="#">Choose</a></div></div></div>
      </div>
    </div>
  </section>

  <section class="py-5">
    <div class="container">
      <div class="row g-4">
        <div class="col-md-6">
          <blockquote class="blockquote">"This tool changed how our team works."</blockquote>
          <figcaption class="blockquote-footer">Alex, Product Manager</figcaption>
        </div>
        <div class="col-md-6">
          <blockquote class="blockquote">"Setup took five minutes. Incredible."</blockquote>
          <figcaption class="blockquote-footer">Sam, Founder</figcaption>
        </div>
      </div>
    </div>
  </section>

  <footer class="bg-dark text-white text-center py-4">
    <p class="mb-0">&copy; 2026 SaaSly Inc.</p>
  </footer>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>
```

### 192. Create a full Bootstrap admin dashboard: sidebar navigation, stats cards, data table, charts placeholder.

```html
<div class="d-flex">
  <nav class="bg-dark text-white p-3 vh-100" style="width: 240px;">
    <h5 class="mb-4">Admin Panel</h5>
    <ul class="nav flex-column">
      <li class="nav-item"><a class="nav-link text-white" href="#">Dashboard</a></li>
      <li class="nav-item"><a class="nav-link text-white" href="#">Users</a></li>
      <li class="nav-item"><a class="nav-link text-white" href="#">Orders</a></li>
    </ul>
  </nav>
  <div class="flex-grow-1 p-4">
    <div class="row g-3 mb-4">
      <div class="col-md-3"><div class="card p-3"><small class="text-muted">Users</small><h3>1,204</h3></div></div>
      <div class="col-md-3"><div class="card p-3"><small class="text-muted">Revenue</small><h3>$8,320</h3></div></div>
      <div class="col-md-3"><div class="card p-3"><small class="text-muted">Orders</small><h3>342</h3></div></div>
      <div class="col-md-3"><div class="card p-3"><small class="text-muted">Growth</small><h3>+12%</h3></div></div>
    </div>
    <div class="card mb-4">
      <div class="card-header">Revenue Chart</div>
      <div class="card-body bg-light" style="height: 240px;">[Chart Placeholder]</div>
    </div>
    <table class="table table-striped">
      <thead><tr><th>ID</th><th>Customer</th><th>Amount</th><th>Status</th></tr></thead>
      <tbody>
        <tr><td>1001</td><td>Jane Doe</td><td>$120</td><td><span class="badge bg-success">Paid</span></td></tr>
        <tr><td>1002</td><td>John Smith</td><td>$85</td><td><span class="badge bg-warning">Pending</span></td></tr>
      </tbody>
    </table>
  </div>
</div>
```

### 193. Build a Bootstrap e-commerce product page: gallery, details, add-to-cart, related products.

```html
<div class="container py-5">
  <div class="row g-4">
    <div class="col-md-6">
      <img src="https://via.placeholder.com/500" class="img-fluid rounded mb-2" alt="Product">
      <div class="d-flex gap-2">
        <img src="https://via.placeholder.com/80" class="rounded" alt="thumb">
        <img src="https://via.placeholder.com/80" class="rounded" alt="thumb">
      </div>
    </div>
    <div class="col-md-6">
      <h2>Wireless Headphones</h2>
      <p class="text-muted">$79.99</p>
      <p>Premium wireless headphones with noise cancellation.</p>
      <select class="form-select w-auto mb-3">
        <option>Black</option>
        <option>White</option>
      </select>
      <button class="btn btn-primary btn-lg w-100">Add to Cart</button>
    </div>
  </div>
  <hr class="my-5">
  <h4 class="mb-3">Related Products</h4>
  <div class="row row-cols-2 row-cols-md-4 g-4">
    <div class="col"><div class="card"><img src="https://via.placeholder.com/200" class="card-img-top" alt=""><div class="card-body"><p class="card-text">Related item</p></div></div></div>
  </div>
</div>
```

### 194. Create a Bootstrap portfolio website: hero, projects grid, skills, contact form, footer.

```html
<section class="bg-dark text-white text-center py-5">
  <div class="container">
    <img src="https://via.placeholder.com/120" class="rounded-circle mb-3" alt="Avatar">
    <h1>Jane Doe</h1>
    <p class="lead">Frontend Developer &amp; Designer</p>
  </div>
</section>

<section class="container py-5">
  <h2 class="mb-4">Projects</h2>
  <div class="row row-cols-1 row-cols-md-3 g-4">
    <div class="col"><div class="card h-100"><img src="https://via.placeholder.com/300x180" class="card-img-top" alt=""><div class="card-body"><h5 class="card-title">Project One</h5></div></div></div>
  </div>
</section>

<section class="bg-light py-5">
  <div class="container">
    <h2 class="mb-4">Skills</h2>
    <div class="d-flex flex-wrap gap-2">
      <span class="badge bg-primary">HTML</span>
      <span class="badge bg-primary">CSS</span>
      <span class="badge bg-primary">Bootstrap</span>
      <span class="badge bg-primary">JavaScript</span>
    </div>
  </div>
</section>

<section class="container py-5">
  <h2 class="mb-4">Contact</h2>
  <form class="row g-3">
    <div class="col-md-6"><input type="text" class="form-control" placeholder="Name"></div>
    <div class="col-md-6"><input type="email" class="form-control" placeholder="Email"></div>
    <div class="col-12"><textarea class="form-control" rows="4" placeholder="Message"></textarea></div>
    <div class="col-12"><button class="btn btn-primary">Send Message</button></div>
  </form>
</section>

<footer class="bg-dark text-white text-center py-3">
  <p class="mb-0">&copy; 2026 Jane Doe</p>
</footer>
```

### 195. Build a Bootstrap blog: homepage with card grid, single post with sidebar, author bio, comment form.

```html
<!-- Homepage -->
<div class="container py-5">
  <div class="row row-cols-1 row-cols-md-3 g-4">
    <div class="col"><div class="card h-100"><img src="https://via.placeholder.com/300x180" class="card-img-top" alt=""><div class="card-body"><h5 class="card-title">Post Title</h5><a href="#" class="btn btn-sm btn-primary">Read</a></div></div></div>
  </div>
</div>

<!-- Single Post -->
<div class="container py-5">
  <div class="row">
    <div class="col-lg-8">
      <h1>Post Title</h1>
      <p class="text-muted">By Admin — Jan 1, 2026</p>
      <p>Post content...</p>
      <div class="d-flex align-items-center border-top pt-4 mt-4">
        <img src="https://via.placeholder.com/60" class="rounded-circle me-3" alt="Author">
        <div><strong>Admin</strong><p class="mb-0 text-muted small">Writer &amp; editor</p></div>
      </div>
      <form class="mt-4">
        <div class="mb-3"><textarea class="form-control" rows="3" placeholder="Leave a comment"></textarea></div>
        <button class="btn btn-primary">Post Comment</button>
      </form>
    </div>
    <div class="col-lg-4">
      <div class="card"><div class="card-body"><h5 class="card-title">About</h5><p class="card-text">Sidebar content.</p></div></div>
    </div>
  </div>
</div>
```

### 196. Create a Bootstrap job board: search filters, job listing cards, modal job detail, apply form.

```html
<div class="container py-5">
  <div class="row g-3 mb-4">
    <div class="col-md-4"><input type="text" class="form-control" placeholder="Job title"></div>
    <div class="col-md-4">
      <select class="form-select"><option>All Locations</option><option>Remote</option></select>
    </div>
    <div class="col-md-4"><button class="btn btn-primary w-100">Search</button></div>
  </div>
  <div class="list-group">
    <a href="#" class="list-group-item list-group-item-action" data-bs-toggle="modal" data-bs-target="#jobModal">
      <div class="d-flex justify-content-between">
        <h5>Frontend Engineer</h5>
        <span class="badge bg-success">Remote</span>
      </div>
      <p class="mb-0 text-muted">Acme Corp — Posted 2 days ago</p>
    </a>
  </div>
</div>

<div class="modal fade" id="jobModal" tabindex="-1" aria-hidden="true">
  <div class="modal-dialog modal-lg">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Frontend Engineer</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
      </div>
      <div class="modal-body">
        <p>Job description goes here...</p>
        <form>
          <input type="text" class="form-control mb-2" placeholder="Full name">
          <input type="email" class="form-control mb-2" placeholder="Email">
          <input type="file" class="form-control mb-2">
          <button type="submit" class="btn btn-primary">Apply Now</button>
        </form>
      </div>
    </div>
  </div>
</div>
```

### 197. Build a Bootstrap event website: countdown, schedule table, speaker cards, registration modal.

```html
<section class="bg-dark text-white text-center py-5">
  <h1>Tech Conf 2026</h1>
  <div id="countdown" class="display-6 my-3">--:--:--:--</div>
  <button class="btn btn-primary btn-lg" data-bs-toggle="modal" data-bs-target="#registerModal">Register Now</button>
</section>

<section class="container py-5">
  <h2>Schedule</h2>
  <table class="table">
    <thead><tr><th>Time</th><th>Session</th><th>Speaker</th></tr></thead>
    <tbody>
      <tr><td>9:00 AM</td><td>Opening Keynote</td><td>Jane Doe</td></tr>
      <tr><td>10:30 AM</td><td>Scaling Bootstrap Apps</td><td>John Smith</td></tr>
    </tbody>
  </table>
</section>

<section class="container py-5">
  <h2>Speakers</h2>
  <div class="row row-cols-1 row-cols-md-4 g-4 text-center">
    <div class="col"><img src="https://via.placeholder.com/120" class="rounded-circle mb-2" alt=""><h6>Jane Doe</h6></div>
  </div>
</section>

<div class="modal fade" id="registerModal" tabindex="-1" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header"><h5 class="modal-title">Register</h5><button class="btn-close" data-bs-dismiss="modal"></button></div>
      <div class="modal-body">
        <input type="text" class="form-control mb-2" placeholder="Name">
        <input type="email" class="form-control mb-2" placeholder="Email">
        <button class="btn btn-primary w-100">Confirm Registration</button>
      </div>
    </div>
  </div>
</div>
<script>
const target = new Date().getTime() + 3 * 24 * 60 * 60 * 1000;
setInterval(() => {
  const diff = target - new Date().getTime();
  const d = Math.floor(diff / 86400000), h = Math.floor(diff / 3600000) % 24;
  const m = Math.floor(diff / 60000) % 60, s = Math.floor(diff / 1000) % 60;
  document.getElementById('countdown').textContent = `${d}d ${h}h ${m}m ${s}s`;
}, 1000);
</script>
```

### 198. Create a Bootstrap survey/quiz app: multi-step form with progress bar, question types, results page.

```html
<div class="container py-5" style="max-width: 600px;">
  <div class="progress mb-4" style="height: 6px;">
    <div id="quizProgress" class="progress-bar" style="width: 33%;"></div>
  </div>
  <div id="q1">
    <h5>1. What is your favorite color?</h5>
    <div class="form-check"><input class="form-check-input" type="radio" name="q1"><label class="form-check-label">Blue</label></div>
    <div class="form-check"><input class="form-check-input" type="radio" name="q1"><label class="form-check-label">Red</label></div>
    <button class="btn btn-primary mt-3" onclick="nextQ(1)">Next</button>
  </div>
  <div id="q2" class="d-none">
    <h5>2. Rate your experience</h5>
    <input type="range" class="form-range" min="1" max="5">
    <button class="btn btn-primary mt-3" onclick="nextQ(2)">Next</button>
  </div>
  <div id="results" class="d-none text-center">
    <h4>Thanks for completing the survey!</h4>
  </div>
</div>
<script>
function nextQ(current) {
  document.getElementById('q' + current).classList.add('d-none');
  const next = document.getElementById('q' + (current + 1)) || document.getElementById('results');
  next.classList.remove('d-none');
  document.getElementById('quizProgress').style.width = (current === 1 ? '66%' : '100%');
}
</script>
```

### 199. Build a Bootstrap documentation site: sidebar nav, content area with code blocks, table of contents.

```html
<div class="d-flex">
  <nav class="bg-light p-3 vh-100" style="width: 240px; overflow-y: auto;">
    <h6>Getting Started</h6>
    <ul class="nav flex-column mb-3">
      <li class="nav-item"><a class="nav-link" href="#install">Installation</a></li>
      <li class="nav-item"><a class="nav-link" href="#usage">Usage</a></li>
    </ul>
  </nav>
  <main class="flex-grow-1 p-4">
    <h1 id="install">Installation</h1>
    <pre class="bg-dark text-white p-3 rounded"><code>npm install bootstrap</code></pre>
    <h2 id="usage">Usage</h2>
    <p>Import Bootstrap's CSS and JS bundle into your entry file.</p>
  </main>
  <aside class="p-3" style="width: 200px;">
    <h6>On this page</h6>
    <ul class="list-unstyled small">
      <li><a href="#install">Installation</a></li>
      <li><a href="#usage">Usage</a></li>
    </ul>
  </aside>
</div>
```

### 200. Create a complete Bootstrap starter template that demonstrates all major components, responsive grid, custom Sass theme, and accessibility best practices in a single project.

```
project/
├── src/
│   ├── scss/
│   │   └── custom.scss      # Sass overrides + @import "bootstrap/scss/bootstrap"
│   ├── js/
│   │   └── main.js          # bootstrap.bundle + component initializers
│   └── index.html
├── package.json
└── vite.config.js
```

```scss
// src/scss/custom.scss
$primary: #4361ee;
$border-radius: 0.5rem;
@import "bootstrap/scss/bootstrap";
```

```html
<!-- src/index.html -->
<!DOCTYPE html>
<html lang="en" data-bs-theme="light">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Bootstrap Starter Template</title>
  <link href="/dist/custom.css" rel="stylesheet">
</head>
<body>
  <a class="visually-hidden-focusable btn btn-primary" href="#main">Skip to content</a>
  <nav class="navbar navbar-expand-lg bg-body-tertiary" aria-label="Main navigation">
    <div class="container">
      <a class="navbar-brand" href="#">Starter</a>
      <button class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#nav" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="nav">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item"><a class="nav-link active" aria-current="page" href="#">Home</a></li>
        </ul>
      </div>
    </div>
  </nav>

  <main id="main" class="container py-5">
    <div class="row g-4">
      <div class="col-md-6">
        <div class="card"><div class="card-body">
          <h5 class="card-title">Card Component</h5>
          <button class="btn btn-primary">Primary Action</button>
        </div></div>
      </div>
      <div class="col-md-6">
        <div class="alert alert-info" role="alert">An accessible alert component.</div>
        <div class="progress" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100">
          <div class="progress-bar" style="width: 60%;"></div>
        </div>
      </div>
    </div>
  </main>

  <footer class="bg-dark text-white text-center py-3">
    <p class="mb-0">&copy; 2026 Starter Template</p>
  </footer>

  <script src="/dist/bootstrap.bundle.min.js"></script>
</body>
</html>
```

---

# 👨‍💻 Author

## Al Rifat Sabbir

**Connect with me -**

<p align="center">
<a href="https://codepen.io/alrifatsabbir" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/codepen.svg" alt="alrifatsabbir" height="30" width="40" /></a>
<a href="https://dev.to/alrifatsabbir" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/devto.svg" alt="alrifatsabbir" height="30" width="40" /></a>
<a href="https://twitter.com/alrifatsabbir" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/twitter.svg" alt="alrifatsabbir" height="30" width="40" /></a>
<a href="https://linkedin.com/in/alrifatsabbir" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/linked-in-alt.svg" alt="alrifatsabbir" height="30" width="40" /></a>
<a href="https://stackoverflow.com/users/24326530" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/stack-overflow.svg" alt="24326530" height="30" width="40" /></a>
<a href="https://codesandbox.com/alrifatsabbir" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/codesandbox.svg" alt="alrifatsabbir" height="30" width="40" /></a>
<a href="https://kaggle.com/alrifatsabbir" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/kaggle.svg" alt="alrifatsabbir" height="30" width="40" /></a>
<a href="https://fb.com/alrifatsabbir1" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/facebook.svg" alt="alrifatsabbir1" height="30" width="40" /></a>
<a href="https://instagram.com/alrifatsabbir" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/instagram.svg" alt="alrifatsabbir" height="30" width="40" /></a>
<a href="https://www.behance.net/alrifatsabbir" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/behance.svg" alt="alrifatsabbir" height="30" width="40" /></a>
<a href="https://medium.com/alrifatsabbir" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/medium.svg" alt="alrifatsabbir" height="30" width="40" /></a>
<a href="https://www.codechef.com/users/alrifatsabbir" target="blank"><img align="center" src="https://cdn.codechef.com/images/cc-logo.svg" alt="alrifatsabbir" height="30" width="40" /></a>
<a href="https://www.hackerrank.com/alrifatsabbir" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/hackerrank.svg" alt="alrifatsabbir" height="30" width="40" /></a>
<a href="https://codeforces.com/profile/alrifatsabbir" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/codeforces.svg" alt="alrifatsabbir" height="30" width="40" /></a>
<a href="https://www.leetcode.com/alrifatsabbir" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/leet-code.svg" alt="alrifatsabbir" height="30" width="40" /></a>
<a href="https://cses.fi/user/385526" target="blank"><img align="center" src="https://cses.fi/logo.png?1" alt="alrifatsabbir" height="30" width="40"/></a>
<a href="https://csacademy.com/user/alrifatsabbir" target="blank"><img align="center" src="https://vjudge.net/static/bundle/676cdd3d3793718b3d2c.png" alt="alrifatsabbir" height="30" width="40"/></a>
<a href="https://codemama.io/profile/alrifatsabbir" target="blank"><img align="center" src="https://cdn.ostad.app/public/upload/2023-10-26T08-16-40.927Z-cm-logo-long-white.svg" alt="alrifatsabbir" height="30" width="60" /></a>
<a href="https://atcoder.jp/users/alrifatsabbir" target="blank"><img align="center" src="https://img.atcoder.jp/assets/logo.png" alt="alrifatsabbir" height="30" width="40"/></a>
<a href="https://judge.u-aizu.ac.jp/onlinejudge/user.jsp?id=alrifatsabbir" target="blank"><img align="center" src="https://vjudge.net/static/bundle/72c318000fd40d15a16e.ico" alt="alrifatsabbir" height="30" width="40"/></a>
</p>
