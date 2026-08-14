# CSS Questions and Answers

## 📖 Description

CSS (Cascading Style Sheets) is a stylesheet language used to control the appearance and layout of web pages. It allows developers to style HTML elements with colors, fonts, spacing, animations, responsive layouts, and much more.

- **CSS Extension:** `.css`
- **Example File:** `style.css`

---

## 🚀 How to Use CSS?

CSS can be added to a webpage in three different ways:

1. **Inline CSS:** Using the `style` attribute inside an HTML element.
2. **Internal CSS:** Using the `<style>` tag inside the `<head>` section.
3. **External CSS:** Creating a separate `.css` file and linking it with the HTML document.

### How to Link an External CSS File:

```html
<link rel="stylesheet" href="style.css" />
```

_This is the recommended method as it separates design from content and keeps CSS reusable across multiple pages._

---

## ❓ Questions with Answers

## 🟢 Level 1: Basic (1 - 20)

> ### 1. What is CSS?
>
> CSS (Cascading Style Sheets) is a stylesheet language used to style and design HTML documents.

> ### 2. What does CSS stand for?
>
> Cascading Style Sheets.

> ### 3. What is the extension of a CSS file?
>
> `.css`

> ### 4. How many ways can CSS be added to HTML?
>
> Three ways: Inline CSS, Internal CSS, and External CSS.

> ### 5. Which method of adding CSS is recommended?
>
> External CSS because it separates design from content and is reusable.

> ### 6. Which HTML tag is used to link an external CSS file?
>
> The `<link>` tag.

> ### 7. Where is the external CSS file usually linked?
>
> Inside the `<head>` section of the HTML document.

> ### 8. What selector is used to style every element on the page?
>
> The universal selector (`*`).

> ### 9. Which selector targets an element by its id?
>
> The id selector (`#`).

> ### 10. Which selector targets elements by their class?
>
> The class selector (`.`).

> ### 11. Which property changes the text color?
>
> The `color` property.

> ### 12. Which property changes the background color?
>
> The `background-color` property.

> ### 13. Which property changes the font size?
>
> The `font-size` property.

> ### 14. Which property makes text bold?
>
> The `font-weight` property.

> ### 15. Which property aligns text horizontally?
>
> The `text-align` property.

> ### 16. What property adds space inside an element?
>
> The `padding` property.

> ### 17. What property adds space outside an element?
>
> The `margin` property.

> ### 18. Which property adds a border around an element?
>
> The `border` property.

> ### 19. Which property changes the width of an element?
>
> The `width` property.

> ### 20. Which property changes the height of an element?
>
> The `height` property.

## 🟡 Level 2: Easy (21 - 40)

> ### 21. What is CSS specificity and how is it calculated?
>
> Specificity determines which CSS rule is applied when multiple rules target the same element. It is calculated as a 4-part value (inline, id, class/pseudo-class/attribute, element): inline styles score `1,0,0,0`, id selectors `0,1,0,0`, class/pseudo-class/attribute selectors `0,0,1,0`, and element selectors `0,0,0,1`. The rule with the highest specificity wins.

> ### 22. What is the CSS cascade and how does it work?
>
> The cascade is the algorithm CSS uses to resolve conflicts when multiple rules target the same element. It considers origin and importance first (user-agent, user, author styles), then specificity, and finally source order — the last rule wins when specificity is equal.

> ### 23. What is the difference between `>`, `+`, and `~` combinators?
>
> `>` is the child combinator (direct children only), `+` is the adjacent sibling combinator (immediately following sibling), and `~` is the general sibling combinator (all following siblings at the same level).

> ### 24. What are pseudo-classes and pseudo-elements?
>
> Pseudo-classes like `:hover`, `:focus`, and `:nth-child()` target elements based on their state or position. Pseudo-elements like `::before`, `::after`, and `::first-line` target specific parts of an element and use double-colon syntax in CSS3.

> ### 25. What are the differences between `em`, `rem`, `px`, `vw`, and `vh` units?
>
> `px` is an absolute unit. `em` is relative to the font-size of the current element. `rem` is relative to the root (`<html>`) font-size, making it more predictable. `vw` and `vh` are percentages of the viewport's width and height respectively.

> ### 26. What is the CSS box model?
>
> The CSS box model describes the rectangular boxes generated for elements, consisting of the content area, `padding` (inside the border), `border`, and `margin` (outside the border). The total rendered size includes all four layers.

> ### 27. What is the difference between `box-sizing: content-box` and `box-sizing: border-box`?
>
> With `content-box` (the default), `width` and `height` apply only to the content area, so padding and border are added on top. With `border-box`, `width` and `height` include padding and border, making layout sizing much more predictable.

> ### 28. What is the difference between `visibility: hidden` and `display: none`?
>
> `visibility: hidden` hides the element but it still occupies space in the layout. `display: none` removes the element from the document flow entirely, so it takes up no space.

> ### 29. What is the difference between `outline` and `border`?
>
> `border` is part of the box model and affects element sizing and layout. `outline` is drawn outside the border and does not affect layout or take up space. Outlines are commonly used for focus indicators and cannot have individual sides styled.

> ### 30. What does the `overflow` property do?
>
> `overflow` controls what happens when content overflows an element's box. Values include `visible` (default, content spills out), `hidden` (clips the overflow), `scroll` (always shows scrollbars), and `auto` (scrollbars appear only when needed).

> ### 31. What is the difference between `opacity: 0` and `visibility: hidden`?
>
> Both hide the element visually, but `opacity: 0` makes it fully transparent while still occupying space and remaining interactive (clickable). `visibility: hidden` also occupies space but makes the element non-interactive. Neither removes it from the flow like `display: none`.

> ### 32. What does the `pointer-events` property do?
>
> `pointer-events` controls whether an element can be the target of mouse/touch events. Setting `pointer-events: none` makes the element invisible to mouse clicks and hover effects, passing events through to elements underneath.

> ### 33. How do you change the cursor appearance in CSS?
>
> Using the `cursor` property. Common values include `default`, `pointer` (hand cursor for links), `text`, `move`, `not-allowed`, `grab`, `crosshair`, and `none`. You can also use a custom image: `cursor: url('custom.png'), auto`.

> ### 34. What is the `list-style` property?
>
> `list-style` is a shorthand for `list-style-type` (bullet or number style), `list-style-position` (inside or outside), and `list-style-image` (custom image bullet). Setting `list-style: none` removes default list markers.

> ### 35. What properties control text decoration in CSS?
>
> `text-decoration` is the shorthand for `text-decoration-line` (underline, overline, line-through, none), `text-decoration-color`, `text-decoration-style` (solid, dashed, wavy), and `text-decoration-thickness`.

> ### 36. What is the difference between `letter-spacing` and `word-spacing`?
>
> `letter-spacing` controls the space between individual characters (tracking). `word-spacing` controls the space between words. Both accept length values and the keyword `normal`.

> ### 37. What does the `line-height` property do?
>
> `line-height` sets the height of a line box, controlling the vertical spacing between lines of text. It accepts unitless numbers (recommended, e.g., `1.5`), length values, or percentages. A unitless value multiplies the element's own font size.

> ### 38. What does the `white-space` property control?
>
> `white-space` controls how whitespace inside an element is handled. `normal` collapses whitespace and wraps text. `nowrap` prevents wrapping. `pre` preserves whitespace and line breaks like `<pre>`. `pre-wrap` preserves whitespace but allows wrapping.

> ### 39. What is the difference between `word-break` and `overflow-wrap`?
>
> `word-break: break-all` breaks words at any character to prevent overflow, which can break mid-word awkwardly. `overflow-wrap: break-word` (formerly `word-wrap`) only breaks a word if it would overflow and no other break point is available, which is more natural.

> ### 40. What is the `object-fit` property used for?
>
> `object-fit` controls how a replaced element (like `<img>` or `<video>`) is fitted into its container. Values include `fill` (default, stretches), `contain` (letterboxed), `cover` (cropped to fill), `none` (original size), and `scale-down`.

## 🟠 Level 3: Medium (41 - 60)

> ### 41. What is the difference between `flex-grow`, `flex-shrink`, and `flex-basis`?
>
> `flex-basis` sets the initial main-axis size of a flex item before free space is distributed. `flex-grow` defines how much the item grows to fill available space (relative to other items). `flex-shrink` defines how much the item shrinks when there is not enough space. Together they form the `flex` shorthand: `flex: grow shrink basis`.

> ### 42. What is the difference between `align-items` and `align-content` in Flexbox?
>
> `align-items` aligns flex items along the cross axis within a single line. `align-content` aligns multiple lines of flex items when wrapping occurs — it has no effect on a single-line flex container.

> ### 43. What does the `order` property do in Flexbox?
>
> `order` controls the visual order of a flex item within the flex container without changing the DOM order. Items are sorted by ascending `order` value (default `0`), allowing reordering purely with CSS.

> ### 44. What is `grid-template-columns` and `grid-template-rows`?
>
> These properties define the track sizes for the columns and rows of a CSS Grid container. Values can be fixed lengths, percentages, `fr` units, `auto`, or the `repeat()` notation. Example: `grid-template-columns: repeat(3, 1fr)` creates three equal-width columns.

> ### 45. What is the `fr` unit in CSS Grid?
>
> `fr` (fraction unit) represents a fraction of the available space in the grid container after fixed and auto-sized tracks are placed. `1fr 2fr` creates two columns where the second is twice as wide as the first.

> ### 46. What is the difference between `auto-fill` and `auto-fit` in `repeat()`?
>
> Both create as many tracks as will fit. `auto-fill` fills the row with as many columns as possible even if some are empty (retaining empty tracks). `auto-fit` collapses empty tracks to zero width, causing existing items to stretch and fill the row.

> ### 47. What is `grid-area` and how is it used?
>
> `grid-area` can assign a name to a grid item for use with `grid-template-areas` on the container, or it can be a shorthand for `grid-row-start / grid-column-start / grid-row-end / grid-column-end`. Named areas make complex layouts highly readable.

> ### 48. What is the difference between `position: sticky` and `position: fixed`?
>
> `position: fixed` removes the element from the document flow and positions it relative to the viewport — it always stays on screen. `position: sticky` keeps the element in the document flow and behaves like `relative` until the page scrolls to a threshold, then it sticks like `fixed` within its parent container.

> ### 49. What creates a stacking context in CSS?
>
> A new stacking context is created by: elements with `position` (not `static`) and a `z-index` other than `auto`, elements with `opacity` less than 1, elements with `transform`, `filter`, `will-change`, `isolation: isolate`, or CSS `mix-blend-mode` other than `normal`, among others. Elements within a stacking context are stacked independently.

> ### 50. What are CSS custom properties (variables)?
>
> CSS custom properties are defined with a double-dash prefix (e.g., `--primary-color: #3498db`) on any element, then referenced using `var(--primary-color)`. They cascade and inherit like regular CSS properties, can be changed with JavaScript, and enable powerful theming systems.

> ### 51. What is the `clamp()` function in CSS?
>
> `clamp(min, preferred, max)` constrains a value between a minimum and maximum. It is most useful for fluid typography: `font-size: clamp(1rem, 2.5vw, 2rem)` grows with the viewport but never goes below `1rem` or above `2rem`.

> ### 52. What is the difference between `min()` and `max()` functions?
>
> `min(a, b)` returns the smaller of two values and is useful for setting a maximum size responsively: `width: min(500px, 100%)`. `max(a, b)` returns the larger value, useful for minimum sizes: `padding: max(1rem, 2vw)`.

> ### 53. What is the `aspect-ratio` property?
>
> `aspect-ratio` sets a preferred width-to-height ratio for an element's box. `aspect-ratio: 16 / 9` maintains a widescreen ratio as the element resizes. It is particularly useful for responsive media containers.

> ### 54. What does `scroll-behavior: smooth` do?
>
> `scroll-behavior: smooth` applies a smooth animated scrolling effect when navigating to anchor links or when `scrollIntoView()` is called with `behavior: 'smooth'`. It is typically set on the `html` or `body` element.

> ### 55. What is the `will-change` property and when should it be used?
>
> `will-change` hints to the browser that an element will be animated, allowing it to optimize rendering in advance (e.g., promoting the element to its own compositor layer). It should be used sparingly on elements you know will animate, as overuse can consume significant memory.

> ### 56. How does `z-index` work and when does it not work?
>
> `z-index` controls the stacking order of positioned elements (those with `position` other than `static`). It only works within the same stacking context — an element cannot use `z-index` to break out of its parent's stacking context to appear above an element in a different stacking context at a higher level.

> ### 57. What is the difference between `align-self` and `justify-self`?
>
> `align-self` overrides the `align-items` setting for a specific flex or grid item along the cross axis. `justify-self` aligns a grid item along the inline axis within its grid area (not applicable to flex items, where `margin: auto` is used instead).

> ### 58. What is `grid-template-areas` and how does it work?
>
> `grid-template-areas` defines named areas within a grid using a text-based visual map. Each string represents a row, each word a cell: `"header header" "sidebar main" "footer footer"`. Grid items are then placed with `grid-area: header`, making complex layouts declarative and readable.

> ### 59. What are the `minmax()` function's use cases in CSS Grid?
>
> `minmax(min, max)` defines a track size that is at least `min` and at most `max`. For example, `minmax(200px, 1fr)` creates a column that is never smaller than `200px` but grows to fill available space — commonly used for responsive grids without media queries.

> ### 60. How does `var()` fallback work in CSS custom properties?
>
> The `var()` function accepts a fallback as a second argument: `var(--color, #333)`. If the custom property is not defined or is invalid, the fallback value is used. Fallbacks can also reference other custom properties: `var(--primary, var(--accent, blue))`.

## 🔴 Level 4: Hard (61 - 80)

> ### 61. What is the difference between CSS transitions and CSS animations?
>
> Transitions are triggered by a state change (like `:hover`) and interpolate between two states with a start and end value. Animations use `@keyframes` to define multiple states and run independently without needing a triggering state change. Animations also support looping, direction, and fill modes.

> ### 62. How does `@keyframes` work?
>
> `@keyframes` defines the intermediate steps in a CSS animation sequence. You specify selectors (`from`/`to` or percentage values like `0%`, `50%`, `100%`) and the CSS properties at each step. The animation engine interpolates between the declared states over the animation's duration.

> ### 63. What is `animation-fill-mode` and what do its values do?
>
> `animation-fill-mode` controls what styles are applied before and after an animation runs. `none` (default) applies no styles outside the animation. `forwards` retains the final keyframe styles after it ends. `backwards` applies the starting keyframe styles during the delay period. `both` combines `forwards` and `backwards`.

> ### 64. What CSS transform functions are available?
>
> Common transform functions include `translate(x, y)`, `translateX()`, `translateY()`, `translateZ()`, `scale(x, y)`, `rotate(angle)`, `rotateX()`, `rotateY()`, `rotateZ()`, `skew(x, y)`, `perspective()`, and `matrix()`. Multiple functions can be chained in a single `transform` declaration.

> ### 65. What is the `perspective` property in CSS 3D transforms?
>
> `perspective` defines the distance between the viewer and the z=0 plane, creating the illusion of depth for 3D-transformed children. Applied to the parent container, a smaller value (e.g., `400px`) creates a more dramatic 3D effect. `perspective-origin` sets the vanishing point.

> ### 66. What does `backface-visibility` do?
>
> `backface-visibility: hidden` hides the back side of an element when it is rotated more than 90 degrees around the Y or X axis. It is essential for card-flip animations to prevent seeing the mirrored reverse side of the front face during rotation.

> ### 67. What is `clip-path` and how is it used?
>
> `clip-path` clips an element to a specific shape, hiding everything outside it. Shapes include `circle()`, `ellipse()`, `inset()`, `polygon()`, and `path()`. It can be animated for creative reveal effects. Example: `clip-path: polygon(0 0, 100% 0, 100% 80%, 0 100%)` creates a diagonal cut.

> ### 68. What is `shape-outside` used for?
>
> `shape-outside` defines a shape that inline content (text) flows around when the element is floated. Like `clip-path`, it accepts `circle()`, `ellipse()`, `polygon()`, and `url()` (for alpha-channel shapes). It only works on floated elements.

> ### 69. What is the difference between `filter` and `backdrop-filter`?
>
> `filter` applies graphical effects (blur, brightness, contrast, grayscale, etc.) to the element itself and its contents. `backdrop-filter` applies the same effects to the area behind the element, creating frosted-glass effects — the element itself must have some transparency for the effect to be visible.

> ### 70. What is `mix-blend-mode` and how does it differ from `background-blend-mode`?
>
> `mix-blend-mode` defines how an element's content blends with the content behind it (e.g., `multiply`, `screen`, `overlay`, `difference`). `background-blend-mode` controls blending between an element's background layers (multiple background images or background image with background color).

> ### 71. What is CSS Grid Subgrid?
>
> Subgrid (`grid-template-columns: subgrid` or `grid-template-rows: subgrid`) allows a nested grid item to participate in the parent grid's track sizing, aligning its children to the outer grid lines. This solves the classic problem of aligning elements across cards or components that are independent grid items.

> ### 72. What are CSS logical properties?
>
> Logical properties map to physical directions based on the document's writing mode and text direction. For example, `margin-inline-start` maps to `margin-left` in left-to-right (LTR) layouts but to `margin-right` in right-to-left (RTL) layouts. They include `block`/`inline` and `start`/`end` axes, enabling truly internationalization-aware layouts.

> ### 73. What are the `:is()`, `:where()`, and `:has()` pseudo-classes?
>
> `:is()` groups selectors and takes the specificity of its most specific argument. `:where()` does the same but always has zero specificity, making it great for reusable defaults. `:has()` is the "parent selector" — it matches an element if any of its descendants match the argument, e.g., `div:has(> img)` matches a div with a direct child image.

> ### 74. What are CSS container queries?
>
> Container queries (`@container`) allow applying styles based on the size of a containing element rather than the viewport. The container is defined with `container-type: inline-size` (or `size`) and optionally named with `container-name`. This enables truly component-level responsive design independent of page layout.

> ### 75. What is `@supports` and how is it used?
>
> `@supports` is a CSS feature query that applies styles only if the browser supports a given property-value pair. Example: `@supports (display: grid) { ... }`. It also supports `not`, `and`, and `or` operators. It is used for progressive enhancement without JavaScript.

> ### 76. How do CSS transitions work with the `transition-timing-function`?
>
> `transition-timing-function` (and `animation-timing-function`) controls the rate of change over time using predefined keywords (`ease`, `linear`, `ease-in`, `ease-out`, `ease-in-out`), `steps()` for stepped animation, or `cubic-bezier(x1, y1, x2, y2)` for custom easing curves.

> ### 77. What is the difference between `transform: translate()` and changing `top`/`left`?
>
> `transform: translate()` moves an element without taking it out of the flow and triggers only the compositor step — it does not cause layout recalculation, making it far more performant for animations. Changing `top`/`left` (on positioned elements) triggers layout and paint, which is more expensive.

> ### 78. What are CSS scroll snap properties?
>
> CSS Scroll Snap allows you to define snap points along a scroll container. `scroll-snap-type` on the container sets the axis and strictness (`mandatory` or `proximity`). `scroll-snap-align` on children defines their snap position (`start`, `center`, `end`). Useful for carousels and full-page scroll layouts without JavaScript.

> ### 79. What does `isolation: isolate` do?
>
> `isolation: isolate` forces an element to create a new stacking context without needing `position` or `z-index`. This is particularly useful when you want to prevent a child element's `mix-blend-mode` from blending with elements outside the parent, isolating the blending effect.

> ### 80. How does `contain` property help with CSS performance?
>
> The `contain` property tells the browser that an element and its contents are independent from the rest of the document tree. Values include `layout` (no effect on outside layout), `paint` (no overflow outside), `size` (element size doesn't depend on children), and `style`. Proper containment lets the browser skip recalculating the rest of the page.

## ⚫ Level 5: Expert (81 - 100)

> ### 81. What are CSS cascade layers (`@layer`) and why are they useful?
>
> `@layer` lets you define explicit layers of specificity, so rules in a later layer override rules in an earlier layer regardless of selector specificity. This solves specificity wars in large codebases — you can define layers like `@layer base, components, utilities` and guarantee that utilities always win without resorting to `!important`.

> ### 82. What is the `revert-layer` keyword?
>
> `revert-layer` rolls back a property's value to what it would be in the previous cascade layer. This is distinct from `revert` (which rolls back to the browser default) and `unset`. It is only meaningful when used with `@layer` and enables clean overrides within a layered cascade system.

> ### 83. What is CSS Houdini?
>
> CSS Houdini is a collection of browser APIs that expose parts of the CSS engine to JavaScript, allowing developers to extend CSS. Key APIs include the Paint API (custom `paint()` functions for backgrounds), the Layout API (custom layout algorithms), the Animation Worklet, and the Typed OM (strongly-typed CSS values instead of strings).

> ### 84. What is the CSS Typed Object Model (Typed OM)?
>
> The CSS Typed OM (`element.attributeStyleMap`) represents CSS values as typed JavaScript objects instead of strings (e.g., `CSSUnitValue { value: 10, unit: 'px' }`). This eliminates string parsing, reduces errors, and enables high-performance animations through Houdini Worklets.

> ### 85. What is critical CSS and why does it matter for performance?
>
> Critical CSS is the minimal set of CSS rules required to render the above-the-fold content of a page. Inlining it in `<style>` tags in the `<head>` and loading the rest asynchronously eliminates render-blocking CSS, significantly improving First Contentful Paint (FCP) and Largest Contentful Paint (LCP).

> ### 86. What are the tradeoffs between CSS-in-JS and traditional CSS?
>
> CSS-in-JS (styled-components, Emotion) co-locates styles with components, enables dynamic theming, and eliminates dead code automatically. Tradeoffs include runtime style injection overhead, larger JS bundles, harder static analysis, and potential style duplication with SSR. Traditional CSS (or CSS Modules) provides better caching, no runtime cost, and cleaner separation of concerns.

> ### 87. What are the BEM, SMACSS, and ITCSS CSS architecture methodologies?
>
> BEM (Block Element Modifier) uses a strict class naming convention (`.block__element--modifier`) to make relationships explicit and avoid specificity issues. SMACSS categorizes CSS into Base, Layout, Module, State, and Theme. ITCSS (Inverted Triangle CSS) orders CSS from low-specificity generic styles (settings, tools) to high-specificity component and utility styles, preventing specificity conflicts at scale.

> ### 88. What is CSS containment and what are `content-visibility` and `contain-intrinsic-size`?
>
> `content-visibility: auto` skips rendering off-screen elements entirely (layout + paint), dramatically improving initial render performance on long pages. `contain-intrinsic-size` provides a placeholder size for elements with `content-visibility: auto` so scrollbar height calculations remain stable before the element is rendered.

> ### 89. What are scroll-driven animations and how do they work?
>
> Scroll-driven animations (via `animation-timeline: scroll()` or `view()`) link a CSS animation's progress directly to a scroll position rather than time. `scroll()` ties animation to a scroll container, `view()` ties it to an element's position within the viewport. This enables parallax, progress bars, and reveal effects with zero JavaScript.

> ### 90. What is the `@scope` rule in CSS?
>
> `@scope` limits the scope of CSS rules to a specific subtree of the DOM, from a scoping root to an optional limit. `@scope (.card) { p { ... } }` applies styles only to `<p>` elements inside `.card`. It enables component-level scoping natively without Shadow DOM or CSS Modules.

> ### 91. What is `color-mix()` and relative color syntax?
>
> `color-mix(in srgb, blue 50%, white)` mixes two colors in a specified color space, enabling dynamic tints and shades. Relative color syntax (`oklch(from var(--primary) calc(l + 0.2) c h)`) derives a new color by modifying channels of an existing color — both eliminate the need for preprocessor color functions.

> ### 92. What is native CSS nesting?
>
> Native CSS nesting (now supported in modern browsers) allows writing nested rules inside a parent rule, similar to Sass. Child rules must start with `&`, a combinator, or `:is()`. Example: `.card { color: red; &:hover { color: blue; } }`. It reduces repetition and improves style locality.

> ### 93. What are advanced patterns for CSS custom properties?
>
> Advanced patterns include: using custom properties as "type-safe" toggles with `0`/`1` values to toggle entire rule sets, cascading theme tokens through a design token hierarchy, component-level API design using `--component-bg` overrides, space-toggle tricks for conditional styling, and combining custom properties with `@property` to enable transitions and typed defaults.

> ### 94. What is `@property` and what does it enable?
>
> `@property` registers a CSS custom property with a specific syntax (type), initial value, and inheritance behavior. `@property --hue { syntax: '<angle>'; inherits: false; initial-value: 0deg; }` enables the browser to interpolate (transition/animate) the custom property, something not possible with unregistered custom properties.

> ### 95. How does CSS rendering performance work at the compositor level?
>
> The browser rendering pipeline is: Style → Layout → Paint → Composite. Only `transform` and `opacity` changes are handled solely by the compositor thread (no layout or paint), making them the only truly jank-free animatable properties. Promoting an element to its own compositor layer via `will-change: transform` or `transform: translateZ(0)` enables GPU-accelerated compositing.

> ### 96. What is specificity calculation for the `:is()`, `:not()`, and `:has()` selectors?
>
> `:is()` and `:has()` take the specificity of their most specific selector argument. `:not()` similarly takes the specificity of its argument. `:where()` always contributes zero specificity. This means `:is(#id, .class)` has the specificity of an `id` selector, which can cause surprises if not accounted for.

> ### 97. How should CSS be structured for print styles?
>
> Print styles should be added in a `@media print` block or a separate stylesheet with `media="print"`. Best practices include hiding navigation, sidebars, and interactive elements with `display: none`, forcing black-and-white colors, expanding links to show their `href` via `a::after { content: " (" attr(href) ")"; }`, and using `page-break-*` (or `break-*`) properties to control pagination.

> ### 98. How do CSS logical properties benefit internationalization?
>
> Logical properties (`margin-inline-start`, `padding-block-end`, `border-inline`, `inset-inline-start`) automatically adapt to the document's writing mode and direction. A layout using logical properties correctly renders in LTR (English), RTL (Arabic, Hebrew), and vertical writing modes (Japanese) without any additional CSS, eliminating the need for separate RTL stylesheets.

> ### 99. What is CSS `env()` and what are safe area insets?
>
> `env()` accesses environment variables defined by the browser or device. The most common are `safe-area-inset-top/right/bottom/left`, which represent the notch and home indicator areas on devices like iPhones. Using `padding-bottom: env(safe-area-inset-bottom)` prevents content from being hidden under the home indicator on edge-to-edge displays.

> ### 100. What is the difference between `initial`, `inherit`, `unset`, `revert`, and `revert-layer`?
>
> `initial` resets to the CSS specification's initial value. `inherit` forces inheritance from the parent. `unset` acts as `inherit` for inheritable properties and `initial` for non-inheritable ones. `revert` rolls back to the browser's user-agent stylesheet value. `revert-layer` rolls back to the previous `@layer`'s value, and is only meaningful inside `@layer` declarations.

---

## 📝 CSS Practice Questions (All 200 Items)

## 🟢 Level 1: Beginner (1 - 50)

### 1. Colors & Backgrounds

1. Set the text color of a paragraph to blue.
2. Change the background color of a div to light gray.
3. Add a background image to the body.
4. Make the background image cover the entire page.
5. Change the opacity of an element.

### 2. Typography

6. Change the font size of a heading.
7. Make a paragraph bold.
8. Italicize a piece of text.
9. Center-align a heading.
10. Change the font family of the page.

### 3. Box Model

11. Add 20px padding to a div.
12. Add a 2px solid black border around a box.
13. Add 30px margin to the top of an element.
14. Create a square box with equal width and height.
15. Round the corners of a box.

### 4. Display & Position

16. Hide an element using CSS.
17. Display elements side by side using Flexbox.
18. Center an element horizontally.
19. Center an element both horizontally and vertically using Flexbox.
20. Make an element fixed at the top of the page.

### 5. Flexbox Basics

21. Create a flex container.
22. Align items vertically in the center.
23. Space items evenly across the container.
24. Change the direction of flex items to column.
25. Allow flex items to wrap.

### 6. Grid Basics

26. Create a two-column grid.
27. Create three equal columns.
28. Add spacing between grid items.
29. Make one item span two columns.
30. Center items inside a grid.

### 7. Pseudo Classes & Effects

31. Change a button color when hovered.
32. Style the first child of a list.
33. Change the color of visited links.
34. Remove underline from links.
35. Add a smooth transition to a button hover.

### 8. Responsive Design

36. Write a media query for screens smaller than 768px.
37. Make an image responsive.
38. Change the layout from row to column on mobile.
39. Hide an element only on mobile devices.
40. Set the viewport width correctly in HTML.

### 9. Animations

41. Create a simple fade-in animation.
42. Rotate an element on hover.
43. Scale a button when hovered.
44. Move an element from left to right using keyframes.
45. Create an infinite loading animation.

### 10. Miscellaneous

46. Add a box shadow to an element.
47. Add a text shadow to a heading.
48. Make an image circular.
49. Change the mouse cursor when hovering over a button.
50. Make a sticky navigation bar.

---

## 🟡 Level 2: Medium (51 - 100)

### 11. Advanced Selectors

51. Target every odd table row using a CSS pseudo-class.
52. Style the last child of a list differently from the rest.
53. Use an attribute selector to style all links that open in a new tab.
54. Target an input element only when it is focused and not disabled.
55. Use `:not()` to style all buttons except the one with class `.primary`.

### 12. Flexbox Layouts

56. Build a horizontal navigation bar using Flexbox with evenly spaced links.
57. Create a card component where the footer always sticks to the bottom using Flexbox.
58. Build a holy grail layout (header, three columns, footer) using Flexbox.
59. Create a responsive Flexbox grid where items wrap and maintain equal width.
60. Build a centered hero section using Flexbox with both horizontal and vertical centering.
61. Create a Flexbox-based image gallery that reorders items on mobile using `order`.
62. Build a sidebar layout where the sidebar has a fixed width and the main content fills the rest.
63. Create a Flexbox toolbar with a logo on the left, nav in the center, and actions on the right.
64. Build a responsive product card grid using Flexbox with `flex-wrap`.
65. Create a multiline Flexbox container and control row alignment using `align-content`.

### 13. CSS Grid Layouts

66. Build a 12-column grid system using CSS Grid.
67. Create a magazine-style layout using `grid-template-areas`.
68. Build a responsive card grid using `auto-fill` and `minmax()` with no media queries.
69. Create a full-page layout with a sticky header and footer using CSS Grid.
70. Build a photo gallery with items of different sizes using `grid-column` and `grid-row` spans.
71. Create a pricing table with three equal columns using CSS Grid.
72. Build a dashboard layout with multiple widget areas using named grid areas.
73. Create a responsive two-column form layout using CSS Grid.
74. Build an asymmetric layout using the `fr` unit with mixed column sizes.
75. Create a nested grid where child items align to the parent grid using `subgrid`.

### 14. Positioning & Z-index

76. Build a sticky header that remains at the top of the viewport while scrolling.
77. Create a fixed chat bubble positioned at the bottom-right corner of the screen.
78. Build a tooltip that appears above a button using absolute positioning.
79. Create a modal overlay using fixed positioning with a semi-transparent backdrop.
80. Build a dropdown menu using relative and absolute positioning.
81. Create a badge on an icon using absolute positioning within a relative container.
82. Build a stacking context test — make element A appear above element B from a different parent.
83. Create a full-screen hero section using `position: absolute` and `inset: 0`.
84. Build a sticky sidebar that becomes fixed after scrolling past a threshold using `position: sticky`.
85. Create an image with a caption overlay using positioning and `z-index`.

### 15. Custom Properties & Functions

86. Define a color theme using CSS custom properties and apply it to a complete page.
87. Build a dark/light mode switcher by toggling CSS custom properties on the root element.
88. Create fluid typography using `clamp()` that scales between 1rem and 2.5rem.
89. Build a component that uses `min()` to set a responsive maximum width.
90. Create a spacing scale using CSS custom properties (`--space-sm`, `--space-md`, etc.).
91. Build a button component that uses `var()` fallbacks for theming.
92. Create a CSS-only color theme that inherits from a parent component using custom property cascading.
93. Use `calc()` to create a sidebar that is always 300px narrower than the container.
94. Build an aspect-ratio box using `aspect-ratio: 16 / 9` for responsive video embeds.
95. Create a grid with `auto-fit` columns using `minmax()` and `clamp()` for fully fluid layout.

---

## 🟠 Level 3: Professional (101 - 150)

### 16. Typography & Text

101. Create a responsive type scale where font sizes scale proportionally across breakpoints.
102. Build a pull quote with a large decorative quotation mark using `::before` pseudo-element.
103. Create a text truncation component that shows an ellipsis after one line.
104. Build a multi-line text clamp that shows exactly three lines then truncates with ellipsis.
105. Create a hero headline with mixed font weights within a single heading using `<span>`.
106. Style a drop cap on the first letter of a paragraph using `::first-letter`.
107. Build a word-by-word reveal animation using CSS custom properties and `animation-delay`.
108. Create a responsive vertical rhythm system using `line-height` and `margin` based on a base unit.
109. Implement `font-display: swap` in a `@font-face` declaration for a custom web font.
110. Create a variable font implementation that adjusts `font-weight` and `font-variation-settings` on hover.

### 17. Animations & Transitions

111. Build a CSS-only loading spinner using `@keyframes` and `border-radius`.
112. Create a skeleton loading screen using a shimmer animation.
113. Build a hamburger menu icon that morphs into an X when toggled using CSS transitions.
114. Create a CSS-only animated progress bar that fills from 0% to 100%.
115. Build a bouncing ball animation using `@keyframes` with `animation-timing-function: ease-in` and `ease-out`.
116. Create a card flip effect revealing a back face using `rotateY` and `backface-visibility`.
117. Build a staggered list animation where items fade and slide in with increasing delay.
118. Create a typewriter effect using `@keyframes` with `steps()` timing function and `overflow: hidden`.
119. Build a CSS parallax scrolling effect using `perspective` and `translateZ` on nested elements.
120. Create a hover effect on a button using `clip-path` that wipes a new background from left to right.
121. Build a pulsing notification badge using `@keyframes` with `transform: scale` and `opacity`.
122. Create a smooth page section reveal using `@keyframes` and `animation-fill-mode: both`.
123. Build a CSS-only accordion that expands and collapses using `max-height` transitions.
124. Create an infinite marquee text scroll animation using `@keyframes` and `transform: translateX`.
125. Build a morphing blob shape animation using `@keyframes` with `border-radius` percentage values.

### 18. Responsive Design Advanced

126. Build a responsive navigation that collapses into a hamburger menu on mobile using CSS only.
127. Create a responsive data table that converts to a card layout on small screens.
128. Build a fluid grid that transitions from 4 columns on desktop to 2 on tablet to 1 on mobile.
129. Create a responsive hero section with different background images for mobile and desktop using `@media`.
130. Build a responsive email-safe layout using table-based CSS (for HTML email compatibility).
131. Create a `prefers-reduced-motion` media query that disables all animations for users who prefer it.
132. Build an image that uses `srcset` and `<picture>` with matching CSS for art-directed responsive images.
133. Implement a container query that changes card layout based on the card's container width, not viewport.
134. Create a `prefers-color-scheme` based dark mode with CSS custom properties.
135. Build a print stylesheet that formats a resume or article for A4 paper with proper page breaks.

### 19. CSS Architecture

136. Refactor a flat CSS file into BEM naming conventions for a card component.
137. Build a design token system with CSS custom properties at three levels: global, alias, and component.
138. Create a utility-first CSS class set for spacing, typography, and color (inspired by Tailwind).
139. Organize a stylesheet using ITCSS layers (settings, tools, generic, elements, objects, components, utilities).
140. Build a CSS file that uses `@layer` to manage specificity across base, component, and utility layers.
141. Create a modular CSS architecture where each component has its own scoped custom properties.
142. Build a theme switcher that changes a complete component library appearance by modifying root variables.
143. Refactor an overspecified CSS selector chain to use lower-specificity alternatives without `!important`.
144. Create a CSS reset stylesheet that normalizes cross-browser differences while preserving useful defaults.
145. Build a component API using CSS custom properties that can be configured from parent scope.

### 20. Filters, Transforms & Effects

146. Build a frosted-glass card effect using `backdrop-filter: blur()` and a semi-transparent background.
147. Create an image gallery with a grayscale filter that transitions to full color on hover.
148. Build a perspective 3D card tilt effect that responds to mouse position using CSS custom properties updated by JavaScript.
149. Create a `clip-path` reveal animation that uncovers an image with a polygon wipe transition.
150. Build a duotone image effect using CSS `filter` and `mix-blend-mode`.

---

## 🔴 Level 4: Expert (151 - 200)

### 21. CSS Grid Advanced

151. Build a CSS Grid layout where nested grid items align to the parent grid tracks using `subgrid`.
152. Create a masonry-style layout using CSS Grid with `grid-template-rows: masonry` (progressive enhancement).
153. Build a complex editorial layout with overlapping grid items using explicit `grid-column` and `grid-row` placement.
154. Create a responsive holy grail layout that uses `grid-template-areas` and collapses gracefully on mobile.
155. Build a CSS Grid-based calendar where each day cell is placed by date using `grid-column` calculated from day-of-week.
156. Create a full-bleed layout where some sections break out of the content column using named grid lines.
157. Build a dashboard with resizable widget areas using CSS Grid and `resize: both` on grid cells.
158. Create a CSS Grid-based Gantt chart with fixed row headers and scrollable timeline columns.
159. Build a responsive image mosaic where images have different sizes following a predefined grid pattern.
160. Create a layout that uses both CSS Grid and Flexbox together, with Grid for macro layout and Flexbox for micro component alignment.

### 22. Container Queries & Modern Layout

161. Build a card component that switches from a vertical to a horizontal layout when its container exceeds 600px using `@container`.
162. Create a named container query that styles a widget differently based on whether it is in a sidebar or main column.
163. Build a responsive navigation component that uses container queries to show full labels or icon-only based on available width.
164. Create a component that uses `cqw` (container query width units) for fluid sizing relative to its container.
165. Build a product card that uses container queries to show or hide secondary information based on context.
166. Implement a design that uses `@container style()` queries to change appearance based on a CSS custom property value.
167. Create a fully responsive layout system using only container queries and no viewport media queries.
168. Build a typography scale that uses container query units (`cqi`, `cqb`) instead of viewport units for better component portability.
169. Create a layout that combines `@container` with CSS Grid to produce a truly context-aware responsive grid.
170. Build a sidebar widget component that progressively enhances its layout using container query breakpoints.

### 23. CSS Custom Properties Advanced

171. Build a component theming system where multiple themes are defined as custom property sets on data attributes.
172. Create a CSS custom property–driven animation by registering properties with `@property` and animating them.
173. Build a color system using `oklch` and relative color syntax to derive tints, shades, and harmonious palettes.
174. Create a type-safe custom property set using `@property` with `<length>`, `<color>`, and `<number>` syntax types.
175. Build a CSS toggle pattern using custom properties with `0`/`1` values to conditionally apply styles without JavaScript.
176. Create a design system with three levels of custom properties: primitive tokens, semantic tokens, and component tokens.
177. Build a spacing system using a modular scale formula implemented via `@property` and `calc()`.
178. Create a CSS custom property inheritance chain where a child component overrides only specific tokens.
179. Build a theming architecture where components declare their own `--component-*` fallback chain to global tokens.
180. Create a live-editable theme using custom properties that JavaScript updates on user input.

### 24. Accessibility & Performance

181. Audit a CSS file and refactor it to eliminate render-blocking rules using `@layer` and deferred loading.
182. Build a focus management system using `:focus-visible` that shows outlines for keyboard users but not mouse users.
183. Create a CSS-only skip navigation link that is visually hidden but appears on focus.
184. Build a color system that guarantees WCAG AA contrast ratios (4.5:1 for normal text, 3:1 for large) using `color-mix()`.
185. Implement `prefers-reduced-motion` across an entire animation library, replacing motion with fade-only alternatives.
186. Build a high-contrast mode using `@media (forced-colors: active)` that maintains usability with system color keywords.
187. Create a CSS containment strategy using `contain: layout paint` on widget sections to optimize rendering performance.
188. Build a `content-visibility: auto` implementation for a long list page with correct `contain-intrinsic-size` values.
189. Create a print stylesheet for a multi-page document with `break-before`, `break-after`, and `break-inside` controls.
190. Build a complete accessible form style system: focus styles, error states, disabled states, and success states using only CSS.

### 25. Modern CSS Features

191. Build a scroll-driven animation where a reading progress bar fills as the user scrolls down the article.
192. Create an element reveal effect using `animation-timeline: view()` that triggers when the element enters the viewport.
193. Build a popover component using the HTML `popover` attribute with CSS anchor positioning (`anchor-name`, `position-anchor`).
194. Create a `color-mix()`-based theming system that generates hover and active state colors from a single base color.
195. Build a CSS-only dark mode that uses `light-dark()` function for dual-value color declarations.
196. Implement a CSS `@scope` block that scopes component styles without Shadow DOM or BEM class naming.
197. Create a complete page transition effect using the View Transitions API triggered by CSS.
198. Build a native CSS nesting architecture for a component library where each component file uses nested rules.
199. Create a layout that uses `env(safe-area-inset-*)` to respect device notches and home indicator areas on iOS.
200. Build a complete modern CSS starter template that uses `@layer`, custom properties, logical properties, `clamp()`, container queries, and `@property` to demonstrate best practices in a single stylesheet.

---

### **You will find these programs in `style.css` in this directory.**

> [style.css](style.css)  
> [style.md](style.md)

Explanation aren't available yet. But soon will be available.

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
