# CSS Practice Questions & Answers (200 Items)

---

> ## 🟢 Level 1: Beginner (1–50)

### 1. Set the text color of a paragraph to blue.

```css
p {
  color: blue;
}
```

### 2. Change the background color of a div to light gray.

```css
div {
  background-color: lightgray;
}
```

### 3. Add a background image to the body.

```css
body {
  background-image: url("background.jpg");
}
```

### 4. Make the background image cover the entire page.

```css
body {
  background-image: url("background.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  min-height: 100vh;
}
```

### 5. Change the opacity of an element.

```css
.element {
  opacity: 0.5;
}
```

### 6. Change the font size of a heading.

```css
h1 {
  font-size: 2.5rem;
}
```

### 7. Make a paragraph bold.

```css
p {
  font-weight: bold;
}
```

### 8. Italicize a piece of text.

```css
em {
  font-style: italic;
}
```

### 9. Center-align a heading.

```css
h1 {
  text-align: center;
}
```

### 10. Change the font family of the page.

```css
body {
  font-family: "Helvetica Neue", Arial, sans-serif;
}
```

### 11. Add 20px padding to a div.

```css
div {
  padding: 20px;
}
```

### 12. Add a 2px solid black border around a box.

```css
.box {
  border: 2px solid black;
}
```

### 13. Add 30px margin to the top of an element.

```css
.element {
  margin-top: 30px;
}
```

### 14. Create a square box with equal width and height.

```css
.square {
  width: 150px;
  height: 150px;
  background-color: teal;
}
```

### 15. Round the corners of a box.

```css
.box {
  border-radius: 12px;
}
```

### 16. Hide an element using CSS.

```css
.hidden {
  display: none;
}
```

### 17. Display elements side by side using Flexbox.

```css
.container {
  display: flex;
}
```

### 18. Center an element horizontally.

```css
.box {
  width: 200px;
  margin: 0 auto;
}
```

### 19. Center an element both horizontally and vertically using Flexbox.

```css
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
```

### 20. Make an element fixed at the top of the page.

```css
.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
}
```

### 21. Create a flex container.

```css
.container {
  display: flex;
}
```

### 22. Align items vertically in the center.

```css
.container {
  display: flex;
  align-items: center;
}
```

### 23. Space items evenly across the container.

```css
.container {
  display: flex;
  justify-content: space-between;
}
```

### 24. Change the direction of flex items to column.

```css
.container {
  display: flex;
  flex-direction: column;
}
```

### 25. Allow flex items to wrap.

```css
.container {
  display: flex;
  flex-wrap: wrap;
}
```

### 26. Create a two-column grid.

```css
.grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
}
```

### 27. Create three equal columns.

```css
.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}
```

### 28. Add spacing between grid items.

```css
.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}
```

### 29. Make one item span two columns.

```css
.item-wide {
  grid-column: span 2;
}
```

### 30. Center items inside a grid.

```css
.grid {
  display: grid;
  place-items: center;
}
```

### 31. Change a button color when hovered.

```css
.btn {
  background-color: #0d6efd;
  transition: background-color 0.2s;
}
.btn:hover {
  background-color: #0b5ed7;
}
```

### 32. Style the first child of a list.

```css
li:first-child {
  font-weight: bold;
  color: crimson;
}
```

### 33. Change the color of visited links.

```css
a:visited {
  color: purple;
}
```

### 34. Remove underline from links.

```css
a {
  text-decoration: none;
}
```

### 35. Add a smooth transition to a button hover.

```css
.btn {
  background-color: #0d6efd;
  transition: all 0.3s ease;
}
.btn:hover {
  background-color: #0b5ed7;
  transform: translateY(-2px);
}
```

### 36. Write a media query for screens smaller than 768px.

```css
@media (max-width: 768px) {
  .container {
    flex-direction: column;
  }
}
```

### 37. Make an image responsive.

```css
img {
  max-width: 100%;
  height: auto;
  display: block;
}
```

### 38. Change the layout from row to column on mobile.

```css
.container {
  display: flex;
  flex-direction: row;
}
@media (max-width: 768px) {
  .container {
    flex-direction: column;
  }
}
```

### 39. Hide an element only on mobile devices.

```css
@media (max-width: 768px) {
  .desktop-only {
    display: none;
  }
}
```

### 40. Set the viewport width correctly in HTML.

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

### 41. Create a simple fade-in animation.

```css
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}
.fade-in {
  animation: fadeIn 1s ease-in forwards;
}
```

### 42. Rotate an element on hover.

```css
.icon {
  transition: transform 0.3s ease;
}
.icon:hover {
  transform: rotate(90deg);
}
```

### 43. Scale a button when hovered.

```css
.btn {
  transition: transform 0.2s ease;
}
.btn:hover {
  transform: scale(1.05);
}
```

### 44. Move an element from left to right using keyframes.

```css
@keyframes slideRight {
  from { transform: translateX(0); }
  to { transform: translateX(200px); }
}
.mover {
  animation: slideRight 2s ease-in-out infinite alternate;
}
```

### 45. Create an infinite loading animation.

```css
.spinner {
  width: 40px;
  height: 40px;
  border: 4px solid #eee;
  border-top-color: #0d6efd;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}
@keyframes spin {
  to { transform: rotate(360deg); }
}
```

### 46. Add a box shadow to an element.

```css
.card {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}
```

### 47. Add a text shadow to a heading.

```css
h1 {
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
}
```

### 48. Make an image circular.

```css
.avatar {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
}
```

### 49. Change the mouse cursor when hovering over a button.

```css
.btn {
  cursor: pointer;
}
.btn:disabled {
  cursor: not-allowed;
}
```

### 50. Make a sticky navigation bar.

```css
.navbar {
  position: sticky;
  top: 0;
  z-index: 1000;
  background: #fff;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);
}
```

---

> ## 🟡 Level 2: Medium (51–100)

### 51. Target every odd table row using a CSS pseudo-class.

```css
tr:nth-child(odd) {
  background-color: #f8f9fa;
}
```

### 52. Style the last child of a list differently from the rest.

```css
li:last-child {
  border-bottom: none;
  font-style: italic;
}
```

### 53. Use an attribute selector to style all links that open in a new tab.

```css
a[target="_blank"] {
  color: #0d6efd;
}
a[target="_blank"]::after {
  content: " ↗";
}
```

### 54. Target an input element only when it is focused and not disabled.

```css
input:focus:not(:disabled) {
  outline: 2px solid #0d6efd;
  outline-offset: 2px;
}
```

### 55. Use `:not()` to style all buttons except the one with class `.primary`.

```css
.btn:not(.primary) {
  background-color: #6c757d;
  color: white;
}
```

### 56. Build a horizontal navigation bar using Flexbox with evenly spaced links.

```css
.navbar {
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 1rem;
  background: #212529;
}
.navbar a {
  color: white;
  text-decoration: none;
}
```

### 57. Create a card component where the footer always sticks to the bottom using Flexbox.

```css
.card {
  display: flex;
  flex-direction: column;
  height: 100%;
}
.card-body {
  flex: 1;
}
.card-footer {
  margin-top: auto;
}
```

### 58. Build a holy grail layout (header, three columns, footer) using Flexbox.

```css
.page {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
.main {
  display: flex;
  flex: 1;
}
.sidebar-left,
.sidebar-right {
  flex: 0 0 200px;
}
.content {
  flex: 1;
}
```

### 59. Create a responsive Flexbox grid where items wrap and maintain equal width.

```css
.grid {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}
.grid-item {
  flex: 1 1 250px;
}
```

### 60. Build a centered hero section using Flexbox with both horizontal and vertical centering.

```css
.hero {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100vh;
}
```

### 61. Create a Flexbox-based image gallery that reorders items on mobile using `order`.

```css
.gallery {
  display: flex;
  gap: 1rem;
}
.gallery .featured {
  order: 1;
}
@media (max-width: 768px) {
  .gallery {
    flex-direction: column;
  }
  .gallery .featured {
    order: -1;
  }
}
```

### 62. Build a sidebar layout where the sidebar has a fixed width and the main content fills the rest.

```css
.layout {
  display: flex;
}
.sidebar {
  flex: 0 0 250px;
}
.main-content {
  flex: 1;
  min-width: 0;
}
```

### 63. Create a Flexbox toolbar with a logo on the left, nav in the center, and actions on the right.

```css
.toolbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.toolbar-nav {
  display: flex;
  gap: 1.5rem;
  margin: 0 auto;
}
```

### 64. Build a responsive product card grid using Flexbox with `flex-wrap`.

```css
.products {
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
}
.product-card {
  flex: 1 1 calc(25% - 1.5rem);
  min-width: 200px;
}
```

### 65. Create a multiline Flexbox container and control row alignment using `align-content`.

```css
.container {
  display: flex;
  flex-wrap: wrap;
  height: 400px;
  align-content: space-between;
}
```
### 66. Build a 12-column grid system using CSS Grid.

```css
.grid-12 {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 1rem;
}
.col-span-4 {
  grid-column: span 4;
}
```

### 67. Create a magazine-style layout using `grid-template-areas`.

```css
.magazine {
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-template-areas:
    "featured sidebar"
    "featured sidebar"
    "articles articles";
  gap: 1rem;
}
.featured { grid-area: featured; }
.sidebar { grid-area: sidebar; }
.articles { grid-area: articles; }
```

### 68. Build a responsive card grid using `auto-fill` and `minmax()` with no media queries.

```css
.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 1.5rem;
}
```

### 69. Create a full-page layout with a sticky header and footer using CSS Grid.

```css
.page {
  display: grid;
  grid-template-rows: auto 1fr auto;
  min-height: 100vh;
}
.page-header {
  position: sticky;
  top: 0;
}
```

### 70. Build a photo gallery with items of different sizes using `grid-column` and `grid-row` spans.

```css
.gallery {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: 150px;
  gap: 10px;
}
.gallery .big {
  grid-column: span 2;
  grid-row: span 2;
}
```

### 71. Create a pricing table with three equal columns using CSS Grid.

```css
.pricing {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
}
.pricing .featured {
  transform: scale(1.05);
  border: 2px solid #0d6efd;
}
```

### 72. Build a dashboard layout with multiple widget areas using named grid areas.

```css
.dashboard {
  display: grid;
  grid-template-columns: 200px 1fr 1fr;
  grid-template-rows: auto auto;
  grid-template-areas:
    "sidebar stats stats"
    "sidebar chart table";
  gap: 1rem;
}
.sidebar { grid-area: sidebar; }
.stats { grid-area: stats; }
.chart { grid-area: chart; }
.table { grid-area: table; }
```

### 73. Create a responsive two-column form layout using CSS Grid.

```css
.form-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
}
.form-grid .full-width {
  grid-column: 1 / -1;
}
@media (max-width: 600px) {
  .form-grid {
    grid-template-columns: 1fr;
  }
}
```

### 74. Build an asymmetric layout using the `fr` unit with mixed column sizes.

```css
.layout {
  display: grid;
  grid-template-columns: 1fr 3fr 2fr;
  gap: 1rem;
}
```

### 75. Create a nested grid where child items align to the parent grid using `subgrid`.

```css
.parent {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
}
.child {
  grid-column: span 4;
  display: grid;
  grid-template-columns: subgrid;
}
```

### 76. Build a sticky header that remains at the top of the viewport while scrolling.

```css
.header {
  position: sticky;
  top: 0;
  z-index: 100;
  background: white;
}
```

### 77. Create a fixed chat bubble positioned at the bottom-right corner of the screen.

```css
.chat-bubble {
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  z-index: 999;
}
```

### 78. Build a tooltip that appears above a button using absolute positioning.

```css
.tooltip-wrapper {
  position: relative;
  display: inline-block;
}
.tooltip {
  position: absolute;
  bottom: 125%;
  left: 50%;
  transform: translateX(-50%);
  background: #212529;
  color: white;
  padding: 4px 8px;
  border-radius: 4px;
  white-space: nowrap;
  visibility: hidden;
}
.tooltip-wrapper:hover .tooltip {
  visibility: visible;
}
```

### 79. Create a modal overlay using fixed positioning with a semi-transparent backdrop.

```css
.modal-backdrop {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1050;
}
```

### 80. Build a dropdown menu using relative and absolute positioning.

```css
.dropdown {
  position: relative;
}
.dropdown-menu {
  position: absolute;
  top: 100%;
  left: 0;
  display: none;
  min-width: 160px;
  background: white;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}
.dropdown:hover .dropdown-menu {
  display: block;
}
```

### 81. Create a badge on an icon using absolute positioning within a relative container.

```css
.icon-wrapper {
  position: relative;
  display: inline-block;
}
.badge {
  position: absolute;
  top: -6px;
  right: -6px;
  background: red;
  color: white;
  border-radius: 50%;
  font-size: 0.7rem;
  width: 18px;
  height: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
}
```

### 82. Build a stacking context test — make element A appear above element B from a different parent.

```css
.parent-a {
  position: relative;
  z-index: 2;
}
.parent-b {
  position: relative;
  z-index: 1;
}
/* Element A's z-index only wins because its parent's stacking context (z-index: 2)
   is higher than parent B's (z-index: 1) — child z-index values don't compare
   across different stacking contexts. */
```

### 83. Create a full-screen hero section using `position: absolute` and `inset: 0`.

```css
.hero-wrapper {
  position: relative;
  height: 100vh;
}
.hero-bg {
  position: absolute;
  inset: 0;
  background: url("hero.jpg") center/cover;
}
```

### 84. Build a sticky sidebar that becomes fixed after scrolling past a threshold using `position: sticky`.

```css
.sidebar {
  position: sticky;
  top: 20px;
  align-self: start;
}
```

### 85. Create an image with a caption overlay using positioning and `z-index`.

```css
.image-wrapper {
  position: relative;
}
.caption {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.6);
  color: white;
  padding: 0.75rem;
  z-index: 1;
}
```

### 86. Define a color theme using CSS custom properties and apply it to a complete page.

```css
:root {
  --color-primary: #4361ee;
  --color-secondary: #6c757d;
  --color-bg: #ffffff;
  --color-text: #212529;
}
body {
  background: var(--color-bg);
  color: var(--color-text);
}
.btn-primary {
  background: var(--color-primary);
}
```

### 87. Build a dark/light mode switcher by toggling CSS custom properties on the root element.

```css
:root {
  --bg: #ffffff;
  --text: #212529;
}
[data-theme="dark"] {
  --bg: #121212;
  --text: #e9ecef;
}
body {
  background: var(--bg);
  color: var(--text);
  transition: background 0.3s, color 0.3s;
}
```

### 88. Create fluid typography using `clamp()` that scales between 1rem and 2.5rem.

```css
h1 {
  font-size: clamp(1rem, 4vw + 0.5rem, 2.5rem);
}
```

### 89. Build a component that uses `min()` to set a responsive maximum width.

```css
.container {
  width: min(90%, 1200px);
  margin: 0 auto;
}
```

### 90. Create a spacing scale using CSS custom properties (`--space-sm`, `--space-md`, etc.).

```css
:root {
  --space-xs: 0.25rem;
  --space-sm: 0.5rem;
  --space-md: 1rem;
  --space-lg: 1.5rem;
  --space-xl: 3rem;
}
.card {
  padding: var(--space-md);
  margin-bottom: var(--space-lg);
}
```

### 91. Build a button component that uses `var()` fallbacks for theming.

```css
.btn {
  background: var(--btn-bg, #0d6efd);
  color: var(--btn-color, #ffffff);
  padding: var(--btn-padding, 0.5rem 1rem);
}
```

### 92. Create a CSS-only color theme that inherits from a parent component using custom property cascading.

```css
.card {
  --accent: #4361ee;
}
.card .title {
  color: var(--accent);
}
.card.card--danger {
  --accent: #dc3545;
}
```

### 93. Use `calc()` to create a sidebar that is always 300px narrower than the container.

```css
.main-content {
  width: calc(100% - 300px);
}
```

### 94. Build an aspect-ratio box using `aspect-ratio: 16 / 9` for responsive video embeds.

```css
.video-wrapper {
  aspect-ratio: 16 / 9;
  width: 100%;
}
.video-wrapper iframe {
  width: 100%;
  height: 100%;
}
```

### 95. Create a grid with `auto-fit` columns using `minmax()` and `clamp()` for fully fluid layout.

```css
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(clamp(150px, 25vw, 280px), 1fr));
  gap: clamp(0.5rem, 2vw, 1.5rem);
}
```

### 96. Create a responsive container using `clamp()` that dynamically adjusts its horizontal padding based on the viewport width.

```css
.container {
  padding-inline: clamp(1rem, 5vw, 4rem);
}
```

### 97. Build a reusable card component using CSS custom properties to control its padding, border radius, shadow, and background color.

```css
.card {
  --card-padding: 1.5rem;
  --card-radius: 12px;
  --card-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  --card-bg: #ffffff;

  padding: var(--card-padding);
  border-radius: var(--card-radius);
  box-shadow: var(--card-shadow);
  background: var(--card-bg);
}
```

### 98. Create a responsive font-size system using `clamp()` for headings, paragraphs, and buttons.

```css
h1 { font-size: clamp(2rem, 1.5rem + 2vw, 3.5rem); }
h2 { font-size: clamp(1.5rem, 1.2rem + 1.5vw, 2.5rem); }
p  { font-size: clamp(1rem, 0.9rem + 0.3vw, 1.125rem); }
.btn { font-size: clamp(0.9rem, 0.85rem + 0.2vw, 1rem); }
```

### 99. Use `calc()` with CSS custom properties to dynamically calculate the height of a content section based on the viewport height and header height.

```css
:root {
  --header-height: 80px;
}
.content-section {
  min-height: calc(100vh - var(--header-height));
}
```

### 100. Build a fully responsive layout using CSS custom properties, `clamp()`, `min()`, `max()`, and `calc()` without using media queries.

```css
:root {
  --gutter: clamp(1rem, 3vw, 2.5rem);
  --content-width: min(90%, 1200px);
  --sidebar-width: max(200px, 20vw);
}
.layout {
  display: grid;
  grid-template-columns: var(--sidebar-width) 1fr;
  gap: var(--gutter);
  width: var(--content-width);
  margin-inline: auto;
  padding: var(--gutter);
}
.layout .main {
  width: calc(100% - var(--gutter));
}
```

---

> ## 🟠 Level 3: Professional (101–150)

### 16. Typography & Text

### 101. Create a responsive type scale where font sizes scale proportionally across breakpoints.

```css
:root {
  --scale-ratio: 1.25;
  --step-0: clamp(1rem, 0.95rem + 0.25vw, 1.125rem);
  --step-1: calc(var(--step-0) * var(--scale-ratio));
  --step-2: calc(var(--step-1) * var(--scale-ratio));
  --step-3: calc(var(--step-2) * var(--scale-ratio));
}
h3 { font-size: var(--step-1); }
h2 { font-size: var(--step-2); }
h1 { font-size: var(--step-3); }
```

### 102. Build a pull quote with a large decorative quotation mark using `::before` pseudo-element.

```css
.pull-quote {
  position: relative;
  padding-left: 2rem;
  font-size: 1.25rem;
  font-style: italic;
}
.pull-quote::before {
  content: "“";
  position: absolute;
  left: 0;
  top: -0.25rem;
  font-size: 3rem;
  line-height: 1;
  color: #0d6efd;
  font-style: normal;
}
```

### 103. Create a text truncation component that shows an ellipsis after one line.

```css
.truncate {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
```

### 104. Build a multi-line text clamp that shows exactly three lines then truncates with ellipsis.

```css
.clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
```

### 105. Create a hero headline with mixed font weights within a single heading using `<span>`.

```html
<h1 class="hero-title">Build <span class="light">beautiful</span> interfaces</h1>
```

```css
.hero-title {
  font-weight: 800;
}
.hero-title .light {
  font-weight: 300;
  font-style: italic;
}
```

### 106. Style a drop cap on the first letter of a paragraph using `::first-letter`.

```css
.drop-cap::first-letter {
  float: left;
  font-size: 3.5rem;
  line-height: 1;
  font-weight: 700;
  padding-right: 0.5rem;
  color: #0d6efd;
}
```

### 107. Build a word-by-word reveal animation using CSS custom properties and `animation-delay`.

```css
.word {
  display: inline-block;
  opacity: 0;
  animation: reveal 0.4s ease forwards;
  animation-delay: calc(var(--i) * 0.1s);
}
@keyframes reveal {
  to { opacity: 1; transform: translateY(0); }
  from { transform: translateY(10px); }
}
```

### 108. Create a responsive vertical rhythm system using `line-height` and `margin` based on a base unit.

```css
:root {
  --rhythm: 1.5rem;
}
body {
  line-height: var(--rhythm);
}
h1, h2, h3, p, ul, ol {
  margin-bottom: var(--rhythm);
}
```

### 109. Implement `font-display: swap` in a `@font-face` declaration for a custom web font.

```css
@font-face {
  font-family: "Inter";
  src: url("/fonts/inter.woff2") format("woff2");
  font-weight: 400 700;
  font-display: swap;
}
```

### 110. Create a variable font implementation that adjusts `font-weight` and `font-variation-settings` on hover.

```css
.variable-text {
  font-family: "InterVariable", sans-serif;
  font-weight: 400;
  font-variation-settings: "wght" 400;
  transition: font-variation-settings 0.3s ease;
}
.variable-text:hover {
  font-weight: 700;
  font-variation-settings: "wght" 700;
}
```

### 17. Animations & Transitions

### 111. Build a CSS-only loading spinner using `@keyframes` and `border-radius`.

```css
.spinner {
  width: 36px;
  height: 36px;
  border: 4px solid #e9ecef;
  border-top-color: #0d6efd;
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
}
@keyframes spin {
  to { transform: rotate(360deg); }
}
```

### 112. Create a skeleton loading screen using a shimmer animation.

```css
.skeleton {
  background: linear-gradient(90deg, #eee 25%, #f5f5f5 37%, #eee 63%);
  background-size: 400% 100%;
  animation: shimmer 1.4s ease infinite;
  border-radius: 4px;
}
@keyframes shimmer {
  0% { background-position: 100% 50%; }
  100% { background-position: 0 50%; }
}
```

### 113. Build a hamburger menu icon that morphs into an X when toggled using CSS transitions.

```css
.bar {
  width: 24px;
  height: 2px;
  background: #212529;
  margin: 5px 0;
  transition: transform 0.3s ease, opacity 0.3s ease;
}
.hamburger.active .bar:nth-child(1) {
  transform: translateY(7px) rotate(45deg);
}
.hamburger.active .bar:nth-child(2) {
  opacity: 0;
}
.hamburger.active .bar:nth-child(3) {
  transform: translateY(-7px) rotate(-45deg);
}
```

### 114. Create a CSS-only animated progress bar that fills from 0% to 100%.

```css
.progress-track {
  width: 100%;
  height: 8px;
  background: #e9ecef;
  border-radius: 4px;
  overflow: hidden;
}
.progress-fill {
  height: 100%;
  background: #0d6efd;
  animation: fill 2s ease forwards;
}
@keyframes fill {
  from { width: 0%; }
  to { width: 100%; }
}
```

### 115. Build a bouncing ball animation using `@keyframes` with `animation-timing-function: ease-in` and `ease-out`.

```css
.ball {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: #0d6efd;
  animation: bounce 1s infinite;
}
@keyframes bounce {
  0% { transform: translateY(0); animation-timing-function: ease-in; }
  50% { transform: translateY(-80px); animation-timing-function: ease-out; }
  100% { transform: translateY(0); }
}
```

### 116. Create a card flip effect revealing a back face using `rotateY` and `backface-visibility`.

```css
.flip-card {
  perspective: 1000px;
}
.flip-inner {
  position: relative;
  transition: transform 0.6s;
  transform-style: preserve-3d;
}
.flip-card:hover .flip-inner {
  transform: rotateY(180deg);
}
.flip-front, .flip-back {
  position: absolute;
  inset: 0;
  backface-visibility: hidden;
}
.flip-back {
  transform: rotateY(180deg);
}
```

### 117. Build a staggered list animation where items fade and slide in with increasing delay.

```css
.list-item {
  opacity: 0;
  transform: translateY(15px);
  animation: fadeSlideIn 0.5s ease forwards;
}
.list-item:nth-child(1) { animation-delay: 0.1s; }
.list-item:nth-child(2) { animation-delay: 0.2s; }
.list-item:nth-child(3) { animation-delay: 0.3s; }
.list-item:nth-child(4) { animation-delay: 0.4s; }
@keyframes fadeSlideIn {
  to { opacity: 1; transform: translateY(0); }
}
```

### 118. Create a typewriter effect using `@keyframes` with `steps()` timing function and `overflow: hidden`.

```css
.typewriter {
  overflow: hidden;
  white-space: nowrap;
  border-right: 2px solid;
  width: 20ch;
  animation: typing 3s steps(20, end) forwards,
             blink 0.7s step-end infinite;
}
@keyframes typing {
  from { width: 0; }
}
@keyframes blink {
  50% { border-color: transparent; }
}
```

### 119. Build a CSS parallax scrolling effect using `perspective` and `translateZ` on nested elements.

```css
.parallax-wrapper {
  height: 100vh;
  overflow-x: hidden;
  overflow-y: auto;
  perspective: 1px;
}
.parallax-layer-back {
  transform: translateZ(-1px) scale(2);
}
.parallax-layer-base {
  transform: translateZ(0);
}
```

### 120. Create a hover effect on a button using `clip-path` that wipes a new background from left to right.

```css
.btn-wipe {
  position: relative;
  overflow: hidden;
  background: #212529;
  color: white;
}
.btn-wipe::before {
  content: "";
  position: absolute;
  inset: 0;
  background: #0d6efd;
  clip-path: inset(0 100% 0 0);
  transition: clip-path 0.3s ease;
}
.btn-wipe:hover::before {
  clip-path: inset(0 0 0 0);
}
```

### 121. Build a pulsing notification badge using `@keyframes` with `transform: scale` and `opacity`.

```css
.badge-pulse {
  position: relative;
}
.badge-pulse::after {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: 50%;
  background: red;
  animation: pulse 1.5s ease-out infinite;
}
@keyframes pulse {
  0% { transform: scale(1); opacity: 0.6; }
  100% { transform: scale(2.2); opacity: 0; }
}
```

### 122. Create a smooth page section reveal using `@keyframes` and `animation-fill-mode: both`.

```css
.section-reveal {
  animation: revealUp 0.8s ease both;
}
@keyframes revealUp {
  from { opacity: 0; transform: translateY(40px); }
  to { opacity: 1; transform: translateY(0); }
}
```

### 123. Build a CSS-only accordion that expands and collapses using `max-height` transitions.

```css
.accordion-content {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.35s ease;
}
.accordion-toggle:checked ~ .accordion-content {
  max-height: 500px;
}
```

### 124. Create an infinite marquee text scroll animation using `@keyframes` and `transform: translateX`.

```css
.marquee {
  overflow: hidden;
  white-space: nowrap;
}
.marquee-track {
  display: inline-block;
  animation: marquee 12s linear infinite;
}
@keyframes marquee {
  from { transform: translateX(0); }
  to { transform: translateX(-50%); }
}
```

### 125. Build a morphing blob shape animation using `@keyframes` with `border-radius` percentage values.

```css
.blob {
  width: 200px;
  height: 200px;
  background: #0d6efd;
  animation: morph 8s ease-in-out infinite;
}
@keyframes morph {
  0%, 100% { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; }
  50% { border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%; }
}
```

### 18. Responsive Design Advanced

### 126. Build a responsive navigation that collapses into a hamburger menu on mobile using CSS only.

```css
.nav-toggle { display: none; }
.nav-menu {
  display: flex;
  gap: 1.5rem;
}
.hamburger-label { display: none; }

@media (max-width: 768px) {
  .nav-menu {
    display: none;
    flex-direction: column;
    width: 100%;
  }
  .nav-toggle:checked ~ .nav-menu {
    display: flex;
  }
  .hamburger-label {
    display: block;
    cursor: pointer;
  }
}
```

### 127. Create a responsive data table that converts to a card layout on small screens.

```css
@media (max-width: 600px) {
  table, thead, tbody, tr, th, td {
    display: block;
  }
  thead {
    display: none;
  }
  tr {
    margin-bottom: 1rem;
    border: 1px solid #ddd;
  }
  td {
    text-align: right;
    padding-left: 50%;
    position: relative;
  }
  td::before {
    content: attr(data-label);
    position: absolute;
    left: 0.75rem;
    font-weight: bold;
    text-align: left;
  }
}
```

### 128. Build a fluid grid that transitions from 4 columns on desktop to 2 on tablet to 1 on mobile.

```css
.grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
}
@media (max-width: 992px) {
  .grid { grid-template-columns: repeat(2, 1fr); }
}
@media (max-width: 576px) {
  .grid { grid-template-columns: 1fr; }
}
```

### 129. Create a responsive hero section with different background images for mobile and desktop using `@media`.

```css
.hero {
  background-image: url("hero-mobile.jpg");
  background-size: cover;
  background-position: center;
  min-height: 60vh;
}
@media (min-width: 768px) {
  .hero {
    background-image: url("hero-desktop.jpg");
    min-height: 90vh;
  }
}
```

### 130. Build a responsive email-safe layout using table-based CSS (for HTML email compatibility).

```html
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:600px;margin:0 auto;">
  <tr>
    <td style="padding:20px;font-family:Arial,sans-serif;">
      Email content goes here
    </td>
  </tr>
</table>
```

```css
@media only screen and (max-width: 600px) {
  table[role="presentation"] { width: 100% !important; }
}
```

### 131. Create a `prefers-reduced-motion` media query that disables all animations for users who prefer it.

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.001ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.001ms !important;
    scroll-behavior: auto !important;
  }
}
```

### 132. Build an image that uses `srcset` and `<picture>` with matching CSS for art-directed responsive images.

```html
<picture>
  <source media="(min-width: 768px)" srcset="hero-wide.jpg">
  <source media="(max-width: 767px)" srcset="hero-tall.jpg">
  <img src="hero-wide.jpg" alt="Hero" class="hero-img">
</picture>
```

```css
.hero-img {
  width: 100%;
  height: auto;
  object-fit: cover;
}
```

### 133. Implement a container query that changes card layout based on the card's container width, not viewport.

```css
.card-container {
  container-type: inline-size;
  container-name: card;
}
@container card (min-width: 400px) {
  .card {
    display: flex;
    flex-direction: row;
  }
}
```

### 134. Create a `prefers-color-scheme` based dark mode with CSS custom properties.

```css
:root {
  --bg: #ffffff;
  --text: #212529;
}
@media (prefers-color-scheme: dark) {
  :root {
    --bg: #121212;
    --text: #e9ecef;
  }
}
body {
  background: var(--bg);
  color: var(--text);
}
```

### 135. Build a print stylesheet that formats a resume or article for A4 paper with proper page breaks.

```css
@media print {
  @page {
    size: A4;
    margin: 2cm;
  }
  body {
    font-size: 11pt;
    color: #000;
  }
  .no-print {
    display: none;
  }
  h2 {
    break-after: avoid;
  }
  .section {
    break-inside: avoid;
  }
}
```

### 19. CSS Architecture

### 136. Refactor a flat CSS file into BEM naming conventions for a card component.

```css
.card { padding: 1rem; border-radius: 8px; }
.card__title { font-size: 1.25rem; font-weight: 700; }
.card__body { color: #495057; }
.card__footer { margin-top: 1rem; }
.card--featured { border: 2px solid #0d6efd; }
```

### 137. Build a design token system with CSS custom properties at three levels: global, alias, and component.

```css
:root {
  /* global tokens */
  --blue-500: #0d6efd;
  --space-4: 1rem;

  /* alias tokens */
  --color-primary: var(--blue-500);
  --spacing-md: var(--space-4);
}
.btn {
  /* component tokens */
  --btn-bg: var(--color-primary);
  --btn-padding: var(--spacing-md);
  background: var(--btn-bg);
  padding: var(--btn-padding);
}
```

### 138. Create a utility-first CSS class set for spacing, typography, and color (inspired by Tailwind).

```css
.p-1 { padding: 0.25rem; }
.p-2 { padding: 0.5rem; }
.p-4 { padding: 1rem; }
.m-2 { margin: 0.5rem; }
.text-sm { font-size: 0.875rem; }
.text-lg { font-size: 1.125rem; }
.font-bold { font-weight: 700; }
.text-primary { color: #0d6efd; }
.bg-light { background-color: #f8f9fa; }
```

### 139. Organize a stylesheet using ITCSS layers (settings, tools, generic, elements, objects, components, utilities).

```css
/* 1. Settings */
:root { --color-primary: #0d6efd; }

/* 2. Tools (mixins-like custom properties / functions would go here) */

/* 3. Generic */
*, *::before, *::after { box-sizing: border-box; }

/* 4. Elements */
body { font-family: system-ui, sans-serif; }

/* 5. Objects */
.o-container { width: min(90%, 1200px); margin-inline: auto; }

/* 6. Components */
.c-card { padding: 1rem; border-radius: 8px; }

/* 7. Utilities */
.u-hidden { display: none !important; }
```

### 140. Build a CSS file that uses `@layer` to manage specificity across base, component, and utility layers.

```css
@layer base, components, utilities;

@layer base {
  a { color: inherit; text-decoration: none; }
}
@layer components {
  .btn { padding: 0.5rem 1rem; border-radius: 6px; background: #0d6efd; color: #fff; }
}
@layer utilities {
  .text-center { text-align: center !important; }
}
```

### 141. Create a modular CSS architecture where each component has its own scoped custom properties.

```css
.card {
  --card-gap: 0.75rem;
  --card-bg: #fff;
  display: flex;
  flex-direction: column;
  gap: var(--card-gap);
  background: var(--card-bg);
}
.tag {
  --tag-bg: #e9ecef;
  background: var(--tag-bg);
  padding: 0.25rem 0.5rem;
}
```

### 142. Build a theme switcher that changes a complete component library appearance by modifying root variables.

```css
:root {
  --primary: #0d6efd;
  --surface: #ffffff;
  --on-surface: #212529;
}
[data-theme="ocean"] {
  --primary: #0891b2;
  --surface: #ecfeff;
  --on-surface: #164e63;
}
.btn { background: var(--primary); }
body { background: var(--surface); color: var(--on-surface); }
```

### 143. Refactor an overspecified CSS selector chain to use lower-specificity alternatives without `!important`.

```css
/* Before: body div.container ul.nav li a.link { color: red !important; } */

/* After */
.nav-link {
  color: red;
}
```

### 144. Create a CSS reset stylesheet that normalizes cross-browser differences while preserving useful defaults.

```css
*, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
html {
  -webkit-text-size-adjust: 100%;
}
img, picture, video, canvas, svg {
  display: block;
  max-width: 100%;
}
button, input, textarea, select {
  font: inherit;
}
ul[role="list"], ol[role="list"] {
  list-style: none;
}
```

### 145. Build a component API using CSS custom properties that can be configured from parent scope.

```css
.button {
  background: var(--button-bg, #0d6efd);
  color: var(--button-color, #fff);
  padding: var(--button-padding, 0.5rem 1rem);
  border-radius: var(--button-radius, 6px);
}
```

```html
<div style="--button-bg: #198754; --button-radius: 999px;">
  <button class="button">Save</button>
</div>
```

### 20. Filters, Transforms & Effects

### 146. Build a frosted-glass card effect using `backdrop-filter: blur()` and a semi-transparent background.

```css
.glass-card {
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 16px;
}
```

### 147. Create an image gallery with a grayscale filter that transitions to full color on hover.

```css
.gallery img {
  filter: grayscale(100%);
  transition: filter 0.4s ease;
}
.gallery img:hover {
  filter: grayscale(0%);
}
```

### 148. Build a perspective 3D card tilt effect that responds to mouse position using CSS custom properties updated by JavaScript.

```css
.tilt-card {
  transform: perspective(800px)
    rotateX(var(--rotate-x, 0deg))
    rotateY(var(--rotate-y, 0deg));
  transition: transform 0.1s ease-out;
}
```

```javascript
card.addEventListener("mousemove", (e) => {
  const rect = card.getBoundingClientRect();
  const x = (e.clientX - rect.left) / rect.width - 0.5;
  const y = (e.clientY - rect.top) / rect.height - 0.5;
  card.style.setProperty("--rotate-y", `${x * 20}deg`);
  card.style.setProperty("--rotate-x", `${-y * 20}deg`);
});
```

### 149. Create a `clip-path` reveal animation that uncovers an image with a polygon wipe transition.

```css
.reveal-img {
  clip-path: polygon(0 0, 0 0, 0 100%, 0 100%);
  animation: wipeIn 1s ease forwards;
}
@keyframes wipeIn {
  to {
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
  }
}
```

### 150. Build a duotone image effect using CSS `filter` and `mix-blend-mode`.

```css
.duotone-wrapper {
  position: relative;
  overflow: hidden;
}
.duotone-wrapper img {
  filter: grayscale(100%) contrast(1.1);
  display: block;
}
.duotone-wrapper::after {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(45deg, #4361ee, #f72585);
  mix-blend-mode: color;
}
```

---

> ## 🔴 Level 4: Expert (151–200)

### 21. CSS Grid Advanced

### 151. Build a CSS Grid layout where nested grid items align to the parent grid tracks using `subgrid`.

```css
.parent {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 1rem;
}
.child {
  grid-column: span 6;
  display: grid;
  grid-template-columns: subgrid;
}
```

### 152. Create a masonry-style layout using CSS Grid with `grid-template-rows: masonry` (progressive enhancement).

```css
.masonry {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  grid-template-rows: masonry;
  gap: 1rem;
}
/* Fallback for browsers without masonry support */
@supports not (grid-template-rows: masonry) {
  .masonry {
    grid-auto-rows: 10px;
  }
}
```

### 153. Build a complex editorial layout with overlapping grid items using explicit `grid-column` and `grid-row` placement.

```css
.editorial {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(4, 100px);
}
.headline {
  grid-column: 1 / 5;
  grid-row: 1 / 3;
}
.pull-image {
  grid-column: 4 / 7;
  grid-row: 2 / 5;
  z-index: 2;
}
.caption {
  grid-column: 1 / 4;
  grid-row: 3 / 4;
  z-index: 1;
}
```

### 154. Create a responsive holy grail layout that uses `grid-template-areas` and collapses gracefully on mobile.

```css
.layout {
  display: grid;
  grid-template-columns: 200px 1fr 200px;
  grid-template-areas:
    "header header header"
    "nav main aside"
    "footer footer footer";
  min-height: 100vh;
}
.header { grid-area: header; }
.nav { grid-area: nav; }
.main { grid-area: main; }
.aside { grid-area: aside; }
.footer { grid-area: footer; }

@media (max-width: 768px) {
  .layout {
    grid-template-columns: 1fr;
    grid-template-areas:
      "header"
      "nav"
      "main"
      "aside"
      "footer";
  }
}
```

### 155. Build a CSS Grid-based calendar where each day cell is placed by date using `grid-column` calculated from day-of-week.

```css
.calendar {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 1px;
}
.day {
  grid-column: var(--day-of-week);
  aspect-ratio: 1;
  padding: 0.5rem;
}
```

### 156. Create a full-bleed layout where some sections break out of the content column using named grid lines.

```css
.layout {
  display: grid;
  grid-template-columns:
    [full-start] minmax(1rem, 1fr)
    [content-start] min(1200px, 100% - 2rem)
    [content-end] minmax(1rem, 1fr)
    [full-end];
}
.layout > * {
  grid-column: content;
}
.layout > .full-bleed {
  grid-column: full;
}
```

### 157. Build a dashboard with resizable widget areas using CSS Grid and `resize: both` on grid cells.

```css
.dashboard {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1rem;
}
.widget {
  resize: both;
  overflow: auto;
  min-width: 150px;
  min-height: 120px;
  border: 1px solid #dee2e6;
  padding: 1rem;
}
```

### 158. Create a CSS Grid-based Gantt chart with fixed row headers and scrollable timeline columns.

```css
.gantt {
  display: grid;
  grid-template-columns: 180px repeat(30, 40px);
  overflow-x: auto;
}
.gantt-row-header {
  position: sticky;
  left: 0;
  background: #fff;
  z-index: 1;
}
.gantt-bar {
  grid-row: var(--row);
  grid-column: var(--start) / var(--end);
  background: #0d6efd;
  border-radius: 4px;
}
```

### 159. Build a responsive image mosaic where images have different sizes following a predefined grid pattern.

```css
.mosaic {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: 120px;
  gap: 8px;
}
.mosaic img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.mosaic .large { grid-column: span 2; grid-row: span 2; }
.mosaic .wide { grid-column: span 2; }
.mosaic .tall { grid-row: span 2; }
```

### 160. Create a layout that uses both CSS Grid and Flexbox together, with Grid for macro layout and Flexbox for micro component alignment.

```css
.page {
  display: grid;
  grid-template-columns: 240px 1fr;
  gap: 2rem;
}
.card-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
.card-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
```

### 22. Container Queries & Modern Layout

### 161. Build a card component that switches from a vertical to a horizontal layout when its container exceeds 600px using `@container`.

```css
.card-wrapper {
  container-type: inline-size;
}
.card {
  display: flex;
  flex-direction: column;
}
@container (min-width: 600px) {
  .card {
    flex-direction: row;
  }
}
```

### 162. Create a named container query that styles a widget differently based on whether it is in a sidebar or main column.

```css
.sidebar { container: sidebar-region / inline-size; }
.main { container: main-region / inline-size; }

@container sidebar-region (min-width: 250px) {
  .widget { font-size: 0.875rem; }
}
@container main-region (min-width: 600px) {
  .widget { font-size: 1.125rem; }
}
```

### 163. Build a responsive navigation component that uses container queries to show full labels or icon-only based on available width.

```css
.nav-wrapper {
  container-type: inline-size;
}
.nav-label {
  display: inline;
}
@container (max-width: 400px) {
  .nav-label {
    display: none;
  }
}
```

### 164. Create a component that uses `cqw` (container query width units) for fluid sizing relative to its container.

```css
.container-el {
  container-type: inline-size;
}
.heading {
  font-size: clamp(1rem, 8cqw, 2.5rem);
}
```

### 165. Build a product card that uses container queries to show or hide secondary information based on context.

```css
.product-card-wrapper {
  container-type: inline-size;
}
.product-description {
  display: none;
}
@container (min-width: 350px) {
  .product-description {
    display: block;
  }
}
```

### 166. Implement a design that uses `@container style()` queries to change appearance based on a CSS custom property value.

```css
.card {
  --state: default;
}
@container style(--state: highlighted) {
  .card {
    border: 2px solid #0d6efd;
    background: #eef4ff;
  }
}
```

### 167. Create a fully responsive layout system using only container queries and no viewport media queries.

```css
body {
  container-type: inline-size;
  container-name: page;
}
.grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
}
@container page (min-width: 700px) {
  .grid { grid-template-columns: repeat(2, 1fr); }
}
@container page (min-width: 1100px) {
  .grid { grid-template-columns: repeat(3, 1fr); }
}
```

### 168. Build a typography scale that uses container query units (`cqi`, `cqb`) instead of viewport units for better component portability.

```css
.text-block {
  container-type: inline-size;
}
.text-block h2 {
  font-size: clamp(1.25rem, 5cqi, 2rem);
}
.text-block p {
  font-size: clamp(0.9rem, 2.5cqi, 1.1rem);
}
```

### 169. Create a layout that combines `@container` with CSS Grid to produce a truly context-aware responsive grid.

```css
.grid-wrapper {
  container-type: inline-size;
}
.grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
}
@container (min-width: 500px) {
  .grid { grid-template-columns: repeat(2, 1fr); }
}
@container (min-width: 900px) {
  .grid { grid-template-columns: repeat(4, 1fr); }
}
```

### 170. Build a sidebar widget component that progressively enhances its layout using container query breakpoints.

```css
.widget {
  container-type: inline-size;
}
.widget-inner {
  display: block;
}
@container (min-width: 240px) {
  .widget-inner { display: flex; gap: 0.75rem; align-items: center; }
}
@container (min-width: 400px) {
  .widget-inner { gap: 1.5rem; }
}
```

### 23. CSS Custom Properties Advanced

### 171. Build a component theming system where multiple themes are defined as custom property sets on data attributes.

```css
[data-theme="light"] {
  --bg: #ffffff;
  --text: #212529;
}
[data-theme="dark"] {
  --bg: #121212;
  --text: #e9ecef;
}
[data-theme="brand"] {
  --bg: #0d6efd;
  --text: #ffffff;
}
.panel {
  background: var(--bg);
  color: var(--text);
}
```

### 172. Create a CSS custom property–driven animation by registering properties with `@property` and animating them.

```css
@property --angle {
  syntax: "<angle>";
  initial-value: 0deg;
  inherits: false;
}
.spinner-gradient {
  background: conic-gradient(from var(--angle), #0d6efd, #f72585, #0d6efd);
  animation: rotate-angle 2s linear infinite;
}
@keyframes rotate-angle {
  to { --angle: 360deg; }
}
```

### 173. Build a color system using `oklch` and relative color syntax to derive tints, shades, and harmonious palettes.

```css
:root {
  --brand: oklch(0.6 0.2 260);
  --brand-light: oklch(from var(--brand) calc(l + 0.2) c h);
  --brand-dark: oklch(from var(--brand) calc(l - 0.2) c h);
  --brand-muted: oklch(from var(--brand) l calc(c - 0.1) h);
}
```

### 174. Create a type-safe custom property set using `@property` with `<length>`, `<color>`, and `<number>` syntax types.

```css
@property --card-gap {
  syntax: "<length>";
  initial-value: 1rem;
  inherits: true;
}
@property --card-accent {
  syntax: "<color>";
  initial-value: #0d6efd;
  inherits: true;
}
@property --card-scale {
  syntax: "<number>";
  initial-value: 1;
  inherits: false;
}
.card {
  gap: var(--card-gap);
  border-color: var(--card-accent);
  transform: scale(var(--card-scale));
}
```

### 175. Build a CSS toggle pattern using custom properties with `0`/`1` values to conditionally apply styles without JavaScript.

```css
.toggle {
  --is-active: 0;
  opacity: calc(0.5 + (var(--is-active) * 0.5));
  transform: scale(calc(1 + (var(--is-active) * 0.1)));
}
.toggle.active {
  --is-active: 1;
}
```

### 176. Create a design system with three levels of custom properties: primitive tokens, semantic tokens, and component tokens.

```css
:root {
  /* Primitive */
  --gray-900: #212529;
  --blue-600: #0d6efd;

  /* Semantic */
  --color-text: var(--gray-900);
  --color-action: var(--blue-600);
}
.btn {
  /* Component */
  --btn-bg: var(--color-action);
  --btn-text: white;
  background: var(--btn-bg);
  color: var(--btn-text);
}
```

### 177. Build a spacing system using a modular scale formula implemented via `@property` and `calc()`.

```css
:root {
  --scale-base: 1rem;
  --scale-ratio: 1.5;
  --space-1: var(--scale-base);
  --space-2: calc(var(--space-1) * var(--scale-ratio));
  --space-3: calc(var(--space-2) * var(--scale-ratio));
  --space-4: calc(var(--space-3) * var(--scale-ratio));
}
```

### 178. Create a CSS custom property inheritance chain where a child component overrides only specific tokens.

```css
.card {
  --gap: 1rem;
  --bg: #fff;
  --radius: 8px;
}
.card .card--compact {
  --gap: 0.5rem;
}
.card .highlighted {
  --bg: #eef4ff;
}
```

### 179. Build a theming architecture where components declare their own `--component-*` fallback chain to global tokens.

```css
:root {
  --color-primary: #0d6efd;
  --radius-md: 8px;
}
.button {
  background: var(--button-bg, var(--color-primary));
  border-radius: var(--button-radius, var(--radius-md));
}
```

### 180. Create a live-editable theme using custom properties that JavaScript updates on user input.

```css
:root {
  --user-accent: #0d6efd;
}
.preview-box {
  background: var(--user-accent);
  transition: background 0.2s ease;
}
```

```javascript
colorInput.addEventListener("input", (e) => {
  document.documentElement.style.setProperty("--user-accent", e.target.value);
});
```

### 24. Accessibility & Performance

### 181. Audit a CSS file and refactor it to eliminate render-blocking rules using `@layer` and deferred loading.

```css
@layer critical, deferred;

@layer critical {
  body { font-family: system-ui, sans-serif; }
  .header { display: flex; }
}

@layer deferred {
  .modal, .tooltip, .carousel { /* non-critical, loaded later */ }
}
```

### 182. Build a focus management system using `:focus-visible` that shows outlines for keyboard users but not mouse users.

```css
button:focus {
  outline: none;
}
button:focus-visible {
  outline: 2px solid #0d6efd;
  outline-offset: 2px;
}
```

### 183. Create a CSS-only skip navigation link that is visually hidden but appears on focus.

```css
.skip-link {
  position: absolute;
  top: -40px;
  left: 0;
  background: #0d6efd;
  color: white;
  padding: 0.5rem 1rem;
  z-index: 2000;
  transition: top 0.2s ease;
}
.skip-link:focus {
  top: 0;
}
```

### 184. Build a color system that guarantees WCAG AA contrast ratios (4.5:1 for normal text, 3:1 for large) using `color-mix()`.

```css
:root {
  --base: #0d6efd;
  --text-on-base: color-mix(in srgb, white 90%, black);
  --accessible-muted: color-mix(in srgb, var(--base) 30%, black);
}
```

### 185. Implement `prefers-reduced-motion` across an entire animation library, replacing motion with fade-only alternatives.

```css
.fade-slide {
  animation: fadeSlide 0.5s ease forwards;
}
@keyframes fadeSlide {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}
@media (prefers-reduced-motion: reduce) {
  .fade-slide {
    animation: fadeOnly 0.5s ease forwards;
  }
  @keyframes fadeOnly {
    from { opacity: 0; }
    to { opacity: 1; }
  }
}
```

### 186. Build a high-contrast mode using `@media (forced-colors: active)` that maintains usability with system color keywords.

```css
@media (forced-colors: active) {
  .btn {
    border: 1px solid ButtonText;
    background: ButtonFace;
    color: ButtonText;
  }
  .btn:focus-visible {
    outline: 2px solid Highlight;
  }
}
```

### 187. Create a CSS containment strategy using `contain: layout paint` on widget sections to optimize rendering performance.

```css
.widget {
  contain: layout paint;
}
```

### 188. Build a `content-visibility: auto` implementation for a long list page with correct `contain-intrinsic-size` values.

```css
.list-item {
  content-visibility: auto;
  contain-intrinsic-size: 0 120px;
}
```

### 189. Create a print stylesheet for a multi-page document with `break-before`, `break-after`, and `break-inside` controls.

```css
@media print {
  h1 {
    break-before: page;
  }
  table, figure {
    break-inside: avoid;
  }
  .chapter-end {
    break-after: page;
  }
}
```

### 190. Build a complete accessible form style system: focus styles, error states, disabled states, and success states using only CSS.

```css
.form-field {
  border: 1px solid #ced4da;
  padding: 0.5rem;
  border-radius: 4px;
}
.form-field:focus-visible {
  outline: 2px solid #0d6efd;
  outline-offset: 2px;
}
.form-field[aria-invalid="true"] {
  border-color: #dc3545;
}
.form-field:disabled {
  background: #e9ecef;
  cursor: not-allowed;
}
.form-field.is-valid {
  border-color: #198754;
}
```

### 25. Modern CSS Features

### 191. Build a scroll-driven animation where a reading progress bar fills as the user scrolls down the article.

```css
.progress-bar {
  position: fixed;
  top: 0;
  left: 0;
  height: 4px;
  background: #0d6efd;
  transform-origin: left;
  animation: grow-progress linear;
  animation-timeline: scroll(root);
}
@keyframes grow-progress {
  from { transform: scaleX(0); }
  to { transform: scaleX(1); }
}
```

### 192. Create an element reveal effect using `animation-timeline: view()` that triggers when the element enters the viewport.

```css
.reveal-on-scroll {
  animation: fadeInUp linear both;
  animation-timeline: view();
  animation-range: entry 0% cover 40%;
}
@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
}
```

### 193. Build a popover component using the HTML `popover` attribute with CSS anchor positioning (`anchor-name`, `position-anchor`).

```html
<button popovertarget="info-popover" style="anchor-name: --info-btn;">Info</button>
<div id="info-popover" popover style="position-anchor: --info-btn;">
  Helpful details here.
</div>
```

```css
[popover] {
  position: absolute;
  top: anchor(bottom);
  left: anchor(left);
  margin-top: 0.5rem;
  border-radius: 8px;
  padding: 1rem;
}
```

### 194. Create a `color-mix()`-based theming system that generates hover and active state colors from a single base color.

```css
:root {
  --btn-base: #0d6efd;
}
.btn {
  background: var(--btn-base);
}
.btn:hover {
  background: color-mix(in srgb, var(--btn-base) 85%, black);
}
.btn:active {
  background: color-mix(in srgb, var(--btn-base) 70%, black);
}
```

### 195. Build a CSS-only dark mode that uses `light-dark()` function for dual-value color declarations.

```css
:root {
  color-scheme: light dark;
}
body {
  background: light-dark(#ffffff, #121212);
  color: light-dark(#212529, #e9ecef);
}
```

### 196. Implement a CSS `@scope` block that scopes component styles without Shadow DOM or BEM class naming.

```css
@scope (.card) to (.card-footer) {
  h3 {
    color: #0d6efd;
  }
  p {
    color: #495057;
  }
}
```

### 197. Create a complete page transition effect using the View Transitions API triggered by CSS.

```css
::view-transition-old(root) {
  animation: fadeOut 0.3s ease forwards;
}
::view-transition-new(root) {
  animation: fadeIn 0.3s ease forwards;
}
@keyframes fadeOut {
  to { opacity: 0; }
}
@keyframes fadeIn {
  from { opacity: 0; }
}
```

### 198. Build a native CSS nesting architecture for a component library where each component file uses nested rules.

```css
.card {
  padding: 1rem;
  border-radius: 8px;

  & .card-title {
    font-weight: 700;

    &:hover {
      color: #0d6efd;
    }
  }

  &.card--featured {
    border: 2px solid #0d6efd;
  }
}
```

### 199. Create a layout that uses `env(safe-area-inset-*)` to respect device notches and home indicator areas on iOS.

```css
.app-shell {
  padding-top: env(safe-area-inset-top);
  padding-bottom: env(safe-area-inset-bottom);
  padding-left: env(safe-area-inset-left);
  padding-right: env(safe-area-inset-right);
}
.bottom-nav {
  padding-bottom: calc(0.5rem + env(safe-area-inset-bottom));
}
```

### 200. Build a complete modern CSS starter template that uses `@layer`, custom properties, logical properties, `clamp()`, container queries, and `@property` to demonstrate best practices in a single stylesheet.

```css
@layer reset, tokens, base, components, utilities;

@layer reset {
  *, *::before, *::after { box-sizing: border-box; margin: 0; }
}

@layer tokens {
  :root {
    --color-primary: #0d6efd;
    --space-md: clamp(1rem, 2vw, 1.5rem);
    --radius-md: 8px;
  }
  @property --accent-angle {
    syntax: "<angle>";
    initial-value: 0deg;
    inherits: false;
  }
}

@layer base {
  body {
    font-family: system-ui, sans-serif;
    padding-inline: var(--space-md);
  }
}

@layer components {
  .card {
    container-type: inline-size;
    padding: var(--space-md);
    border-radius: var(--radius-md);
    background: var(--color-primary);
  }
  @container (min-width: 400px) {
    .card { display: flex; gap: var(--space-md); }
  }
}

@layer utilities {
  .u-text-center { text-align: center !important; }
}
```

---

# 👨‍💻 Author

### Al Rifat Sabbir

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
