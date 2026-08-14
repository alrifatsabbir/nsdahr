# Bootstrap Questions and Answers

## 📖 Description

Bootstrap is the most popular open-source CSS framework for building responsive, mobile-first websites. It provides a comprehensive collection of pre-built components, a responsive grid system, and utility classes that allow developers to quickly prototype and build professional web interfaces without writing extensive custom CSS.

- **Configuration File:** `bootstrap.config.js` (Bootstrap 5+ with custom Sass)
- **CDN:** Available via jsDelivr and other CDN providers
- **Example File:** `index.html`

---

## 🚀 How to Use Bootstrap?

Bootstrap can be added to a project in several ways:

1. **CDN (quickest):** Add the CSS and JS CDN links directly in your HTML.
2. **npm:** Install via npm for use with a build tool.
3. **Download:** Download the compiled CSS and JS files directly.

### How to Add Bootstrap via CDN:

```html
<!-- CSS -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">

<!-- JavaScript Bundle (includes Popper) -->
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
```

### How to Install Bootstrap via npm:

```bash
npm install bootstrap
```

---

# Questions with Answers❓

## 🟢 Level 1: Basic (1 - 20)

> ### 1. What is Bootstrap?
>
> Bootstrap is an open-source CSS framework originally developed by Twitter that provides a responsive grid system, pre-built UI components, and utility classes for building responsive, mobile-first websites quickly and consistently.

> ### 2. What is the current major version of Bootstrap?
>
> Bootstrap 5, which dropped the jQuery dependency, improved the grid system, added new utilities, and introduced new components like offcanvas and accordion improvements.

> ### 3. How do you include Bootstrap in an HTML file via CDN?
>
> Add the Bootstrap CSS `<link>` tag inside `<head>` and the Bootstrap JS bundle `<script>` tag at the end of `<body>`. The JS bundle includes Popper.js for dropdown and tooltip positioning.

> ### 4. What is the Bootstrap grid system?
>
> The Bootstrap grid system is a 12-column, flexbox-based layout system that uses rows and columns. It includes five responsive breakpoints (xs, sm, md, lg, xl, xxl) and allows creating complex layouts that adapt to any screen size.

> ### 5. What class makes a container with a fixed max-width at each breakpoint?
>
> The `.container` class creates a fixed-width container that has a max-width defined at each breakpoint. `.container-fluid` spans the full viewport width at all times.

> ### 6. What class is used to create a row in the Bootstrap grid?
>
> The `.row` class. It uses negative margins to offset the padding of `.col-*` classes and establishes a flex container for the columns inside.

> ### 7. What does `col-md-6` mean?
>
> It means the column takes up 6 out of 12 columns (half the width) on medium screens (`md`, 768px and above) and wider. On smaller screens it defaults to full width unless other breakpoint classes are specified.

> ### 8. Which class makes a button in Bootstrap?
>
> The `.btn` class creates a Bootstrap button. It must be paired with a color variant class like `.btn-primary`, `.btn-secondary`, or `.btn-danger` to apply a styled appearance.

> ### 9. Which class makes an element invisible but still occupies space?
>
> `.invisible` sets `visibility: hidden`. To remove the element from the flow entirely, use `.d-none` (which sets `display: none`).

> ### 10. How do you make text bold in Bootstrap?
>
> Use the `.fw-bold` utility class, which applies `font-weight: 700`. Bootstrap 5 replaced the older `.font-weight-bold` with the shorter `fw-*` naming convention.

> ### 11. Which class centers text in Bootstrap?
>
> The `.text-center` class applies `text-align: center`. Similarly, `.text-start` (left) and `.text-end` (right) are the Bootstrap 5 equivalents using logical direction naming.

> ### 12. What class adds a background color of primary in Bootstrap?
>
> `.bg-primary` applies the primary theme color (blue by default) as the background. Bootstrap provides semantic color utilities: `.bg-secondary`, `.bg-success`, `.bg-danger`, `.bg-warning`, `.bg-info`, `.bg-light`, `.bg-dark`.

> ### 13. What class makes text the primary color?
>
> `.text-primary` applies the primary color to text. The full set of text color utilities mirrors the background color utilities.

> ### 14. How do you add padding in Bootstrap?
>
> Use spacing utilities like `p-3` (all sides), `px-3` (horizontal), `py-3` (vertical), `pt-3` (top), `pb-3` (bottom), `ps-3` (start/left), `pe-3` (end/right). The number ranges from 0 to 5 on Bootstrap's spacing scale.

> ### 15. How do you add a responsive image in Bootstrap?
>
> Apply the `.img-fluid` class to an `<img>` element. It adds `max-width: 100%` and `height: auto`, making the image scale down to fit its container while never exceeding its natural size.

> ### 16. What class creates a Bootstrap card component?
>
> The `.card` class creates a flexible content container. A card typically contains `.card-body`, `.card-title`, `.card-text`, and optionally `.card-header` and `.card-footer`.

> ### 17. Which class creates a Bootstrap navigation bar?
>
> The `.navbar` class, combined with `.navbar-expand-{breakpoint}` (e.g., `.navbar-expand-lg`) for responsive collapsing, and `.navbar-light` or `.navbar-dark` for color scheme.

> ### 18. What is a Bootstrap modal?
>
> A modal is a dialog box/popup that appears on top of the current page. It is built with `.modal`, `.modal-dialog`, `.modal-content`, `.modal-header`, `.modal-body`, and `.modal-footer` classes, and is controlled via `data-bs-toggle="modal"` attributes.

> ### 19. How do you create a Bootstrap alert?
>
> Apply `.alert` and a color variant class to a `<div>`. Example: `<div class="alert alert-success">`. Alerts can be dismissible by adding `.alert-dismissible` and a close button with `data-bs-dismiss="alert"`.

> ### 20. What does the `.d-flex` class do?
>
> `.d-flex` sets `display: flex` on an element, making it a flexbox container and enabling all flexbox alignment utilities like `.justify-content-center`, `.align-items-center`, and `.gap-3`.

## 🟡 Level 2: Easy (21 - 40)

> ### 21. What are Bootstrap breakpoints and what are their default values?
>
> Bootstrap 5 breakpoints: `xs` (< 576px, default/no prefix), `sm` (≥ 576px), `md` (≥ 768px), `lg` (≥ 992px), `xl` (≥ 1200px), and `xxl` (≥ 1400px). All use min-width media queries, following a mobile-first approach.

> ### 22. What is the difference between `.container`, `.container-fluid`, and `.container-{breakpoint}`?
>
> `.container` has a fixed max-width per breakpoint. `.container-fluid` is always 100% wide. `.container-{breakpoint}` (e.g., `.container-md`) is 100% wide below the breakpoint and fixed-width at and above it.

> ### 23. How does Bootstrap's auto-layout columns work?
>
> Using `.col` without a number creates equal-width columns that share available space equally. If you mix `.col` with `.col-6`, the sized column takes 6 units and the others divide the remainder.

> ### 24. What is the `offset` class in Bootstrap grid?
>
> Offset classes like `offset-md-3` add left margin to a column equal to the specified number of column widths, effectively pushing it to the right. This is useful for centering a column or creating asymmetric layouts.

> ### 25. What are Bootstrap display utility classes?
>
> Bootstrap provides `.d-{value}` classes for `display: none`, `block`, `inline`, `inline-block`, `flex`, `inline-flex`, `grid`, `inline-grid`, and `table`. Responsive variants like `.d-md-none` and `.d-lg-block` apply at specific breakpoints.

> ### 26. What is the difference between `.navbar-light` and `.navbar-dark`?
>
> `.navbar-light` is used when the navbar background is light — it makes the navbar links and toggler dark-colored for contrast. `.navbar-dark` is used on dark backgrounds and makes the links and toggler light-colored. They control the color of the text and icons, not the background itself.

> ### 27. How do you create a dropdown in Bootstrap?
>
> Wrap the trigger and menu in a `.dropdown` div. Apply `data-bs-toggle="dropdown"` to the trigger button and `.dropdown-menu` to the `<ul>` of items. Each item in the menu uses `.dropdown-item`.

> ### 28. What is the Bootstrap flex utility for centering content both horizontally and vertically?
>
> Use `.d-flex .justify-content-center .align-items-center` on a container with a defined height. This centers children on both the main axis (horizontal) and cross axis (vertical).

> ### 29. What does `.flex-wrap` do in Bootstrap?
>
> `.flex-wrap` allows flex items to wrap onto multiple lines when they cannot fit on one line. The default behavior is `.flex-nowrap`. `.flex-wrap-reverse` wraps items in the reverse direction.

> ### 30. What are Bootstrap spacing scale values?
>
> Bootstrap uses a base spacing of `1rem` at scale `3`. The scale is: `0` = 0, `1` = 0.25rem, `2` = 0.5rem, `3` = 1rem, `4` = 1.5rem, `5` = 3rem. The `auto` value sets `margin: auto` for auto-centering.

> ### 31. How do you create a Bootstrap form?
>
> Wrap inputs in a `<form>` tag. Use `.mb-3` for spacing, `.form-label` on `<label>` elements, `.form-control` on text inputs and textareas, `.form-select` on `<select>`, and `.form-check` with `.form-check-input` for checkboxes and radios.

> ### 32. What is a Bootstrap badge?
>
> A badge is a small count or status indicator applied with the `.badge` class and a background color utility (e.g., `.bg-primary`). Badges can be placed inline within text or on top of icons using positioning utilities.

> ### 33. What is the Bootstrap breadcrumb component?
>
> Breadcrumbs show the current page's location within a hierarchy. Use `<nav>` with `aria-label="breadcrumb"`, an `<ol class="breadcrumb">`, and `<li class="breadcrumb-item">` elements. The active item gets `.active` and `aria-current="page"`.

> ### 34. What does `.rounded` do in Bootstrap?
>
> `.rounded` applies `border-radius: 0.375rem` for rounded corners. Variants include `.rounded-0` (none), `.rounded-1` through `.rounded-5` (increasing), `.rounded-circle` (50%, for circular avatars), and `.rounded-pill` (large, for pill-shaped buttons).

> ### 35. What is the Bootstrap list group component?
>
> List groups are flexible components for displaying lists of items. Use `.list-group` on a `<ul>` and `.list-group-item` on each `<li>`. Items can have color variants (`.list-group-item-success`), active state (`.active`), and be made clickable with `.list-group-item-action`.

> ### 36. How do you create a Bootstrap table?
>
> Add `.table` to a `<table>` element for basic Bootstrap table styling. Modifiers include `.table-striped` (alternating row colors), `.table-bordered` (borders on all cells), `.table-hover` (hover highlight), `.table-dark`, and `.table-sm` (reduced cell padding).

> ### 37. What is the Bootstrap progress component?
>
> Progress bars use a `.progress` wrapper with a `.progress-bar` child. Set the `width` via the `style` attribute or utility classes, and use `role="progressbar"` with `aria-valuenow`, `aria-valuemin`, and `aria-valuemax` for accessibility.

> ### 38. How do you use Bootstrap tooltips?
>
> Add `data-bs-toggle="tooltip"` and `title="Tooltip text"` to an element. Tooltips must be initialized with JavaScript: `const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]'); [...tooltipTriggerList].map(el => new bootstrap.Tooltip(el))`.

> ### 39. What is the difference between `.btn-primary` and `.btn-outline-primary`?
>
> `.btn-primary` fills the button with the primary color background. `.btn-outline-primary` shows only a primary-colored border and text with a transparent background, reverting to filled on hover. Both use the same color but differ in visual weight.

> ### 40. What class makes a Bootstrap button appear as a link?
>
> `.btn-link` removes the button background and border, making it look like a regular hyperlink while preserving button sizing and focus behavior. It is useful when you need a clickable text element that should semantically be a button.

## 🟠 Level 3: Medium (41 - 60)

> ### 41. How does the Bootstrap grid work with nested columns?
>
> Columns can be nested by placing a new `.row` inside a `.col-*`. The nested row again provides 12 columns within the width of its parent column. This allows building complex, multi-level layouts.

> ### 42. What are Bootstrap gutters and how do you customize them?
>
> Gutters are the padding between columns in a grid row. In Bootstrap 5, use `g-*` for both axes, `gx-*` for horizontal, and `gy-*` for vertical gutters. `g-0` removes all gutters. Values range from 0 to 5 using the spacing scale.

> ### 43. What is the Bootstrap Sass variable system?
>
> Bootstrap's source is written in Sass. You can customize it by importing Bootstrap's source files and overriding the `!default` Sass variables before the `@import`. This lets you change colors, spacing, fonts, breakpoints, and more without forking the source.

> ### 44. How do you override Bootstrap's default theme colors?
>
> Override the `$theme-colors` Sass map before importing Bootstrap: `$theme-colors: ("primary": #your-color, "secondary": #color)`. Or extend it by adding new keys. With Bootstrap 5's CSS custom properties, you can also override `--bs-primary` at the `:root` level without Sass.

> ### 45. What is the Bootstrap offcanvas component?
>
> Offcanvas is a hidden sidebar panel that slides in from any edge (start, end, top, bottom) using `data-bs-toggle="offcanvas"`. It is useful for mobile navigation, shopping cart drawers, and filter panels. It supports a `.offcanvas-backdrop` overlay and keyboard dismissal.

> ### 46. How does Bootstrap's accordion component work?
>
> Accordion uses `.accordion` as a wrapper with `.accordion-item` children. Each item has a `.accordion-header` with a `.accordion-button` and a `.accordion-collapse` containing `.accordion-body`. `data-bs-parent` on the collapse makes it close other items when one opens.

> ### 47. What is the Bootstrap carousel component?
>
> The carousel is a slideshow component. Use `.carousel` with `data-bs-ride="carousel"`, `.carousel-inner` with `.carousel-item` slides, and `.carousel-control-prev`/`.carousel-control-next` for navigation. Add `.carousel-indicators` for dot navigation.

> ### 48. What are Bootstrap utility API classes?
>
> Bootstrap 5 includes a utility API that allows generating custom utility classes via Sass. The `$utilities` map defines each utility's property, class name, values, and responsive/state variants. You can add, modify, or remove utilities without touching the source.

> ### 49. What is `data-bs-toggle` and how is it used?
>
> `data-bs-toggle` is a Bootstrap JavaScript attribute that tells the Bootstrap JS bundle which component to initialize on an element. Values include `modal`, `dropdown`, `collapse`, `tooltip`, `popover`, `offcanvas`, and `tab`. It replaces the older jQuery-based `data-toggle` from Bootstrap 4.

> ### 50. How does Bootstrap handle responsive typography?
>
> Bootstrap 5 includes responsive font sizes (RFS) that automatically scale headings and display text using the `rfs()` Sass mixin. The `$enable-rfs` variable enables it. It also provides display utility classes (`.display-1` through `.display-6`) for large hero text.

> ### 51. What is the Bootstrap navbar toggler and how does it work?
>
> The navbar toggler (`.navbar-toggler`) is a hamburger button that shows on mobile when the navbar collapses. It uses `data-bs-toggle="collapse"` and `data-bs-target` pointing to the collapsible nav content, which has the `.navbar-collapse` class.

> ### 52. What are Bootstrap tabs and pills?
>
> Tabs (`.nav-tabs`) and pills (`.nav-pills`) create tabbed navigation interfaces. Use `.nav` as the parent, `.nav-item` for each tab, and `.nav-link` for the link. The associated content uses `.tab-content` and `.tab-pane`, with `.active` on the visible pane and `data-bs-toggle="tab"` on the link.

> ### 53. What is the Bootstrap Scrollspy component?
>
> Scrollspy automatically updates navigation links based on scroll position. Add `data-bs-spy="scroll"` and `data-bs-target` pointing to the nav component on the scrollable element (`<body>` or a container). As the user scrolls, the matching nav link gets `.active`.

> ### 54. How does Bootstrap's form validation work?
>
> Bootstrap integrates with HTML5 native validation. Add `novalidate` to the `<form>` to prevent browser default UI. Use JavaScript to add `.was-validated` to the form on submit, which reveals Bootstrap's `.is-valid` / `.is-invalid` styling. `.valid-feedback` and `.invalid-feedback` divs show the messages.

> ### 55. What is the Bootstrap stretched link utility?
>
> `.stretched-link` makes the entire containing block (with `position: relative`) clickable by extending the link's `::after` pseudo-element to fill the block. It is commonly used on cards so the entire card is clickable via a link inside `.card-body`.

> ### 56. What is the Bootstrap ratio utility?
>
> `.ratio` with a modifier like `.ratio-16x9`, `.ratio-4x3`, or `.ratio-1x1` creates a responsive aspect-ratio box. The child element (iframe, video) is absolutely positioned to fill it. Custom ratios can be set with `--bs-aspect-ratio: 50%` (for 2:1).

> ### 57. What is the Bootstrap `visually-hidden` class?
>
> `.visually-hidden` (and `.visually-hidden-focusable`) hides content visually but keeps it accessible to screen readers. It uses a well-known clip-rect technique (`clip: rect(0,0,0,0)`, `width: 1px`, `height: 1px`, `overflow: hidden`). It replaces the older `.sr-only` class from Bootstrap 4.

> ### 58. How do you use Bootstrap's print utilities?
>
> Bootstrap provides `d-print-none`, `d-print-block`, `d-print-inline`, etc. These apply inside `@media print` and allow showing or hiding specific elements when the page is printed without writing custom CSS.

> ### 59. What is the Bootstrap `stack` component?
>
> `.vstack` creates a vertical flexbox stack (column direction with `gap`). `.hstack` creates a horizontal flexbox stack (row direction with `gap`). `.vr` adds a vertical rule divider in an hstack. These are Bootstrap 5 components for simple Flexbox layouts without writing custom CSS.

> ### 60. What are Bootstrap position utilities?
>
> Bootstrap provides position utilities: `.position-static`, `.position-relative`, `.position-absolute`, `.position-fixed`, `.position-sticky`. For placement, use `.top-0`, `.bottom-0`, `.start-0`, `.end-0`, and `.translate-middle` for centering absolutely positioned elements.

## 🔴 Level 4: Hard (61 - 80)

> ### 61. How do you customize Bootstrap with Sass?
>
> Install Bootstrap's source via npm. In your custom Sass file, import Bootstrap's `functions`, override `variables` and `maps`, then import the full Bootstrap source. Only include the components you need by importing individual partial files. Run your Sass compiler to generate a custom stylesheet.

> ### 62. What is the Bootstrap `$grid-breakpoints` Sass map?
>
> `$grid-breakpoints` defines the minimum widths for each responsive breakpoint. Overriding it changes breakpoint values globally across all responsive utilities, grid classes, and components. Always keep the map ordered from smallest to largest.

> ### 63. How does Bootstrap 5's JavaScript component API work?
>
> Each Bootstrap component (Modal, Tooltip, Dropdown, etc.) is a JavaScript class. You can initialize them via HTML `data-bs-*` attributes (automatically) or via JavaScript: `new bootstrap.Modal(element, options)`. Methods like `.show()`, `.hide()`, `.toggle()`, and `.dispose()` control the component. Get existing instances with `bootstrap.Modal.getInstance(element)`.

> ### 64. What is the difference between Bootstrap 4 and Bootstrap 5?
>
> Bootstrap 5 dropped jQuery (pure vanilla JS), replaced `.ml-*`/`.mr-*` with `.ms-*`/`.me-*` (logical properties), added new components (offcanvas, accordion revamp), expanded the grid to include `xxl` breakpoint, improved utility API with Sass maps, added CSS custom property support, and removed the need for Popper as a separate dependency.

> ### 65. How do you create a Bootstrap custom component using the utility API?
>
> In your Sass setup, use the `$utilities` map to add a new entry with `property`, `class`, and `values` keys. You can also set `responsive: true` to generate breakpoint-prefixed variants, `hover: true` for hover states, and `rfs: true` for responsive font sizing.

> ### 66. What is Bootstrap Icons?
>
> Bootstrap Icons is an open-source SVG icon library maintained by the Bootstrap team. Icons can be used as inline SVGs, as `<img>` elements, as CSS background images, or via an icon font. It contains over 2000 icons and is framework-agnostic, usable in any project.

> ### 67. How does Bootstrap's color mode (dark mode) work in Bootstrap 5.3+?
>
> Bootstrap 5.3 introduced built-in dark mode. Set `data-bs-theme="dark"` on `<html>` to activate dark mode. CSS custom properties are redefined for dark theme within a `[data-bs-theme="dark"]` selector. You can also apply dark mode to specific components by setting `data-bs-theme` on any element.

> ### 68. What is the Bootstrap `$spacer` variable?
>
> `$spacer` defines the base unit for the spacing scale, defaulting to `1rem`. All spacing values (from `1` to `5`) are multiples of `$spacer`: `$spacer * 0.25`, `$spacer * 0.5`, `$spacer * 1`, `$spacer * 1.5`, and `$spacer * 3`. Overriding `$spacer` scales the entire spacing system proportionally.

> ### 69. How does Bootstrap handle CSS custom properties (variables)?
>
> Bootstrap 5 exposes many of its computed Sass values as CSS custom properties on `:root` (e.g., `--bs-primary`, `--bs-font-sans-serif`, `--bs-border-radius`). These can be overridden with plain CSS without any build step. Components also expose component-level custom properties for fine-grained control.

> ### 70. What is the Bootstrap `container-xxl` class?
>
> `.container-xxl` creates a full-width container below the `xxl` breakpoint (1400px) and a fixed-width container at `xxl` and above. It is the widest of the responsive containers and is useful for very large screen layouts.

> ### 71. How do you make Bootstrap components accessible?
>
> Bootstrap includes ARIA attributes in its component HTML. Best practices: use semantic HTML, include `aria-label` on icon-only buttons, add `aria-expanded` to toggles, ensure modals trap focus, provide visible focus styles (do not remove `:focus-visible` outlines), and test with screen readers. Bootstrap's JavaScript manages `aria-expanded` and `aria-hidden` automatically on most components.

> ### 72. What is the Bootstrap `gap` utility?
>
> `.gap-{n}` sets the CSS `gap` property on flex and grid containers, adding space between children without margins. Responsive variants like `.gap-md-3` apply at specific breakpoints. This is cleaner than adding margin utilities to each child.

> ### 73. How do you create a full-page overlay with a Bootstrap modal?
>
> Use `.modal-dialog-scrollable` for scrollable content, `.modal-fullscreen` for a full-screen modal, or `.modal-fullscreen-{breakpoint}-down` for fullscreen below a specific breakpoint (e.g., `.modal-fullscreen-md-down`). The backdrop is automatically added.

> ### 74. What is the Bootstrap `object-fit` utility?
>
> Bootstrap 5.3+ provides `.object-fit-contain`, `.object-fit-cover`, `.object-fit-fill`, `.object-fit-none`, and `.object-fit-scale` utilities that map to the CSS `object-fit` property. They have responsive variants and are useful for controlling how images and videos fill their containers.

> ### 75. How does Bootstrap implement its responsive breakpoint system internally?
>
> Bootstrap uses Sass mixins for breakpoints: `@include media-breakpoint-up(md)` for min-width queries, `@include media-breakpoint-down(md)` for max-width, `@include media-breakpoint-between(sm, lg)` for ranges, and `@include media-breakpoint-only(md)` for a single breakpoint. These generate the correct `@media` rules.

> ### 76. What is the Bootstrap `link-*` utility?
>
> The `link-*` utilities (e.g., `.link-primary`, `.link-danger`) apply a semantic color to links and set a matching hover color using CSS custom properties. Unlike `.text-*` utilities, they also change the hover state, making them more appropriate for actual links.

> ### 77. How do you use Bootstrap with a JavaScript framework like React or Vue?
>
> Use the community libraries `react-bootstrap` or `reactstrap` for React (which re-implement Bootstrap components as React components with no jQuery). For Vue, use `bootstrap-vue-next` (Bootstrap 5 compatible). For Angular, use `ng-bootstrap`. These wrap Bootstrap's HTML patterns in framework components with proper event and state handling.

> ### 78. What is the Bootstrap `z-index` scale?
>
> Bootstrap defines a set of z-index variables for layering: `$zindex-dropdown: 1000`, `$zindex-sticky: 1020`, `$zindex-fixed: 1030`, `$zindex-offcanvas-backdrop: 1040`, `$zindex-offcanvas: 1045`, `$zindex-modal-backdrop: 1050`, `$zindex-modal: 1055`, `$zindex-popover: 1070`, `$zindex-tooltip: 1080`. Overriding these Sass variables adjusts the global layering order.

> ### 79. How does Bootstrap's JavaScript event system work?
>
> Bootstrap components fire custom DOM events using `CustomEvent`. Event names follow the pattern `{eventname}.bs.{component}` (e.g., `show.bs.modal`, `hidden.bs.dropdown`). You can listen with `addEventListener` and cancel actions on `show.bs.*` events by calling `event.preventDefault()`.

> ### 80. How do you tree-shake Bootstrap JavaScript?
>
> Import only the specific Bootstrap JavaScript modules you need rather than the full bundle. With ES modules: `import { Modal, Tooltip } from 'bootstrap'`. This lets your bundler (Rollup, Webpack, Vite) include only the referenced components, reducing JS bundle size significantly.

## ⚫ Level 5: Expert (81 - 100)

> ### 81. How do you build a custom Bootstrap build with only the components you need?
>
> In your Sass entry file, import Bootstrap's `functions`, `variables`, and `maps`, then selectively import only the component Sass partials you need (e.g., `@import "bootstrap/scss/buttons"`, `@import "bootstrap/scss/grid"`). Similarly, import only the required Bootstrap JS modules. This minimizes both CSS and JS output size.

> ### 82. What is the Bootstrap `$enable-*` flag system?
>
> Bootstrap exposes boolean `$enable-*` Sass variables that globally toggle features: `$enable-rounded` (border-radius), `$enable-shadows`, `$enable-gradients`, `$enable-transitions`, `$enable-reduced-motion`, `$enable-grid-classes`, `$enable-container-classes`, `$enable-rfs`, and `$enable-cssgrid`. Setting them to `false` removes the associated CSS.

> ### 83. How does Bootstrap's CSS grid option work (`$enable-cssgrid`)?
>
> Setting `$enable-cssgrid: true` in Bootstrap 5 generates an alternative CSS Grid-based grid system alongside (or instead of) the Flexbox grid. It uses CSS Grid `grid-template-columns` and supports all the same column utilities, but offers more flexibility for explicit placement and gaps.

> ### 84. How do you integrate Bootstrap with Vite?
>
> Install `bootstrap` and `sass` via npm. Import Bootstrap's Sass source in your main Sass file (with variable overrides before the import). In your main JS entry, import specific Bootstrap JS modules: `import 'bootstrap/js/dist/modal'`. Vite processes both Sass and ES module imports natively.

> ### 85. What are Bootstrap's extend/modify patterns for components via Sass?
>
> Each Bootstrap component has Sass variables (e.g., `$btn-border-radius`, `$card-spacer-y`) and a component mixin. Override the variables before importing. For structural changes, extend Bootstrap's component classes using your own CSS/Sass after the import. The utility API allows adding new variants without touching component source.

> ### 86. How does Bootstrap handle RTL (right-to-left) languages?
>
> Bootstrap 5 ships separate RTL CSS builds. It uses CSS logical properties (`margin-start`/`margin-end`, `padding-start`) via its `ms-*`/`me-*`/`ps-*`/`pe-*` utilities. The RTL build flips directional properties automatically. Add `dir="rtl"` to `<html>` and link the RTL CSS.

> ### 87. What is the Bootstrap `@mixin respond-to` pattern and how do the grid mixins work?
>
> Bootstrap exposes `media-breakpoint-up($name)`, `media-breakpoint-down($name)`, `media-breakpoint-only($name)`, and `media-breakpoint-between($lower, $upper)` Sass mixins. These abstract the raw `@media` queries, ensuring all breakpoint logic stays in sync with `$grid-breakpoints`.

> ### 88. How do you create a Bootstrap theme from scratch?
>
> Start by overriding the full `$theme-colors` map, `$spacers`, `$font-sizes`, `$border-radius`, `$box-shadow`, `$transition-base`, and font family variables. Optionally extend with new `$theme-colors` keys to add custom semantic colors. Use the utility API to generate utilities for the new colors. Then compile Bootstrap with your custom variables.

> ### 89. What is Bootstrap's `_maps.scss` and why is it important in Bootstrap 5?
>
> `_maps.scss` generates secondary Sass maps from the primary variable values — for example, `$theme-colors-rgb` (RGB values for use with `rgba()`), `$theme-colors-text` (text contrast colors), and `$theme-colors-bg-subtle`. These maps power Bootstrap 5's emphasis color system and must be imported after variables but before components.

> ### 90. How do you create a fully custom Bootstrap component?
>
> Define component-specific Sass variables with `!default` in your override file. Write the component CSS using Bootstrap's existing Sass functions (`color-contrast()`, `tint-color()`, `shade-color()`, `shift-color()`) and mixins (`border-radius()`, `box-shadow()`, `transition()`). Register any new color variant using the utility API or Sass `@each` loop over `$theme-colors`.

> ### 91. What is the Bootstrap `color-contrast()` function?
>
> `color-contrast($background)` is a Bootstrap Sass function that automatically returns either `$color-contrast-dark` or `$color-contrast-light` depending on which provides better WCAG contrast against the given background. It powers the dynamic text colors used on colored buttons and badges.

> ### 92. How does Bootstrap implement focus-visible styles?
>
> Bootstrap 5 uses `:focus-visible` pseudo-class for focus outlines, which shows focus styles only for keyboard navigation and not for mouse clicks. It defines `$focus-ring-width`, `$focus-ring-blur`, `$focus-ring-opacity`, and `$focus-ring-color` Sass variables, and uses a custom mixin `focus-ring()` applied to interactive elements.

> ### 93. What is the `$utilities` map and how do you add a custom utility?
>
> The `$utilities` map is a Sass map where each entry defines a Bootstrap utility class. To add a custom utility, use `map-merge($utilities, ("cursor": ("property": "cursor", "class": "cursor", "values": ("pointer": "pointer", "default": "default", "move": "move"))))` before importing Bootstrap. This generates `.cursor-pointer`, `.cursor-default`, etc.

> ### 94. What are Bootstrap's `tint-color()` and `shade-color()` functions?
>
> `tint-color($color, $weight)` mixes a color with white by the given percentage, lightening it. `shade-color($color, $weight)` mixes with black, darkening it. `shift-color($color, $weight)` uses tint for negative weights and shade for positive. These functions power Bootstrap's subtle background and text color variants.

> ### 95. How does Bootstrap 5.3's color modes architecture work internally?
>
> Bootstrap 5.3 defines all color-sensitive properties using CSS custom properties. The default (light) values are set on `:root`. A `[data-bs-theme="dark"]` CSS block redefines those same custom properties with dark-mode values. Since components reference `var(--bs-body-color)` etc., switching the theme attribute instantly re-themes all components.

> ### 96. How do you optimize Bootstrap's CSS bundle size for production?
>
> Use PurgeCSS (or a Sass partial import strategy) to remove unused classes. With PostCSS and a bundler, configure PurgeCSS to scan your HTML/JS for used class names. With Sass, only import component partials you use. The custom Sass build approach typically reduces Bootstrap from ~200KB to under 30KB for a typical project.

> ### 97. What is the Bootstrap `_root.scss` partial and what does it generate?
>
> `_root.scss` generates the CSS custom properties on `:root` — all the `--bs-*` variables that other components reference. This includes color values, font stacks, font sizes, spacing, border-radius values, and theme-specific values. Overriding variables before importing Bootstrap changes what `_root.scss` outputs.

> ### 98. How do Bootstrap's component event hooks work for preventing default actions?
>
> Bootstrap fires `show.bs.{component}` events before showing and `hide.bs.{component}` before hiding. These are cancelable: calling `event.preventDefault()` in a listener stops the action. For example, `modalEl.addEventListener('show.bs.modal', event => { if (!canShow) event.preventDefault(); })` conditionally blocks the modal from opening.

> ### 99. How do you implement a headless (CSS-only, no JS) Bootstrap approach?
>
> Bootstrap's layout, typography, forms, and most utility classes work without JavaScript. Only interactive components (modals, dropdowns, tooltips, popovers, carousels, collapses, offcanvas, scrollspy, tabs) require Bootstrap JS. By importing only Bootstrap CSS and using pure HTML for static layouts, you can build a fully functional static site.

> ### 100. What are the accessibility considerations for Bootstrap components?
>
> Use semantic HTML with Bootstrap classes rather than applying classes to non-semantic elements. Ensure modals trap and restore focus, navigation landmarks are correct, form inputs are labeled, color alone is not used to convey information, buttons have accessible names, interactive elements are keyboard reachable, and live regions (`aria-live`) announce dynamic content. Always test with NVDA, JAWS, or VoiceOver.

---

# 📝 Bootstrap Practice Questions (All 200 Items)

## 🟢 Level 1: Beginner (1 - 50)

### 1. Getting Started

1. Add Bootstrap 5 to an HTML page using a CDN link.
2. Create a Bootstrap page with a container, heading, and paragraph.
3. Add a responsive meta viewport tag to a Bootstrap page.
4. Create a Bootstrap page with a `.container-fluid` that spans full width.
5. Verify Bootstrap is working by displaying a styled alert.

### 2. Grid Basics

6. Create a two-column layout using the Bootstrap grid.
7. Create a three-column equal-width layout.
8. Create a layout where one column is wider than the others.
9. Create a single-column layout that is centered on the page.
10. Add spacing between columns using gutters.

### 3. Typography

11. Display a page heading using Bootstrap's display classes.
12. Style a paragraph using `.lead` for introductory text.
13. Use `.text-muted` to style secondary text.
14. Make a word bold using a Bootstrap utility class.
15. Create a blockquote with a source citation using Bootstrap styles.

### 4. Colors & Backgrounds

16. Create a div with a primary background color.
17. Apply danger text color to a paragraph.
18. Create a card with a success background and white text.
19. Add a light background to a section.
20. Apply a dark background and light text to a footer.

### 5. Buttons

21. Create buttons for all Bootstrap color variants.
22. Create outline buttons for all color variants.
23. Create a large and a small button.
24. Create a full-width block button.
25. Create a disabled button.

### 6. Alerts

26. Create an alert for each Bootstrap color variant.
27. Create a dismissible alert.
28. Add a heading inside an alert.
29. Create an alert with an icon.
30. Create an alert that links to another page.

### 7. Cards

31. Create a basic Bootstrap card with title, text, and button.
32. Create a card with a header and footer.
33. Create a card with an image at the top.
34. Create a card with a list group inside.
35. Create a group of three cards side by side.

### 8. Navigation

36. Create a basic Bootstrap navigation bar.
37. Add a brand logo/name to the navbar.
38. Add navigation links to the navbar.
39. Make the navbar collapsible on mobile.
40. Add a search form to the navbar.

### 9. Tables

41. Create a basic Bootstrap table.
42. Create a striped table.
43. Create a table with bordered cells.
44. Create a hoverable table.
45. Create a dark-themed table.

### 10. Forms

46. Create a form with name and email fields.
47. Add a password field with a label.
48. Create a textarea for a message.
49. Add a submit button to a form.
50. Create a form with a checkbox and radio button.

## 🟡 Level 2: Medium (51 - 100)

### 11. Advanced Grid

51. Create a responsive layout that stacks on mobile and shows three columns on desktop.
52. Create a grid where one column is offset by two units.
53. Use auto-layout columns to create an equal-width responsive row.
54. Create a grid where columns reorder on mobile using `order-*` classes.
55. Create a full-width hero section using a container-fluid with centered content.
56. Build a sidebar layout with a fixed-width sidebar and flexible main content area.
57. Create a masonry-like card grid using Bootstrap's grid.
58. Build a responsive pricing table with three equal columns.
59. Create a layout that changes from 4 columns on xl to 2 on md to 1 on mobile.
60. Build a dashboard layout with a fixed sidebar and scrollable main content.

### 12. Flexbox & Utilities

61. Center a div both horizontally and vertically using Bootstrap flex utilities.
62. Create a navigation bar where items are spaced with `justify-content-between`.
63. Use `ms-auto` to push navigation links to the right side of a flex container.
64. Build a card footer where two items are at opposite ends using flex utilities.
65. Create a horizontal stacked component using `.hstack` and `.vr`.
66. Use `flex-wrap` to create a tag cloud that wraps to multiple lines.
67. Build a media object (image + text side by side) using Bootstrap flex.
68. Create a centered hero section using `d-flex` with full viewport height.
69. Use `gap-*` to add consistent spacing between flex children.
70. Build a responsive flex grid that wraps items with equal width using `col`.

### 13. Components — Modals & Dropdowns

71. Create a modal with a title, body text, and close button.
72. Create a modal that opens when a button is clicked.
73. Create a scrollable modal for long content.
74. Create a centered modal dialog.
75. Create a fullscreen modal that activates on mobile only.
76. Create a dropdown menu with three items.
77. Create a dropdown with a divider and header.
78. Create a split button with a dropdown arrow.
79. Create a navigation dropdown with nested links.
80. Create a dropdown that appears on hover using custom CSS.

### 14. Components — Navbar & Tabs

81. Create a navbar with a brand, links, and a collapse button for mobile.
82. Add a dropdown menu inside a navbar.
83. Create a dark-themed navbar with white links.
84. Add a search form inside a navbar.
85. Create a fixed-top navbar.
86. Build a tabbed interface with three tabs using Bootstrap nav-tabs.
87. Create a pills-style navigation with `.nav-pills`.
88. Build a vertical tab navigation using `.flex-column`.
89. Create a tab interface where content changes with JavaScript.
90. Add icons to navigation tab links.

### 15. Forms Advanced

91. Create a horizontal form with labels and inputs on the same row.
92. Create a form with inline layout for a simple search bar.
93. Add floating labels to input fields.
94. Create a form with client-side validation using Bootstrap's styles.
95. Create a select dropdown with a custom Bootstrap style.
96. Build a file upload input with Bootstrap styling.
97. Create a range slider with a label.
98. Build a form with input groups (prepended icon + input).
99. Create a multi-step form appearance using multiple form sections.
100. Add a password strength indicator below a password field.

## 🟠 Level 3: Professional (101 - 150)

### 16. Responsive Layouts

101. Build a complete responsive landing page with navbar, hero, features, and footer.
102. Create a responsive e-commerce product grid that adapts from 1 to 4 columns.
103. Build a responsive blog layout with a main content area and sidebar.
104. Create a responsive profile page with an avatar, bio, and tabbed content.
105. Build a responsive admin dashboard with a sidebar, header, and widget grid.
106. Create a magazine-style layout with featured article and secondary article cards.
107. Build a responsive FAQ page using Bootstrap's accordion component.
108. Create a timeline layout using Bootstrap grid and custom CSS.
109. Build a responsive image gallery with a lightbox-style modal.
110. Create a footer with multi-column links, social icons, and copyright.

### 17. Custom Theming with Sass

111. Set up a Bootstrap Sass build and override the primary color.
112. Create a custom theme by overriding the entire `$theme-colors` map.
113. Change the default font family across the entire Bootstrap build.
114. Override Bootstrap's default border-radius to remove all rounded corners.
115. Add a custom breakpoint (e.g., `xs: 0`, with a new `xxs` below 400px).
116. Create a custom spacing scale by overriding the `$spacers` map.
117. Override Bootstrap's box shadow variables to create a flat design.
118. Create a custom color palette with tints and shades using Bootstrap's color functions.
119. Disable Bootstrap's gradients and shadows globally using `$enable-*` flags.
120. Build a dark-by-default Bootstrap theme using `$body-bg` and `$body-color` overrides.

### 18. JavaScript Components

121. Initialize a Bootstrap modal programmatically using the JavaScript API.
122. Listen for the `shown.bs.modal` event and focus an input when the modal opens.
123. Prevent a modal from closing when clicking the backdrop using `keyboard: false`.
124. Build a multi-step modal that navigates between steps using JavaScript.
125. Initialize Bootstrap tooltips on all elements with `data-bs-toggle="tooltip"`.
126. Create dynamic popovers that load content from a data attribute.
127. Build an auto-dismissing alert that disappears after 5 seconds.
128. Initialize a Bootstrap carousel and control it programmatically (next, prev, pause).
129. Implement Scrollspy on a single-page website with a sticky navbar.
130. Build a dynamic tab system where tabs are generated from a data array.

### 19. Accessibility & Best Practices

131. Audit a Bootstrap navbar for accessibility issues and fix them.
132. Create an accessible modal with proper focus trapping and ARIA attributes.
133. Build an accessible dropdown that is fully keyboard navigable.
134. Add `aria-live` to a Bootstrap alert region that shows dynamic messages.
135. Create a form with proper accessible labels, error messages, and descriptions.
136. Add skip navigation to a Bootstrap page for screen reader users.
137. Ensure color contrast meets WCAG AA using Bootstrap's semantic color utilities.
138. Create accessible icon-only buttons using `aria-label` and visually hidden text.
139. Implement a focus-visible pattern that shows focus styles only for keyboard users.
140. Build an accessible data table with Bootstrap using `scope`, `caption`, and ARIA.

### 20. Integration & Architecture

141. Integrate Bootstrap 5 into a React project using `react-bootstrap`.
142. Set up Bootstrap in a Vue project using `bootstrap-vue-next`.
143. Configure Bootstrap with webpack to import only needed components.
144. Set up Bootstrap with Vite for a fast development workflow.
145. Build a Bootstrap component library with reusable HTML snippets.
146. Create a design token system by mapping Bootstrap CSS variables to a custom theme.
147. Build a Bootstrap-based email template using table-based layout.
148. Create a Bootstrap-based print stylesheet for a document.
149. Implement Bootstrap's dark mode using `data-bs-theme` with a toggle button.
150. Configure PurgeCSS with a Bootstrap build to remove unused styles in production.

## 🔴 Level 4: Expert (151 - 200)

### 21. Advanced Sass Customization

151. Build a Bootstrap theme where buttons have no border-radius and use uppercase text.
152. Create a custom Bootstrap icon set integration using CSS background images.
153. Extend Bootstrap's grid with a 16-column option by modifying `$grid-columns`.
154. Add a new `subtle` button variant using Bootstrap's `button-variant()` mixin.
155. Create a custom card variant with a left-border accent using Bootstrap mixins.
156. Implement a responsive font size scale using Bootstrap's RFS mixin on custom headings.
157. Override Bootstrap's form control focus ring to use a brand color with correct opacity.
158. Create a custom `badge-*` set for new semantic colors using Bootstrap's badge variables.
159. Build a completely stripped Bootstrap build containing only grid and spacing utilities.
160. Add CSS custom property fallback chains to Bootstrap component variables for runtime theming.

### 22. Component Architecture

161. Build a reusable Bootstrap card component as a Web Component with Shadow DOM.
162. Create a Bootstrap-based design system with documented component variants in a style guide.
163. Build a dynamic data table component using Bootstrap table classes and JavaScript sorting.
164. Implement a Bootstrap-based WYSIWYG toolbar using button groups and dropdowns.
165. Create a Bootstrap multi-select component with tag-style selected item display.
166. Build a Bootstrap-based drag-and-drop Kanban board with column cards.
167. Implement a virtual scroll list using Bootstrap's list group and IntersectionObserver.
168. Create a Bootstrap-based autocomplete input with dropdown suggestions.
169. Build a Bootstrap stepper component for multi-step processes with progress indicator.
170. Implement a Bootstrap date range picker using two popover-linked date inputs.

### 23. Performance & Production

171. Measure and optimize Bootstrap's CSS specificity using a CSS analyzer tool.
172. Set up critical CSS extraction for a Bootstrap page using `critters` or similar tools.
173. Configure a Content Security Policy that works with Bootstrap's inline styles and scripts.
174. Implement Bootstrap's lazy-loaded modal: fetch modal HTML from a server on first open.
175. Build a progressive enhancement strategy where Bootstrap enhances a fully functional no-JS page.
176. Configure Bootstrap with PostCSS autoprefixer for broad browser compatibility.
177. Implement Bootstrap component lazy loading — only initialize components when visible.
178. Build a Bootstrap page that achieves a 95+ Lighthouse performance score.
179. Create a Bootstrap-based offline page using Service Worker caching.
180. Implement a Bootstrap theme editor where users can adjust CSS variables via a UI panel.

### 24. Testing & Debugging

181. Write unit tests for a custom Bootstrap JavaScript component using Jest.
182. Write Playwright end-to-end tests for a Bootstrap modal open/close flow.
183. Debug a Bootstrap z-index layering issue where a dropdown appears behind a sticky header.
184. Debug a Bootstrap grid alignment issue where columns wrap unexpectedly on a specific breakpoint.
185. Write a CSS regression test that captures Bootstrap component screenshots for visual diffing.
186. Audit a Bootstrap page with axe-core for accessibility violations.
187. Debug a Bootstrap Scrollspy that does not highlight the correct nav item.
188. Write a Cypress test that validates a Bootstrap form with all validation states.
189. Debug a Bootstrap carousel autoplay issue on iOS Safari.
190. Trace a Bootstrap CSS specificity conflict where custom styles are not being applied.

### 25. Real-World Projects

191. Build a complete SaaS landing page using Bootstrap: navbar, hero, features, pricing, testimonials, footer.
192. Create a full Bootstrap admin dashboard: sidebar navigation, stats cards, data table, charts placeholder.
193. Build a Bootstrap e-commerce product page: gallery, details, add-to-cart, related products.
194. Create a Bootstrap portfolio website: hero, projects grid, skills, contact form, footer.
195. Build a Bootstrap blog: homepage with card grid, single post with sidebar, author bio, comment form.
196. Create a Bootstrap job board: search filters, job listing cards, modal job detail, apply form.
197. Build a Bootstrap event website: countdown, schedule table, speaker cards, registration modal.
198. Create a Bootstrap survey/quiz app: multi-step form with progress bar, question types, results page.
199. Build a Bootstrap documentation site: sidebar nav, content area with code blocks, table of contents.
200. Create a complete Bootstrap starter template that demonstrates all major components, responsive grid, custom Sass theme, and accessibility best practices in a single project.

---

### **You will find these programs in `bootsrap.md` in this directory.**

> [bootsrap.md](bootsrap.md)

Explanation aren't available yet. But soon will be available.

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
