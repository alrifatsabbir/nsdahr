# Tailwind CSS Questions and Answers

## 📖 Description

Tailwind CSS is a utility-first CSS framework that provides low-level utility classes to build custom designs directly in your HTML markup. Unlike component-based frameworks, Tailwind does not provide pre-designed components — instead, it gives you building blocks to compose your own designs.

- **Configuration File:** `tailwind.config.js`
- **Example File:** `tailwindcss.md`

---

## 🚀 How to Use Tailwind CSS?

Tailwind CSS can be used in multiple ways:

1. **CDN (for prototyping):** Add the CDN link directly in your HTML.
2. **CLI (recommended):** Install via npm and use the CLI to build your CSS.
3. **PostCSS Plugin:** Integrate with PostCSS in your build pipeline.

### How to Install Tailwind CSS via CLI:

```bash
npm install -D tailwindcss
npx tailwindcss init
```

Then add Tailwind directives to your CSS:
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

---

# Questions with Answers❓

## 🟢 Level 1: Basic (1 - 20)

> ### 1. What is Tailwind CSS?
>
> Tailwind CSS is a utility-first CSS framework that provides low-level utility classes you apply directly in your HTML markup to build custom designs. Unlike Bootstrap or Material UI, it does not ship with pre-built components — everything is composed from small, single-purpose utility classes.

> ### 2. What does "utility-first" mean in Tailwind CSS?
>
> Utility-first means that instead of writing custom CSS rules, you apply pre-defined single-purpose classes like `p-4`, `text-center`, or `bg-blue-500` directly to your HTML elements. This approach keeps styling co-located with markup and eliminates the need to invent class names for every element.

> ### 3. How do you add Tailwind to a project using CDN?
>
> Add the following `<script>` tag inside the `<head>` of your HTML file: `<script src="https://cdn.tailwindcss.com"></script>`. This is ideal for quick prototyping but is not recommended for production because it loads the full Tailwind library at runtime.

> ### 4. What is the purpose of `@tailwind base`, `@tailwind components`, and `@tailwind utilities`?
>
> `@tailwind base` injects Tailwind's base reset styles (Preflight). `@tailwind components` injects any component classes (including those added via plugins or `@layer components`). `@tailwind utilities` injects all the utility classes. These three directives are placed in your main CSS file so Tailwind can generate the final stylesheet.

> ### 5. How do you set the background color of an element to blue in Tailwind?
>
> Use the `bg-blue-500` class on your element: `<div class="bg-blue-500">`. Tailwind provides a full color palette with shades from `100` (lightest) to `900` (darkest), so you can also use `bg-blue-200` for a lighter shade or `bg-blue-800` for a darker one.

> ### 6. How do you change the text color to white in Tailwind?
>
> Apply the `text-white` class to your element: `<p class="text-white">`. Tailwind maps color names to CSS `color` properties, and `text-white` corresponds to `color: #ffffff`.

> ### 7. What class makes text bold in Tailwind?
>
> The `font-bold` class applies `font-weight: 700` to make text bold. Other font-weight utilities include `font-thin` (100), `font-light` (300), `font-normal` (400), `font-semibold` (600), and `font-extrabold` (800).

> ### 8. What class centers text in Tailwind?
>
> The `text-center` class applies `text-align: center`. Similarly, `text-left`, `text-right`, and `text-justify` are used for other text alignment options.

> ### 9. How do you add padding in Tailwind?
>
> Use padding utilities like `p-4` for all sides, `px-4` for horizontal (left/right), `py-4` for vertical (top/bottom), `pt-4` for top, `pr-4` for right, `pb-4` for bottom, or `pl-4` for left. The number corresponds to a spacing scale where `1` = `0.25rem`.

> ### 10. How do you add margin in Tailwind?
>
> Use margin utilities like `m-4` for all sides, `mx-4` for horizontal, `my-4` for vertical, `mt-4` for top, `mr-4` for right, `mb-4` for bottom, or `ml-4` for left. Use `mx-auto` to horizontally center a block element with a fixed width.

> ### 11. What is the class for making a font size large (`text-lg`)?
>
> The `text-lg` class sets the font size to `1.125rem` (18px) with a line height of `1.75rem`. Tailwind's font size scale includes `text-xs`, `text-sm`, `text-base`, `text-lg`, `text-xl`, `text-2xl` up to `text-9xl`.

> ### 12. How do you make an element full width in Tailwind?
>
> Apply the `w-full` class, which sets `width: 100%`. For full viewport width, use `w-screen`. You can also use fractional widths like `w-1/2` (50%) or `w-3/4` (75%).

> ### 13. What class makes a div a flex container?
>
> The `flex` class applies `display: flex` to an element, making it a flex container and enabling all flexbox properties on its children. Use `inline-flex` if you need an inline flex container.

> ### 14. What class centers flex items vertically?
>
> The `items-center` class applies `align-items: center`, which centers flex children along the cross axis (vertically in a row layout). Other options are `items-start`, `items-end`, `items-baseline`, and `items-stretch`.

> ### 15. What class centers flex items horizontally?
>
> The `justify-center` class applies `justify-content: center`, which centers flex children along the main axis (horizontally in a row layout). Other options include `justify-start`, `justify-end`, `justify-between`, `justify-around`, and `justify-evenly`.

> ### 16. How do you hide an element in Tailwind?
>
> Use the `hidden` class, which applies `display: none`, removing the element from the document flow. If you want to keep the element in the flow but make it invisible, use `invisible` (which applies `visibility: hidden`).

> ### 17. What class makes text uppercase?
>
> The `uppercase` class applies `text-transform: uppercase`. Similarly, `lowercase` applies lowercase transformation, `capitalize` capitalizes the first letter of each word, and `normal-case` resets the transformation.

> ### 18. How do you add a border to an element?
>
> Use the `border` class to add a 1px solid border using the current border color. Use `border-2` for a 2px border, `border-gray-300` to set the border color, and combine them: `<div class="border border-gray-300">`. Specific sides can be targeted with `border-t`, `border-r`, `border-b`, `border-l`.

> ### 19. What class rounds the corners of an element?
>
> The `rounded` class applies a slight border-radius (`0.25rem`). For more rounding use `rounded-md`, `rounded-lg`, `rounded-xl`, `rounded-2xl`, or `rounded-full` (for a circle/pill shape). Individual corners can be targeted: `rounded-tl-lg`, `rounded-br-xl`, etc.

> ### 20. How do you add a shadow to an element?
>
> Use shadow utilities like `shadow-sm`, `shadow`, `shadow-md`, `shadow-lg`, `shadow-xl`, or `shadow-2xl`. For example, `<div class="shadow-lg">` adds a large drop shadow. Use `shadow-none` to remove a shadow.


## 🟡 Level 2: Easy (21 - 40)

> ### 21. What are responsive prefixes in Tailwind CSS?
>
> Responsive prefixes (`sm:`, `md:`, `lg:`, `xl:`, `2xl:`) let you apply utilities only at specific breakpoints. For example, `md:text-lg` makes the text large only on medium screens and above. Tailwind uses a mobile-first approach, so unprefixed classes apply at all screen sizes.

> ### 22. What are the default breakpoints in Tailwind CSS?
>
> The default breakpoints are: `sm` (640px), `md` (768px), `lg` (1024px), `xl` (1280px), and `2xl` (1536px). All breakpoints use `min-width` media queries, meaning `md:` means "768px and above."

> ### 23. How do you apply a style only on hover in Tailwind?
>
> Prefix any utility with `hover:` to apply it on hover. For example, `hover:bg-blue-700` changes the background to a darker blue when hovered. You can chain multiple hover utilities: `class="bg-blue-500 hover:bg-blue-700 text-white hover:text-gray-100"`.

> ### 24. How do you apply a style on focus in Tailwind?
>
> Prefix any utility with `focus:` to apply it when the element is focused. For example, `focus:outline-none focus:ring-2 focus:ring-blue-500` removes the default outline and adds a custom focus ring — a common pattern for accessible input styling.

> ### 25. What is the Tailwind spacing scale?
>
> Tailwind uses a base-4 spacing scale where each unit equals `0.25rem` (4px). So `p-1` = 4px, `p-2` = 8px, `p-4` = 16px, `p-8` = 32px, and `p-16` = 64px. This scale applies to padding, margin, width, height, gap, and other spacing utilities.

> ### 26. How do you use flexbox to space items evenly in Tailwind?
>
> Use `justify-between` to place items with equal space between them (no space on the edges), `justify-around` for equal space around each item, or `justify-evenly` for equal space between and around all items. Example: `<div class="flex justify-between">`.

> ### 27. How do you create a CSS Grid layout in Tailwind?
>
> Use `grid` to enable grid display and `grid-cols-{n}` to define the number of columns. For example, `<div class="grid grid-cols-3 gap-4">` creates a 3-column grid with a 1rem gap. Use `col-span-2` on a child to make it span two columns.

> ### 28. How do you set a fixed width and height in Tailwind?
>
> Use `w-{size}` and `h-{size}` classes. Tailwind provides fixed values like `w-8` (2rem), `w-16` (4rem), `w-64` (16rem), as well as percentage values like `w-1/2` and viewport values like `w-screen` and `h-screen`. For example, `<div class="w-32 h-32">` creates a 128px square.

> ### 29. How do you control opacity in Tailwind?
>
> Use `opacity-{value}` where value is 0, 5, 10, 20, 25, 50, 75, 90, 95, or 100. For example, `opacity-50` makes an element 50% transparent. You can also control color opacity with `/` notation: `bg-blue-500/75` sets blue background at 75% opacity.

> ### 30. How do you set z-index in Tailwind?
>
> Use `z-{value}` classes such as `z-0`, `z-10`, `z-20`, `z-30`, `z-40`, `z-50`, or `z-auto`. For example, a dropdown menu overlapping other content would use `z-50`. Custom z-index values can be added in `tailwind.config.js`.

> ### 31. How do you change the display of an element in Tailwind?
>
> Use display utilities: `block`, `inline-block`, `inline`, `flex`, `inline-flex`, `grid`, `inline-grid`, `table`, `hidden` (display: none). For example, switching a list from `block` to `flex` changes its layout behavior entirely.

> ### 32. How do you add a transition in Tailwind?
>
> Use `transition` to enable transitions on common properties, or `transition-colors`, `transition-opacity`, `transition-transform` for specific ones. Control duration with `duration-300` (300ms) and easing with `ease-in`, `ease-out`, or `ease-in-out`. Example: `class="transition-colors duration-200 hover:bg-blue-700"`.

> ### 33. How do you change font family in Tailwind?
>
> Use `font-sans` (default system sans-serif stack), `font-serif` (Georgia/serif stack), or `font-mono` (monospace stack). Custom fonts can be added in `tailwind.config.js` under `theme.fontFamily`.

> ### 34. How do you control line height (leading) in Tailwind?
>
> Use `leading-{value}` classes such as `leading-none` (1), `leading-tight` (1.25), `leading-snug` (1.375), `leading-normal` (1.5), `leading-relaxed` (1.625), and `leading-loose` (2). Example: `<p class="leading-relaxed">` improves readability for body text.

> ### 35. How do you control letter spacing (tracking) in Tailwind?
>
> Use `tracking-{value}` classes: `tracking-tighter`, `tracking-tight`, `tracking-normal`, `tracking-wide`, `tracking-wider`, `tracking-widest`. For example, `tracking-widest` is often used for uppercase labels or button text to improve legibility.

> ### 36. How do you make a flex item grow to fill available space?
>
> Use the `flex-1` class, which applies `flex: 1 1 0%`, allowing the item to grow and shrink to fill available space. Use `flex-auto` (`flex: 1 1 auto`) to grow based on the item's intrinsic size, or `flex-none` to prevent growing and shrinking entirely.

> ### 37. How do you control the flex direction in Tailwind?
>
> Use `flex-row` (default, left to right), `flex-row-reverse`, `flex-col` (top to bottom), or `flex-col-reverse`. For example, `<div class="flex flex-col md:flex-row">` stacks items vertically on mobile and horizontally on medium screens and above.

> ### 38. How do you control text decoration in Tailwind?
>
> Use `underline`, `line-through`, `overline`, or `no-underline`. You can also style the decoration with `decoration-blue-500` for color, `decoration-2` for thickness, and `decoration-dashed` for style. Example: `class="underline decoration-blue-500 decoration-2"`.

> ### 39. How do you use the `ring` utility in Tailwind?
>
> The `ring` utilities add box-shadow outlines. `ring-2` adds a 2px ring, `ring-blue-500` sets the ring color, and `ring-offset-2` adds space between the element and the ring. This is commonly used for custom focus indicators: `focus:ring-2 focus:ring-blue-500 focus:ring-offset-2`.

> ### 40. How do you use `gap` in Tailwind for grid and flex layouts?
>
> Use `gap-{n}` to add spacing between grid or flex children: `gap-4` adds 1rem spacing in both directions. Use `gap-x-4` for column gaps only or `gap-y-4` for row gaps only. Example: `<div class="grid grid-cols-2 gap-6">` creates a 2-column grid with 1.5rem gaps.


## 🟠 Level 3: Medium (41 - 60)

> ### 41. What are arbitrary values in Tailwind CSS?
>
> Arbitrary values allow you to use any CSS value by wrapping it in square brackets. For example, `w-[350px]` sets a width of exactly 350px, `bg-[#1da1f2]` sets a specific hex color, and `top-[117px]` sets an exact top offset. This bridges the gap between utilities and truly custom styles without leaving HTML.

> ### 42. What is the `@apply` directive in Tailwind?
>
> `@apply` lets you compose Tailwind utilities into a custom CSS class inside a stylesheet. For example, `.btn { @apply px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700; }`. This is useful when you need to reuse a set of utilities across many elements, though Tailwind recommends extracting components instead.

> ### 43. What is `tailwind.config.js` and what can you configure in it?
>
> `tailwind.config.js` is Tailwind's configuration file where you customize the framework. You can extend or override the default theme (colors, spacing, fonts, breakpoints), configure the `content` paths for purging unused styles, add plugins, and set `darkMode` strategy. Run `npx tailwindcss init` to generate it.

> ### 44. How do you enable dark mode in Tailwind CSS?
>
> Set `darkMode: 'class'` in `tailwind.config.js` to enable class-based dark mode. Then add the `dark` class to the `<html>` element to activate dark styles. Use `dark:` prefix on utilities: `class="bg-white dark:bg-gray-900 text-black dark:text-white"`. Using `'media'` instead respects the user's OS preference.

> ### 45. What is JIT (Just-In-Time) mode in Tailwind CSS?
>
> JIT mode generates styles on-demand as you write your HTML instead of purging an enormous pre-generated stylesheet. This results in faster build times, smaller CSS output, and unlocks features like arbitrary values and variant stacking. JIT has been the default engine since Tailwind CSS v3.

> ### 46. How do you use CSS Grid template areas in Tailwind?
>
> Tailwind v3 supports `grid-cols-[...]` with arbitrary values. For named template areas, you use arbitrary values: `grid-areas-['header_header''sidebar_main']` using the `@savvywombat/tailwindcss-grid-areas` plugin, or define custom utilities in `@layer utilities`. Standard Tailwind covers `grid-cols`, `grid-rows`, `col-span`, `row-span`, `col-start`, and `col-end`.

> ### 47. How do you style form inputs in Tailwind CSS?
>
> Apply utilities directly to form elements. Example: `<input class="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full">`. The official `@tailwindcss/forms` plugin provides a sensible base reset for form elements, making them easier to style with utilities.

> ### 48. What are the `ring` utilities used for in forms?
>
> Ring utilities (`ring`, `ring-2`, `ring-blue-500`, `ring-offset-2`) create box-shadow-based outlines that are visible on all sides and don't affect layout. They are the recommended way to create accessible focus indicators in Tailwind, replacing the default browser outline while maintaining accessibility.

> ### 49. What are `group` and `group-hover` modifiers in Tailwind?
>
> The `group` class is applied to a parent element, and `group-hover:` on a child applies styles when the parent is hovered. Example: `<div class="group"><span class="group-hover:text-blue-500">Text</span></div>`. This is useful for card hover effects, icon color changes, and showing/hiding elements on parent hover.

> ### 50. What is the `peer` modifier in Tailwind CSS?
>
> The `peer` class is applied to a sibling element (typically an input), and `peer-checked:`, `peer-focus:`, or `peer-invalid:` on a subsequent sibling applies styles based on the first element's state. This enables pure-CSS custom toggles, floating labels, and validation styling: `<input class="peer"><label class="peer-focus:text-blue-500">`.

> ### 51. How do you use `@layer` in Tailwind CSS?
>
> The `@layer` directive lets you add custom styles to Tailwind's three layers: `base` (for element resets), `components` (for reusable component classes), and `utilities` (for single-purpose utilities). Styles added with `@layer` are automatically included in Tailwind's purging process and respect the correct specificity order.

> ### 52. How do you define custom colors in `tailwind.config.js`?
>
> Extend the theme in your config: `theme: { extend: { colors: { brand: { light: '#3fbaeb', DEFAULT: '#0fa9e6', dark: '#0c87b8' } } } }`. Then use them as `bg-brand`, `bg-brand-light`, or `text-brand-dark` in your HTML. Use `DEFAULT` as the key for the base shade.

> ### 53. How do you customize the spacing scale in Tailwind?
>
> Add custom spacing values in `tailwind.config.js` under `theme.extend.spacing`: `{ extend: { spacing: { '128': '32rem', '144': '36rem' } } }`. These values then become available as `w-128`, `p-128`, `m-144`, etc., across all spacing-related utilities.

> ### 54. How do you use the `container` class in Tailwind?
>
> The `container` class sets a `max-width` that matches the current breakpoint and adds `width: 100%`. To center the container and add horizontal padding, configure it in `tailwind.config.js`: `theme: { container: { center: true, padding: '2rem' } }`. By default, `container` is not centered.

> ### 55. How do you add custom animations in Tailwind?
>
> Define keyframes and animation names in `tailwind.config.js` under `theme.extend.keyframes` and `theme.extend.animation`. Example: `keyframes: { wiggle: { '0%, 100%': { transform: 'rotate(-3deg)' }, '50%': { transform: 'rotate(3deg)' } } }, animation: { wiggle: 'wiggle 1s ease-in-out infinite' }`. Then use `animate-wiggle` in HTML.

> ### 56. What are the built-in animation utilities in Tailwind?
>
> Tailwind ships with `animate-none`, `animate-spin` (full rotation loop), `animate-ping` (scale + fade for badges/notifications), `animate-pulse` (opacity fade for skeleton loaders), and `animate-bounce` (vertical bounce). All can be customized or extended in the config.

> ### 57. How do you control overflow in Tailwind?
>
> Use `overflow-hidden`, `overflow-auto`, `overflow-scroll`, `overflow-visible`, `overflow-x-hidden`, `overflow-y-auto`, etc. A very common pattern is `overflow-hidden` on a container with `rounded-lg` to clip child images to the rounded corners.

> ### 58. How do you handle multi-line text truncation in Tailwind?
>
> For single-line truncation, use `truncate` (which applies `overflow: hidden`, `text-overflow: ellipsis`, `white-space: nowrap`). For multi-line clamping, use the `line-clamp-{n}` utility (from the `@tailwindcss/line-clamp` plugin, now built into Tailwind v3.3+): `class="line-clamp-3"` truncates to 3 lines.

> ### 59. What is the `divide` utility in Tailwind?
>
> The `divide` utilities add borders between child elements automatically. `divide-y` adds a horizontal border between stacked children, `divide-x` adds a vertical border between side-by-side children. Control color with `divide-gray-200` and width with `divide-y-2`. This is cleaner than adding border classes to each child.

> ### 60. How do you use `aspect-ratio` in Tailwind?
>
> Use `aspect-video` (16:9), `aspect-square` (1:1), or arbitrary values like `aspect-[4/3]`. For example, `<div class="aspect-video w-full"><iframe class="w-full h-full">` creates a responsive 16:9 video embed. This utility was introduced in Tailwind CSS v3 and is now built-in.


## 🔴 Level 4: Hard (61 - 80)

> ### 61. How do you write a custom Tailwind plugin?
>
> Create a plugin using the `plugin` function from `tailwindcss/plugin`. Export it from `tailwind.config.js` in the `plugins` array. Inside the plugin function, use helpers like `addUtilities`, `addComponents`, `addBase`, and `matchUtilities` to register new CSS. Example: `plugin(({ addUtilities }) => { addUtilities({ '.skew-10deg': { transform: 'skewY(-10deg)' } }) })`.

> ### 62. What is the difference between component extraction and utility composition?
>
> Utility composition applies Tailwind classes directly in HTML — each element carries its full set of classes. Component extraction uses `@apply` to group utilities into a reusable CSS class (`.btn { @apply px-4 py-2 ... }`). Tailwind recommends composition via JavaScript components (React, Vue) over `@apply` because it keeps a single source of truth and avoids CSS specificity issues.

> ### 63. How does Tailwind CSS purge (remove) unused styles?
>
> Tailwind scans files listed in the `content` array in `tailwind.config.js` for class name strings and only generates CSS for classes it finds. Example: `content: ['./src/**/*.{html,js,jsx,tsx}']`. It does string matching, not execution, so dynamically constructed class names (e.g., `` `text-${color}-500` ``) may be purged — always use complete class names.

> ### 64. How do you extend the Tailwind theme without replacing defaults?
>
> Place your customizations inside `theme.extend` in `tailwind.config.js`. Anything in `extend` is merged with the defaults, while anything placed directly inside `theme` (outside `extend`) replaces the defaults. For example, `theme.extend.colors` adds new colors while keeping all default colors intact.

> ### 65. How do you add custom font sizes in Tailwind?
>
> Under `theme.extend.fontSize` in the config, provide a key and either a single value or a tuple of `[fontSize, lineHeight]` or `[fontSize, { lineHeight, letterSpacing, fontWeight }]`. Example: `fontSize: { 'xxs': ['0.625rem', { lineHeight: '0.875rem' }] }`. Use it as `text-xxs` in HTML.

> ### 66. What is the `@layer utilities` directive used for?
>
> `@layer utilities` lets you add custom single-purpose utility classes that participate in the purge process and respect Tailwind's layer ordering. Any classes defined here are properly tree-shaken in production builds. Example: `.content-auto { content-visibility: auto; }` placed inside `@layer utilities` is only included if used.

> ### 67. How do you use the `typography` plugin (`@tailwindcss/typography`)?
>
> Install `@tailwindcss/typography` and add it to the `plugins` array in `tailwind.config.js`. Then apply the `prose` class to any container of rich HTML content (blog posts, markdown output) to get beautiful typographic defaults: `<article class="prose lg:prose-xl">`. You can customize the prose with modifier classes like `prose-slate` or `prose-invert` for dark mode.

> ### 68. How does Tailwind handle scroll behavior?
>
> Tailwind provides `scroll-smooth` for smooth scrolling (`scroll-behavior: smooth`) and `scroll-auto` for the default instant scroll. For scroll snap, use `snap-x`, `snap-y`, `snap-mandatory`, `snap-proximity` on the container, and `snap-start`, `snap-center`, `snap-end` on children. Example: `<div class="overflow-x-scroll snap-x snap-mandatory flex">`.

> ### 69. How do you use `container queries` in Tailwind CSS?
>
> The official `@tailwindcss/container-queries` plugin adds support for CSS container queries. After installing and registering it, use `@container` on a parent and `@sm:`, `@md:`, `@lg:` prefixes on children to apply styles based on the parent container's size rather than the viewport — essential for truly reusable components.

> ### 70. How do you customize breakpoints in Tailwind?
>
> Override or extend `theme.screens` in `tailwind.config.js`. To add a new breakpoint: `extend: { screens: { 'xs': '475px', '3xl': '1800px' } }`. To change existing ones, place them directly in `theme.screens`. You can also use `max-width` queries by defining an object: `{ 'max-lg': { max: '1023px' } }`.

> ### 71. How do you apply multiple variants (stacking variants) in Tailwind?
>
> Tailwind supports stacking variants by chaining them with colons. For example, `dark:hover:bg-gray-700` applies the background only when dark mode is active AND the element is hovered. `sm:focus:ring-2` applies the ring only on small screens when focused. JIT mode makes stacking unlimited.

> ### 72. How do you use the `@tailwindcss/forms` plugin?
>
> Install the plugin and register it in the `plugins` array. It provides a clean, opinionated base reset for form elements (`input`, `select`, `textarea`, `checkbox`, `radio`, etc.) that makes them consistent across browsers and easy to style with utilities. You can configure it with `strategy: 'class'` to opt-in with a `.form-input` class instead of globally.

> ### 73. What are `arbitrary variants` in Tailwind CSS?
>
> Arbitrary variants let you write any CSS selector as a modifier using bracket syntax. For example, `[&:nth-child(3)]:opacity-50` applies opacity to the 3rd child, `[&>*]:text-gray-500` targets all direct children, and `[@media(hover:hover)]:hover:underline` targets devices that support hover. Available since Tailwind CSS v3.1.

> ### 74. How do you use the `aspect-ratio` plugin vs built-in utility?
>
> Before Tailwind v3, you needed the `@tailwindcss/aspect-ratio` plugin and used it with a wrapper div pattern (`aspect-w-16 aspect-h-9`). Since Tailwind v3, `aspect-ratio` is built-in and you simply use `aspect-video`, `aspect-square`, or `aspect-[16/9]` directly on the element without a wrapper.

> ### 75. How do you implement print styles in Tailwind?
>
> Use the `print:` variant to apply styles only when printing. Example: `class="print:hidden"` hides an element in print, `class="hidden print:block"` shows it only when printing. This uses the `@media print` CSS media query under the hood and is available in Tailwind v3.

> ### 76. What is `safelist` in `tailwind.config.js`?
>
> The `safelist` option forces Tailwind to always include specific classes in the output, even if it doesn't find them in the content files. This is useful for dynamically generated class names. It accepts strings, patterns, and objects: `safelist: ['bg-red-500', { pattern: /bg-(red|green|blue)-(100|200|300)/, variants: ['hover', 'focus'] }]`.

> ### 77. How do you add CSS variables (custom properties) in Tailwind?
>
> Define CSS variables in `@layer base` and reference them in the Tailwind config. Example in CSS: `:root { --color-primary: 59 130 246; }`, then in config: `colors: { primary: 'rgb(var(--color-primary) / <alpha-value>)' }`. The `<alpha-value>` placeholder allows Tailwind's color opacity modifier (`bg-primary/50`) to work correctly.

> ### 78. What is the difference between `text-opacity` and color opacity modifier?
>
> The old `text-opacity-50` utility uses a CSS variable approach and requires `text-color` and `text-opacity` together. The modern approach (Tailwind v3) uses the `/` modifier directly on the color: `text-blue-500/50` — this is cleaner, more composable, and works for background, text, border, ring, and shadow colors.

> ### 79. How do you use `will-change` in Tailwind CSS?
>
> Use `will-change-auto`, `will-change-scroll`, `will-change-contents`, or `will-change-transform` to hint to the browser about which properties will change, enabling it to optimize rendering. Use `will-change-transform` on elements that will be animated with transforms (like modals or dropdowns), but apply it sparingly as it consumes GPU memory.

> ### 80. How do you create a responsive navigation using Tailwind?
>
> Combine responsive prefixes with flex and hidden utilities: the desktop nav is `hidden lg:flex`, and a hamburger icon is `lg:hidden`. The mobile menu opens via JavaScript toggling a `hidden` class. Use `fixed inset-0 z-50` for full-screen overlays, `transition-transform` for slide-in animations, and `space-x-6` for horizontal link spacing on desktop.


## ⚫ Level 5: Expert (81 - 100)

> ### 81. What are design tokens and how do Tailwind's config values function as design tokens?
>
> Design tokens are named values that represent design decisions (colors, spacing, typography, shadows). In Tailwind, `tailwind.config.js` acts as a centralized token registry — `colors.brand.primary`, `spacing.128`, and `fontSize.xs` are all design tokens. By extending the config, teams ensure every part of the UI uses the same values, enabling consistent, scalable design systems.

> ### 82. How do you optimize Tailwind CSS for production?
>
> Ensure your `content` paths in `tailwind.config.js` correctly cover all files that use Tailwind classes. Run the Tailwind CLI with `--minify` or use `cssnano` via PostCSS in your build pipeline. Avoid safelisting unless necessary. In Next.js, Vite, or CRA, Tailwind's PostCSS integration handles purging automatically when `NODE_ENV=production`.

> ### 83. What are the major changes introduced in Tailwind CSS v4?
>
> Tailwind v4 (alpha/beta) introduces a complete rewrite with a new high-performance Rust-based engine (Oxide), CSS-first configuration (no more `tailwind.config.js` required — configure via CSS using `@theme`), automatic content detection, a built-in import system, and composable variants. It also updates the default color palette and drops IE11 support officially.

> ### 84. How do you configure PostCSS for Tailwind CSS?
>
> Create a `postcss.config.js` (or `.cjs`) file: `module.exports = { plugins: { tailwindcss: {}, autoprefixer: {} } }`. Tailwind runs first as a PostCSS plugin to generate utilities, then Autoprefixer adds vendor prefixes. In v4, Tailwind can be used as a Vite plugin or standalone without PostCSS: `import tailwindcss from '@tailwindcss/vite'`.

> ### 85. How do you use Tailwind CSS with CSS-in-JS libraries?
>
> Tailwind is fundamentally a CSS generator, so it works alongside CSS-in-JS libraries (Emotion, styled-components) rather than replacing them. Use Tailwind for layout and structural utilities, and CSS-in-JS for truly dynamic styles that depend on JavaScript runtime values. Libraries like `twin.macro` let you write Tailwind classes inside template literals and convert them to Emotion/styled-components styles.

> ### 86. How does Headless UI integrate with Tailwind CSS?
>
> Headless UI (by the Tailwind Labs team) provides unstyled, fully accessible UI components (Dialog, Menu, Transition, etc.) for React and Vue that you style entirely with Tailwind. The components expose state via render props or component props that you map to Tailwind classes. Example: `<Menu.Item>{({ active }) => <button className={active ? 'bg-blue-500 text-white' : ''}>...`

> ### 87. How do you create custom variants in Tailwind CSS?
>
> In Tailwind v3, use the `addVariant` helper in a plugin: `plugin(({ addVariant }) => { addVariant('hocus', ['&:hover', '&:focus']); addVariant('not-first', '&:not(:first-child)') })`. In v4, custom variants are defined in CSS: `@variant hocus (&:hover, &:focus)`. The new variant is then available as `hocus:text-blue-500` in HTML.

> ### 88. What are responsive design best practices with Tailwind CSS?
>
> Use mobile-first approach: write base styles for mobile and add breakpoint prefixes for larger screens. Favor `flex` and `grid` for layouts. Use `container` with `mx-auto` for centered content. Leverage `gap` over margin for grid/flex spacing. Test at every breakpoint using browser devtools. Avoid fixed pixel widths — prefer fractional, percentage, or viewport-based widths.

> ### 89. What accessibility utilities does Tailwind provide?
>
> Tailwind includes `sr-only` (visually hidden but accessible to screen readers: `position: absolute; width: 1px; height: 1px; overflow: hidden; ...`) and `not-sr-only` (reverses it). Use `focus:ring` utilities for visible focus indicators. The `motion-reduce:` variant respects `prefers-reduced-motion`: `class="animate-bounce motion-reduce:animate-none"`. Always use semantic HTML alongside Tailwind utilities.

> ### 90. How do you implement a design system with Tailwind CSS?
>
> Centralize all design decisions in `tailwind.config.js` — define brand colors, type scales, spacing, shadows, and border radii. Use `@layer components` for reusable component classes (`.btn-primary`, `.card`, `.badge`). Create a style guide page that documents all tokens and components. Use TypeScript with `tailwind-config-viewer` or Storybook to document and preview the system.

> ### 91. How do you handle Tailwind CSS in a monorepo?
>
> Create a shared Tailwind config package and import it in each app's config: `const sharedConfig = require('@repo/tailwind-config'); module.exports = { ...sharedConfig, content: ['./src/**/*.{tsx,ts}', ...sharedConfig.content] }`. Each app extends the shared config and only adds its own content paths. This ensures consistent tokens across all packages.

> ### 92. What is the `important` configuration option in Tailwind?
>
> Setting `important: true` in `tailwind.config.js` adds `!important` to all utility class declarations, which helps when Tailwind utilities need to override third-party CSS with high specificity. Alternatively, use `important: '#app'` (selector strategy) to scope importance to a specific root element, avoiding global `!important` side effects.

> ### 93. How do you use Tailwind CSS with React and TypeScript?
>
> Install Tailwind via CLI or PostCSS. Use `clsx` or `classnames` libraries for conditional class merging: `className={clsx('px-4 py-2', isActive && 'bg-blue-500', isDisabled && 'opacity-50')}`. For component variants, use `cva` (class-variance-authority): `const button = cva('px-4 py-2 rounded', { variants: { intent: { primary: 'bg-blue-500', secondary: 'bg-gray-200' } } })`.

> ### 94. What is `tailwind-merge` and why is it useful?
>
> `tailwind-merge` (`twMerge`) resolves conflicts when merging Tailwind class strings — if you pass both `p-4` and `p-8`, it keeps only `p-8`. Without it, the last class in the HTML string might not win because CSS specificity rules apply. Combine it with `clsx` using a utility function: `export function cn(...inputs) { return twMerge(clsx(inputs)); }`.

> ### 95. How does Tailwind's JIT engine handle dynamic class names?
>
> JIT scans source files as static strings — it does not execute code. Therefore, dynamically constructed class names like `` `bg-${color}-500` `` are not detected and will be purged. The solution is to use complete class name strings in your data or map: `const colors = { red: 'bg-red-500', blue: 'bg-blue-500' }`. Always ensure the full class name appears as a literal string somewhere in your content.

> ### 96. How do you implement a multi-theme system with Tailwind?
>
> Use CSS custom properties (variables) for theme tokens and swap them per theme class on the root element. Define variable sets in `@layer base` for each theme: `.theme-ocean { --color-primary: #0ea5e9; }`. Reference them in the Tailwind config via `rgb(var(--color-primary) / <alpha-value>)`. Switching themes is then as simple as toggling a class on `<html>` or `<body>`.

> ### 97. What performance considerations exist when using Tailwind at scale?
>
> Ensure `content` paths are precise to minimize scanning time. Avoid overly broad patterns like `'./**/*'`. Don't use `safelist` excessively. In CI/CD, cache the Tailwind build artifacts. Use PurgeCSS metrics to verify the final CSS bundle size. With JIT, final CSS in production is typically only 5–20KB. Monitor for class explosion in large component libraries by using consistent naming conventions.

> ### 98. How do you integrate Tailwind with Storybook?
>
> Import your main CSS file (which contains the Tailwind directives) in `.storybook/preview.js`: `import '../src/styles/globals.css'`. Ensure your Storybook build process runs PostCSS so Tailwind directives are processed. For Storybook v7+, use `@storybook/addon-styling` which handles Tailwind configuration automatically. Set up the Storybook `viewport` addon to test responsive utilities.

> ### 99. How do you test Tailwind CSS styles?
>
> Use visual regression testing tools like Chromatic, Percy, or Playwright screenshots to catch style regressions. For unit testing component class logic, use `jest` with `@testing-library/react` and assert rendered class names. Use `tailwind-config-viewer` to visually verify your config. Linting tools like `eslint-plugin-tailwindcss` enforce class ordering and catch unknown classes.

> ### 100. How do you migrate from Tailwind CSS v2 to v3?
>
> Key changes: JIT is now the default (remove `mode: 'jit'`). Replace `purge` with `content` in config. `ring` now uses `ring-3` syntax (was `ring-DEFAULT`). Color opacity uses `/` modifier (`bg-red-500/50`) instead of `bg-opacity-50`. The `overflow-ellipsis` and `overflow-clip` classes were renamed to `text-ellipsis` and `text-clip`. Run the official `npx tailwindcss upgrade` codemods to automate the migration.

---

# 📝 Tailwind CSS Practice Questions (All 200 Items)

## 🟢 Level 1: Beginner (1 - 50)

### 1. Background & Colors

1. Create a `div` with a blue background using `bg-blue-500`.
2. Create a card with a gradient background using `bg-gradient-to-r from-purple-500 to-pink-500`.
3. Style a button with a green background (`bg-green-600`) and white text (`text-white`).
4. Create a hero section with a dark background (`bg-gray-900`) and light text (`text-gray-100`).
5. Build a badge with a red background (`bg-red-500`) and white text, fully rounded with `rounded-full`.

### 2. Typography

6. Create a heading with `text-4xl font-bold text-gray-900`.
7. Style a paragraph with `text-base text-gray-600 leading-relaxed`.
8. Create a label with `text-xs font-semibold uppercase tracking-widest text-gray-500`.
9. Build a blockquote styled with `text-lg italic text-gray-700 border-l-4 border-blue-500 pl-4`.
10. Style a link with `text-blue-600 hover:text-blue-800 underline` for hover and default states.

### 3. Spacing (padding/margin)

11. Create a card with `p-6` padding on all sides.
12. Build a section with `py-16 px-4` for vertical and horizontal padding.
13. Add `mb-4` bottom margin to each item in a vertical list.
14. Create a centered container with `mx-auto max-w-4xl px-4`.
15. Build a button with `px-6 py-3` horizontal and vertical padding.

### 4. Borders & Shadows

16. Create an input field with `border border-gray-300 rounded-md` styling.
17. Build a card with `shadow-lg rounded-xl border border-gray-100`.
18. Style a button with `border-2 border-blue-600 text-blue-600 rounded-lg` (outlined button).
19. Create an image container with `ring-4 ring-blue-500 ring-offset-2 rounded-full`.
20. Build a divider using `border-t border-gray-200 my-8`.

### 5. Display & Flexbox

21. Create a horizontal navigation bar using `flex items-center space-x-6`.
22. Build a centered hero section using `flex flex-col items-center justify-center min-h-screen`.
23. Create a split layout with two columns using `flex gap-8` on the parent.
24. Style a card footer with `flex items-center justify-between` for left/right content.
25. Build a flex row that wraps on small screens using `flex flex-wrap gap-4`.

### 6. Grid Basics

26. Create a 3-column image gallery using `grid grid-cols-3 gap-4`.
27. Build a responsive 2-column layout that becomes 1 column on mobile: `grid grid-cols-1 md:grid-cols-2 gap-6`.
28. Create a feature section with `grid grid-cols-3 gap-8` containing 3 feature cards.
29. Build a dashboard grid with `grid grid-cols-4 gap-4` for stats cards.
30. Create a full-width item inside a 3-column grid using `col-span-3`.

### 7. Sizing (width/height)

31. Create a square avatar using `w-12 h-12 rounded-full`.
32. Build a full-viewport hero section with `w-full min-h-screen`.
33. Create a sidebar with a fixed width using `w-64 h-full`.
34. Style a progress bar container with `w-full h-2 bg-gray-200 rounded-full`.
35. Build a modal with `w-full max-w-md` to limit its maximum width.

### 8. States (hover/focus)

36. Create a button that darkens on hover: `bg-blue-500 hover:bg-blue-700 transition-colors duration-200`.
37. Style a link that shows an underline only on hover: `no-underline hover:underline`.
38. Build a card that lifts on hover using `shadow-md hover:shadow-xl transition-shadow duration-300`.
39. Style a form input with a blue ring on focus: `focus:outline-none focus:ring-2 focus:ring-blue-500`.
40. Create a nav item that changes text color on hover: `text-gray-600 hover:text-gray-900`.

### 9. Responsive Basics

41. Create a heading that is `text-2xl` on mobile and `text-5xl` on large screens: `text-2xl lg:text-5xl`.
42. Build a layout that is 1 column on mobile and 2 columns on medium screens: `grid grid-cols-1 md:grid-cols-2`.
43. Hide a sidebar on mobile and show it on desktop: `hidden lg:block`.
44. Create a button that is full-width on mobile and auto-width on desktop: `w-full md:w-auto`.
45. Build padding that is smaller on mobile and larger on desktop: `p-4 md:p-8 lg:p-16`.

### 10. Miscellaneous

46. Create a tag/chip element with `inline-flex items-center px-3 py-1 rounded-full text-sm bg-gray-100 text-gray-700`.
47. Build a tooltip wrapper using `relative group` with a hidden tooltip that shows on `group-hover:block`.
48. Create a loading spinner using `animate-spin` on a border-based circle div.
49. Style a notification dot/badge using `w-2 h-2 rounded-full bg-red-500 absolute top-0 right-0`.
50. Build an overlay using `fixed inset-0 bg-black/50 z-50`.


## 🟡 Level 2: Medium (51 - 100)

### 11. Layout Components

51. Build a sticky header with `sticky top-0 z-50 bg-white shadow-sm`.
52. Create a sidebar layout with a fixed sidebar (`w-64 fixed h-full`) and a scrollable main content area (`ml-64`).
53. Build a two-column layout with a main content area and an aside: `grid grid-cols-3 gap-8`, where main is `col-span-2` and aside is `col-span-1`.
54. Create a footer with a 4-column grid on desktop and 2 columns on tablet: `grid grid-cols-2 md:grid-cols-4 gap-8`.
55. Build a masonry-style layout using CSS columns: `columns-1 md:columns-2 lg:columns-3 gap-4`.
56. Create a full-page split layout — left half `bg-blue-600`, right half `bg-white` — using `grid grid-cols-2 min-h-screen`.
57. Build a breadcrumb component with flex and `divide-x` between items.
58. Create a responsive hero section with text on the left and an image on the right: `flex flex-col md:flex-row items-center`.
59. Build a tabbed interface using flex for the tab list and `border-b-2 border-blue-500` for the active tab indicator.
60. Create a "skip to main content" accessible link using `sr-only focus:not-sr-only`.

### 12. Forms & Inputs

61. Build a complete login form with email and password inputs styled with `border border-gray-300 rounded-lg px-4 py-2 w-full`.
62. Create a search bar with a search icon inside the input using `relative` positioning and `pl-10` padding.
63. Style a checkbox group with custom styling using `peer` and `peer-checked:bg-blue-600`.
64. Build a toggle/switch component using a `checkbox` input and `peer` modifier.
65. Create a styled `<select>` dropdown with `appearance-none bg-white border border-gray-300 rounded-lg px-4 py-2`.
66. Build a multi-step form with `fieldset` sections, styled progress indicators using `flex` and colored steps.
67. Create a form validation state — input with `border-red-500 focus:ring-red-500` and an error message in `text-red-600 text-sm mt-1`.
68. Style a textarea with `resize-none w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500`.
69. Build a file upload area with a dashed border: `border-2 border-dashed border-gray-300 rounded-xl p-8 text-center hover:border-blue-400`.
70. Create a floating label input where the label moves up on focus using `peer` and `peer-focus:` transforms.

### 13. Navigation & Menus

71. Build a responsive desktop navigation with logo on the left and links on the right using `flex justify-between items-center`.
72. Create a mobile hamburger menu that toggles a full-screen overlay navigation.
73. Build a vertical sidebar navigation with active state using `bg-blue-50 text-blue-700 font-semibold rounded-lg`.
74. Create a mega menu dropdown that appears on hover using `group` and `group-hover:block`.
75. Build a bottom navigation bar for mobile using `fixed bottom-0 inset-x-0 flex justify-around bg-white border-t`.
76. Create a pill-style navigation tab bar using `flex space-x-2` with `rounded-full px-4 py-2` tabs.
77. Build a breadcrumb navigation with `flex items-center space-x-2` and chevron separators.
78. Create a pagination component with previous/next buttons and numbered pages using `flex items-center gap-1`.
79. Build a dropdown menu using `relative group` and an absolutely positioned `group-hover:block` panel.
80. Create a mobile drawer navigation that slides in from the left using `transition-transform` and `translate-x-0` / `-translate-x-full`.

### 14. Cards & Containers

81. Build a product card with an image, title, price, and "Add to Cart" button.
82. Create a blog post card with a cover image, category badge, title, excerpt, and author info.
83. Build a pricing card with a highlighted/featured state using `ring-2 ring-blue-500 scale-105`.
84. Create a team member card with a circular avatar, name, role, and social links.
85. Build a stat card with a large number, label, and trend indicator using flex layout.
86. Create a testimonial card with a quote, author avatar, name, and star rating.
87. Build a notification card with an icon, title, message, and dismiss button using `flex items-start gap-3`.
88. Create a horizontal media card with a thumbnail on the left and content on the right: `flex gap-4 p-4 rounded-xl border`.
89. Build a glassmorphism card using `bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl`.
90. Create a dark mode card that switches styling with `dark:bg-gray-800 dark:border-gray-700 dark:text-white`.

### 15. Dark Mode & Theming

91. Build a dark mode toggle button that adds/removes `dark` class from the `<html>` element.
92. Create a page layout with full dark mode support: `bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100`.
93. Style a card for dark mode: `bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6`.
94. Build a form input with dark mode styles: `bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white`.
95. Create a navigation bar with `bg-white dark:bg-gray-900 shadow dark:shadow-gray-800`.
96. Build a custom color theme by adding brand colors in `tailwind.config.js` and using them throughout a UI.
97. Create a `prefers-color-scheme` dark mode setup using `darkMode: 'media'` instead of class-based toggling.
98. Style code blocks for dark mode using `bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-md p-4 font-mono`.
99. Build a dark mode aware hero section with a background image that changes opacity: `bg-black dark:bg-black before:opacity-30 dark:before:opacity-70`.
100. Create a complete dark mode stylesheet for a landing page covering header, hero, features, pricing, and footer sections.


## 🟠 Level 3: Professional (101 - 150)

### 16. Custom Configuration

101. Extend `tailwind.config.js` to add a custom `brand` color palette with `light`, `DEFAULT`, and `dark` shades.
102. Add a custom `128` and `144` spacing value to the Tailwind config and use them in a layout.
103. Define a custom `display` breakpoint at `1400px` and apply it in a responsive grid.
104. Add a custom font family (`'Inter', sans-serif`) to the config and apply it as the default sans font.
105. Create a custom animation (`fadeIn`) in `tailwind.config.js` and use it on a modal enter transition.
106. Define a custom box shadow (`shadow-soft`) and apply it to all card components.
107. Configure the `container` to be centered with `2rem` horizontal padding by default.
108. Add a custom `line-clamp-4` variant by extending the Tailwind typography line-clamp utilities.
109. Configure `safelist` in `tailwind.config.js` to always include all `bg-{color}-{shade}` classes for a dynamic color picker.
110. Set `darkMode: 'class'` and verify that `dark:` utilities are applied correctly when toggling the `dark` class on `<html>`.

### 17. Responsive Layouts (Advanced)

111. Build a 12-column CSS grid layout using `grid-cols-12` with varying `col-span` values for different sections.
112. Create a responsive magazine layout where a featured article spans `col-span-8` and a sidebar spans `col-span-4`.
113. Build a responsive masonry photo gallery using CSS `columns-2 md:columns-3 lg:columns-4` with `break-inside-avoid`.
114. Create a responsive data table that collapses to a card layout on mobile using `block md:table` utility switching.
115. Build a responsive pricing page with 3 tiers displayed in `grid-cols-1 md:grid-cols-3` with a featured card scaled up.
116. Create a complex dashboard layout with a fixed sidebar, a scrollable main area, and a sticky top bar.
117. Build a split-screen landing page with sticky text on one side and a scrollable image gallery on the other.
118. Create a responsive timeline component that is vertical on mobile and horizontal on desktop.
119. Build a `container queries` based card that changes its internal layout based on the container width, not the viewport.
120. Create a fluid typography scale using `clamp()` via arbitrary values: `text-[clamp(1.25rem,3vw,2.5rem)]`.

### 18. Animations & Transitions

121. Build a button with a smooth color transition on hover: `transition-colors duration-300 ease-in-out`.
122. Create a modal that fades in using `animate-fade-in` (custom animation) and a backdrop that fades in with `animate-pulse`.
123. Build a skeleton loading card using `animate-pulse` with gray placeholder blocks for image, title, and text.
124. Create a notification toast that slides in from the top using `transition-transform translate-y-0` from `-translate-y-full`.
125. Build a spinner component using `animate-spin` on a half-bordered circle.
126. Create a "ping" notification indicator using `animate-ping` with an absolute positioned dot overlay.
127. Build a card flip animation using custom `transform-style: preserve-3d` classes added via `@layer utilities`.
128. Create a page transition animation using `motion-safe:transition-opacity` respecting `prefers-reduced-motion`.
129. Build a typewriter loading placeholder using `animate-pulse` on multiple lines of varying width.
130. Create a hover-triggered image zoom effect using `overflow-hidden` on the container and `hover:scale-110 transition-transform duration-500` on the image.

### 19. Accessibility

131. Create all interactive elements (buttons, links, inputs) with visible focus rings using `focus-visible:ring-2 focus-visible:ring-blue-500`.
132. Build an accessible modal dialog with `role="dialog"`, `aria-modal="true"`, and focus trap using `inert` on background content.
133. Create a form with properly associated `<label>` elements and `aria-describedby` for help text.
134. Style a visually-hidden skip link that becomes visible on focus: `sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4`.
135. Build a color contrast checker and ensure all text/background combinations meet WCAG AA standards (4.5:1 ratio).
136. Create an accessible tooltip using `role="tooltip"` and `aria-describedby` with `sr-only` fallback text.
137. Build a progress indicator with `role="progressbar"`, `aria-valuenow`, and visible progress bar using `w-{n}` classes.
138. Create navigation with `aria-current="page"` on the active link, styled with `aria-[current=page]:text-blue-600 aria-[current=page]:font-semibold`.
139. Build a disclosure component (accordion) using `<details>` and `<summary>` with Tailwind hover/focus states.
140. Create a responsive image with `alt` text and `loading="lazy"` inside a styled `figure` with `figcaption`.

### 20. Component Patterns

141. Build a reusable `Button` component with variants (`primary`, `secondary`, `ghost`, `danger`) using `cva` (class-variance-authority).
142. Create a `Badge` component with color variants using a color map object and complete class names.
143. Build an `Alert` component with `success`, `warning`, `error`, and `info` variants using icon + message layout.
144. Create a `Dropdown` component using `group` and `group-hover:` modifiers for open/close state.
145. Build a `Card` component with optional header, body, and footer slots using consistent padding and border utilities.
146. Create a `Modal` component with overlay, container, header, body, footer, and close button with correct z-index layering.
147. Build a `Table` component with striped rows using `even:bg-gray-50 dark:even:bg-gray-700` and hover states.
148. Create an `Avatar` component that supports `sm`, `md`, `lg` sizes with initials fallback and ring options.
149. Build a `Stepper` component showing progress through multi-step processes using flex, numbered steps, and connecting lines.
150. Create a `DataGrid` component with sortable column headers, pagination, and a loading state overlay.


## 🔴 Level 4: Expert (151 - 200)

### 21. Custom Plugins

151. Write a Tailwind plugin that adds a `.text-shadow` utility with multiple size variants using `matchUtilities`.
152. Create a plugin that adds `.scrollbar-hide` and `.scrollbar-thin` utilities for cross-browser scrollbar styling.
153. Build a plugin that adds `fluid-{size}` responsive typography utilities using CSS `clamp()` for smooth scaling.
154. Write a plugin that adds `aspect-{ratio}` utilities for arbitrary aspect ratios using `matchUtilities` with a theme value.
155. Create a plugin that generates `.grid-areas-*` utilities for CSS grid template areas from a config object.
156. Build a plugin that adds animated gradient background utilities using keyframe injection via `addBase`.
157. Write a plugin that exposes all design token values as CSS custom properties on `:root` via the `addBase` helper.
158. Create a `@tailwindcss/debug-screens` style plugin that shows the current breakpoint in a fixed corner label.
159. Build a plugin that adds print-specific utilities (`print:hidden`, `print:block`, etc.) automatically for a list of common elements.
160. Write a plugin that adds `.balance-text` and `.pretty-text` utilities using `text-wrap: balance` and `text-wrap: pretty` for typographic control.

### 22. Design System Architecture

161. Architect a Tailwind-based design system with separate token layers: primitive tokens (raw colors), semantic tokens (role-based), and component tokens (specific usage).
162. Build a multi-brand design system where each brand has its own `tailwind.config.js` that extends a shared base config.
163. Create a component library with Storybook that documents every Tailwind-powered component with live controls and dark mode toggle.
164. Design a spacing system in Tailwind config that maps design tool tokens (e.g., Figma/Tokens Studio) directly to Tailwind utilities.
165. Build a CSS variable-based theming system where switching themes (light/dark/brand) changes CSS variables, and Tailwind classes reference those variables.
166. Implement a type scale using the `font-size` + `line-height` tuple format in config to create a harmonious typographic system.
167. Create a consistent icon sizing system using Tailwind width/height classes alongside an SVG icon library.
168. Design a responsive breakpoint strategy for a complex enterprise application using custom breakpoints and container queries.
169. Build a design token documentation page that renders every color, spacing, typography, and shadow token from the Tailwind config.
170. Implement a design system audit tool that checks whether all used class names conform to approved token classes.

### 23. Performance & Production

171. Configure Tailwind's `content` paths precisely to scan only necessary files and reduce build time in a large monorepo.
172. Implement critical CSS extraction by inlining above-the-fold Tailwind styles and loading the rest asynchronously.
173. Set up a PostCSS pipeline with `tailwindcss`, `autoprefixer`, and `cssnano` for maximum production CSS compression.
174. Configure `tailwind-merge` and `clsx` to handle dynamic class merging without specificity conflicts in a React component library.
175. Analyze a Tailwind production CSS bundle using `PurgeCSS Report` to identify any unexpectedly included classes.
176. Implement CSS layers (`@layer`) correctly to ensure Tailwind base, components, utilities, and custom styles load in the right cascade order.
177. Build a Tailwind v4 project using the new Vite plugin approach without a `tailwind.config.js`, configuring everything via CSS `@theme`.
178. Set up Tailwind with a CDN-compatible JIT approach for server-rendered pages without a build step using the Play CDN script.
179. Implement Tailwind CSS in a micro-frontend architecture where each MFE has its own Tailwind build without class name conflicts.
180. Configure Tailwind's `blocklist` option to prevent specific utilities from being generated, enforcing design system boundaries.

### 24. Advanced Tailwind Patterns

181. Build a polymorphic `Box` component in React that accepts an `as` prop and applies Tailwind classes using `cva` for all variants.
182. Create a `Transition` wrapper component using Headless UI's `Transition` with enter/leave Tailwind animation classes.
183. Implement a compound component pattern (e.g., `<Menu>`, `<Menu.Button>`, `<Menu.Items>`) using Headless UI styled entirely with Tailwind.
184. Build a drag-and-drop kanban board with column highlights (`bg-blue-50 border-blue-300`) using `dragover` class toggling.
185. Create a virtualized list component where Tailwind classes are applied programmatically based on item index and selection state.
186. Build a command palette (cmd+k) with keyboard navigation, styled using Headless UI's `Combobox` and Tailwind.
187. Implement an infinite scroll component where a loading spinner (`animate-spin`) appears at the bottom using an IntersectionObserver.
188. Create a real-time form with live validation feedback using `peer-invalid:` modifiers for error states without JavaScript.
189. Build a rich text editor wrapper that applies `prose` typography classes to dynamically rendered markdown/HTML output.
190. Implement a theme switcher that stores the preference in `localStorage` and applies the `dark` class server-side to avoid flash.

### 25. Real-World Projects

191. Build a complete landing page with hero, features grid, pricing cards, testimonials carousel, FAQ accordion, and footer — fully responsive.
192. Create a full-featured dashboard UI with sidebar navigation, stat cards, data table, and chart placeholders — all responsive and dark mode compatible.
193. Build a multi-page e-commerce product listing with filter sidebar, product grid, pagination, and a sticky "Add to Cart" bar on mobile.
194. Create a blog platform UI with homepage, article list, single post (using `prose`), author profile, and tag filtering pages.
195. Build a SaaS application onboarding flow with a multi-step registration form, progress indicator, and animated step transitions.
196. Create a fully accessible admin panel with sidebar, data tables, modals, toasts, and a dark mode toggle — all keyboard navigable.
197. Build a portfolio website with a hero section, animated skill bars, project grid with hover overlays, and a contact form.
198. Create a social media feed UI with post cards, stories row, suggested users sidebar, and infinite scroll loading indicators.
199. Build a real-time chat application UI with a contact list sidebar, message bubbles (`rounded-3xl bg-blue-500 text-white` vs `bg-gray-200`), and input bar.
200. Create a complete design system showcase page displaying all tokens, components, patterns, and responsive behaviors for a Tailwind-based project.

---

### **You will find these programs in `tailwindcss.md` in this directory.**

> [tailwindcss.md](https://github.com/alrifatsabbir/nsdahr/blob/main/qa-tailwindcss/tailwindcss.md)

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
