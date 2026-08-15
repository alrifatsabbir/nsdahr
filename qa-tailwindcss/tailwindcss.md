# Tailwind CSS Practice Questions and Answers (All 200 Items)

> ## 🟢 Level 1: Beginner (1 - 50)

### 1. Background & Colors

<h3>1. Create a <code>div</code> with a blue background using <code>bg-blue-500</code>.</h3>

```html
<div class="bg-blue-500 p-6">
  <p class="text-white">Blue background div</p>
</div>
```

<h3>2. Create a card with a gradient background using <code>bg-gradient-to-r from-purple-500 to-pink-500</code>.</h3>

```html
<div class="bg-gradient-to-r from-purple-500 to-pink-500 p-8 rounded-xl shadow-lg">
  <h2 class="text-white text-2xl font-bold">Gradient Card</h2>
  <p class="text-white/80 mt-2">Beautiful gradient background.</p>
</div>
```

<h3>3. Style a button with a green background (<code>bg-green-600</code>) and white text (<code>text-white</code>).</h3>

```html
<button class="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors">
  Confirm
</button>
```

<h3>4. Create a hero section with a dark background (<code>bg-gray-900</code>) and light text (<code>text-gray-100</code>).</h3>

```html
<section class="bg-gray-900 text-gray-100 min-h-screen flex items-center justify-center">
  <div class="text-center">
    <h1 class="text-5xl font-bold mb-4">Welcome</h1>
    <p class="text-xl text-gray-400">Build something amazing.</p>
  </div>
</section>
```

<h3>5. Build a badge with a red background (<code>bg-red-500</code>) and white text, fully rounded with <code>rounded-full</code>.</h3>

```html
<span class="bg-red-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
  New
</span>
```

### 2. Typography

<h3>6. Create a heading with <code>text-4xl font-bold text-gray-900</code>.</h3>

```html
<h1 class="text-4xl font-bold text-gray-900">Main Page Heading</h1>
```

<h3>7. Style a paragraph with <code>text-base text-gray-600 leading-relaxed</code>.</h3>

```html
<p class="text-base text-gray-600 leading-relaxed">
  This is a paragraph with relaxed line height and muted gray text, perfect
  for body copy in articles or descriptions.
</p>
```

<h3>8. Create a label with <code>text-xs font-semibold uppercase tracking-widest text-gray-500</code>.</h3>

```html
<label class="text-xs font-semibold uppercase tracking-widest text-gray-500">
  Category
</label>
```

<h3>9. Build a blockquote styled with <code>text-lg italic text-gray-700 border-l-4 border-blue-500 pl-4</code>.</h3>

```html
<blockquote class="text-lg italic text-gray-700 border-l-4 border-blue-500 pl-4 my-6">
  "Design is not just what it looks like and feels like. Design is how it works."
  <footer class="text-sm text-gray-500 mt-2 not-italic">— Steve Jobs</footer>
</blockquote>
```

<h3>10. Style a link with <code>text-blue-600 hover:text-blue-800 underline</code> for hover and default states.</h3>

```html
<a href="#" class="text-blue-600 hover:text-blue-800 underline transition-colors duration-150">
  Read more
</a>
```

### 3. Spacing

<h3>11. Create a card with <code>p-6</code> padding on all sides.</h3>

```html
<div class="p-6 bg-white rounded-xl shadow border border-gray-100">
  <h2 class="text-lg font-semibold text-gray-900">Card Title</h2>
  <p class="text-gray-600 mt-2">Card content goes here.</p>
</div>
```

<h3>12. Build a section with <code>py-16 px-4</code> for vertical and horizontal padding.</h3>

```html
<section class="py-16 px-4 bg-gray-50">
  <div class="max-w-4xl mx-auto">
    <h2 class="text-3xl font-bold text-gray-900 mb-4">Section Title</h2>
    <p class="text-gray-600">Section content with comfortable vertical spacing.</p>
  </div>
</section>
```

<h3>13. Add <code>mb-4</code> bottom margin to each item in a vertical list.</h3>

```html
<ul class="list-none">
  <li class="mb-4 p-4 bg-white rounded-lg shadow-sm border border-gray-100">Item One</li>
  <li class="mb-4 p-4 bg-white rounded-lg shadow-sm border border-gray-100">Item Two</li>
  <li class="mb-4 p-4 bg-white rounded-lg shadow-sm border border-gray-100">Item Three</li>
</ul>
```

<h3>14. Create a centered container with <code>mx-auto max-w-4xl px-4</code>.</h3>

```html
<div class="mx-auto max-w-4xl px-4">
  <p class="text-gray-700">This content is centered and constrained to a max width.</p>
</div>
```

<h3>15. Build a button with <code>px-6 py-3</code> horizontal and vertical padding.</h3>

```html
<button class="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors">
  Get Started
</button>
```

### 4. Borders & Shadows

<h3>16. Create an input field with <code>border border-gray-300 rounded-md</code> styling.</h3>

```html
<input
  type="text"
  placeholder="Enter your name"
  class="border border-gray-300 rounded-md px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
/>
```

<h3>17. Build a card with <code>shadow-lg rounded-xl border border-gray-100</code>.</h3>

```html
<div class="shadow-lg rounded-xl border border-gray-100 bg-white p-6">
  <h3 class="text-lg font-bold text-gray-900">Card with Shadow</h3>
  <p class="text-gray-500 mt-2">Elevated card using shadow and border utilities.</p>
</div>
```

<h3>18. Style a button with <code>border-2 border-blue-600 text-blue-600 rounded-lg</code> (outlined button).</h3>

```html
<button class="border-2 border-blue-600 text-blue-600 rounded-lg px-6 py-2 font-semibold hover:bg-blue-50 transition-colors">
  Learn More
</button>
```

<h3>19. Create an image container with <code>ring-4 ring-blue-500 ring-offset-2 rounded-full</code>.</h3>

```html
<div class="inline-block ring-4 ring-blue-500 ring-offset-2 rounded-full">
  <img
    src="avatar.jpg"
    alt="User avatar"
    class="w-20 h-20 rounded-full object-cover"
  />
</div>
```

<h3>20. Build a divider using <code>border-t border-gray-200 my-8</code>.</h3>

```html
<section>
  <p class="text-gray-700">Content above the divider.</p>
  <hr class="border-t border-gray-200 my-8" />
  <p class="text-gray-700">Content below the divider.</p>
</section>
```

### 5. Display & Flexbox

<h3>21. Create a horizontal navigation bar using <code>flex items-center space-x-6</code>.</h3>

```html
<nav class="flex items-center space-x-6 px-8 py-4 bg-white shadow-sm">
  <a href="#" class="font-bold text-xl text-gray-900">Logo</a>
  <a href="#" class="text-gray-600 hover:text-gray-900">Home</a>
  <a href="#" class="text-gray-600 hover:text-gray-900">About</a>
  <a href="#" class="text-gray-600 hover:text-gray-900">Contact</a>
</nav>
```

<h3>22. Build a centered hero section using <code>flex flex-col items-center justify-center min-h-screen</code>.</h3>

```html
<section class="flex flex-col items-center justify-center min-h-screen bg-gray-50 text-center px-4">
  <h1 class="text-5xl font-bold text-gray-900 mb-4">Hero Title</h1>
  <p class="text-xl text-gray-500 max-w-xl mb-8">A powerful subheading that explains what you do.</p>
  <button class="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700">
    Get Started
  </button>
</section>
```

<h3>23. Create a split layout with two columns using <code>flex gap-8</code> on the parent.</h3>

```html
<div class="flex gap-8 p-8">
  <div class="flex-1 bg-blue-50 rounded-xl p-6">
    <h2 class="text-lg font-bold">Left Column</h2>
    <p class="text-gray-600 mt-2">Left side content.</p>
  </div>
  <div class="flex-1 bg-pink-50 rounded-xl p-6">
    <h2 class="text-lg font-bold">Right Column</h2>
    <p class="text-gray-600 mt-2">Right side content.</p>
  </div>
</div>
```

<h3>24. Style a card footer with <code>flex items-center justify-between</code> for left/right content.</h3>

```html
<div class="bg-white rounded-xl shadow border border-gray-100 p-6">
  <h3 class="text-lg font-semibold text-gray-900">Card Title</h3>
  <p class="text-gray-500 mt-2 mb-4">Some description text for this card.</p>
  <div class="flex items-center justify-between pt-4 border-t border-gray-100">
    <span class="text-sm text-gray-400">Jan 15, 2025</span>
    <button class="text-blue-600 text-sm font-semibold hover:underline">Read More →</button>
  </div>
</div>
```

<h3>25. Build a flex row that wraps on small screens using <code>flex flex-wrap gap-4</code>.</h3>

```html
<div class="flex flex-wrap gap-4 p-4">
  <div class="bg-blue-100 text-blue-800 px-4 py-2 rounded-lg font-medium">Tag One</div>
  <div class="bg-green-100 text-green-800 px-4 py-2 rounded-lg font-medium">Tag Two</div>
  <div class="bg-purple-100 text-purple-800 px-4 py-2 rounded-lg font-medium">Tag Three</div>
  <div class="bg-pink-100 text-pink-800 px-4 py-2 rounded-lg font-medium">Tag Four</div>
  <div class="bg-yellow-100 text-yellow-800 px-4 py-2 rounded-lg font-medium">Tag Five</div>
</div>
```

### 6. Grid Basics

<h3>26. Create a 3-column image gallery using <code>grid grid-cols-3 gap-4</code>.</h3>

```html
<div class="grid grid-cols-3 gap-4 p-4">
  <img src="photo1.jpg" alt="Photo 1" class="w-full h-48 object-cover rounded-lg" />
  <img src="photo2.jpg" alt="Photo 2" class="w-full h-48 object-cover rounded-lg" />
  <img src="photo3.jpg" alt="Photo 3" class="w-full h-48 object-cover rounded-lg" />
  <img src="photo4.jpg" alt="Photo 4" class="w-full h-48 object-cover rounded-lg" />
  <img src="photo5.jpg" alt="Photo 5" class="w-full h-48 object-cover rounded-lg" />
  <img src="photo6.jpg" alt="Photo 6" class="w-full h-48 object-cover rounded-lg" />
</div>
```

<h3>27. Build a responsive 2-column layout that becomes 1 column on mobile: <code>grid grid-cols-1 md:grid-cols-2 gap-6</code>.</h3>

```html
<div class="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
  <div class="bg-white rounded-xl shadow p-6">
    <h3 class="font-bold text-gray-900">Column One</h3>
    <p class="text-gray-500 mt-2">Content for the first column.</p>
  </div>
  <div class="bg-white rounded-xl shadow p-6">
    <h3 class="font-bold text-gray-900">Column Two</h3>
    <p class="text-gray-500 mt-2">Content for the second column.</p>
  </div>
</div>
```

<h3>28. Create a feature section with <code>grid grid-cols-3 gap-8</code> containing 3 feature cards.</h3>

```html
<section class="py-16 px-4 bg-gray-50">
  <div class="max-w-5xl mx-auto grid grid-cols-3 gap-8">
    <div class="bg-white rounded-xl p-6 shadow-sm text-center">
      <div class="text-4xl mb-3">🚀</div>
      <h3 class="font-bold text-gray-900 mb-2">Fast</h3>
      <p class="text-gray-500 text-sm">Lightning fast performance out of the box.</p>
    </div>
    <div class="bg-white rounded-xl p-6 shadow-sm text-center">
      <div class="text-4xl mb-3">🔒</div>
      <h3 class="font-bold text-gray-900 mb-2">Secure</h3>
      <p class="text-gray-500 text-sm">Built with security best practices.</p>
    </div>
    <div class="bg-white rounded-xl p-6 shadow-sm text-center">
      <div class="text-4xl mb-3">🎨</div>
      <h3 class="font-bold text-gray-900 mb-2">Beautiful</h3>
      <p class="text-gray-500 text-sm">Stunning designs that delight users.</p>
    </div>
  </div>
</section>
```

<h3>29. Build a dashboard grid with <code>grid grid-cols-4 gap-4</code> for stats cards.</h3>

```html
<div class="grid grid-cols-4 gap-4 p-6">
  <div class="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
    <p class="text-sm text-gray-500">Total Users</p>
    <p class="text-3xl font-bold text-gray-900 mt-1">12,430</p>
  </div>
  <div class="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
    <p class="text-sm text-gray-500">Revenue</p>
    <p class="text-3xl font-bold text-gray-900 mt-1">$48,295</p>
  </div>
  <div class="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
    <p class="text-sm text-gray-500">Orders</p>
    <p class="text-3xl font-bold text-gray-900 mt-1">1,893</p>
  </div>
  <div class="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
    <p class="text-sm text-gray-500">Conversion</p>
    <p class="text-3xl font-bold text-gray-900 mt-1">3.2%</p>
  </div>
</div>
```

<h3>30. Create a full-width item inside a 3-column grid using <code>col-span-3</code>.</h3>

```html
<div class="grid grid-cols-3 gap-4 p-4">
  <div class="col-span-3 bg-blue-600 text-white rounded-xl p-6">
    <h2 class="text-2xl font-bold">Featured Banner</h2>
    <p class="mt-2 text-blue-100">This item spans all 3 columns.</p>
  </div>
  <div class="bg-gray-100 rounded-xl p-4">Card 1</div>
  <div class="bg-gray-100 rounded-xl p-4">Card 2</div>
  <div class="bg-gray-100 rounded-xl p-4">Card 3</div>
</div>
```

### 7. Sizing

<h3>31. Create a square avatar using <code>w-12 h-12 rounded-full</code>.</h3>

```html
<img
  src="avatar.jpg"
  alt="User Avatar"
  class="w-12 h-12 rounded-full object-cover"
/>
```

<h3>32. Build a full-viewport hero section with <code>w-full min-h-screen</code>.</h3>

```html
<section class="w-full min-h-screen bg-gradient-to-br from-blue-600 to-indigo-700 flex items-center justify-center">
  <div class="text-center text-white px-4">
    <h1 class="text-5xl font-extrabold mb-4">Full Viewport Hero</h1>
    <p class="text-xl text-blue-200 max-w-lg mx-auto">Stretches to cover the entire screen height.</p>
  </div>
</section>
```

<h3>33. Create a sidebar with a fixed width using <code>w-64 h-full</code>.</h3>

```html
<div class="flex min-h-screen">
  <aside class="w-64 h-full bg-gray-900 text-white flex-shrink-0 px-4 py-6">
    <h2 class="text-lg font-bold mb-6">Sidebar</h2>
    <nav class="space-y-2">
      <a href="#" class="block px-3 py-2 rounded-lg hover:bg-gray-700 text-gray-300">Dashboard</a>
      <a href="#" class="block px-3 py-2 rounded-lg hover:bg-gray-700 text-gray-300">Analytics</a>
      <a href="#" class="block px-3 py-2 rounded-lg hover:bg-gray-700 text-gray-300">Settings</a>
    </nav>
  </aside>
  <main class="flex-1 bg-gray-50 p-8">Main content area</main>
</div>
```

<h3>34. Style a progress bar container with <code>w-full h-2 bg-gray-200 rounded-full</code>.</h3>

```html
<div class="w-full">
  <div class="flex justify-between text-sm text-gray-500 mb-1">
    <span>Progress</span>
    <span>70%</span>
  </div>
  <div class="w-full h-2 bg-gray-200 rounded-full">
    <div class="h-2 bg-blue-500 rounded-full" style="width: 70%;"></div>
  </div>
</div>
```

<h3>35. Build a modal with <code>w-full max-w-md</code> to limit its maximum width.</h3>

```html
<div class="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
  <div class="w-full max-w-md bg-white rounded-2xl shadow-xl p-6">
    <h2 class="text-xl font-bold text-gray-900 mb-2">Modal Title</h2>
    <p class="text-gray-600 mb-6">This modal is limited to a max width of 28rem.</p>
    <div class="flex justify-end gap-3">
      <button class="px-4 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50">Cancel</button>
      <button class="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700">Confirm</button>
    </div>
  </div>
</div>
```

### 8. States

<h3>36. Create a button that darkens on hover: <code>bg-blue-500 hover:bg-blue-700 transition-colors duration-200</code>.</h3>

```html
<button class="bg-blue-500 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-lg transition-colors duration-200">
  Click Me
</button>
```

<h3>37. Style a link that shows an underline only on hover: <code>no-underline hover:underline</code>.</h3>

```html
<a href="#" class="no-underline hover:underline text-blue-600 transition-all duration-150">
  Visit our documentation
</a>
```

<h3>38. Build a card that lifts on hover using <code>shadow-md hover:shadow-xl transition-shadow duration-300</code>.</h3>

```html
<div class="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer">
  <h3 class="text-lg font-bold text-gray-900">Hover Me</h3>
  <p class="text-gray-500 mt-2">This card lifts on hover with a larger shadow.</p>
</div>
```

<h3>39. Style a form input with a blue ring on focus: <code>focus:outline-none focus:ring-2 focus:ring-blue-500</code>.</h3>

```html
<input
  type="email"
  placeholder="you@example.com"
  class="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
/>
```

<h3>40. Create a nav item that changes text color on hover: <code>text-gray-600 hover:text-gray-900</code>.</h3>

```html
<nav class="flex items-center space-x-6 px-8 py-4 bg-white shadow-sm">
  <a href="#" class="text-gray-600 hover:text-gray-900 font-medium transition-colors">Home</a>
  <a href="#" class="text-gray-600 hover:text-gray-900 font-medium transition-colors">Products</a>
  <a href="#" class="text-gray-600 hover:text-gray-900 font-medium transition-colors">Blog</a>
  <a href="#" class="text-gray-600 hover:text-gray-900 font-medium transition-colors">Contact</a>
</nav>
```

### 9. Responsive Basics

<h3>41. Create a heading that is <code>text-2xl</code> on mobile and <code>text-5xl</code> on large screens: <code>text-2xl lg:text-5xl</code>.</h3>

```html
<h1 class="text-2xl lg:text-5xl font-extrabold text-gray-900">
  Responsive Heading
</h1>
```

<h3>42. Build a layout that is 1 column on mobile and 2 columns on medium screens: <code>grid grid-cols-1 md:grid-cols-2</code>.</h3>

```html
<div class="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
  <div class="bg-white rounded-xl shadow p-6">
    <h3 class="font-bold text-gray-900">First Panel</h3>
    <p class="text-gray-500 mt-2">Stacks below on mobile, side by side on desktop.</p>
  </div>
  <div class="bg-white rounded-xl shadow p-6">
    <h3 class="font-bold text-gray-900">Second Panel</h3>
    <p class="text-gray-500 mt-2">Stacks below on mobile, side by side on desktop.</p>
  </div>
</div>
```

<h3>43. Hide a sidebar on mobile and show it on desktop: <code>hidden lg:block</code>.</h3>

```html
<div class="flex min-h-screen">
  <aside class="hidden lg:block w-64 bg-gray-900 text-white px-4 py-6">
    <h2 class="text-lg font-bold mb-4">Sidebar</h2>
    <p class="text-gray-400 text-sm">Visible only on large screens.</p>
  </aside>
  <main class="flex-1 bg-gray-50 p-8">
    <h1 class="text-2xl font-bold text-gray-900">Main Content</h1>
  </main>
</div>
```

<h3>44. Create a button that is full-width on mobile and auto-width on desktop: <code>w-full md:w-auto</code>.</h3>

```html
<button class="w-full md:w-auto bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
  Get Started
</button>
```

<h3>45. Build padding that is smaller on mobile and larger on desktop: <code>p-4 md:p-8 lg:p-16</code>.</h3>

```html
<section class="p-4 md:p-8 lg:p-16 bg-gray-50">
  <div class="max-w-4xl mx-auto">
    <h2 class="text-3xl font-bold text-gray-900">Responsive Padding</h2>
    <p class="text-gray-600 mt-4">Padding scales up at each breakpoint.</p>
  </div>
</section>
```

### 10. Miscellaneous

<h3>46. Create a tag/chip element with <code>inline-flex items-center px-3 py-1 rounded-full text-sm bg-gray-100 text-gray-700</code>.</h3>

```html
<div class="flex flex-wrap gap-2">
  <span class="inline-flex items-center px-3 py-1 rounded-full text-sm bg-gray-100 text-gray-700">Design</span>
  <span class="inline-flex items-center px-3 py-1 rounded-full text-sm bg-blue-100 text-blue-700">Development</span>
  <span class="inline-flex items-center px-3 py-1 rounded-full text-sm bg-green-100 text-green-700">Marketing</span>
</div>
```

<h3>47. Build a tooltip wrapper using <code>relative group</code> with a hidden tooltip that shows on <code>group-hover:block</code>.</h3>

```html
<div class="relative group inline-block">
  <button class="bg-blue-600 text-white px-4 py-2 rounded-lg">Hover me</button>
  <div class="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block
              bg-gray-900 text-white text-xs rounded-lg px-3 py-1.5 whitespace-nowrap shadow-lg">
    This is a tooltip!
    <div class="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-gray-900"></div>
  </div>
</div>
```

<h3>48. Create a loading spinner using <code>animate-spin</code> on a border-based circle div.</h3>

```html
<div class="flex items-center justify-center p-8">
  <div class="w-10 h-10 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin"></div>
</div>
```

<h3>49. Style a notification dot/badge using <code>w-2 h-2 rounded-full bg-red-500 absolute top-0 right-0</code>.</h3>

```html
<div class="relative inline-block">
  <button class="p-2 bg-gray-100 rounded-lg hover:bg-gray-200">
    <svg class="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
        d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
    </svg>
  </button>
  <span class="w-2 h-2 rounded-full bg-red-500 absolute top-0 right-0"></span>
</div>
```

<h3>50. Build an overlay using <code>fixed inset-0 bg-black/50 z-50</code>.</h3>

```html
<div id="overlay" class="fixed inset-0 bg-black/50 z-50 flex items-center justify-center">
  <div class="bg-white rounded-2xl shadow-2xl p-8 max-w-sm w-full mx-4">
    <h2 class="text-xl font-bold text-gray-900 mb-3">Overlay Modal</h2>
    <p class="text-gray-600 mb-6">Click outside or press Escape to close.</p>
    <button class="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700">
      Close
    </button>
  </div>
</div>
```

---

> ## 🟡 Level 2: Medium (51 - 100)

### 11. Layout Components

<h3>51. Build a sticky header with <code>sticky top-0 z-50 bg-white shadow-sm</code>.</h3>

```html
<header class="sticky top-0 z-50 bg-white shadow-sm">
  <div class="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
    <a href="#" class="text-xl font-bold text-gray-900">MyApp</a>
    <nav class="flex items-center space-x-6">
      <a href="#" class="text-gray-600 hover:text-gray-900">Features</a>
      <a href="#" class="text-gray-600 hover:text-gray-900">Pricing</a>
      <a href="#" class="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">Sign Up</a>
    </nav>
  </div>
</header>
```

<h3>52. Create a sidebar layout with a fixed sidebar (<code>w-64 fixed h-full</code>) and a scrollable main content area (<code>ml-64</code>).</h3>

```html
<div class="min-h-screen">
  <aside class="w-64 fixed h-full bg-gray-900 text-white px-4 py-6 overflow-y-auto z-40">
    <h2 class="text-lg font-bold mb-6">Dashboard</h2>
    <nav class="space-y-1">
      <a href="#" class="block px-3 py-2 rounded-lg bg-gray-700 text-white">Overview</a>
      <a href="#" class="block px-3 py-2 rounded-lg text-gray-300 hover:bg-gray-700">Analytics</a>
      <a href="#" class="block px-3 py-2 rounded-lg text-gray-300 hover:bg-gray-700">Reports</a>
      <a href="#" class="block px-3 py-2 rounded-lg text-gray-300 hover:bg-gray-700">Settings</a>
    </nav>
  </aside>
  <main class="ml-64 bg-gray-50 min-h-screen p-8">
    <h1 class="text-2xl font-bold text-gray-900">Main Content</h1>
    <p class="text-gray-600 mt-2">Scrollable area beside the fixed sidebar.</p>
  </main>
</div>
```

<h3>53. Build a two-column layout with a main content area and an aside: <code>grid grid-cols-3 gap-8</code>, where main is <code>col-span-2</code> and aside is <code>col-span-1</code>.</h3>

```html
<div class="max-w-6xl mx-auto grid grid-cols-3 gap-8 px-6 py-10">
  <main class="col-span-2 space-y-6">
    <article class="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
      <h1 class="text-2xl font-bold text-gray-900 mb-3">Article Title</h1>
      <p class="text-gray-600 leading-relaxed">Main article content goes here with full reading width.</p>
    </article>
  </main>
  <aside class="col-span-1 space-y-4">
    <div class="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
      <h3 class="font-bold text-gray-900 mb-3">Related Posts</h3>
      <ul class="space-y-2 text-sm text-gray-600">
        <li><a href="#" class="hover:text-blue-600">Getting started with Tailwind</a></li>
        <li><a href="#" class="hover:text-blue-600">Dark mode patterns</a></li>
      </ul>
    </div>
  </aside>
</div>
```

<h3>54. Create a footer with a 4-column grid on desktop and 2 columns on tablet: <code>grid grid-cols-2 md:grid-cols-4 gap-8</code>.</h3>

```html
<footer class="bg-gray-900 text-white py-16 px-6">
  <div class="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
    <div>
      <h4 class="font-bold text-white mb-4">Product</h4>
      <ul class="space-y-2 text-gray-400 text-sm">
        <li><a href="#" class="hover:text-white">Features</a></li>
        <li><a href="#" class="hover:text-white">Pricing</a></li>
        <li><a href="#" class="hover:text-white">Changelog</a></li>
      </ul>
    </div>
    <div>
      <h4 class="font-bold text-white mb-4">Company</h4>
      <ul class="space-y-2 text-gray-400 text-sm">
        <li><a href="#" class="hover:text-white">About</a></li>
        <li><a href="#" class="hover:text-white">Blog</a></li>
        <li><a href="#" class="hover:text-white">Careers</a></li>
      </ul>
    </div>
    <div>
      <h4 class="font-bold text-white mb-4">Resources</h4>
      <ul class="space-y-2 text-gray-400 text-sm">
        <li><a href="#" class="hover:text-white">Docs</a></li>
        <li><a href="#" class="hover:text-white">Community</a></li>
        <li><a href="#" class="hover:text-white">Support</a></li>
      </ul>
    </div>
    <div>
      <h4 class="font-bold text-white mb-4">Legal</h4>
      <ul class="space-y-2 text-gray-400 text-sm">
        <li><a href="#" class="hover:text-white">Privacy</a></li>
        <li><a href="#" class="hover:text-white">Terms</a></li>
        <li><a href="#" class="hover:text-white">Cookies</a></li>
      </ul>
    </div>
  </div>
</footer>
```

<h3>55. Build a masonry-style layout using CSS columns: <code>columns-1 md:columns-2 lg:columns-3 gap-4</code>.</h3>

```html
<div class="columns-1 md:columns-2 lg:columns-3 gap-4 p-6">
  <div class="break-inside-avoid mb-4 bg-white rounded-xl shadow-sm border border-gray-100 p-5">
    <h3 class="font-bold text-gray-900">Short Card</h3>
    <p class="text-gray-500 text-sm mt-1">Quick note.</p>
  </div>
  <div class="break-inside-avoid mb-4 bg-white rounded-xl shadow-sm border border-gray-100 p-5">
    <h3 class="font-bold text-gray-900">Taller Card</h3>
    <p class="text-gray-500 text-sm mt-1">This card has more content and will be taller than the others in the masonry grid layout.</p>
    <p class="text-gray-500 text-sm mt-2">Extra paragraph to make it taller.</p>
  </div>
  <div class="break-inside-avoid mb-4 bg-white rounded-xl shadow-sm border border-gray-100 p-5">
    <h3 class="font-bold text-gray-900">Another Card</h3>
    <p class="text-gray-500 text-sm mt-1">Medium height card.</p>
  </div>
  <div class="break-inside-avoid mb-4 bg-white rounded-xl shadow-sm border border-gray-100 p-5">
    <h3 class="font-bold text-gray-900">Fourth Card</h3>
    <p class="text-gray-500 text-sm mt-1">More content here.</p>
  </div>
</div>
```

<h3>56. Create a full-page split layout — left half <code>bg-blue-600</code>, right half <code>bg-white</code> — using <code>grid grid-cols-2 min-h-screen</code>.</h3>

```html
<div class="grid grid-cols-2 min-h-screen">
  <div class="bg-blue-600 flex items-center justify-center p-12">
    <div class="text-white text-center">
      <h1 class="text-4xl font-extrabold mb-4">Welcome Back</h1>
      <p class="text-blue-200 text-lg">Sign in to continue to your account.</p>
    </div>
  </div>
  <div class="bg-white flex items-center justify-center p-12">
    <div class="w-full max-w-sm">
      <h2 class="text-2xl font-bold text-gray-900 mb-6">Sign In</h2>
      <input type="email" placeholder="Email" class="w-full border border-gray-300 rounded-lg px-4 py-2 mb-3 focus:outline-none focus:ring-2 focus:ring-blue-500" />
      <input type="password" placeholder="Password" class="w-full border border-gray-300 rounded-lg px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500" />
      <button class="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700">Sign In</button>
    </div>
  </div>
</div>
```

<h3>57. Build a breadcrumb component with flex and <code>divide-x</code> between items.</h3>

```html
<nav aria-label="Breadcrumb">
  <ol class="flex items-center divide-x divide-gray-200 text-sm">
    <li class="pr-3"><a href="#" class="text-gray-500 hover:text-gray-900">Home</a></li>
    <li class="px-3"><a href="#" class="text-gray-500 hover:text-gray-900">Products</a></li>
    <li class="px-3"><a href="#" class="text-gray-500 hover:text-gray-900">Electronics</a></li>
    <li class="pl-3 text-gray-900 font-semibold">Headphones</li>
  </ol>
</nav>
```

<h3>58. Create a responsive hero section with text on the left and an image on the right: <code>flex flex-col md:flex-row items-center</code>.</h3>

```html
<section class="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 px-6 py-16">
  <div class="flex-1 text-center md:text-left">
    <h1 class="text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4">
      Build Faster with Tailwind
    </h1>
    <p class="text-xl text-gray-500 mb-8">
      A utility-first CSS framework for rapid UI development.
    </p>
    <button class="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700">
      Get Started
    </button>
  </div>
  <div class="flex-1">
    <img src="hero-image.png" alt="Hero illustration" class="w-full rounded-2xl shadow-xl" />
  </div>
</section>
```

<h3>59. Build a tabbed interface using flex for the tab list and <code>border-b-2 border-blue-500</code> for the active tab indicator.</h3>

```html
<div class="w-full">
  <div class="flex border-b border-gray-200">
    <button class="px-6 py-3 text-sm font-semibold text-blue-600 border-b-2 border-blue-500 -mb-px">Overview</button>
    <button class="px-6 py-3 text-sm font-semibold text-gray-500 hover:text-gray-700 border-b-2 border-transparent hover:border-gray-300 -mb-px">Analytics</button>
    <button class="px-6 py-3 text-sm font-semibold text-gray-500 hover:text-gray-700 border-b-2 border-transparent hover:border-gray-300 -mb-px">Settings</button>
  </div>
  <div class="p-6 bg-white">
    <p class="text-gray-600">Tab panel content goes here.</p>
  </div>
</div>
```

<h3>60. Create a "skip to main content" accessible link using <code>sr-only focus:not-sr-only</code>.</h3>

```html
<a
  href="#main-content"
  class="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4
         bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold z-50"
>
  Skip to main content
</a>

<header class="sticky top-0 bg-white shadow-sm px-6 py-4">
  <!-- navigation -->
</header>

<main id="main-content" class="p-8">
  <h1 class="text-2xl font-bold">Main Content</h1>
</main>
```

### 12. Forms & Inputs

<h3>61. Build a complete login form with email and password inputs styled with <code>border border-gray-300 rounded-lg px-4 py-2 w-full</code>.</h3>

```html
<div class="min-h-screen bg-gray-50 flex items-center justify-center px-4">
  <div class="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
    <h2 class="text-2xl font-bold text-gray-900 mb-6">Sign In</h2>
    <form class="space-y-4">
      <div>
        <label class="block text-sm font-medium text-gray-700 mb-1" for="email">Email</label>
        <input id="email" type="email" placeholder="you@example.com"
          class="border border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500" />
      </div>
      <div>
        <label class="block text-sm font-medium text-gray-700 mb-1" for="password">Password</label>
        <input id="password" type="password" placeholder="••••••••"
          class="border border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500" />
      </div>
      <button type="submit" class="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
        Sign In
      </button>
    </form>
  </div>
</div>
```

<h3>62. Create a search bar with a search icon inside the input using <code>relative</code> positioning and <code>pl-10</code> padding.</h3>

```html
<div class="relative max-w-md">
  <svg class="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
  </svg>
  <input
    type="text"
    placeholder="Search..."
    class="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
  />
</div>
```

<h3>63. Style a checkbox group with custom styling using <code>peer</code> and <code>peer-checked:bg-blue-600</code>.</h3>

```html
<div class="space-y-3">
  <label class="flex items-center gap-3 cursor-pointer group">
    <input type="checkbox" class="peer sr-only" />
    <div class="w-5 h-5 rounded border-2 border-gray-300 peer-checked:bg-blue-600 peer-checked:border-blue-600
                flex items-center justify-center transition-colors">
      <svg class="w-3 h-3 text-white hidden peer-checked:block" fill="currentColor" viewBox="0 0 20 20">
        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
      </svg>
    </div>
    <span class="text-gray-700 group-hover:text-gray-900">Option One</span>
  </label>
  <label class="flex items-center gap-3 cursor-pointer group">
    <input type="checkbox" class="peer sr-only" checked />
    <div class="w-5 h-5 rounded border-2 border-gray-300 peer-checked:bg-blue-600 peer-checked:border-blue-600
                flex items-center justify-center transition-colors">
      <svg class="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
      </svg>
    </div>
    <span class="text-gray-700 group-hover:text-gray-900">Option Two</span>
  </label>
</div>
```

<h3>64. Build a toggle/switch component using a <code>checkbox</code> input and <code>peer</code> modifier.</h3>

```html
<label class="flex items-center gap-3 cursor-pointer">
  <input type="checkbox" class="peer sr-only" />
  <div class="relative w-11 h-6 bg-gray-200 rounded-full peer-checked:bg-blue-600 transition-colors">
    <div class="absolute top-0.5 left-0.5 bg-white w-5 h-5 rounded-full shadow
                transition-transform peer-checked:translate-x-5"></div>
  </div>
  <span class="text-gray-700 text-sm font-medium">Enable notifications</span>
</label>
```

<h3>65. Create a styled <code>&lt;select&gt;</code> dropdown with <code>appearance-none bg-white border border-gray-300 rounded-lg px-4 py-2</code>.</h3>

```html
<div class="relative max-w-xs">
  <select class="appearance-none bg-white border border-gray-300 rounded-lg px-4 py-2 w-full
                 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 pr-10">
    <option value="">Select a country</option>
    <option value="us">United States</option>
    <option value="gb">United Kingdom</option>
    <option value="ca">Canada</option>
  </select>
  <svg class="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none"
       fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
  </svg>
</div>
```

<h3>66. Build a multi-step form with <code>fieldset</code> sections, styled progress indicators using <code>flex</code> and colored steps.</h3>

```html
<div class="max-w-lg mx-auto p-8">
  <!-- Progress Steps -->
  <div class="flex items-center mb-8">
    <div class="flex items-center justify-center w-8 h-8 rounded-full bg-blue-600 text-white text-sm font-bold">1</div>
    <div class="flex-1 h-1 bg-blue-600 mx-2"></div>
    <div class="flex items-center justify-center w-8 h-8 rounded-full bg-blue-600 text-white text-sm font-bold">2</div>
    <div class="flex-1 h-1 bg-gray-200 mx-2"></div>
    <div class="flex items-center justify-center w-8 h-8 rounded-full bg-gray-200 text-gray-500 text-sm font-bold">3</div>
  </div>

  <!-- Step 2: Address -->
  <fieldset class="border-0 p-0">
    <legend class="text-xl font-bold text-gray-900 mb-6">Shipping Address</legend>
    <div class="space-y-4">
      <input type="text" placeholder="Street address"
        class="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
      <div class="grid grid-cols-2 gap-4">
        <input type="text" placeholder="City"
          class="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
        <input type="text" placeholder="ZIP code"
          class="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
      </div>
    </div>
    <div class="flex justify-between mt-6">
      <button class="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50">Back</button>
      <button class="px-6 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700">Continue</button>
    </div>
  </fieldset>
</div>
```

<h3>67. Create a form validation state — input with <code>border-red-500 focus:ring-red-500</code> and an error message in <code>text-red-600 text-sm mt-1</code>.</h3>

```html
<div class="max-w-sm">
  <label class="block text-sm font-medium text-gray-700 mb-1" for="username">Username</label>
  <input
    id="username"
    type="text"
    value="ab"
    class="w-full border border-red-500 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
    aria-describedby="username-error"
  />
  <p id="username-error" class="text-red-600 text-sm mt-1">
    Username must be at least 3 characters long.
  </p>
</div>
```

<h3>68. Style a textarea with <code>resize-none w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500</code>.</h3>

```html
<div class="max-w-lg">
  <label class="block text-sm font-medium text-gray-700 mb-1" for="message">Message</label>
  <textarea
    id="message"
    rows="5"
    placeholder="Write your message here..."
    class="resize-none w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700"
  ></textarea>
  <p class="text-xs text-gray-400 mt-1 text-right">0 / 500</p>
</div>
```

<h3>69. Build a file upload area with a dashed border: <code>border-2 border-dashed border-gray-300 rounded-xl p-8 text-center hover:border-blue-400</code>.</h3>

```html
<label class="block cursor-pointer border-2 border-dashed border-gray-300 rounded-xl p-8 text-center
              hover:border-blue-400 transition-colors group">
  <input type="file" class="sr-only" multiple />
  <svg class="w-12 h-12 text-gray-400 group-hover:text-blue-400 mx-auto mb-3 transition-colors"
       fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
      d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
  </svg>
  <p class="text-gray-600 font-medium">Drop files here or <span class="text-blue-600">browse</span></p>
  <p class="text-gray-400 text-sm mt-1">PNG, JPG, PDF up to 10MB</p>
</label>
```

<h3>70. Create a floating label input where the label moves up on focus using <code>peer</code> and <code>peer-focus:</code> transforms.</h3>

```html
<div class="relative max-w-sm">
  <input
    id="float-email"
    type="email"
    placeholder=" "
    class="peer w-full border border-gray-300 rounded-lg px-4 pt-5 pb-2 text-gray-900
           focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
  />
  <label
    for="float-email"
    class="absolute left-4 top-3.5 text-gray-400 text-sm transition-all
           peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base
           peer-focus:top-1.5 peer-focus:text-xs peer-focus:text-blue-600
           peer-not-placeholder-shown:top-1.5 peer-not-placeholder-shown:text-xs"
  >
    Email address
  </label>
</div>
```

### 13. Navigation & Menus

<h3>71. Build a responsive desktop navigation with logo on the left and links on the right using <code>flex justify-between items-center</code>.</h3>

```html
<header class="bg-white shadow-sm sticky top-0 z-50">
  <div class="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
    <a href="#" class="text-2xl font-extrabold text-blue-600">Brand</a>
    <nav class="hidden md:flex items-center space-x-6 text-sm font-medium">
      <a href="#" class="text-gray-600 hover:text-gray-900">Home</a>
      <a href="#" class="text-gray-600 hover:text-gray-900">Features</a>
      <a href="#" class="text-gray-600 hover:text-gray-900">Pricing</a>
      <a href="#" class="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
        Sign Up
      </a>
    </nav>
    <button class="md:hidden p-2 rounded-lg hover:bg-gray-100">
      <svg class="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
      </svg>
    </button>
  </div>
</header>
```

<h3>72. Create a mobile hamburger menu that toggles a full-screen overlay navigation.</h3>

```html
<!-- Hamburger Button -->
<button id="menu-btn" onclick="document.getElementById('mobile-menu').classList.toggle('hidden')"
  class="fixed top-4 right-4 z-50 p-2 bg-white rounded-lg shadow-lg md:hidden">
  <svg class="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
  </svg>
</button>

<!-- Full-screen Overlay -->
<div id="mobile-menu" class="hidden fixed inset-0 bg-gray-900 z-40 flex flex-col items-center justify-center">
  <nav class="flex flex-col items-center space-y-8 text-2xl font-semibold text-white">
    <a href="#" class="hover:text-blue-400 transition-colors">Home</a>
    <a href="#" class="hover:text-blue-400 transition-colors">About</a>
    <a href="#" class="hover:text-blue-400 transition-colors">Services</a>
    <a href="#" class="hover:text-blue-400 transition-colors">Contact</a>
  </nav>
</div>
```

<h3>73. Build a vertical sidebar navigation with active state using <code>bg-blue-50 text-blue-700 font-semibold rounded-lg</code>.</h3>

```html
<aside class="w-64 bg-white border-r border-gray-200 h-screen px-4 py-6">
  <h2 class="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-4 px-3">Navigation</h2>
  <nav class="space-y-1">
    <a href="#" class="flex items-center gap-3 px-3 py-2 rounded-lg bg-blue-50 text-blue-700 font-semibold text-sm">
      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
      Dashboard
    </a>
    <a href="#" class="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-600 hover:bg-gray-100 text-sm transition-colors">
      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
      Analytics
    </a>
    <a href="#" class="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-600 hover:bg-gray-100 text-sm transition-colors">
      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
      Settings
    </a>
  </nav>
</aside>
```

<h3>74. Create a mega menu dropdown that appears on hover using <code>group</code> and <code>group-hover:block</code>.</h3>

```html
<nav class="bg-white shadow-sm">
  <div class="max-w-6xl mx-auto px-6 py-4 flex items-center gap-8">
    <a href="#" class="text-xl font-bold text-blue-600">Logo</a>

    <div class="relative group">
      <button class="flex items-center gap-1 text-gray-600 hover:text-gray-900 font-medium">
        Products
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <!-- Mega Menu -->
      <div class="hidden group-hover:block absolute top-full left-0 mt-2 w-screen max-w-2xl bg-white rounded-2xl shadow-xl border border-gray-100 p-6 z-50">
        <div class="grid grid-cols-3 gap-6">
          <a href="#" class="p-4 rounded-xl hover:bg-gray-50 block">
            <h4 class="font-semibold text-gray-900">Analytics</h4>
            <p class="text-sm text-gray-500 mt-1">Get deep insights into your data.</p>
          </a>
          <a href="#" class="p-4 rounded-xl hover:bg-gray-50 block">
            <h4 class="font-semibold text-gray-900">Automation</h4>
            <p class="text-sm text-gray-500 mt-1">Automate repetitive workflows.</p>
          </a>
          <a href="#" class="p-4 rounded-xl hover:bg-gray-50 block">
            <h4 class="font-semibold text-gray-900">Integrations</h4>
            <p class="text-sm text-gray-500 mt-1">Connect with 100+ tools.</p>
          </a>
        </div>
      </div>
    </div>
  </div>
</nav>
```

<h3>75. Build a bottom navigation bar for mobile using <code>fixed bottom-0 inset-x-0 flex justify-around bg-white border-t</code>.</h3>

```html
<nav class="fixed bottom-0 inset-x-0 flex justify-around bg-white border-t border-gray-200 py-2 z-50 md:hidden">
  <a href="#" class="flex flex-col items-center gap-1 text-blue-600 px-4 py-1">
    <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" /></svg>
    <span class="text-xs font-medium">Home</span>
  </a>
  <a href="#" class="flex flex-col items-center gap-1 text-gray-500 px-4 py-1">
    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
    <span class="text-xs font-medium">Search</span>
  </a>
  <a href="#" class="flex flex-col items-center gap-1 text-gray-500 px-4 py-1">
    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
    <span class="text-xs font-medium">Saved</span>
  </a>
  <a href="#" class="flex flex-col items-center gap-1 text-gray-500 px-4 py-1">
    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
    <span class="text-xs font-medium">Profile</span>
  </a>
</nav>
```

<h3>76. Create a pill-style navigation tab bar using <code>flex space-x-2</code> with <code>rounded-full px-4 py-2</code> tabs.</h3>

```html
<div class="flex space-x-2 p-1 bg-gray-100 rounded-full w-fit">
  <button class="px-4 py-2 rounded-full bg-white text-gray-900 text-sm font-semibold shadow-sm">All</button>
  <button class="px-4 py-2 rounded-full text-gray-500 text-sm font-medium hover:bg-white hover:text-gray-900 transition-colors">Design</button>
  <button class="px-4 py-2 rounded-full text-gray-500 text-sm font-medium hover:bg-white hover:text-gray-900 transition-colors">Development</button>
  <button class="px-4 py-2 rounded-full text-gray-500 text-sm font-medium hover:bg-white hover:text-gray-900 transition-colors">Marketing</button>
</div>
```

<h3>77. Build a breadcrumb navigation with <code>flex items-center space-x-2</code> and chevron separators.</h3>

```html
<nav aria-label="Breadcrumb">
  <ol class="flex items-center space-x-2 text-sm text-gray-500">
    <li><a href="#" class="hover:text-gray-900 transition-colors">Home</a></li>
    <li><svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" /></svg></li>
    <li><a href="#" class="hover:text-gray-900 transition-colors">Products</a></li>
    <li><svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" /></svg></li>
    <li class="text-gray-900 font-semibold" aria-current="page">Wireless Headphones</li>
  </ol>
</nav>
```

<h3>78. Create a pagination component with previous/next buttons and numbered pages using <code>flex items-center gap-1</code>.</h3>

```html
<nav class="flex items-center gap-1" aria-label="Pagination">
  <button class="px-3 py-2 rounded-lg border border-gray-300 text-sm text-gray-500 hover:bg-gray-50 disabled:opacity-40" disabled>
    ← Prev
  </button>
  <button class="px-3 py-2 rounded-lg text-sm text-gray-500 hover:bg-gray-50">1</button>
  <button class="px-3 py-2 rounded-lg bg-blue-600 text-white text-sm font-semibold">2</button>
  <button class="px-3 py-2 rounded-lg text-sm text-gray-500 hover:bg-gray-50">3</button>
  <span class="px-2 text-gray-400">…</span>
  <button class="px-3 py-2 rounded-lg text-sm text-gray-500 hover:bg-gray-50">10</button>
  <button class="px-3 py-2 rounded-lg border border-gray-300 text-sm text-gray-500 hover:bg-gray-50">
    Next →
  </button>
</nav>
```

<h3>79. Build a dropdown menu using <code>relative group</code> and an absolutely positioned <code>group-hover:block</code> panel.</h3>

```html
<div class="relative group inline-block">
  <button class="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 shadow-sm">
    Options
    <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
    </svg>
  </button>
  <div class="hidden group-hover:block absolute top-full right-0 mt-1 w-48 bg-white rounded-xl shadow-lg border border-gray-100 py-1 z-50">
    <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Edit</a>
    <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Duplicate</a>
    <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Archive</a>
    <hr class="border-gray-100 my-1" />
    <a href="#" class="block px-4 py-2 text-sm text-red-600 hover:bg-red-50">Delete</a>
  </div>
</div>
```

<h3>80. Create a mobile drawer navigation that slides in from the left using <code>transition-transform</code> and <code>translate-x-0</code> / <code>-translate-x-full</code>.</h3>

```html
<!-- Trigger -->
<button onclick="document.getElementById('drawer').classList.remove('-translate-x-full')"
  class="p-2 rounded-lg hover:bg-gray-100">
  <svg class="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
  </svg>
</button>

<!-- Backdrop -->
<div onclick="document.getElementById('drawer').classList.add('-translate-x-full')"
  class="fixed inset-0 bg-black/40 z-40 hidden"></div>

<!-- Drawer -->
<aside id="drawer"
  class="fixed top-0 left-0 h-full w-72 bg-white shadow-2xl z-50 transform -translate-x-full transition-transform duration-300 ease-in-out px-6 py-8">
  <div class="flex items-center justify-between mb-8">
    <span class="text-xl font-bold text-gray-900">Menu</span>
    <button onclick="document.getElementById('drawer').classList.add('-translate-x-full')"
      class="p-1 rounded-lg hover:bg-gray-100 text-gray-500">✕</button>
  </div>
  <nav class="space-y-1">
    <a href="#" class="block px-3 py-3 rounded-lg text-gray-700 hover:bg-gray-100 font-medium">Home</a>
    <a href="#" class="block px-3 py-3 rounded-lg text-gray-700 hover:bg-gray-100 font-medium">Products</a>
    <a href="#" class="block px-3 py-3 rounded-lg text-gray-700 hover:bg-gray-100 font-medium">Blog</a>
    <a href="#" class="block px-3 py-3 rounded-lg text-gray-700 hover:bg-gray-100 font-medium">Contact</a>
  </nav>
</aside>
```

### 14. Cards & Containers

<h3>81. Build a product card with an image, title, price, and "Add to Cart" button.</h3>

```html
<div class="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 max-w-xs">
  <div class="relative">
    <img src="product.jpg" alt="Wireless Headphones" class="w-full h-52 object-cover" />
    <span class="absolute top-3 left-3 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">Sale</span>
  </div>
  <div class="p-5">
    <p class="text-xs text-gray-400 font-semibold uppercase tracking-wide mb-1">Electronics</p>
    <h3 class="text-lg font-bold text-gray-900">Wireless Headphones</h3>
    <div class="flex items-center gap-2 mt-2 mb-4">
      <span class="text-2xl font-extrabold text-gray-900">$79</span>
      <span class="text-sm text-gray-400 line-through">$129</span>
    </div>
    <button class="w-full bg-blue-600 text-white py-2 rounded-xl font-semibold hover:bg-blue-700 transition-colors">
      Add to Cart
    </button>
  </div>
</div>
```

<h3>82. Create a blog post card with a cover image, category badge, title, excerpt, and author info.</h3>

```html
<article class="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden max-w-sm hover:shadow-lg transition-shadow">
  <img src="blog-cover.jpg" alt="Blog cover" class="w-full h-48 object-cover" />
  <div class="p-6">
    <span class="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-blue-100 text-blue-700 mb-3">
      Tutorial
    </span>
    <h2 class="text-xl font-bold text-gray-900 mb-2">Getting Started with Tailwind CSS</h2>
    <p class="text-gray-500 text-sm leading-relaxed mb-4">
      Learn how to set up Tailwind CSS in your project and start building beautiful UIs rapidly.
    </p>
    <div class="flex items-center gap-3 pt-4 border-t border-gray-100">
      <img src="avatar.jpg" alt="Author" class="w-9 h-9 rounded-full object-cover" />
      <div>
        <p class="text-sm font-semibold text-gray-900">Jane Doe</p>
        <p class="text-xs text-gray-400">May 12, 2025 · 5 min read</p>
      </div>
    </div>
  </div>
</article>
```

<h3>83. Build a pricing card with a highlighted/featured state using <code>ring-2 ring-blue-500 scale-105</code>.</h3>

```html
<div class="grid grid-cols-3 gap-6 max-w-4xl mx-auto p-8 items-center">
  <!-- Basic -->
  <div class="bg-white rounded-2xl border border-gray-200 p-6 text-center">
    <h3 class="text-lg font-bold text-gray-900">Basic</h3>
    <p class="text-4xl font-extrabold text-gray-900 mt-3">$9<span class="text-base font-normal text-gray-400">/mo</span></p>
    <button class="mt-6 w-full border border-blue-600 text-blue-600 py-2 rounded-xl font-semibold hover:bg-blue-50">Choose Basic</button>
  </div>

  <!-- Pro (Featured) -->
  <div class="bg-blue-600 rounded-2xl ring-2 ring-blue-500 scale-105 p-6 text-center shadow-2xl">
    <span class="inline-block bg-white text-blue-600 text-xs font-bold px-3 py-1 rounded-full mb-3">POPULAR</span>
    <h3 class="text-lg font-bold text-white">Pro</h3>
    <p class="text-4xl font-extrabold text-white mt-3">$29<span class="text-base font-normal text-blue-200">/mo</span></p>
    <button class="mt-6 w-full bg-white text-blue-600 py-2 rounded-xl font-bold hover:bg-blue-50">Choose Pro</button>
  </div>

  <!-- Enterprise -->
  <div class="bg-white rounded-2xl border border-gray-200 p-6 text-center">
    <h3 class="text-lg font-bold text-gray-900">Enterprise</h3>
    <p class="text-4xl font-extrabold text-gray-900 mt-3">$99<span class="text-base font-normal text-gray-400">/mo</span></p>
    <button class="mt-6 w-full border border-blue-600 text-blue-600 py-2 rounded-xl font-semibold hover:bg-blue-50">Contact Us</button>
  </div>
</div>
```

<h3>84. Create a team member card with a circular avatar, name, role, and social links.</h3>

```html
<div class="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 text-center max-w-xs">
  <img src="team-member.jpg" alt="Alice Johnson" class="w-20 h-20 rounded-full mx-auto object-cover ring-4 ring-blue-100" />
  <h3 class="text-lg font-bold text-gray-900 mt-4">Alice Johnson</h3>
  <p class="text-sm text-blue-600 font-medium mt-1">Senior Designer</p>
  <p class="text-sm text-gray-500 mt-2">Passionate about creating intuitive user experiences.</p>
  <div class="flex items-center justify-center gap-4 mt-5">
    <a href="#" class="text-gray-400 hover:text-blue-500 transition-colors">
      <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 01-1.93.07 4.28 4.28 0 004 2.98 8.521 8.521 0 01-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z" /></svg>
    </a>
    <a href="#" class="text-gray-400 hover:text-blue-700 transition-colors">
      <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2" /></svg>
    </a>
  </div>
</div>
```

<h3>85. Build a stat card with a large number, label, and trend indicator using flex layout.</h3>

```html
<div class="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 flex items-start justify-between">
  <div>
    <p class="text-sm font-medium text-gray-500">Monthly Revenue</p>
    <p class="text-4xl font-extrabold text-gray-900 mt-2">$48,295</p>
    <div class="flex items-center gap-1 mt-2">
      <svg class="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
      </svg>
      <span class="text-sm font-semibold text-green-600">12.5%</span>
      <span class="text-sm text-gray-400">vs last month</span>
    </div>
  </div>
  <div class="bg-blue-50 p-3 rounded-xl">
    <svg class="w-7 h-7 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  </div>
</div>
```

<h3>86. Create a testimonial card with a quote, author avatar, name, and star rating.</h3>

```html
<div class="bg-white rounded-2xl border border-gray-100 shadow-sm p-8 max-w-md">
  <!-- Stars -->
  <div class="flex gap-1 mb-4">
    <svg class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
    <svg class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
    <svg class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
    <svg class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
    <svg class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
  </div>
  <blockquote class="text-gray-700 text-lg leading-relaxed mb-6">
    "Tailwind CSS transformed how our team builds UIs. We ship twice as fast and our code is cleaner than ever."
  </blockquote>
  <div class="flex items-center gap-4">
    <img src="avatar.jpg" alt="Sarah Chen" class="w-12 h-12 rounded-full object-cover" />
    <div>
      <p class="font-bold text-gray-900">Sarah Chen</p>
      <p class="text-sm text-gray-400">CTO at TechCorp</p>
    </div>
  </div>
</div>
```

<h3>87. Build a notification card with an icon, title, message, and dismiss button using <code>flex items-start gap-3</code>.</h3>

```html
<div class="flex items-start gap-3 bg-white border border-gray-200 rounded-2xl shadow-sm p-4 max-w-sm">
  <div class="flex-shrink-0 bg-blue-50 p-2 rounded-lg">
    <svg class="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  </div>
  <div class="flex-1 min-w-0">
    <p class="text-sm font-semibold text-gray-900">New message received</p>
    <p class="text-sm text-gray-500 mt-0.5">You have 3 unread messages in your inbox.</p>
  </div>
  <button class="flex-shrink-0 text-gray-400 hover:text-gray-600 transition-colors">
    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
    </svg>
  </button>
</div>
```

<h3>88. Create a horizontal media card with a thumbnail on the left and content on the right: <code>flex gap-4 p-4 rounded-xl border</code>.</h3>

```html
<div class="flex gap-4 p-4 rounded-xl border border-gray-100 bg-white shadow-sm max-w-lg hover:shadow-md transition-shadow">
  <img src="thumbnail.jpg" alt="Article thumbnail" class="w-24 h-24 rounded-xl object-cover flex-shrink-0" />
  <div class="flex flex-col justify-between min-w-0">
    <div>
      <span class="text-xs font-semibold text-blue-600 uppercase tracking-wide">Tutorial</span>
      <h3 class="text-base font-bold text-gray-900 mt-1 truncate">Mastering Tailwind CSS Grid Layout</h3>
      <p class="text-sm text-gray-500 mt-1 line-clamp-2">A complete guide to using CSS grid with Tailwind utility classes.</p>
    </div>
    <p class="text-xs text-gray-400 mt-2">Jan 10, 2025</p>
  </div>
</div>
```

<h3>89. Build a glassmorphism card using <code>bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl</code>.</h3>

```html
<div class="min-h-screen bg-gradient-to-br from-purple-600 via-blue-600 to-cyan-500 flex items-center justify-center p-8">
  <div class="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 max-w-sm w-full shadow-2xl">
    <h2 class="text-2xl font-bold text-white mb-2">Glassmorphism Card</h2>
    <p class="text-white/70 mb-6">Beautiful frosted glass effect using backdrop-blur and transparent backgrounds.</p>
    <button class="w-full bg-white/20 hover:bg-white/30 border border-white/30 text-white font-semibold py-2 rounded-xl transition-colors">
      Get Started
    </button>
  </div>
</div>
```

<h3>90. Create a dark mode card that switches styling with <code>dark:bg-gray-800 dark:border-gray-700 dark:text-white</code>.</h3>

```html
<div class="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-sm p-6 max-w-sm">
  <h3 class="text-lg font-bold text-gray-900 dark:text-white">Dark Mode Card</h3>
  <p class="text-gray-500 dark:text-gray-400 mt-2 text-sm leading-relaxed">
    This card automatically adapts its colors based on the current color scheme — light or dark.
  </p>
  <div class="flex items-center justify-between mt-5 pt-4 border-t border-gray-100 dark:border-gray-700">
    <span class="text-xs text-gray-400 dark:text-gray-500">Updated 2 days ago</span>
    <button class="text-sm font-semibold text-blue-600 dark:text-blue-400 hover:underline">View Details</button>
  </div>
</div>
```

### 15. Dark Mode & Theming

<h3>91. Build a dark mode toggle button that adds/removes <code>dark</code> class from the <code>&lt;html&gt;</code> element.</h3>

```html
<button
  id="dark-toggle"
  onclick="document.documentElement.classList.toggle('dark')"
  class="p-2 rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200
         hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
  aria-label="Toggle dark mode"
>
  <!-- Sun icon (visible in dark mode) -->
  <svg class="w-5 h-5 hidden dark:block" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
      d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
  </svg>
  <!-- Moon icon (visible in light mode) -->
  <svg class="w-5 h-5 block dark:hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
      d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
  </svg>
</button>
```

<h3>92. Create a page layout with full dark mode support: <code>bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100</code>.</h3>

```html
<html lang="en" class="dark">
<body class="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen transition-colors duration-300">
  <header class="border-b border-gray-200 dark:border-gray-800 px-6 py-4">
    <nav class="flex justify-between items-center max-w-6xl mx-auto">
      <span class="text-xl font-bold">MyApp</span>
      <button onclick="document.documentElement.classList.toggle('dark')"
        class="px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-sm font-medium hover:bg-gray-200 dark:hover:bg-gray-700">
        Toggle Theme
      </button>
    </nav>
  </header>
  <main class="max-w-6xl mx-auto px-6 py-12">
    <h1 class="text-4xl font-bold mb-4">Welcome</h1>
    <p class="text-gray-600 dark:text-gray-400 text-lg">Full dark mode page layout example.</p>
  </main>
</body>
</html>
```

<h3>93. Style a card for dark mode: <code>bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6</code>.</h3>

```html
<div class="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6 max-w-sm shadow-sm">
  <h3 class="font-bold text-gray-900 dark:text-white text-lg">Card Title</h3>
  <p class="text-gray-500 dark:text-gray-400 mt-2 text-sm">
    This card looks great in both light and dark modes.
  </p>
  <button class="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-semibold transition-colors">
    Action
  </button>
</div>
```

<h3>94. Build a form input with dark mode styles: <code>bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white</code>.</h3>

```html
<div class="max-w-sm space-y-4">
  <div>
    <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email</label>
    <input
      type="email"
      placeholder="you@example.com"
      class="w-full bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600
             text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500
             rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
    />
  </div>
</div>
```

<h3>95. Create a navigation bar with <code>bg-white dark:bg-gray-900 shadow dark:shadow-gray-800</code>.</h3>

```html
<header class="sticky top-0 z-50 bg-white dark:bg-gray-900 shadow dark:shadow-gray-800 transition-colors">
  <div class="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
    <a href="#" class="text-xl font-bold text-gray-900 dark:text-white">Logo</a>
    <nav class="flex items-center space-x-6">
      <a href="#" class="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white text-sm font-medium">Features</a>
      <a href="#" class="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white text-sm font-medium">Pricing</a>
      <button class="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-blue-700">Sign Up</button>
    </nav>
  </div>
</header>
```

<h3>96. Build a custom color theme by adding brand colors in <code>tailwind.config.js</code> and using them throughout a UI.</h3>

```js
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        brand: {
          50:  '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          900: '#1e3a8a',
        },
      },
    },
  },
}
```

```html
<!-- Using brand colors -->
<button class="bg-brand-600 hover:bg-brand-700 text-white px-6 py-2 rounded-lg font-semibold">
  Brand Button
</button>
<span class="bg-brand-100 text-brand-700 px-3 py-1 rounded-full text-sm font-medium">
  Brand Badge
</span>
```

<h3>97. Create a <code>prefers-color-scheme</code> dark mode setup using <code>darkMode: 'media'</code> instead of class-based toggling.</h3>

```js
// tailwind.config.js
module.exports = {
  darkMode: 'media', // Respects OS preference automatically
  // ... rest of config
}
```

```html
<!-- No JS needed — OS preference drives dark mode automatically -->
<body class="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
  <div class="max-w-4xl mx-auto p-8">
    <h1 class="text-4xl font-bold">Respects Your System Theme</h1>
    <p class="text-gray-600 dark:text-gray-400 mt-4">
      This page automatically uses dark mode if your operating system is set to dark mode.
    </p>
    <div class="mt-8 p-6 bg-gray-100 dark:bg-gray-800 rounded-xl">
      <p class="text-gray-800 dark:text-gray-200">Auto-adapting card content.</p>
    </div>
  </div>
</body>
```

<h3>98. Style code blocks for dark mode using <code>bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-md p-4 font-mono</code>.</h3>

```html
<div class="max-w-2xl mx-auto p-6">
  <h2 class="text-lg font-bold text-gray-900 dark:text-white mb-3">Code Example</h2>
  <pre class="bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-md p-4 font-mono text-sm overflow-x-auto">
<code>const greeting = (name) => {
  return `Hello, ${name}!`;
};

console.log(greeting('World'));</code>
  </pre>
</div>
```

<h3>99. Build a dark mode aware hero section with a background image that changes opacity.</h3>

```html
<section class="relative min-h-screen bg-gray-900 flex items-center justify-center overflow-hidden">
  <!-- Background image with opacity that changes in dark mode -->
  <div class="absolute inset-0 bg-cover bg-center opacity-30 dark:opacity-10"
       style="background-image: url('hero-bg.jpg')"></div>
  <!-- Gradient overlay -->
  <div class="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900/80"></div>
  <!-- Content -->
  <div class="relative z-10 text-center text-white px-6">
    <h1 class="text-5xl font-extrabold mb-4">Hero Section</h1>
    <p class="text-xl text-gray-300 max-w-xl mx-auto">
      Background image opacity adapts to dark/light mode.
    </p>
    <button class="mt-8 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl font-semibold">
      Get Started
    </button>
  </div>
</section>
```

<h3>100. Create a complete dark mode stylesheet for a landing page covering header, hero, features, pricing, and footer sections.</h3>

```html
<!DOCTYPE html>
<html lang="en" class="dark">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Dark Mode Landing Page</title>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 transition-colors duration-300">

  <!-- Header -->
  <header class="sticky top-0 z-50 bg-white/80 dark:bg-gray-950/80 backdrop-blur border-b border-gray-200 dark:border-gray-800">
    <div class="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
      <span class="text-xl font-bold text-blue-600">SaaSApp</span>
      <nav class="flex items-center gap-6 text-sm font-medium">
        <a href="#" class="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">Features</a>
        <a href="#" class="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">Pricing</a>
        <button class="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">Sign Up</button>
      </nav>
    </div>
  </header>

  <!-- Hero -->
  <section class="py-24 px-6 text-center bg-gradient-to-b from-blue-50 dark:from-gray-900 to-white dark:to-gray-950">
    <h1 class="text-5xl font-extrabold text-gray-900 dark:text-white mb-6">Build Faster</h1>
    <p class="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8">The best platform for modern web development.</p>
    <button class="bg-blue-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-700">
      Get Started Free
    </button>
  </section>

  <!-- Features -->
  <section class="py-16 px-6 bg-white dark:bg-gray-900">
    <div class="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
      <div class="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 border border-gray-100 dark:border-gray-700">
        <h3 class="font-bold text-gray-900 dark:text-white text-lg mb-2">🚀 Fast</h3>
        <p class="text-gray-500 dark:text-gray-400 text-sm">Lightning performance out of the box.</p>
      </div>
      <div class="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 border border-gray-100 dark:border-gray-700">
        <h3 class="font-bold text-gray-900 dark:text-white text-lg mb-2">🔒 Secure</h3>
        <p class="text-gray-500 dark:text-gray-400 text-sm">Enterprise-grade security built in.</p>
      </div>
      <div class="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 border border-gray-100 dark:border-gray-700">
        <h3 class="font-bold text-gray-900 dark:text-white text-lg mb-2">🎨 Beautiful</h3>
        <p class="text-gray-500 dark:text-gray-400 text-sm">Stunning designs that convert.</p>
      </div>
    </div>
  </section>

  <!-- Footer -->
  <footer class="bg-gray-900 dark:bg-gray-950 text-white py-12 px-6 border-t border-gray-800">
    <div class="max-w-6xl mx-auto flex justify-between items-center">
      <span class="font-bold text-blue-400">SaaSApp</span>
      <p class="text-gray-500 text-sm">© 2025 SaaSApp. All rights reserved.</p>
    </div>
  </footer>

</body>
</html>
```

---

> ## 🟠 Level 3: Professional (101 - 150)

### 16. Custom Configuration

<h3>101. Extend <code>tailwind.config.js</code> to add a custom <code>brand</code> color palette with <code>light</code>, <code>DEFAULT</code>, and <code>dark</code> shades.</h3>

```js
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        brand: {
          light:   '#60a5fa', // blue-400
          DEFAULT: '#2563eb', // blue-600
          dark:    '#1e40af', // blue-800
        },
      },
    },
  },
}
```

```html
<!-- Usage -->
<button class="bg-brand text-white hover:bg-brand-dark px-5 py-2 rounded-lg">
  Primary Action
</button>
<span class="bg-brand-light/20 text-brand px-3 py-1 rounded-full text-sm font-medium">
  Brand Label
</span>
```

<h3>102. Add a custom <code>128</code> and <code>144</code> spacing value to the Tailwind config and use them in a layout.</h3>

```js
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
    },
  },
}
```

```html
<!-- Usage -->
<aside class="w-128 min-h-screen bg-gray-900 text-white px-6 py-8">
  <p class="text-lg">Fixed 32rem sidebar</p>
</aside>

<div class="h-144 bg-gradient-to-b from-blue-600 to-indigo-700 flex items-center justify-center">
  <h1 class="text-4xl font-bold text-white">Tall Hero — 36rem</h1>
</div>
```

<h3>103. Define a custom <code>display</code> breakpoint at <code>1400px</code> and apply it in a responsive grid.</h3>

```js
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      screens: {
        'display': '1400px',
      },
    },
  },
}
```

```html
<!-- 2 cols → 3 cols → 4 cols → 5 cols at 1400px -->
<div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 display:grid-cols-5 gap-4 p-6">
  <div class="bg-white rounded-xl p-4 shadow-sm border border-gray-100">Item 1</div>
  <div class="bg-white rounded-xl p-4 shadow-sm border border-gray-100">Item 2</div>
  <div class="bg-white rounded-xl p-4 shadow-sm border border-gray-100">Item 3</div>
  <div class="bg-white rounded-xl p-4 shadow-sm border border-gray-100">Item 4</div>
  <div class="bg-white rounded-xl p-4 shadow-sm border border-gray-100">Item 5</div>
</div>
```

<h3>104. Add a custom font family (<code>'Inter', sans-serif</code>) to the config and apply it as the default sans font.</h3>

```js
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
    },
  },
}
```

```html
<!-- In your HTML head -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">

<!-- Font is applied to all elements via the default sans stack -->
<body class="font-sans">
  <h1 class="text-4xl font-bold">Inter Font Heading</h1>
  <p class="text-base text-gray-600">Body text using the Inter font family.</p>
</body>
```

<h3>105. Create a custom animation (<code>fadeIn</code>) in <code>tailwind.config.js</code> and use it on a modal enter transition.</h3>

```js
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      keyframes: {
        fadeIn: {
          '0%':   { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.25s ease-out forwards',
      },
    },
  },
}
```

```html
<div class="fixed inset-0 bg-black/50 z-50 flex items-center justify-center">
  <div class="animate-fade-in bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full mx-4">
    <h2 class="text-xl font-bold text-gray-900 mb-3">Modal Title</h2>
    <p class="text-gray-600 mb-6">This modal fades in using the custom fadeIn animation.</p>
    <button class="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700">
      Close
    </button>
  </div>
</div>
```

<h3>106. Define a custom box shadow (<code>shadow-soft</code>) and apply it to all card components.</h3>

```js
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      boxShadow: {
        soft: '0 4px 24px -2px rgba(0, 0, 0, 0.08), 0 2px 8px -2px rgba(0, 0, 0, 0.04)',
      },
    },
  },
}
```

```html
<!-- Cards using the custom shadow -->
<div class="grid grid-cols-3 gap-6 p-8">
  <div class="bg-white rounded-2xl shadow-soft p-6">
    <h3 class="font-bold text-gray-900">Feature One</h3>
    <p class="text-gray-500 mt-2 text-sm">Soft shadow card.</p>
  </div>
  <div class="bg-white rounded-2xl shadow-soft p-6">
    <h3 class="font-bold text-gray-900">Feature Two</h3>
    <p class="text-gray-500 mt-2 text-sm">Same soft shadow.</p>
  </div>
  <div class="bg-white rounded-2xl shadow-soft p-6">
    <h3 class="font-bold text-gray-900">Feature Three</h3>
    <p class="text-gray-500 mt-2 text-sm">Consistent elevation.</p>
  </div>
</div>
```

<h3>107. Configure the <code>container</code> to be centered with <code>2rem</code> horizontal padding by default.</h3>

```js
// tailwind.config.js
module.exports = {
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        sm:  '100%',
        md:  '100%',
        lg:  '1024px',
        xl:  '1280px',
        '2xl': '1400px',
      },
    },
  },
}
```

```html
<!-- The container class is now centered with 2rem padding automatically -->
<div class="container">
  <h1 class="text-4xl font-bold text-gray-900">Centered Container</h1>
  <p class="text-gray-600 mt-4">Padded and centered without extra utility classes.</p>
</div>
```

<h3>108. Add a custom <code>line-clamp-4</code> variant by extending the Tailwind typography line-clamp utilities.</h3>

```js
// tailwind.config.js
// In modern Tailwind v3.3+, line-clamp is built-in (line-clamp-{n})
// For older versions or custom values, extend as below:
module.exports = {
  theme: {
    extend: {
      lineClamp: {
        4: '4',
        7: '7',
        8: '8',
      },
    },
  },
}
```

```html
<!-- Using the line-clamp utility -->
<div class="max-w-sm">
  <p class="line-clamp-4 text-gray-600 leading-relaxed">
    This is a very long paragraph that will be clamped to exactly 4 lines.
    Any overflow text will be hidden and an ellipsis will appear at the end.
    This is useful for article cards, product descriptions, and any other
    place where you want consistent text heights across a grid of cards.
    This extra text won't be visible because we're clamping at 4 lines.
  </p>
</div>
```

<h3>109. Configure <code>safelist</code> in <code>tailwind.config.js</code> to always include all <code>bg-{color}-{shade}</code> classes for a dynamic color picker.</h3>

```js
// tailwind.config.js
const colors = require('tailwindcss/colors');

module.exports = {
  safelist: [
    {
      pattern: /bg-(red|orange|yellow|green|blue|indigo|purple|pink)-(100|200|300|400|500|600|700|800|900)/,
      variants: ['hover'],
    },
    {
      pattern: /text-(red|orange|yellow|green|blue|indigo|purple|pink)-(100|200|300|400|500|600|700|800|900)/,
    },
  ],
}
```

```html
<!-- Dynamic color picker using safelisted classes -->
<div class="flex flex-wrap gap-2 p-4">
  <button data-color="bg-red-500"   class="w-8 h-8 rounded-full bg-red-500   hover:ring-2 hover:ring-red-500   hover:ring-offset-2"></button>
  <button data-color="bg-blue-500"  class="w-8 h-8 rounded-full bg-blue-500  hover:ring-2 hover:ring-blue-500  hover:ring-offset-2"></button>
  <button data-color="bg-green-500" class="w-8 h-8 rounded-full bg-green-500 hover:ring-2 hover:ring-green-500 hover:ring-offset-2"></button>
</div>
```

<h3>110. Set <code>darkMode: 'class'</code> and verify that <code>dark:</code> utilities are applied correctly when toggling the <code>dark</code> class on <code>&lt;html&gt;</code>.</h3>

```js
// tailwind.config.js
module.exports = {
  darkMode: 'class', // Toggle dark mode by adding/removing 'dark' from <html>
  theme: { extend: {} },
  plugins: [],
}
```

```html
<!DOCTYPE html>
<html lang="en" class="dark">
<head>
  <script>
    // Persist preference
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  </script>
</head>
<body class="bg-white dark:bg-gray-900 transition-colors min-h-screen">
  <button
    onclick="
      document.documentElement.classList.toggle('dark');
      localStorage.theme = document.documentElement.classList.contains('dark') ? 'dark' : 'light';
    "
    class="fixed top-4 right-4 p-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200 rounded-xl"
  >
    Toggle Dark
  </button>
  <main class="p-12 text-center">
    <h1 class="text-4xl font-bold text-gray-900 dark:text-white">Dark Mode Active!</h1>
    <p class="text-gray-600 dark:text-gray-400 mt-4">Class-based dark mode with localStorage persistence.</p>
  </main>
</body>
</html>
```

### 17. Responsive Layouts (Advanced)

<h3>111. Build a 12-column CSS grid layout using <code>grid-cols-12</code> with varying <code>col-span</code> values for different sections.</h3>

```html
<div class="grid grid-cols-12 gap-4 p-6 max-w-6xl mx-auto">
  <!-- Full-width header -->
  <header class="col-span-12 bg-blue-600 rounded-xl p-5 text-white font-bold text-xl">
    Full Width Header (12/12)
  </header>

  <!-- Main content (8 cols) -->
  <main class="col-span-8 bg-white rounded-xl p-6 shadow-sm border border-gray-100">
    <h2 class="text-xl font-bold text-gray-900 mb-3">Main Content (8/12)</h2>
    <p class="text-gray-600">Primary content area for articles, forms, or data tables.</p>
  </main>

  <!-- Sidebar (4 cols) -->
  <aside class="col-span-4 bg-gray-50 rounded-xl p-5 border border-gray-200">
    <h3 class="font-bold text-gray-900 mb-2">Sidebar (4/12)</h3>
    <p class="text-gray-500 text-sm">Related content, ads, or navigation.</p>
  </aside>

  <!-- Half-width cards -->
  <div class="col-span-6 bg-green-50 rounded-xl p-4 border border-green-100">Card A (6/12)</div>
  <div class="col-span-6 bg-pink-50 rounded-xl p-4 border border-pink-100">Card B (6/12)</div>

  <!-- Full footer -->
  <footer class="col-span-12 bg-gray-900 text-gray-400 rounded-xl p-4 text-center text-sm">
    Footer (12/12)
  </footer>
</div>
```

<h3>112. Create a responsive magazine layout where a featured article spans <code>col-span-8</code> and a sidebar spans <code>col-span-4</code>.</h3>

```html
<div class="max-w-6xl mx-auto grid grid-cols-12 gap-6 px-6 py-10">
  <!-- Featured Article -->
  <article class="col-span-12 lg:col-span-8">
    <img src="featured.jpg" alt="Featured" class="w-full h-72 object-cover rounded-2xl" />
    <div class="mt-5">
      <span class="text-xs font-bold uppercase text-blue-600 tracking-widest">Featured</span>
      <h1 class="text-3xl font-extrabold text-gray-900 mt-2 mb-3">The Future of Web Development in 2025</h1>
      <p class="text-gray-600 leading-relaxed">An in-depth look at upcoming trends, tools, and technologies shaping the modern web.</p>
    </div>
  </article>

  <!-- Sidebar: Secondary Articles -->
  <aside class="col-span-12 lg:col-span-4 space-y-5">
    <article class="flex gap-3">
      <img src="thumb1.jpg" alt="Article" class="w-20 h-20 object-cover rounded-xl flex-shrink-0" />
      <div>
        <span class="text-xs font-semibold text-pink-600">Design</span>
        <h3 class="font-bold text-gray-900 text-sm mt-0.5">New Figma Patterns for 2025</h3>
        <p class="text-xs text-gray-400 mt-1">3 min read</p>
      </div>
    </article>
    <article class="flex gap-3">
      <img src="thumb2.jpg" alt="Article" class="w-20 h-20 object-cover rounded-xl flex-shrink-0" />
      <div>
        <span class="text-xs font-semibold text-green-600">Dev</span>
        <h3 class="font-bold text-gray-900 text-sm mt-0.5">React 19 Features Explained</h3>
        <p class="text-xs text-gray-400 mt-1">5 min read</p>
      </div>
    </article>
  </aside>
</div>
```

<h3>113. Build a responsive masonry photo gallery using CSS <code>columns-2 md:columns-3 lg:columns-4</code> with <code>break-inside-avoid</code>.</h3>

```html
<div class="columns-2 md:columns-3 lg:columns-4 gap-4 p-6">
  <figure class="break-inside-avoid mb-4">
    <img src="photo1.jpg" alt="Landscape" class="w-full rounded-xl object-cover" />
  </figure>
  <figure class="break-inside-avoid mb-4">
    <img src="photo2.jpg" alt="Portrait" class="w-full rounded-xl object-cover" />
  </figure>
  <figure class="break-inside-avoid mb-4">
    <img src="photo3.jpg" alt="Square" class="w-full rounded-xl object-cover" />
  </figure>
  <figure class="break-inside-avoid mb-4">
    <img src="photo4.jpg" alt="Wide" class="w-full rounded-xl object-cover" />
  </figure>
  <figure class="break-inside-avoid mb-4">
    <img src="photo5.jpg" alt="Tall" class="w-full rounded-xl object-cover" />
  </figure>
  <figure class="break-inside-avoid mb-4">
    <img src="photo6.jpg" alt="Medium" class="w-full rounded-xl object-cover" />
  </figure>
</div>
```

<h3>114. Create a responsive data table that collapses to a card layout on mobile using <code>block md:table</code> utility switching.</h3>

```html
<div class="p-4">
  <table class="block md:table w-full text-sm">
    <thead class="hidden md:table-header-group bg-gray-50 border-b border-gray-200">
      <tr>
        <th class="text-left px-4 py-3 font-semibold text-gray-700">Name</th>
        <th class="text-left px-4 py-3 font-semibold text-gray-700">Role</th>
        <th class="text-left px-4 py-3 font-semibold text-gray-700">Status</th>
        <th class="text-left px-4 py-3 font-semibold text-gray-700">Actions</th>
      </tr>
    </thead>
    <tbody class="block md:table-row-group">
      <tr class="block md:table-row bg-white mb-4 rounded-xl shadow border border-gray-100 md:border-0 md:shadow-none md:rounded-none md:border-b md:border-gray-200">
        <td class="block md:table-cell px-4 py-3 before:content-['Name:_'] before:font-semibold before:text-gray-500 md:before:content-none text-gray-900">Alice Johnson</td>
        <td class="block md:table-cell px-4 py-3 before:content-['Role:_'] before:font-semibold before:text-gray-500 md:before:content-none text-gray-600">Designer</td>
        <td class="block md:table-cell px-4 py-3">
          <span class="inline-block bg-green-100 text-green-700 text-xs font-semibold px-2 py-0.5 rounded-full">Active</span>
        </td>
        <td class="block md:table-cell px-4 py-3">
          <a href="#" class="text-blue-600 hover:underline text-sm">Edit</a>
        </td>
      </tr>
    </tbody>
  </table>
</div>
```

<h3>115. Build a responsive pricing page with 3 tiers displayed in <code>grid-cols-1 md:grid-cols-3</code> with a featured card scaled up.</h3>

```html
<section class="py-20 px-6 bg-gray-50">
  <div class="max-w-5xl mx-auto text-center mb-12">
    <h2 class="text-4xl font-extrabold text-gray-900">Simple, Transparent Pricing</h2>
    <p class="text-gray-500 mt-3 text-lg">No hidden fees. Cancel anytime.</p>
  </div>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto items-center">
    <!-- Starter -->
    <div class="bg-white rounded-2xl border border-gray-200 p-8">
      <h3 class="text-lg font-bold text-gray-900">Starter</h3>
      <p class="text-4xl font-extrabold text-gray-900 mt-4">$9<span class="text-base font-normal text-gray-400">/mo</span></p>
      <ul class="mt-6 space-y-3 text-sm text-gray-600">
        <li>✓ 5 projects</li><li>✓ 10 GB storage</li><li>✓ Email support</li>
      </ul>
      <button class="mt-8 w-full border border-gray-300 text-gray-700 py-2 rounded-xl font-semibold hover:bg-gray-50">Get Started</button>
    </div>

    <!-- Pro (Featured) -->
    <div class="bg-blue-600 rounded-2xl p-8 scale-105 shadow-2xl relative">
      <span class="absolute -top-3 left-1/2 -translate-x-1/2 bg-yellow-400 text-yellow-900 text-xs font-bold px-4 py-1 rounded-full">POPULAR</span>
      <h3 class="text-lg font-bold text-white">Pro</h3>
      <p class="text-4xl font-extrabold text-white mt-4">$29<span class="text-base font-normal text-blue-200">/mo</span></p>
      <ul class="mt-6 space-y-3 text-sm text-blue-100">
        <li>✓ Unlimited projects</li><li>✓ 100 GB storage</li><li>✓ Priority support</li>
      </ul>
      <button class="mt-8 w-full bg-white text-blue-600 py-2 rounded-xl font-bold hover:bg-blue-50">Get Started</button>
    </div>

    <!-- Enterprise -->
    <div class="bg-white rounded-2xl border border-gray-200 p-8">
      <h3 class="text-lg font-bold text-gray-900">Enterprise</h3>
      <p class="text-4xl font-extrabold text-gray-900 mt-4">$99<span class="text-base font-normal text-gray-400">/mo</span></p>
      <ul class="mt-6 space-y-3 text-sm text-gray-600">
        <li>✓ Everything in Pro</li><li>✓ 1 TB storage</li><li>✓ Dedicated support</li>
      </ul>
      <button class="mt-8 w-full border border-blue-600 text-blue-600 py-2 rounded-xl font-semibold hover:bg-blue-50">Contact Sales</button>
    </div>
  </div>
</section>
```

<h3>116. Create a complex dashboard layout with a fixed sidebar, a scrollable main area, and a sticky top bar.</h3>

```html
<div class="flex h-screen overflow-hidden bg-gray-100">
  <!-- Fixed Sidebar -->
  <aside class="w-60 flex-shrink-0 bg-gray-900 text-white flex flex-col overflow-y-auto">
    <div class="px-5 py-6 border-b border-gray-800">
      <span class="text-lg font-bold">Dashboard</span>
    </div>
    <nav class="flex-1 px-3 py-4 space-y-1">
      <a href="#" class="flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-700 text-white text-sm font-medium">Overview</a>
      <a href="#" class="flex items-center gap-2 px-3 py-2 rounded-lg text-gray-400 hover:bg-gray-800 text-sm font-medium">Analytics</a>
      <a href="#" class="flex items-center gap-2 px-3 py-2 rounded-lg text-gray-400 hover:bg-gray-800 text-sm font-medium">Reports</a>
      <a href="#" class="flex items-center gap-2 px-3 py-2 rounded-lg text-gray-400 hover:bg-gray-800 text-sm font-medium">Settings</a>
    </nav>
  </aside>

  <!-- Main Area with Sticky Top Bar -->
  <div class="flex-1 flex flex-col overflow-hidden">
    <!-- Sticky Top Bar -->
    <header class="sticky top-0 z-10 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between shadow-sm">
      <h1 class="text-lg font-bold text-gray-900">Overview</h1>
      <div class="flex items-center gap-3">
        <input type="text" placeholder="Search..." class="border border-gray-300 rounded-lg px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
        <img src="avatar.jpg" alt="User" class="w-8 h-8 rounded-full object-cover" />
      </div>
    </header>
    <!-- Scrollable Content -->
    <main class="flex-1 overflow-y-auto p-6">
      <div class="grid grid-cols-4 gap-4 mb-8">
        <div class="bg-white rounded-xl p-5 shadow-sm border border-gray-100"><p class="text-sm text-gray-500">Users</p><p class="text-2xl font-bold text-gray-900 mt-1">12,430</p></div>
        <div class="bg-white rounded-xl p-5 shadow-sm border border-gray-100"><p class="text-sm text-gray-500">Revenue</p><p class="text-2xl font-bold text-gray-900 mt-1">$48,295</p></div>
        <div class="bg-white rounded-xl p-5 shadow-sm border border-gray-100"><p class="text-sm text-gray-500">Orders</p><p class="text-2xl font-bold text-gray-900 mt-1">1,893</p></div>
        <div class="bg-white rounded-xl p-5 shadow-sm border border-gray-100"><p class="text-sm text-gray-500">Conversion</p><p class="text-2xl font-bold text-gray-900 mt-1">3.2%</p></div>
      </div>
      <div class="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
        <h2 class="font-bold text-gray-900 mb-4">Recent Activity</h2>
        <p class="text-gray-500 text-sm">More scrollable content here...</p>
      </div>
    </main>
  </div>
</div>
```

<h3>117. Build a split-screen landing page with sticky text on one side and a scrollable image gallery on the other.</h3>

```html
<div class="flex min-h-screen">
  <!-- Sticky Left Side -->
  <div class="w-1/2 sticky top-0 h-screen bg-blue-600 flex items-center justify-center p-12">
    <div class="text-white max-w-sm">
      <h1 class="text-4xl font-extrabold mb-4">Our Work</h1>
      <p class="text-blue-200 text-lg leading-relaxed">
        Scroll through our portfolio of exceptional designs and projects.
      </p>
      <button class="mt-8 bg-white text-blue-600 px-6 py-3 rounded-xl font-bold hover:bg-blue-50">
        Start a Project
      </button>
    </div>
  </div>

  <!-- Scrollable Right Side -->
  <div class="w-1/2 overflow-y-auto">
    <div class="space-y-4 p-8">
      <img src="project1.jpg" alt="Project 1" class="w-full rounded-2xl object-cover h-72" />
      <img src="project2.jpg" alt="Project 2" class="w-full rounded-2xl object-cover h-64" />
      <img src="project3.jpg" alt="Project 3" class="w-full rounded-2xl object-cover h-80" />
      <img src="project4.jpg" alt="Project 4" class="w-full rounded-2xl object-cover h-72" />
    </div>
  </div>
</div>
```

<h3>118. Create a responsive timeline component that is vertical on mobile and horizontal on desktop.</h3>

```html
<!-- Vertical on mobile, horizontal on desktop -->
<section class="py-16 px-6">
  <h2 class="text-3xl font-bold text-gray-900 text-center mb-12">Our Journey</h2>

  <!-- Horizontal on desktop -->
  <div class="hidden md:flex items-start gap-0 max-w-5xl mx-auto">
    <div class="flex-1 text-center">
      <div class="w-8 h-8 bg-blue-600 rounded-full mx-auto flex items-center justify-center text-white font-bold text-xs">1</div>
      <div class="h-0.5 bg-blue-200 mt-4 -mx-4"></div>
      <h3 class="font-bold text-gray-900 mt-4">Founded</h3>
      <p class="text-sm text-gray-500 mt-1">2020 — Started with a vision.</p>
    </div>
    <div class="flex-1 text-center">
      <div class="w-8 h-8 bg-blue-600 rounded-full mx-auto flex items-center justify-center text-white font-bold text-xs">2</div>
      <h3 class="font-bold text-gray-900 mt-4">Launched</h3>
      <p class="text-sm text-gray-500 mt-1">2021 — First product shipped.</p>
    </div>
    <div class="flex-1 text-center">
      <div class="w-8 h-8 bg-blue-600 rounded-full mx-auto flex items-center justify-center text-white font-bold text-xs">3</div>
      <h3 class="font-bold text-gray-900 mt-4">Scaled</h3>
      <p class="text-sm text-gray-500 mt-1">2023 — 100k users reached.</p>
    </div>
    <div class="flex-1 text-center">
      <div class="w-8 h-8 bg-blue-600 rounded-full mx-auto flex items-center justify-center text-white font-bold text-xs">4</div>
      <h3 class="font-bold text-gray-900 mt-4">Today</h3>
      <p class="text-sm text-gray-500 mt-1">2025 — Global expansion.</p>
    </div>
  </div>

  <!-- Vertical on mobile -->
  <div class="md:hidden space-y-8 max-w-sm mx-auto">
    <div class="flex gap-4">
      <div class="flex flex-col items-center">
        <div class="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xs flex-shrink-0">1</div>
        <div class="w-0.5 flex-1 bg-blue-200 mt-2"></div>
      </div>
      <div class="pb-8">
        <h3 class="font-bold text-gray-900">Founded — 2020</h3>
        <p class="text-sm text-gray-500 mt-1">Started with a vision.</p>
      </div>
    </div>
    <div class="flex gap-4">
      <div class="flex flex-col items-center">
        <div class="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xs flex-shrink-0">2</div>
      </div>
      <div>
        <h3 class="font-bold text-gray-900">Today — 2025</h3>
        <p class="text-sm text-gray-500 mt-1">Global expansion.</p>
      </div>
    </div>
  </div>
</section>
```

<h3>119. Build a container queries based card that changes its internal layout based on the container width, not the viewport.</h3>

```html
<!-- Requires @tailwindcss/container-queries plugin or Tailwind v3.2+ -->
<div class="@container bg-white rounded-2xl shadow border border-gray-100 overflow-hidden">
  <!-- Stacks vertically in narrow containers, side-by-side in wider ones -->
  <div class="flex flex-col @md:flex-row">
    <img src="card-image.jpg" alt="Card" class="w-full @md:w-48 h-48 object-cover flex-shrink-0" />
    <div class="p-5">
      <h3 class="font-bold text-gray-900 text-lg">Responsive Card</h3>
      <p class="text-gray-500 text-sm mt-2">
        This card's layout responds to its container width, not the viewport.
        It's perfect for reusable components in variable-width contexts.
      </p>
      <button class="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-blue-700">
        Learn More
      </button>
    </div>
  </div>
</div>
```

<h3>120. Create a fluid typography scale using <code>clamp()</code> via arbitrary values: <code>text-[clamp(1.25rem,3vw,2.5rem)]</code>.</h3>

```html
<section class="py-16 px-6 max-w-4xl mx-auto">
  <h1 class="text-[clamp(1.75rem,5vw,4rem)] font-extrabold text-gray-900 mb-4">
    Fluid Heading That Scales Smoothly
  </h1>
  <h2 class="text-[clamp(1.25rem,3vw,2.5rem)] font-bold text-gray-700 mb-6">
    Subheading with Fluid Type
  </h2>
  <p class="text-[clamp(0.9rem,1.5vw,1.125rem)] text-gray-600 leading-relaxed max-w-2xl">
    This paragraph uses fluid typography. The font size scales smoothly between
    a minimum and maximum value using CSS clamp(), eliminating the need for
    multiple responsive breakpoints.
  </p>
</section>
```

### 18. Animations & Transitions

<h3>121. Build a button with a smooth color transition on hover: <code>transition-colors duration-300 ease-in-out</code>.</h3>

```html
<div class="flex gap-4 p-8">
  <button class="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold
                 transition-colors duration-300 ease-in-out">
    Primary
  </button>
  <button class="bg-white hover:bg-gray-50 text-gray-900 border border-gray-300 px-6 py-2 rounded-lg font-semibold
                 transition-colors duration-300 ease-in-out">
    Secondary
  </button>
  <button class="text-red-600 hover:bg-red-50 px-6 py-2 rounded-lg font-semibold
                 transition-colors duration-300 ease-in-out">
    Danger
  </button>
</div>
```

<h3>122. Create a modal that fades in using a custom <code>animate-fade-in</code> animation and a backdrop.</h3>

```html
<!-- Requires custom animation in tailwind.config.js:
  keyframes: { fadeIn: { '0%': { opacity: '0', transform: 'scale(0.95)' }, '100%': { opacity: '1', transform: 'scale(1)' } } }
  animation: { 'fade-in': 'fadeIn 0.2s ease-out' }
-->
<div class="fixed inset-0 z-50 flex items-center justify-center">
  <!-- Backdrop -->
  <div class="absolute inset-0 bg-black/50 animate-pulse"></div>
  <!-- Modal -->
  <div class="animate-fade-in relative bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full mx-4 z-10">
    <h2 class="text-xl font-bold text-gray-900 mb-3">Confirmation</h2>
    <p class="text-gray-600 mb-6">Are you sure you want to proceed with this action?</p>
    <div class="flex gap-3 justify-end">
      <button class="px-4 py-2 text-sm font-medium text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50">
        Cancel
      </button>
      <button class="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700">
        Confirm
      </button>
    </div>
  </div>
</div>
```

<h3>123. Build a skeleton loading card using <code>animate-pulse</code> with gray placeholder blocks.</h3>

```html
<div class="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden max-w-sm animate-pulse">
  <!-- Image placeholder -->
  <div class="w-full h-48 bg-gray-200"></div>
  <div class="p-5">
    <!-- Badge placeholder -->
    <div class="w-16 h-4 bg-gray-200 rounded-full mb-3"></div>
    <!-- Title placeholder -->
    <div class="w-3/4 h-5 bg-gray-200 rounded-lg mb-2"></div>
    <div class="w-1/2 h-5 bg-gray-200 rounded-lg mb-4"></div>
    <!-- Text lines -->
    <div class="space-y-2 mb-5">
      <div class="w-full h-3 bg-gray-200 rounded"></div>
      <div class="w-full h-3 bg-gray-200 rounded"></div>
      <div class="w-5/6 h-3 bg-gray-200 rounded"></div>
    </div>
    <!-- Author row -->
    <div class="flex items-center gap-3 pt-4 border-t border-gray-100">
      <div class="w-9 h-9 bg-gray-200 rounded-full"></div>
      <div class="space-y-1.5">
        <div class="w-24 h-3 bg-gray-200 rounded"></div>
        <div class="w-16 h-2.5 bg-gray-200 rounded"></div>
      </div>
    </div>
  </div>
</div>
```

<h3>124. Create a notification toast that slides in from the top using <code>transition-transform translate-y-0</code> from <code>-translate-y-full</code>.</h3>

```html
<!-- Toast Component (JS toggles translate-y classes) -->
<div
  id="toast"
  class="fixed top-4 right-4 z-50 flex items-center gap-3 bg-white border border-gray-200 rounded-xl
         shadow-lg px-5 py-3 transform -translate-y-full transition-transform duration-300 ease-out"
>
  <div class="bg-green-100 p-1.5 rounded-lg">
    <svg class="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
    </svg>
  </div>
  <div>
    <p class="text-sm font-semibold text-gray-900">Success!</p>
    <p class="text-xs text-gray-500">Your changes have been saved.</p>
  </div>
  <button onclick="document.getElementById('toast').classList.add('-translate-y-full')"
    class="ml-2 text-gray-400 hover:text-gray-600">✕</button>
</div>

<button
  onclick="
    const t = document.getElementById('toast');
    t.classList.remove('-translate-y-full');
    t.classList.add('translate-y-0');
    setTimeout(() => { t.classList.remove('translate-y-0'); t.classList.add('-translate-y-full'); }, 3000);
  "
  class="bg-blue-600 text-white px-4 py-2 rounded-lg"
>Show Toast</button>
```

<h3>125. Build a spinner component using <code>animate-spin</code> on a half-bordered circle.</h3>

```html
<div class="flex items-center gap-4 p-8">
  <!-- Small -->
  <div class="w-5 h-5 border-2 border-blue-200 border-t-blue-600 rounded-full animate-spin"></div>
  <!-- Medium -->
  <div class="w-8 h-8 border-3 border-blue-200 border-t-blue-600 rounded-full animate-spin"></div>
  <!-- Large -->
  <div class="w-12 h-12 border-4 border-gray-200 border-t-blue-600 rounded-full animate-spin"></div>

  <!-- With label -->
  <div class="flex items-center gap-2">
    <div class="w-5 h-5 border-2 border-blue-200 border-t-blue-600 rounded-full animate-spin"></div>
    <span class="text-sm text-gray-600">Loading...</span>
  </div>
</div>
```

<h3>126. Create a "ping" notification indicator using <code>animate-ping</code> with an absolute positioned dot overlay.</h3>

```html
<div class="relative inline-flex items-center gap-2 p-4">
  <!-- Button with ping indicator -->
  <div class="relative">
    <button class="p-2 bg-gray-100 rounded-xl hover:bg-gray-200 text-gray-700">
      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
          d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
      </svg>
    </button>
    <!-- Ping dot -->
    <span class="absolute top-0 right-0 flex h-3 w-3">
      <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
      <span class="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
    </span>
  </div>
</div>
```

<h3>127. Build a card flip animation using custom <code>transform-style: preserve-3d</code> classes added via <code>@layer utilities</code>.</h3>

```html
<!-- In your CSS (globals.css): -->
<!-- @layer utilities {
  .preserve-3d { transform-style: preserve-3d; }
  .backface-hidden { backface-visibility: hidden; }
  .rotate-y-180 { transform: rotateY(180deg); }
  .perspective-1000 { perspective: 1000px; }
} -->

<div class="perspective-1000 w-64 h-40 cursor-pointer group">
  <div class="relative w-full h-full preserve-3d transition-transform duration-700 group-hover:rotate-y-180">
    <!-- Front -->
    <div class="absolute inset-0 backface-hidden bg-blue-600 rounded-2xl flex items-center justify-center">
      <p class="text-white text-xl font-bold">Front Side</p>
    </div>
    <!-- Back -->
    <div class="absolute inset-0 backface-hidden rotate-y-180 bg-pink-500 rounded-2xl flex items-center justify-center">
      <p class="text-white text-xl font-bold">Back Side</p>
    </div>
  </div>
</div>
```

<h3>128. Create a page transition animation using <code>motion-safe:transition-opacity</code> respecting <code>prefers-reduced-motion</code>.</h3>

```html
<!-- Page wrapper: opacity transitions only if user hasn't requested reduced motion -->
<main
  id="page-content"
  class="opacity-0 motion-safe:transition-opacity motion-safe:duration-500"
>
  <div class="max-w-4xl mx-auto px-6 py-12">
    <h1 class="text-4xl font-bold text-gray-900">Page Title</h1>
    <p class="text-gray-600 mt-4">Content fades in smoothly on load.</p>
  </div>
</main>

<script>
  // Trigger fade-in on load
  window.addEventListener('DOMContentLoaded', () => {
    requestAnimationFrame(() => {
      document.getElementById('page-content').classList.remove('opacity-0');
      document.getElementById('page-content').classList.add('opacity-100');
    });
  });
</script>
```

<h3>129. Build a typewriter loading placeholder using <code>animate-pulse</code> on multiple lines of varying width.</h3>

```html
<div class="max-w-2xl p-6 space-y-4">
  <!-- Article skeleton -->
  <div class="animate-pulse space-y-3">
    <!-- Title -->
    <div class="h-7 bg-gray-200 rounded-lg w-3/4"></div>
    <div class="h-7 bg-gray-200 rounded-lg w-1/2"></div>
    <!-- Meta -->
    <div class="flex items-center gap-3 pt-2">
      <div class="w-8 h-8 bg-gray-200 rounded-full"></div>
      <div class="h-3 bg-gray-200 rounded w-28"></div>
      <div class="h-3 bg-gray-200 rounded w-16"></div>
    </div>
    <!-- Body text lines -->
    <div class="space-y-2 pt-2">
      <div class="h-3.5 bg-gray-200 rounded w-full"></div>
      <div class="h-3.5 bg-gray-200 rounded w-full"></div>
      <div class="h-3.5 bg-gray-200 rounded w-5/6"></div>
      <div class="h-3.5 bg-gray-200 rounded w-full"></div>
      <div class="h-3.5 bg-gray-200 rounded w-4/6"></div>
    </div>
  </div>
</div>
```

<h3>130. Create a hover-triggered image zoom effect using <code>overflow-hidden</code> on the container and <code>hover:scale-110 transition-transform duration-500</code> on the image.</h3>

```html
<div class="grid grid-cols-3 gap-4 p-6">
  <div class="overflow-hidden rounded-2xl shadow-md cursor-pointer">
    <img src="photo1.jpg" alt="Gallery image 1"
      class="w-full h-56 object-cover hover:scale-110 transition-transform duration-500" />
  </div>
  <div class="overflow-hidden rounded-2xl shadow-md cursor-pointer">
    <img src="photo2.jpg" alt="Gallery image 2"
      class="w-full h-56 object-cover hover:scale-110 transition-transform duration-500" />
  </div>
  <div class="overflow-hidden rounded-2xl shadow-md cursor-pointer">
    <img src="photo3.jpg" alt="Gallery image 3"
      class="w-full h-56 object-cover hover:scale-110 transition-transform duration-500" />
  </div>
</div>
```

### 19. Accessibility

<h3>131. Create all interactive elements (buttons, links, inputs) with visible focus rings using <code>focus-visible:ring-2 focus-visible:ring-blue-500</code>.</h3>

```html
<div class="p-8 space-y-4">
  <!-- Button -->
  <button class="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold
                 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2">
    Accessible Button
  </button>

  <!-- Link -->
  <a href="#" class="text-blue-600 underline
                     focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 rounded">
    Accessible Link
  </a>

  <!-- Input -->
  <input type="text" placeholder="Enter text"
    class="w-full max-w-xs border border-gray-300 rounded-lg px-4 py-2
           focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500" />
</div>
```

<h3>132. Build an accessible modal dialog with <code>role="dialog"</code>, <code>aria-modal="true"</code>, and focus trap using <code>inert</code> on background content.</h3>

```html
<!-- Background content (inert when modal is open) -->
<div id="page-content" inert>
  <h1 class="text-2xl font-bold p-8">Page Content (inert while modal is open)</h1>
</div>

<!-- Modal Overlay -->
<div class="fixed inset-0 bg-black/50 z-50 flex items-center justify-center" aria-hidden="false">
  <!-- Dialog -->
  <div
    role="dialog"
    aria-modal="true"
    aria-labelledby="modal-title"
    aria-describedby="modal-desc"
    class="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full mx-4"
  >
    <h2 id="modal-title" class="text-xl font-bold text-gray-900 mb-2">Delete Account</h2>
    <p id="modal-desc" class="text-gray-600 mb-6">
      Are you sure? This action is permanent and cannot be undone.
    </p>
    <div class="flex gap-3 justify-end">
      <button class="px-4 py-2 text-sm border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50
                     focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:outline-none">
        Cancel
      </button>
      <button class="px-4 py-2 text-sm bg-red-600 text-white rounded-lg hover:bg-red-700
                     focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:outline-none">
        Delete
      </button>
    </div>
  </div>
</div>
```

<h3>133. Create a form with properly associated <code>&lt;label&gt;</code> elements and <code>aria-describedby</code> for help text.</h3>

```html
<form class="max-w-sm space-y-5 p-6">
  <div>
    <label for="username" class="block text-sm font-medium text-gray-700 mb-1">
      Username <span class="text-red-500" aria-hidden="true">*</span>
    </label>
    <input
      id="username"
      type="text"
      aria-required="true"
      aria-describedby="username-help username-error"
      class="w-full border border-gray-300 rounded-lg px-4 py-2
             focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
    <p id="username-help" class="text-xs text-gray-500 mt-1">
      Choose a unique username with 3–20 characters.
    </p>
  </div>

  <div>
    <label for="email" class="block text-sm font-medium text-gray-700 mb-1">Email</label>
    <input
      id="email"
      type="email"
      aria-describedby="email-help"
      class="w-full border border-gray-300 rounded-lg px-4 py-2
             focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
    <p id="email-help" class="text-xs text-gray-500 mt-1">
      We'll send a verification link to this address.
    </p>
  </div>
</form>
```

<h3>134. Style a visually-hidden skip link that becomes visible on focus: <code>sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4</code>.</h3>

```html
<!-- Skip Link — only visible when focused via keyboard -->
<a
  href="#main-content"
  class="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4
         bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold z-50
         focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
>
  Skip to main content
</a>

<!-- The rest of the page -->
<header class="bg-white shadow-sm px-6 py-4">
  <nav><!-- Navigation --></nav>
</header>

<main id="main-content" tabindex="-1" class="p-8 focus:outline-none">
  <h1 class="text-2xl font-bold text-gray-900">Main Content Area</h1>
  <p class="text-gray-600 mt-2">Keyboard users can skip to here directly.</p>
</main>
```

<h3>135. Build a color contrast checker and ensure all text/background combinations meet WCAG AA standards (4.5:1 ratio).</h3>

```html
<!-- Example: Demonstrating WCAG AA compliant text/background combinations -->
<div class="p-8 space-y-4 max-w-xl">
  <h2 class="text-xl font-bold text-gray-900 mb-4">WCAG AA Contrast Examples</h2>

  <!-- PASS: white on blue-600 (7.2:1) -->
  <div class="bg-blue-600 text-white p-4 rounded-lg">
    <p class="font-semibold">✅ White on Blue-600 (~7.2:1) — PASS</p>
    <p class="text-sm mt-1">Excellent contrast for normal and large text.</p>
  </div>

  <!-- PASS: gray-900 on white (19.5:1) -->
  <div class="bg-white border border-gray-200 text-gray-900 p-4 rounded-lg">
    <p class="font-semibold">✅ Gray-900 on White (~19.5:1) — PASS</p>
    <p class="text-sm text-gray-700 mt-1">Highest contrast available.</p>
  </div>

  <!-- PASS: gray-700 on gray-50 (7.4:1) -->
  <div class="bg-gray-50 text-gray-700 p-4 rounded-lg border border-gray-200">
    <p class="font-semibold">✅ Gray-700 on Gray-50 (~7.4:1) — PASS</p>
    <p class="text-sm mt-1">Good for body text on off-white backgrounds.</p>
  </div>

  <!-- FAIL example (informational) -->
  <div class="bg-yellow-200 text-yellow-400 p-4 rounded-lg opacity-70">
    <p class="font-semibold">❌ Yellow-400 on Yellow-200 — FAIL (too low contrast)</p>
  </div>
</div>
```

<h3>136. Create an accessible tooltip using <code>role="tooltip"</code> and <code>aria-describedby</code> with <code>sr-only</code> fallback text.</h3>

```html
<div class="p-8">
  <div class="relative inline-block group">
    <button
      aria-describedby="tooltip-info"
      class="w-8 h-8 rounded-full bg-gray-200 text-gray-600 text-sm font-bold
             hover:bg-gray-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
    >
      ?
    </button>
    <!-- Visible tooltip on hover/focus -->
    <div
      id="tooltip-info"
      role="tooltip"
      class="absolute bottom-full left-1/2 -translate-x-1/2 mb-2
             hidden group-hover:block group-focus-within:block
             bg-gray-900 text-white text-xs rounded-lg px-3 py-2 whitespace-nowrap shadow-lg z-10"
    >
      This field is required for account setup.
    </div>
  </div>
</div>
```

<h3>137. Build a progress indicator with <code>role="progressbar"</code>, <code>aria-valuenow</code>, and visible progress bar.</h3>

```html
<div class="max-w-md p-6 space-y-4">
  <!-- Progress bar -->
  <div>
    <div class="flex justify-between text-sm font-medium text-gray-700 mb-2">
      <span>Uploading file...</span>
      <span>68%</span>
    </div>
    <div class="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
      <div
        role="progressbar"
        aria-valuenow="68"
        aria-valuemin="0"
        aria-valuemax="100"
        aria-label="File upload progress"
        class="h-3 bg-blue-600 rounded-full transition-all duration-500"
        style="width: 68%"
      ></div>
    </div>
  </div>

  <!-- Step progress -->
  <div class="flex items-center justify-between" role="progressbar" aria-valuenow="2" aria-valuemax="4">
    <div class="flex items-center justify-center w-8 h-8 bg-blue-600 text-white rounded-full text-sm font-bold">✓</div>
    <div class="flex-1 h-1 bg-blue-600"></div>
    <div class="flex items-center justify-center w-8 h-8 bg-blue-600 text-white rounded-full text-sm font-bold">✓</div>
    <div class="flex-1 h-1 bg-gray-200"></div>
    <div class="flex items-center justify-center w-8 h-8 bg-gray-200 text-gray-500 rounded-full text-sm font-bold">3</div>
    <div class="flex-1 h-1 bg-gray-200"></div>
    <div class="flex items-center justify-center w-8 h-8 bg-gray-200 text-gray-500 rounded-full text-sm font-bold">4</div>
  </div>
</div>
```

<h3>138. Create navigation with <code>aria-current="page"</code> on the active link, styled with <code>aria-[current=page]:text-blue-600 aria-[current=page]:font-semibold</code>.</h3>

```html
<nav class="bg-white border-b border-gray-200 px-6">
  <ul class="flex items-center gap-1">
    <li>
      <a href="/"
        aria-current="page"
        class="block px-4 py-3 text-sm border-b-2 border-transparent
               aria-[current=page]:border-blue-600 aria-[current=page]:text-blue-600 aria-[current=page]:font-semibold
               text-gray-500 hover:text-gray-900 transition-colors"
      >
        Home
      </a>
    </li>
    <li>
      <a href="/products"
        class="block px-4 py-3 text-sm border-b-2 border-transparent
               aria-[current=page]:border-blue-600 aria-[current=page]:text-blue-600 aria-[current=page]:font-semibold
               text-gray-500 hover:text-gray-900 transition-colors"
      >
        Products
      </a>
    </li>
    <li>
      <a href="/blog"
        class="block px-4 py-3 text-sm border-b-2 border-transparent
               aria-[current=page]:border-blue-600 aria-[current=page]:text-blue-600 aria-[current=page]:font-semibold
               text-gray-500 hover:text-gray-900 transition-colors"
      >
        Blog
      </a>
    </li>
  </ul>
</nav>
```

<h3>139. Build a disclosure component (accordion) using <code>&lt;details&gt;</code> and <code>&lt;summary&gt;</code> with Tailwind hover/focus states.</h3>

```html
<div class="max-w-xl space-y-2 p-6">
  <details class="group border border-gray-200 rounded-xl overflow-hidden">
    <summary class="flex items-center justify-between px-5 py-4 cursor-pointer
                    hover:bg-gray-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500
                    list-none font-semibold text-gray-900 select-none">
      What is Tailwind CSS?
      <svg class="w-5 h-5 text-gray-500 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
      </svg>
    </summary>
    <div class="px-5 pb-4 pt-2 text-gray-600 text-sm leading-relaxed border-t border-gray-100">
      Tailwind CSS is a utility-first CSS framework that provides low-level utility classes to build custom designs.
    </div>
  </details>

  <details class="group border border-gray-200 rounded-xl overflow-hidden">
    <summary class="flex items-center justify-between px-5 py-4 cursor-pointer
                    hover:bg-gray-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500
                    list-none font-semibold text-gray-900 select-none">
      How does JIT mode work?
      <svg class="w-5 h-5 text-gray-500 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
      </svg>
    </summary>
    <div class="px-5 pb-4 pt-2 text-gray-600 text-sm leading-relaxed border-t border-gray-100">
      JIT (Just-in-Time) mode generates CSS on-demand as you write HTML, resulting in faster build times and minimal CSS bundles.
    </div>
  </details>
</div>
```

<h3>140. Create a responsive image with <code>alt</code> text and <code>loading="lazy"</code> inside a styled <code>figure</code> with <code>figcaption</code>.</h3>

```html
<figure class="max-w-xl mx-auto overflow-hidden rounded-2xl shadow-lg">
  <img
    src="nature-photo.jpg"
    alt="Sunlit mountain valley with green meadows and snow-capped peaks in the background"
    loading="lazy"
    width="800"
    height="533"
    class="w-full h-72 object-cover"
  />
  <figcaption class="bg-white px-5 py-4 border-t border-gray-100">
    <p class="text-sm text-gray-500">
      <span class="font-semibold text-gray-700">Photo:</span>
      Mountain Valley at Golden Hour — Captured in the Alps, Switzerland.
    </p>
  </figcaption>
</figure>
```

### 20. Component Patterns

<h3>141. Build a reusable <code>Button</code> component with variants (<code>primary</code>, <code>secondary</code>, <code>ghost</code>, <code>danger</code>) using <code>cva</code> (class-variance-authority).</h3>

```js
// button.js (React + TypeScript example)
import { cva } from 'class-variance-authority';

const button = cva(
  // Base classes
  'inline-flex items-center justify-center font-semibold rounded-lg px-4 py-2 text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none',
  {
    variants: {
      intent: {
        primary:   'bg-blue-600 text-white hover:bg-blue-700 focus-visible:ring-blue-500',
        secondary: 'bg-gray-100 text-gray-900 hover:bg-gray-200 focus-visible:ring-gray-500',
        ghost:     'bg-transparent text-gray-700 hover:bg-gray-100 focus-visible:ring-gray-500',
        danger:    'bg-red-600 text-white hover:bg-red-700 focus-visible:ring-red-500',
      },
      size: {
        sm: 'px-3 py-1.5 text-xs',
        md: 'px-4 py-2 text-sm',
        lg: 'px-6 py-3 text-base',
      },
    },
    defaultVariants: {
      intent: 'primary',
      size:   'md',
    },
  }
);

// Usage in React:
// <button className={button({ intent: 'primary', size: 'lg' })}>Click Me</button>
// <button className={button({ intent: 'danger' })}>Delete</button>
```

```html
<!-- HTML equivalents -->
<button class="inline-flex items-center justify-center font-semibold rounded-lg px-6 py-3 text-base bg-blue-600 text-white hover:bg-blue-700 transition-colors">
  Primary Large
</button>
<button class="inline-flex items-center justify-center font-semibold rounded-lg px-4 py-2 text-sm bg-gray-100 text-gray-900 hover:bg-gray-200 transition-colors">
  Secondary
</button>
<button class="inline-flex items-center justify-center font-semibold rounded-lg px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors">
  Ghost
</button>
<button class="inline-flex items-center justify-center font-semibold rounded-lg px-4 py-2 text-sm bg-red-600 text-white hover:bg-red-700 transition-colors">
  Danger
</button>
```

<h3>142. Create a <code>Badge</code> component with color variants using a color map object and complete class names.</h3>

```js
// badge.js
const badgeColors = {
  gray:   'bg-gray-100 text-gray-700',
  blue:   'bg-blue-100 text-blue-700',
  green:  'bg-green-100 text-green-700',
  yellow: 'bg-yellow-100 text-yellow-700',
  red:    'bg-red-100 text-red-700',
  purple: 'bg-purple-100 text-purple-700',
};

// Badge base classes
const badgeBase = 'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold';

// Usage: <span class={`${badgeBase} ${badgeColors['green']}`}>Active</span>
```

```html
<!-- HTML examples -->
<div class="flex flex-wrap gap-2 p-4">
  <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-gray-100 text-gray-700">Default</span>
  <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-blue-100 text-blue-700">Info</span>
  <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-green-100 text-green-700">Success</span>
  <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-yellow-100 text-yellow-700">Warning</span>
  <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-red-100 text-red-700">Error</span>
  <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-purple-100 text-purple-700">New</span>
</div>
```

<h3>143. Build an <code>Alert</code> component with <code>success</code>, <code>warning</code>, <code>error</code>, and <code>info</code> variants using icon + message layout.</h3>

```html
<div class="space-y-3 max-w-lg p-6">
  <!-- Success -->
  <div class="flex items-start gap-3 bg-green-50 border border-green-200 rounded-xl p-4" role="alert">
    <svg class="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
    <div><p class="font-semibold text-green-800 text-sm">Success!</p><p class="text-green-700 text-sm mt-0.5">Your profile has been updated.</p></div>
  </div>
  <!-- Warning -->
  <div class="flex items-start gap-3 bg-yellow-50 border border-yellow-200 rounded-xl p-4" role="alert">
    <svg class="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
    <div><p class="font-semibold text-yellow-800 text-sm">Warning</p><p class="text-yellow-700 text-sm mt-0.5">Your storage is 85% full.</p></div>
  </div>
  <!-- Error -->
  <div class="flex items-start gap-3 bg-red-50 border border-red-200 rounded-xl p-4" role="alert">
    <svg class="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
    <div><p class="font-semibold text-red-800 text-sm">Error</p><p class="text-red-700 text-sm mt-0.5">Failed to save changes. Please try again.</p></div>
  </div>
  <!-- Info -->
  <div class="flex items-start gap-3 bg-blue-50 border border-blue-200 rounded-xl p-4" role="alert">
    <svg class="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
    <div><p class="font-semibold text-blue-800 text-sm">Info</p><p class="text-blue-700 text-sm mt-0.5">A new version is available. Refresh to update.</p></div>
  </div>
</div>
```

<h3>144. Create a <code>Dropdown</code> component using <code>group</code> and <code>group-hover:</code> modifiers for open/close state.</h3>

```html
<div class="p-8">
  <div class="relative group inline-block">
    <!-- Trigger -->
    <button class="flex items-center gap-2 bg-white border border-gray-300 rounded-xl px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 transition-colors">
      Account
      <svg class="w-4 h-4 text-gray-400 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
      </svg>
    </button>

    <!-- Dropdown Panel -->
    <div class="hidden group-hover:block absolute right-0 top-full mt-1.5 w-52 bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden z-50">
      <div class="p-2">
        <a href="#" class="flex items-center gap-2 px-3 py-2 text-sm text-gray-700 rounded-lg hover:bg-gray-50">
          <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
          Profile
        </a>
        <a href="#" class="flex items-center gap-2 px-3 py-2 text-sm text-gray-700 rounded-lg hover:bg-gray-50">
          <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0..." /></svg>
          Settings
        </a>
      </div>
      <div class="border-t border-gray-100 p-2">
        <a href="#" class="flex items-center gap-2 px-3 py-2 text-sm text-red-600 rounded-lg hover:bg-red-50">
          Sign Out
        </a>
      </div>
    </div>
  </div>
</div>
```

<h3>145. Build a <code>Card</code> component with optional header, body, and footer slots using consistent padding and border utilities.</h3>

```html
<!-- Full Card (header + body + footer) -->
<div class="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden max-w-sm">
  <!-- Header -->
  <div class="px-6 py-4 border-b border-gray-100 flex items-center justify-between">
    <h3 class="font-bold text-gray-900">Card Title</h3>
    <span class="text-xs bg-blue-100 text-blue-700 font-semibold px-2.5 py-0.5 rounded-full">Active</span>
  </div>
  <!-- Body -->
  <div class="px-6 py-5">
    <p class="text-gray-600 text-sm leading-relaxed">
      This is the main content area of the card. It can contain any content.
    </p>
  </div>
  <!-- Footer -->
  <div class="px-6 py-4 bg-gray-50 border-t border-gray-100 flex items-center justify-between">
    <span class="text-xs text-gray-400">Updated 2 days ago</span>
    <button class="text-sm font-semibold text-blue-600 hover:text-blue-700">View →</button>
  </div>
</div>
```

<h3>146. Create a <code>Modal</code> component with overlay, container, header, body, footer, and close button with correct z-index layering.</h3>

```html
<!-- Overlay (z-50) -->
<div class="fixed inset-0 z-50 overflow-y-auto" role="dialog" aria-modal="true" aria-labelledby="modal-heading">
  <!-- Backdrop -->
  <div class="fixed inset-0 bg-black/40 backdrop-blur-sm"></div>

  <!-- Centering wrapper -->
  <div class="flex min-h-full items-center justify-center p-4">
    <!-- Modal container (z-10 relative to backdrop) -->
    <div class="relative bg-white w-full max-w-lg rounded-2xl shadow-2xl">

      <!-- Header -->
      <div class="flex items-center justify-between px-6 py-4 border-b border-gray-100">
        <h2 id="modal-heading" class="text-lg font-bold text-gray-900">Edit Profile</h2>
        <button class="p-1.5 rounded-lg text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-colors
                       focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                aria-label="Close modal">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <!-- Body -->
      <div class="px-6 py-5 space-y-4">
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
          <input type="text" value="Alice Johnson" class="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">Email</label>
          <input type="email" value="alice@example.com" class="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>
      </div>

      <!-- Footer -->
      <div class="flex items-center justify-end gap-3 px-6 py-4 border-t border-gray-100 bg-gray-50 rounded-b-2xl">
        <button class="px-4 py-2 text-sm font-medium text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-100 transition-colors">
          Cancel
        </button>
        <button class="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors">
          Save Changes
        </button>
      </div>

    </div>
  </div>
</div>
```

<h3>147. Build a <code>Table</code> component with striped rows using <code>even:bg-gray-50 dark:even:bg-gray-700</code> and hover states.</h3>

```html
<div class="overflow-hidden rounded-2xl border border-gray-200 shadow-sm">
  <table class="w-full text-sm text-left">
    <thead class="bg-gray-50 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
      <tr>
        <th class="px-5 py-3 font-semibold text-gray-600 dark:text-gray-400">Name</th>
        <th class="px-5 py-3 font-semibold text-gray-600 dark:text-gray-400">Role</th>
        <th class="px-5 py-3 font-semibold text-gray-600 dark:text-gray-400">Status</th>
        <th class="px-5 py-3 font-semibold text-gray-600 dark:text-gray-400">Actions</th>
      </tr>
    </thead>
    <tbody class="divide-y divide-gray-100 dark:divide-gray-700">
      <tr class="even:bg-gray-50 dark:even:bg-gray-700 hover:bg-blue-50 dark:hover:bg-gray-600 transition-colors">
        <td class="px-5 py-3 font-medium text-gray-900 dark:text-white">Alice Johnson</td>
        <td class="px-5 py-3 text-gray-600 dark:text-gray-400">Designer</td>
        <td class="px-5 py-3"><span class="bg-green-100 text-green-700 text-xs font-semibold px-2 py-0.5 rounded-full">Active</span></td>
        <td class="px-5 py-3"><a href="#" class="text-blue-600 hover:underline text-xs font-medium">Edit</a></td>
      </tr>
      <tr class="even:bg-gray-50 dark:even:bg-gray-700 hover:bg-blue-50 dark:hover:bg-gray-600 transition-colors">
        <td class="px-5 py-3 font-medium text-gray-900 dark:text-white">Bob Smith</td>
        <td class="px-5 py-3 text-gray-600 dark:text-gray-400">Developer</td>
        <td class="px-5 py-3"><span class="bg-green-100 text-green-700 text-xs font-semibold px-2 py-0.5 rounded-full">Active</span></td>
        <td class="px-5 py-3"><a href="#" class="text-blue-600 hover:underline text-xs font-medium">Edit</a></td>
      </tr>
      <tr class="even:bg-gray-50 dark:even:bg-gray-700 hover:bg-blue-50 dark:hover:bg-gray-600 transition-colors">
        <td class="px-5 py-3 font-medium text-gray-900 dark:text-white">Carol White</td>
        <td class="px-5 py-3 text-gray-600 dark:text-gray-400">Manager</td>
        <td class="px-5 py-3"><span class="bg-yellow-100 text-yellow-700 text-xs font-semibold px-2 py-0.5 rounded-full">Pending</span></td>
        <td class="px-5 py-3"><a href="#" class="text-blue-600 hover:underline text-xs font-medium">Edit</a></td>
      </tr>
    </tbody>
  </table>
</div>
```

<h3>148. Create an <code>Avatar</code> component that supports <code>sm</code>, <code>md</code>, <code>lg</code> sizes with initials fallback and ring options.</h3>

```html
<div class="flex items-center gap-6 p-6">
  <!-- Small with image -->
  <img src="avatar.jpg" alt="User" class="w-8 h-8 rounded-full object-cover ring-2 ring-white ring-offset-2" />

  <!-- Medium with image -->
  <img src="avatar.jpg" alt="User" class="w-10 h-10 rounded-full object-cover" />

  <!-- Large with image -->
  <img src="avatar.jpg" alt="User" class="w-14 h-14 rounded-full object-cover ring-4 ring-blue-100" />

  <!-- Small with initials (fallback) -->
  <div class="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white text-xs font-bold">
    AJ
  </div>

  <!-- Medium with initials -->
  <div class="w-10 h-10 rounded-full bg-purple-500 flex items-center justify-center text-white text-sm font-bold">
    BS
  </div>

  <!-- Large with initials -->
  <div class="w-14 h-14 rounded-full bg-green-500 flex items-center justify-center text-white text-lg font-bold ring-4 ring-green-100">
    CW
  </div>
</div>
```

<h3>149. Build a <code>Stepper</code> component showing progress through multi-step processes using flex, numbered steps, and connecting lines.</h3>

```html
<nav aria-label="Progress" class="py-8 px-6">
  <ol class="flex items-center max-w-2xl mx-auto">
    <!-- Step 1: Completed -->
    <li class="flex items-center flex-1">
      <div class="flex items-center justify-center w-10 h-10 rounded-full bg-blue-600 text-white font-bold text-sm flex-shrink-0 shadow">
        ✓
      </div>
      <div class="flex-1 h-1 bg-blue-600 mx-2"></div>
    </li>
    <!-- Step 2: Current -->
    <li class="flex items-center flex-1">
      <div class="flex items-center justify-center w-10 h-10 rounded-full bg-blue-600 text-white font-bold text-sm flex-shrink-0 ring-4 ring-blue-100 shadow">
        2
      </div>
      <div class="flex-1 h-1 bg-gray-200 mx-2"></div>
    </li>
    <!-- Step 3: Upcoming -->
    <li class="flex items-center flex-1">
      <div class="flex items-center justify-center w-10 h-10 rounded-full bg-gray-200 text-gray-500 font-bold text-sm flex-shrink-0">
        3
      </div>
      <div class="flex-1 h-1 bg-gray-200 mx-2"></div>
    </li>
    <!-- Step 4: Upcoming -->
    <li class="flex items-center">
      <div class="flex items-center justify-center w-10 h-10 rounded-full bg-gray-200 text-gray-500 font-bold text-sm flex-shrink-0">
        4
      </div>
    </li>
  </ol>
  <div class="flex justify-between max-w-2xl mx-auto mt-3 px-1 text-xs font-medium">
    <span class="text-blue-600">Account</span>
    <span class="text-blue-600">Profile</span>
    <span class="text-gray-400">Payment</span>
    <span class="text-gray-400">Review</span>
  </div>
</nav>
```

<h3>150. Create a <code>DataGrid</code> component with sortable column headers, pagination, and a loading state overlay.</h3>

```html
<div class="relative overflow-hidden rounded-2xl border border-gray-200 shadow-sm">
  <!-- Loading Overlay -->
  <div id="loading-overlay" class="hidden absolute inset-0 bg-white/70 backdrop-blur-sm z-10 flex items-center justify-center">
    <div class="flex items-center gap-3">
      <div class="w-6 h-6 border-3 border-blue-200 border-t-blue-600 rounded-full animate-spin"></div>
      <span class="text-sm font-medium text-gray-600">Loading...</span>
    </div>
  </div>

  <!-- Table -->
  <table class="w-full text-sm text-left">
    <thead class="bg-gray-50 border-b border-gray-200">
      <tr>
        <th class="px-5 py-3">
          <button class="flex items-center gap-1 font-semibold text-gray-600 hover:text-gray-900">
            Name
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" /></svg>
          </button>
        </th>
        <th class="px-5 py-3">
          <button class="flex items-center gap-1 font-semibold text-gray-600 hover:text-gray-900">
            Status
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" /></svg>
          </button>
        </th>
        <th class="px-5 py-3 font-semibold text-gray-600">Actions</th>
      </tr>
    </thead>
    <tbody class="divide-y divide-gray-100">
      <tr class="hover:bg-gray-50 transition-colors"><td class="px-5 py-3 font-medium text-gray-900">Alice Johnson</td><td class="px-5 py-3"><span class="bg-green-100 text-green-700 text-xs font-semibold px-2 py-0.5 rounded-full">Active</span></td><td class="px-5 py-3 flex gap-2"><a href="#" class="text-blue-600 text-xs hover:underline">Edit</a><a href="#" class="text-red-500 text-xs hover:underline">Delete</a></td></tr>
      <tr class="hover:bg-gray-50 transition-colors"><td class="px-5 py-3 font-medium text-gray-900">Bob Smith</td><td class="px-5 py-3"><span class="bg-yellow-100 text-yellow-700 text-xs font-semibold px-2 py-0.5 rounded-full">Pending</span></td><td class="px-5 py-3 flex gap-2"><a href="#" class="text-blue-600 text-xs hover:underline">Edit</a><a href="#" class="text-red-500 text-xs hover:underline">Delete</a></td></tr>
    </tbody>
  </table>

  <!-- Pagination -->
  <div class="flex items-center justify-between px-5 py-3 bg-gray-50 border-t border-gray-200">
    <p class="text-sm text-gray-500">Showing 1–10 of 48 results</p>
    <div class="flex items-center gap-1">
      <button class="px-3 py-1.5 text-xs border border-gray-300 rounded-lg text-gray-500 hover:bg-gray-100 disabled:opacity-40" disabled>← Prev</button>
      <button class="px-3 py-1.5 text-xs bg-blue-600 text-white rounded-lg font-semibold">1</button>
      <button class="px-3 py-1.5 text-xs border border-gray-300 rounded-lg text-gray-500 hover:bg-gray-100">2</button>
      <button class="px-3 py-1.5 text-xs border border-gray-300 rounded-lg text-gray-500 hover:bg-gray-100">Next →</button>
    </div>
  </div>
</div>
```

---

> ## 🔴 Level 4: Expert (151 - 200)

### 21. Custom Plugins

<h3>151. Write a Tailwind plugin that adds a <code>.text-shadow</code> utility with multiple size variants using <code>matchUtilities</code>.</h3>

```js
// tailwind.config.js
const plugin = require('tailwindcss/plugin');

module.exports = {
  plugins: [
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          'text-shadow': (value) => ({
            textShadow: value,
          }),
        },
        {
          values: {
            sm:  '0 1px 2px rgba(0,0,0,0.25)',
            DEFAULT: '0 2px 4px rgba(0,0,0,0.25)',
            md:  '0 4px 8px rgba(0,0,0,0.30)',
            lg:  '0 8px 16px rgba(0,0,0,0.35)',
            none: 'none',
          },
        }
      );
    }),
  ],
};
```

```html
<!-- Usage -->
<h1 class="text-5xl font-extrabold text-white text-shadow-lg">
  Hero Heading with Shadow
</h1>
<h2 class="text-3xl font-bold text-gray-900 text-shadow">
  Section Heading with Default Shadow
</h2>
<p class="text-gray-700 text-shadow-sm">Subtle shadow on text.</p>
```

<h3>152. Create a plugin that adds <code>.scrollbar-hide</code> and <code>.scrollbar-thin</code> utilities for cross-browser scrollbar styling.</h3>

```js
// tailwind.config.js
const plugin = require('tailwindcss/plugin');

module.exports = {
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        '.scrollbar-hide': {
          /* Firefox */
          'scrollbar-width': 'none',
          /* Safari and Chrome */
          '&::-webkit-scrollbar': { display: 'none' },
        },
        '.scrollbar-thin': {
          'scrollbar-width': 'thin',
          'scrollbar-color': '#94a3b8 #f1f5f9',
          '&::-webkit-scrollbar': { width: '6px', height: '6px' },
          '&::-webkit-scrollbar-track': { background: '#f1f5f9', borderRadius: '9999px' },
          '&::-webkit-scrollbar-thumb': { background: '#94a3b8', borderRadius: '9999px' },
          '&::-webkit-scrollbar-thumb:hover': { background: '#64748b' },
        },
      });
    }),
  ],
};
```

```html
<!-- Hide scrollbar on a horizontally scrollable list -->
<div class="flex gap-4 overflow-x-auto scrollbar-hide p-4">
  <div class="flex-shrink-0 w-48 h-32 bg-blue-100 rounded-xl"></div>
  <div class="flex-shrink-0 w-48 h-32 bg-pink-100 rounded-xl"></div>
  <div class="flex-shrink-0 w-48 h-32 bg-green-100 rounded-xl"></div>
</div>

<!-- Thin, styled scrollbar on a tall list -->
<ul class="max-h-64 overflow-y-auto scrollbar-thin divide-y divide-gray-100">
  <li class="px-4 py-3 text-sm text-gray-700">Item 1</li>
  <li class="px-4 py-3 text-sm text-gray-700">Item 2</li>
  <li class="px-4 py-3 text-sm text-gray-700">Item 3</li>
</ul>
```

<h3>153. Build a plugin that adds <code>fluid-{size}</code> responsive typography utilities using CSS <code>clamp()</code> for smooth scaling.</h3>

```js
// tailwind.config.js
const plugin = require('tailwindcss/plugin');

module.exports = {
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        '.fluid-xs':   { fontSize: 'clamp(0.75rem,  1.5vw, 0.875rem)' },
        '.fluid-sm':   { fontSize: 'clamp(0.875rem, 2vw,   1rem)' },
        '.fluid-base': { fontSize: 'clamp(1rem,     2.5vw, 1.125rem)' },
        '.fluid-lg':   { fontSize: 'clamp(1.125rem, 3vw,   1.5rem)' },
        '.fluid-xl':   { fontSize: 'clamp(1.25rem,  4vw,   2rem)' },
        '.fluid-2xl':  { fontSize: 'clamp(1.5rem,   5vw,   3rem)' },
        '.fluid-3xl':  { fontSize: 'clamp(1.875rem, 6vw,   4rem)' },
        '.fluid-4xl':  { fontSize: 'clamp(2.25rem,  7vw,   5rem)' },
      });
    }),
  ],
};
```

```html
<section class="py-20 px-6 text-center">
  <h1 class="fluid-4xl font-extrabold text-gray-900 mb-4">Fluid Hero Title</h1>
  <h2 class="fluid-2xl font-bold text-gray-700 mb-6">Responsive Subheading</h2>
  <p class="fluid-base text-gray-600 max-w-2xl mx-auto">
    This text scales smoothly across all viewport widths without any breakpoints.
  </p>
</section>
```

<h3>154. Write a plugin that adds <code>aspect-{ratio}</code> utilities for arbitrary aspect ratios using <code>matchUtilities</code> with a theme value.</h3>

```js
// tailwind.config.js
const plugin = require('tailwindcss/plugin');

module.exports = {
  theme: {
    extend: {
      aspectRatio: {
        'cinema':   '21/9',
        'portrait': '3/4',
        'square':   '1/1',
      },
    },
  },
  plugins: [
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          'aspect': (value) => ({
            aspectRatio: value,
          }),
        },
        { values: theme('aspectRatio') }
      );
    }),
  ],
};
```

```html
<!-- Usage -->
<img src="movie.jpg" alt="Cinema" class="w-full aspect-cinema object-cover rounded-2xl" />
<img src="portrait.jpg" alt="Portrait" class="w-48 aspect-portrait object-cover rounded-xl" />
<div class="w-64 aspect-square bg-blue-100 rounded-xl flex items-center justify-center">
  <span class="text-blue-600 font-bold">1:1 Square</span>
</div>
```

<h3>155. Create a plugin that generates <code>.grid-areas-*</code> utilities for CSS grid template areas from a config object.</h3>

```js
// tailwind.config.js
const plugin = require('tailwindcss/plugin');

module.exports = {
  theme: {
    extend: {
      gridAreas: {
        layout: [
          'header header header',
          'sidebar main    main  ',
          'footer footer  footer',
        ],
        dashboard: [
          'topbar topbar',
          'nav    content',
          'nav    content',
        ],
      },
    },
  },
  plugins: [
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          'grid-areas': (value) => ({
            gridTemplateAreas: value.map((row) => `"${row}"`).join('\n'),
          }),
        },
        { values: theme('gridAreas') }
      );
    }),
  ],
};
```

```html
<div class="grid grid-areas-layout grid-cols-3 grid-rows-3 gap-4 min-h-screen p-4">
  <header class="[grid-area:header] bg-blue-600 text-white p-4 rounded-xl font-bold">Header</header>
  <aside class="[grid-area:sidebar] bg-gray-800 text-white p-4 rounded-xl">Sidebar</aside>
  <main class="[grid-area:main] bg-gray-50 p-6 rounded-xl">Main Content</main>
  <footer class="[grid-area:footer] bg-gray-900 text-white p-4 rounded-xl text-center">Footer</footer>
</div>
```

<h3>156. Build a plugin that adds animated gradient background utilities using keyframe injection via <code>addBase</code>.</h3>

```js
// tailwind.config.js
const plugin = require('tailwindcss/plugin');

module.exports = {
  plugins: [
    plugin(function ({ addBase, addUtilities }) {
      addBase({
        '@keyframes gradientShift': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%':      { backgroundPosition: '100% 50%' },
        },
      });
      addUtilities({
        '.bg-gradient-animated': {
          background: 'linear-gradient(270deg, #667eea, #764ba2, #f093fb, #f5576c, #4facfe)',
          backgroundSize: '400% 400%',
          animation: 'gradientShift 8s ease infinite',
        },
        '.bg-gradient-animated-slow': {
          background: 'linear-gradient(135deg, #0ea5e9, #6366f1, #a855f7, #ec4899)',
          backgroundSize: '300% 300%',
          animation: 'gradientShift 15s ease infinite',
        },
      });
    }),
  ],
};
```

```html
<!-- Usage -->
<section class="bg-gradient-animated min-h-screen flex items-center justify-center">
  <div class="text-center text-white">
    <h1 class="text-5xl font-extrabold mb-4">Animated Gradient Hero</h1>
    <p class="text-xl text-white/80">The background smoothly cycles through colors.</p>
  </div>
</section>

<button class="bg-gradient-animated px-6 py-3 text-white font-semibold rounded-xl">
  Gradient Button
</button>
```

<h3>157. Write a plugin that exposes all design token values as CSS custom properties on <code>:root</code> via the <code>addBase</code> helper.</h3>

```js
// tailwind.config.js
const plugin = require('tailwindcss/plugin');
const flattenColorPalette = require('tailwindcss/lib/util/flattenColorPalette').default;

module.exports = {
  plugins: [
    plugin(function ({ addBase, theme }) {
      const allColors = flattenColorPalette(theme('colors'));
      const cssVars = Object.fromEntries(
        Object.entries(allColors)
          .filter(([, v]) => typeof v === 'string')
          .map(([k, v]) => [`--color-${k}`, v])
      );

      const spacingVars = Object.fromEntries(
        Object.entries(theme('spacing')).map(([k, v]) => [`--spacing-${k}`, v])
      );

      addBase({
        ':root': { ...cssVars, ...spacingVars },
      });
    }),
  ],
};
```

```html
<!-- After running the build, all tokens are available as CSS variables -->
<style>
  .custom-component {
    background-color: var(--color-blue-600);
    padding: var(--spacing-4);
    color: var(--color-white);
  }
</style>

<div class="custom-component rounded-xl">
  <p>Using design tokens as CSS variables</p>
</div>
```

<h3>158. Create a <code>@tailwindcss/debug-screens</code> style plugin that shows the current breakpoint in a fixed corner label.</h3>

```js
// tailwind.config.js
const plugin = require('tailwindcss/plugin');

module.exports = {
  plugins: [
    plugin(function ({ addBase, theme }) {
      if (process.env.NODE_ENV !== 'production') {
        const screens = theme('screens');
        const styles = {
          'body::after': {
            content: '"xs"',
            display: 'block',
            position: 'fixed',
            bottom: '0',
            right: '0',
            padding: '4px 8px',
            fontSize: '12px',
            fontFamily: 'monospace',
            fontWeight: '600',
            background: '#111827',
            color: '#f9fafb',
            zIndex: '99999',
            borderTopLeftRadius: '6px',
          },
        };
        Object.entries(screens).forEach(([name, size]) => {
          styles[`@media (min-width: ${size})`] = {
            'body::after': { content: `"${name}"` },
          };
        });
        addBase(styles);
      }
    }),
  ],
};
```

```html
<!-- No HTML changes needed — the label appears automatically via CSS ::after pseudo-element -->
<!-- It shows: xs → sm → md → lg → xl → 2xl as you resize the browser -->

<div class="p-8">
  <h1 class="text-2xl font-bold text-gray-900">Resize the browser to see the breakpoint indicator</h1>
  <p class="text-gray-500 mt-2">The label in the bottom-right corner shows the current Tailwind breakpoint.</p>
</div>
```

<h3>159. Build a plugin that adds print-specific utilities for a list of common elements.</h3>

```js
// tailwind.config.js
const plugin = require('tailwindcss/plugin');

module.exports = {
  plugins: [
    plugin(function ({ addBase }) {
      addBase({
        '@media print': {
          // Common elements to hide when printing
          'header, footer, nav, aside, .no-print, [data-no-print], button, .ads': {
            display: 'none !important',
          },
          // Expand links to show href
          'a[href]::after': {
            content: '" (" attr(href) ")"',
            fontSize: '0.75rem',
            color: '#666',
          },
          // Reset backgrounds for paper
          'body, main, article': {
            background: 'white !important',
            color: 'black !important',
          },
          // Prevent page breaks inside cards
          '.card, article, figure': {
            pageBreakInside: 'avoid',
          },
        },
      });
    }),
  ],
};
```

```html
<!-- The print plugin works automatically on @media print -->
<nav class="bg-blue-600 text-white px-6 py-4">Navigation (hidden when printing)</nav>

<main class="max-w-4xl mx-auto px-6 py-8">
  <article class="card">
    <h1 class="text-3xl font-bold">Printable Article</h1>
    <p class="text-gray-600 mt-4">This content will print cleanly without nav, buttons, or backgrounds.</p>
    <a href="https://example.com">Read more at example.com</a>
  </article>
</main>

<button class="no-print bg-blue-600 text-white px-4 py-2 rounded-lg mt-4">
  Print Page
</button>
```

<h3>160. Write a plugin that adds <code>.balance-text</code> and <code>.pretty-text</code> utilities using <code>text-wrap: balance</code> and <code>text-wrap: pretty</code>.</h3>

```js
// tailwind.config.js
const plugin = require('tailwindcss/plugin');

module.exports = {
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        '.balance-text': {
          textWrap: 'balance',
        },
        '.pretty-text': {
          textWrap: 'pretty',
        },
        '.nowrap-text': {
          textWrap: 'nowrap',
        },
      });
    }),
  ],
};
```

```html
<!-- Balance: Evenly distributes text across lines (great for headings) -->
<h1 class="balance-text text-5xl font-extrabold text-gray-900 max-w-xl mx-auto text-center">
  A Well-Balanced Heading Without Awkward Line Breaks
</h1>

<!-- Pretty: Avoids orphans (single words on the last line) -->
<p class="pretty-text text-gray-600 leading-relaxed max-w-prose mx-auto">
  This paragraph uses text-wrap: pretty to ensure the last line of text
  is never left with a single orphaned word hanging alone at the end of
  a paragraph block.
</p>
```

### 22. Design System Architecture

<h3>161. Architect a Tailwind-based design system with separate token layers: primitive tokens, semantic tokens, and component tokens.</h3>

```js
// tailwind.config.js — Three-layer token architecture

module.exports = {
  theme: {
    extend: {
      colors: {
        // Layer 1: Primitive tokens (raw values)
        'primitive-blue-500': '#3b82f6',
        'primitive-blue-600': '#2563eb',
        'primitive-gray-900': '#111827',

        // Layer 2: Semantic tokens (role-based, reference primitives)
        'color-primary':         '#2563eb',  // maps to primitive-blue-600
        'color-primary-hover':   '#1d4ed8',
        'color-surface':         '#ffffff',
        'color-surface-muted':   '#f9fafb',
        'color-text':            '#111827',
        'color-text-muted':      '#6b7280',
        'color-border':          '#e5e7eb',
        'color-danger':          '#dc2626',

        // Layer 3: Component tokens (specific usage)
        'btn-primary-bg':        '#2563eb',  // references color-primary
        'btn-primary-text':      '#ffffff',
        'card-bg':               '#ffffff',  // references color-surface
        'card-border':           '#e5e7eb',  // references color-border
        'input-border':          '#d1d5db',
        'input-focus-ring':      '#3b82f6',
      },
    },
  },
};
```

```html
<!-- Usage with semantic tokens -->
<button class="bg-[#2563eb] text-white px-6 py-2 rounded-lg hover:bg-[#1d4ed8]">
  Primary Button
</button>

<!-- Better: Use the CSS variable approach with @theme in v4 -->
<div class="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-xl p-6">
  <h3 class="text-[var(--color-text)] font-bold">Card with Semantic Tokens</h3>
  <p class="text-[var(--color-text-muted)] mt-2">Uses semantic color names.</p>
</div>
```

<h3>162. Build a multi-brand design system where each brand has its own <code>tailwind.config.js</code> that extends a shared base config.</h3>

```js
// packages/tailwind-config-base/index.js — Shared base
module.exports = {
  theme: {
    extend: {
      borderRadius: {
        DEFAULT: '0.5rem',
        xl: '1rem',
        '2xl': '1.5rem',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
      },
      fontSize: {
        xs: ['0.75rem', { lineHeight: '1rem' }],
        sm: ['0.875rem', { lineHeight: '1.25rem' }],
        base: ['1rem', { lineHeight: '1.5rem' }],
      },
    },
  },
};
```

```js
// apps/brand-acme/tailwind.config.js — Brand A
const baseConfig = require('@company/tailwind-config-base');

module.exports = {
  ...baseConfig,
  content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
  theme: {
    ...baseConfig.theme,
    extend: {
      ...baseConfig.theme.extend,
      colors: {
        primary: { DEFAULT: '#ef4444', hover: '#dc2626', light: '#fef2f2' },
        brand:   'ACME',
      },
    },
  },
};
```

```js
// apps/brand-beta/tailwind.config.js — Brand B
const baseConfig = require('@company/tailwind-config-base');

module.exports = {
  ...baseConfig,
  content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
  theme: {
    ...baseConfig.theme,
    extend: {
      ...baseConfig.theme.extend,
      colors: {
        primary: { DEFAULT: '#8b5cf6', hover: '#7c3aed', light: '#f5f3ff' },
      },
    },
  },
};
```

<h3>163. Create a component library with Storybook that documents every Tailwind-powered component with live controls and dark mode toggle.</h3>

```js
// .storybook/preview.js
import '../src/styles/globals.css'; // Import Tailwind CSS

export const parameters = {
  backgrounds: {
    default: 'light',
    values: [
      { name: 'light', value: '#ffffff' },
      { name: 'dark',  value: '#111827' },
    ],
  },
};

// Theme decorator to toggle dark mode class
export const decorators = [
  (Story, context) => {
    const isDark = context.globals.theme === 'dark';
    document.documentElement.classList.toggle('dark', isDark);
    return <Story />;
  },
];

export const globalTypes = {
  theme: {
    name: 'Theme',
    description: 'Global theme for components',
    defaultValue: 'light',
    toolbar: {
      icon: 'circlehollow',
      items: ['light', 'dark'],
    },
  },
};
```

```js
// src/components/Button/Button.stories.js
import Button from './Button';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    intent:   { control: 'select', options: ['primary', 'secondary', 'ghost', 'danger'] },
    size:     { control: 'select', options: ['sm', 'md', 'lg'] },
    disabled: { control: 'boolean' },
    children: { control: 'text' },
  },
};

export const Primary = { args: { intent: 'primary', children: 'Click Me' } };
export const Danger  = { args: { intent: 'danger',  children: 'Delete' } };
```

<h3>164. Design a spacing system in Tailwind config that maps design tool tokens (e.g., Figma/Tokens Studio) directly to Tailwind utilities.</h3>

```js
// tailwind.config.js — Figma-aligned spacing tokens
// Figma uses an 8pt grid system (multiples of 4px)
module.exports = {
  theme: {
    extend: {
      spacing: {
        // Figma token names → Tailwind utilities
        'spacing-1':  '4px',   // spacing-xs
        'spacing-2':  '8px',   // spacing-sm
        'spacing-3':  '12px',  // spacing-sm+
        'spacing-4':  '16px',  // spacing-md (1rem)
        'spacing-5':  '20px',  // spacing-md+
        'spacing-6':  '24px',  // spacing-lg
        'spacing-8':  '32px',  // spacing-xl
        'spacing-10': '40px',  // spacing-2xl
        'spacing-12': '48px',  // spacing-3xl
        'spacing-16': '64px',  // spacing-4xl
        'spacing-20': '80px',  // spacing-5xl
        'spacing-24': '96px',  // spacing-6xl
      },
    },
  },
};
```

```html
<!-- Component built with Figma-aligned spacing tokens -->
<div class="p-spacing-6 rounded-xl bg-white border border-gray-100 shadow-sm">
  <h3 class="text-lg font-bold text-gray-900">Card Title</h3>
  <p class="mt-spacing-2 text-gray-500">Card content spaced per Figma tokens.</p>
  <div class="mt-spacing-4 flex gap-spacing-3">
    <button class="bg-blue-600 text-white px-spacing-4 py-spacing-2 rounded-lg text-sm font-semibold">Action</button>
    <button class="border border-gray-300 text-gray-700 px-spacing-4 py-spacing-2 rounded-lg text-sm">Cancel</button>
  </div>
</div>
```

<h3>165. Build a CSS variable-based theming system where switching themes (light/dark/brand) changes CSS variables, and Tailwind classes reference those variables.</h3>

```css
/* globals.css */
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --color-bg:      255 255 255;
    --color-surface: 249 250 251;
    --color-text:    17 24 39;
    --color-muted:   107 114 128;
    --color-primary: 37 99 235;
    --color-border:  229 231 235;
  }
  .dark {
    --color-bg:      17 24 39;
    --color-surface: 31 41 55;
    --color-text:    249 250 251;
    --color-muted:   156 163 175;
    --color-primary: 96 165 250;
    --color-border:  55 65 81;
  }
  .theme-purple {
    --color-primary: 124 58 237;
  }
}
```

```js
// tailwind.config.js
module.exports = {
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        bg:      'rgb(var(--color-bg) / <alpha-value>)',
        surface: 'rgb(var(--color-surface) / <alpha-value>)',
        primary: 'rgb(var(--color-primary) / <alpha-value>)',
        content: 'rgb(var(--color-text) / <alpha-value>)',
        muted:   'rgb(var(--color-muted) / <alpha-value>)',
        border:  'rgb(var(--color-border) / <alpha-value>)',
      },
    },
  },
};
```

```html
<!-- Switching themes: add/remove class on <html> -->
<html class="dark theme-purple">
<body class="bg-bg text-content min-h-screen">
  <div class="bg-surface border border-border rounded-xl p-6 max-w-sm">
    <h2 class="font-bold text-content">Themed Card</h2>
    <p class="text-muted mt-2 text-sm">Theme changes via CSS variables.</p>
    <button class="mt-4 bg-primary text-white px-4 py-2 rounded-lg font-semibold">Action</button>
  </div>
</body>
</html>
```

<h3>166. Implement a type scale using the <code>font-size</code> + <code>line-height</code> tuple format in config to create a harmonious typographic system.</h3>

```js
// tailwind.config.js
module.exports = {
  theme: {
    fontSize: {
      // [font-size, { line-height, letter-spacing, font-weight }]
      'xs':   ['0.75rem',  { lineHeight: '1rem',    letterSpacing: '0.05em' }],
      'sm':   ['0.875rem', { lineHeight: '1.25rem', letterSpacing: '0.01em' }],
      'base': ['1rem',     { lineHeight: '1.625rem' }],
      'lg':   ['1.125rem', { lineHeight: '1.75rem' }],
      'xl':   ['1.25rem',  { lineHeight: '1.875rem', fontWeight: '500' }],
      '2xl':  ['1.5rem',   { lineHeight: '2rem',     fontWeight: '600' }],
      '3xl':  ['1.875rem', { lineHeight: '2.375rem', fontWeight: '700' }],
      '4xl':  ['2.25rem',  { lineHeight: '2.75rem',  fontWeight: '700', letterSpacing: '-0.02em' }],
      '5xl':  ['3rem',     { lineHeight: '1',        fontWeight: '800', letterSpacing: '-0.03em' }],
      '6xl':  ['3.75rem',  { lineHeight: '1',        fontWeight: '800', letterSpacing: '-0.04em' }],
      '7xl':  ['4.5rem',   { lineHeight: '1',        fontWeight: '900', letterSpacing: '-0.04em' }],
    },
  },
};
```

```html
<article class="max-w-3xl mx-auto px-6 py-12 space-y-4">
  <p class="text-xs text-gray-500 uppercase tracking-widest font-semibold">Category Label</p>
  <h1 class="text-5xl text-gray-900">Hero Heading — Perfect Tight Leading</h1>
  <h2 class="text-3xl text-gray-800">Section Subheading with Semi-Bold</h2>
  <p class="text-base text-gray-600">Body text with comfortable 1.625 line-height for readability.</p>
  <p class="text-sm text-gray-500">Caption text, slightly smaller with controlled spacing.</p>
</article>
```

<h3>167. Create a consistent icon sizing system using Tailwind width/height classes alongside an SVG icon library.</h3>

```html
<!-- Icon sizing system: xs(w-3), sm(w-4), md(w-5), lg(w-6), xl(w-8), 2xl(w-10) -->
<div class="flex items-center gap-4 p-6">
  <!-- xs: 12px — for dense UIs, tags -->
  <svg class="w-3 h-3 text-gray-400" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" /></svg>

  <!-- sm: 16px — inline text icons -->
  <svg class="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>

  <!-- md: 20px — default button/nav icons -->
  <svg class="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>

  <!-- lg: 24px — standard icon size -->
  <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>

  <!-- xl: 32px — feature icons -->
  <svg class="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>

  <!-- 2xl: 40px — empty state/hero icons -->
  <svg class="w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" /></svg>
</div>
```

<h3>168. Design a responsive breakpoint strategy for a complex enterprise application using custom breakpoints and container queries.</h3>

```js
// tailwind.config.js — Enterprise breakpoint strategy
module.exports = {
  theme: {
    screens: {
      // Mobile-first breakpoints
      'xs':      '375px',  // Small phones
      'sm':      '640px',  // Large phones / small tablets
      'md':      '768px',  // Tablets
      'lg':      '1024px', // Small laptops
      'xl':      '1280px', // Standard desktops
      '2xl':     '1440px', // Large desktops
      '3xl':     '1920px', // Wide screens / TV
      // Range breakpoints (max-width)
      'mobile':  { max: '767px' },
      'tablet':  { min: '768px', max: '1023px' },
      'desktop': { min: '1024px' },
      // Print
      'print':   { raw: 'print' },
    },
  },
  plugins: [
    require('@tailwindcss/container-queries'),
  ],
};
```

```html
<!-- Enterprise layout using the custom breakpoints -->
<div class="flex flex-col lg:flex-row min-h-screen">
  <!-- Sidebar: hidden on mobile, compact on tablet, full on desktop -->
  <aside class="hidden md:flex md:w-16 lg:w-64 bg-gray-900 flex-shrink-0 flex-col transition-all duration-300">
    <div class="p-4 lg:p-6">
      <span class="hidden lg:block text-white font-bold text-lg">Enterprise</span>
      <span class="lg:hidden text-white font-bold text-xl text-center block">E</span>
    </div>
  </aside>

  <!-- Main with container query card -->
  <main class="flex-1 p-4 md:p-6 xl:p-8 bg-gray-50">
    <div class="@container bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
      <div class="flex flex-col @lg:flex-row gap-4">
        <div class="@lg:w-2/3"><h2 class="text-xl font-bold">Dashboard Overview</h2></div>
        <div class="@lg:w-1/3"><p class="text-sm text-gray-500">Side info</p></div>
      </div>
    </div>
  </main>
</div>
```

<h3>169. Build a design token documentation page that renders every color, spacing, typography, and shadow token from the Tailwind config.</h3>

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>Design Tokens</title>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-gray-50 min-h-screen">
  <div class="max-w-5xl mx-auto px-6 py-12">
    <h1 class="text-4xl font-extrabold text-gray-900 mb-10">Design Tokens</h1>

    <!-- Colors -->
    <section class="mb-12">
      <h2 class="text-2xl font-bold text-gray-900 mb-4">Colors</h2>
      <div class="grid grid-cols-10 gap-2">
        <div class="text-center"><div class="w-full h-10 rounded-lg bg-blue-100 mb-1"></div><span class="text-xs text-gray-500">blue-100</span></div>
        <div class="text-center"><div class="w-full h-10 rounded-lg bg-blue-300 mb-1"></div><span class="text-xs text-gray-500">blue-300</span></div>
        <div class="text-center"><div class="w-full h-10 rounded-lg bg-blue-500 mb-1"></div><span class="text-xs text-gray-500">blue-500</span></div>
        <div class="text-center"><div class="w-full h-10 rounded-lg bg-blue-700 mb-1"></div><span class="text-xs text-gray-500">blue-700</span></div>
        <div class="text-center"><div class="w-full h-10 rounded-lg bg-blue-900 mb-1"></div><span class="text-xs text-gray-500">blue-900</span></div>
        <div class="text-center"><div class="w-full h-10 rounded-lg bg-green-500 mb-1"></div><span class="text-xs text-gray-500">green-500</span></div>
        <div class="text-center"><div class="w-full h-10 rounded-lg bg-red-500 mb-1"></div><span class="text-xs text-gray-500">red-500</span></div>
        <div class="text-center"><div class="w-full h-10 rounded-lg bg-yellow-400 mb-1"></div><span class="text-xs text-gray-500">yellow-400</span></div>
        <div class="text-center"><div class="w-full h-10 rounded-lg bg-purple-500 mb-1"></div><span class="text-xs text-gray-500">purple-500</span></div>
        <div class="text-center"><div class="w-full h-10 rounded-lg bg-gray-900 mb-1"></div><span class="text-xs text-gray-500">gray-900</span></div>
      </div>
    </section>

    <!-- Spacing -->
    <section class="mb-12">
      <h2 class="text-2xl font-bold text-gray-900 mb-4">Spacing Scale</h2>
      <div class="space-y-2">
        <div class="flex items-center gap-4"><span class="text-xs text-gray-500 w-8">p-1</span><div class="h-3 bg-blue-400 rounded" style="width:4px"></div><span class="text-xs text-gray-400">4px</span></div>
        <div class="flex items-center gap-4"><span class="text-xs text-gray-500 w-8">p-2</span><div class="h-3 bg-blue-400 rounded" style="width:8px"></div><span class="text-xs text-gray-400">8px</span></div>
        <div class="flex items-center gap-4"><span class="text-xs text-gray-500 w-8">p-4</span><div class="h-3 bg-blue-400 rounded" style="width:16px"></div><span class="text-xs text-gray-400">16px</span></div>
        <div class="flex items-center gap-4"><span class="text-xs text-gray-500 w-8">p-8</span><div class="h-3 bg-blue-400 rounded" style="width:32px"></div><span class="text-xs text-gray-400">32px</span></div>
        <div class="flex items-center gap-4"><span class="text-xs text-gray-500 w-8">p-16</span><div class="h-3 bg-blue-400 rounded" style="width:64px"></div><span class="text-xs text-gray-400">64px</span></div>
      </div>
    </section>

    <!-- Shadows -->
    <section class="mb-12">
      <h2 class="text-2xl font-bold text-gray-900 mb-4">Shadows</h2>
      <div class="flex flex-wrap gap-6">
        <div class="bg-white rounded-xl p-6 shadow-sm w-32 text-center"><span class="text-xs text-gray-500">shadow-sm</span></div>
        <div class="bg-white rounded-xl p-6 shadow w-32 text-center"><span class="text-xs text-gray-500">shadow</span></div>
        <div class="bg-white rounded-xl p-6 shadow-md w-32 text-center"><span class="text-xs text-gray-500">shadow-md</span></div>
        <div class="bg-white rounded-xl p-6 shadow-lg w-32 text-center"><span class="text-xs text-gray-500">shadow-lg</span></div>
        <div class="bg-white rounded-xl p-6 shadow-xl w-32 text-center"><span class="text-xs text-gray-500">shadow-xl</span></div>
        <div class="bg-white rounded-xl p-6 shadow-2xl w-32 text-center"><span class="text-xs text-gray-500">shadow-2xl</span></div>
      </div>
    </section>
  </div>
</body>
</html>
```

<h3>170. Implement a design system audit tool that checks whether all used class names conform to approved token classes.</h3>

```js
// audit.js — Node.js script to audit Tailwind class usage against approved tokens
const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Approved design token classes (your design system's allowed utilities)
const approvedPatterns = [
  /^(bg|text|border)-(brand|primary|secondary|surface|content|muted|danger)(-\d+)?$/,
  /^(p|px|py|pt|pr|pb|pl|m|mx|my|mt|mr|mb|ml)-(0|1|2|3|4|5|6|8|10|12|16|20|24)$/,
  /^text-(xs|sm|base|lg|xl|2xl|3xl|4xl|5xl)$/,
  /^font-(normal|medium|semibold|bold|extrabold)$/,
  /^rounded(-(sm|md|lg|xl|2xl|full))?$/,
  /^shadow(-(sm|md|lg|xl|soft))?$/,
  /^(flex|grid|block|hidden|inline(-flex|-block)?)$/,
  /^(items|justify|gap|space)-.+$/,
];

const isApproved = (cls) => approvedPatterns.some((p) => p.test(cls));

// Extract all class names from HTML/JSX files
const files = glob.sync('src/**/*.{html,jsx,tsx}');
const violations = [];

files.forEach((file) => {
  const content = fs.readFileSync(file, 'utf-8');
  const classMatches = content.matchAll(/class(?:Name)?=["']([^"']+)["']/g);

  for (const match of classMatches) {
    const classes = match[1].split(/\s+/);
    classes.forEach((cls) => {
      const base = cls.replace(/^(sm|md|lg|xl|2xl|dark|hover|focus):/, '');
      if (base && !isApproved(base)) {
        violations.push({ file, class: cls });
      }
    });
  }
});

if (violations.length > 0) {
  console.log('❌ Design System Violations Found:\n');
  violations.forEach(({ file, class: cls }) => {
    console.log(`  ${file}: "${cls}" is not an approved design token`);
  });
  process.exit(1);
} else {
  console.log('✅ All class names conform to the design system tokens.');
}
```

### 23. Performance & Production

<h3>171. Configure Tailwind's <code>content</code> paths precisely to scan only necessary files and reduce build time in a large monorepo.</h3>

```js
// tailwind.config.js — Precise content scanning for monorepo
module.exports = {
  content: [
    // App source files only
    './apps/web/src/**/*.{html,js,jsx,ts,tsx,vue,svelte}',
    './apps/mobile-web/src/**/*.{html,js,jsx,ts,tsx}',
    // Shared component packages
    './packages/ui/src/**/*.{js,jsx,ts,tsx}',
    './packages/forms/src/**/*.{js,jsx,ts,tsx}',
    // Email templates
    './packages/emails/**/*.{html,js,ts}',
    // Exclude test files, stories, and generated code
    '!./apps/**/__tests__/**',
    '!./apps/**/*.test.{js,ts,tsx}',
    '!./apps/**/*.spec.{js,ts,tsx}',
    '!./apps/**/node_modules/**',
    '!./**/.storybook/**',
    '!./dist/**',
    '!./build/**',
  ],
  // Avoid over-broad patterns like './**/*.html'
};
```

```bash
# Measure build time
time npx tailwindcss -i ./src/input.css -o ./dist/output.css --minify

# Check output file size
ls -lh ./dist/output.css
```

<h3>172. Implement critical CSS extraction by inlining above-the-fold Tailwind styles and loading the rest asynchronously.</h3>

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Critical CSS</title>

  <!-- Critical CSS inlined (above-the-fold styles only) -->
  <style>
    /* These are the minimum styles needed to render the above-the-fold hero section */
    *,::before,::after{box-sizing:border-box}
    body{margin:0;font-family:Inter,ui-sans-serif,system-ui,sans-serif;background:#fff}
    .hero{display:flex;flex-direction:column;align-items:center;justify-content:center;min-height:100vh;background:#1e40af;color:#fff;text-align:center;padding:1.5rem}
    .hero h1{font-size:3rem;font-weight:800;margin-bottom:1rem}
    .hero p{font-size:1.25rem;opacity:.8;max-width:40rem}
  </style>

  <!-- Non-critical CSS loaded asynchronously -->
  <link rel="preload" href="/dist/styles.css" as="style" onload="this.onload=null;this.rel='stylesheet'" />
  <noscript><link rel="stylesheet" href="/dist/styles.css" /></noscript>
</head>
<body>
  <!-- Above-the-fold content uses critical CSS -->
  <section class="hero">
    <h1>Fast Loading Page</h1>
    <p>Critical CSS is inlined; the rest loads asynchronously.</p>
  </section>

  <!-- Below-the-fold content uses the async-loaded full stylesheet -->
  <section class="py-16 px-6 bg-gray-50">
    <div class="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
      <!-- Cards loaded after the full CSS arrives -->
    </div>
  </section>
</body>
</html>
```

<h3>173. Set up a PostCSS pipeline with <code>tailwindcss</code>, <code>autoprefixer</code>, and <code>cssnano</code> for maximum production CSS compression.</h3>

```js
// postcss.config.js
module.exports = {
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
    ...(process.env.NODE_ENV === 'production'
      ? [
          require('cssnano')({
            preset: ['advanced', {
              discardComments:   { removeAll: true },
              reduceIdents:      false,  // Keep keyframe names readable
              zindex:            false,  // Don't mangle z-index values
              autoprefixer:      false,  // Already handled above
              calc:              true,   // Simplify calc() expressions
              colormin:          true,   // Minify color values
              convertValues:     true,   // Convert px to equivalent units
              normalizeUnicode:  true,
              uniqueSelectors:   true,
            }],
          }),
        ]
      : []),
  ],
};
```

```bash
# Build for production
NODE_ENV=production npx postcss src/input.css -o dist/output.css

# Verify bundle size
ls -lh dist/output.css
# Typical output: 5-20KB for a full app (compressed with Brotli)
```

<h3>174. Configure <code>tailwind-merge</code> and <code>clsx</code> to handle dynamic class merging without specificity conflicts in a React component library.</h3>

```js
// lib/cn.js — Utility function for merging Tailwind classes
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Combines clsx and tailwind-merge:
 * - clsx handles conditional class logic
 * - twMerge resolves Tailwind class conflicts (e.g., p-4 vs p-8 → p-8 wins)
 */
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}
```

```jsx
// components/Button.jsx
import { cn } from '@/lib/cn';

export function Button({ className, variant = 'primary', size = 'md', disabled, children, ...props }) {
  return (
    <button
      {...props}
      disabled={disabled}
      className={cn(
        // Base
        'inline-flex items-center justify-center font-semibold rounded-lg transition-colors',
        // Size variants
        size === 'sm' && 'px-3 py-1.5 text-xs',
        size === 'md' && 'px-4 py-2 text-sm',
        size === 'lg' && 'px-6 py-3 text-base',
        // Color variants
        variant === 'primary'   && 'bg-blue-600 text-white hover:bg-blue-700',
        variant === 'secondary' && 'bg-gray-100 text-gray-900 hover:bg-gray-200',
        variant === 'danger'    && 'bg-red-600 text-white hover:bg-red-700',
        // Disabled state
        disabled && 'opacity-50 pointer-events-none',
        // Allow caller to override (twMerge handles conflicts)
        className
      )}
    >
      {children}
    </button>
  );
}

// Usage — caller can override without conflicts:
// <Button className="px-8 py-4">Large Custom</Button>
// → twMerge keeps px-8 py-4, removes the variant's px-4 py-2
```

<h3>175. Analyze a Tailwind production CSS bundle using PurgeCSS Report to identify any unexpectedly included classes.</h3>

```bash
# Install purgecss and its CLI
npm install -D purgecss @fullhuman/postcss-purgecss

# Run analysis
npx purgecss \
  --css ./dist/output.css \
  --content './src/**/*.{html,jsx,tsx}' \
  --output ./dist/purged.css

# Compare sizes
ls -lh dist/output.css dist/purged.css
```

```js
// postcss.config.js — Add PurgeCSS report in analysis mode
const { PurgeCSS } = require('purgecss');

async function analyzeBundle() {
  const result = await new PurgeCSS().purge({
    content: ['./src/**/*.{html,jsx,tsx}'],
    css: ['./dist/output.css'],
    rejected: true,      // Include rejected (unused) selectors in output
    rejectedCss: true,   // Write rejected CSS to a separate file
  });

  result.forEach(({ file, rejected }) => {
    console.log(`\n📄 ${file}`);
    console.log(`  Removed selectors: ${rejected.length}`);
    // Log classes that were unexpectedly kept
    const kept = result[0].css.match(/\.[a-zA-Z][\w-]*/g) || [];
    const unexpected = kept.filter(cls => !cls.match(/^(flex|grid|text|bg|p|m|rounded|shadow|border)/));
    if (unexpected.length) {
      console.log(`  ⚠️  Unexpected classes: ${unexpected.slice(0,10).join(', ')}`);
    }
  });
}

analyzeBundle();
```

<h3>176. Implement CSS layers (<code>@layer</code>) correctly to ensure Tailwind base, components, utilities, and custom styles load in the right cascade order.</h3>

```css
/* globals.css — Correct @layer order */

/* 1. Tailwind's base layer (resets, default element styles) */
@tailwind base;

/* 2. Tailwind's component layer (reusable component classes) */
@tailwind components;

/* 3. Tailwind's utility layer (all utility classes) */
@tailwind utilities;

/* Custom base styles — add after @tailwind base */
@layer base {
  html {
    scroll-behavior: smooth;
    -webkit-tap-highlight-color: transparent;
  }
  body {
    @apply font-sans text-gray-900 antialiased;
  }
  h1, h2, h3, h4 {
    @apply font-bold tracking-tight;
  }
}

/* Custom component classes — scoped between components and utilities */
@layer components {
  .btn {
    @apply inline-flex items-center justify-center font-semibold rounded-lg
           px-4 py-2 text-sm transition-colors focus-visible:outline-none
           focus-visible:ring-2 focus-visible:ring-offset-2;
  }
  .btn-primary {
    @apply btn bg-blue-600 text-white hover:bg-blue-700 focus-visible:ring-blue-500;
  }
  .btn-secondary {
    @apply btn bg-gray-100 text-gray-900 hover:bg-gray-200 focus-visible:ring-gray-400;
  }
  .card {
    @apply bg-white rounded-2xl border border-gray-200 shadow-sm p-6;
  }
  .input {
    @apply w-full border border-gray-300 rounded-lg px-4 py-2 text-sm
           focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
           placeholder:text-gray-400;
  }
}

/* Custom utilities — highest specificity layer */
@layer utilities {
  .text-balance { text-wrap: balance; }
  .text-pretty  { text-wrap: pretty; }
  .no-scrollbar { scrollbar-width: none; }
  .no-scrollbar::-webkit-scrollbar { display: none; }
}
```

<h3>177. Build a Tailwind v4 project using the new Vite plugin approach without a <code>tailwind.config.js</code>, configuring everything via CSS <code>@theme</code>.</h3>

```js
// vite.config.js
import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [
    tailwindcss(), // No config file needed!
  ],
});
```

```css
/* src/app.css — Tailwind v4: all config in CSS via @theme */
@import "tailwindcss";

@theme {
  /* Custom color tokens */
  --color-brand-50:  #eff6ff;
  --color-brand-500: #3b82f6;
  --color-brand-600: #2563eb;
  --color-brand-700: #1d4ed8;

  /* Custom spacing */
  --spacing-18: 4.5rem;
  --spacing-22: 5.5rem;

  /* Custom fonts */
  --font-family-sans: 'Inter', ui-sans-serif, system-ui;
  --font-family-display: 'Cal Sans', 'Inter', ui-sans-serif;

  /* Custom breakpoints */
  --breakpoint-3xl: 1920px;

  /* Custom animations */
  --animate-fade-in: fadeIn 0.25s ease-out;

  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(8px); }
    to   { opacity: 1; transform: translateY(0); }
  }
}
```

```html
<!-- Usage: all standard + custom tokens available -->
<main class="bg-brand-50 min-h-screen">
  <h1 class="font-display text-brand-600 text-5xl font-extrabold">
    Tailwind v4 No Config!
  </h1>
  <div class="mt-18 p-6 animate-fade-in bg-white rounded-2xl shadow">
    <p>Configured entirely via CSS @theme.</p>
  </div>
</main>
```

<h3>178. Set up Tailwind with a CDN-compatible JIT approach for server-rendered pages without a build step using the Play CDN script.</h3>

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Tailwind Play CDN</title>

  <!-- Tailwind Play CDN — no build step required -->
  <script src="https://cdn.tailwindcss.com"></script>

  <!-- Optional: customize config inline -->
  <script>
    tailwind.config = {
      darkMode: 'class',
      theme: {
        extend: {
          colors: {
            brand: '#2563eb',
          },
          fontFamily: {
            sans: ['Inter', 'ui-sans-serif'],
          },
        },
      },
    };
  </script>

  <!-- Optional: add custom CSS with @layer -->
  <style type="text/tailwindcss">
    @layer components {
      .btn-primary {
        @apply bg-brand text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors;
      }
    }
  </style>

  <!-- Google Fonts -->
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800&display=swap" rel="stylesheet">
</head>
<body class="bg-gray-50 font-sans min-h-screen">
  <div class="max-w-4xl mx-auto px-6 py-12">
    <h1 class="text-5xl font-extrabold text-gray-900 mb-4">Play CDN Demo</h1>
    <p class="text-xl text-gray-500 mb-8">No build step — Tailwind runs directly in the browser.</p>
    <button class="btn-primary">Custom Component Class</button>
    <div class="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
      <div class="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">Card 1</div>
      <div class="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">Card 2</div>
      <div class="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">Card 3</div>
    </div>
  </div>
</body>
</html>
```

<h3>179. Implement Tailwind CSS in a micro-frontend architecture where each MFE has its own Tailwind build without class name conflicts.</h3>

```js
// mfe-shell/tailwind.config.js
module.exports = {
  prefix: 'shell-',  // All shell utilities: shell-flex, shell-p-4, etc.
  content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
  theme: { extend: {} },
};

// mfe-products/tailwind.config.js
module.exports = {
  prefix: 'prod-',   // All product MFE utilities: prod-flex, prod-p-4, etc.
  content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
  theme: { extend: {} },
};

// mfe-checkout/tailwind.config.js
module.exports = {
  prefix: 'chk-',   // All checkout utilities: chk-flex, chk-p-4, etc.
  content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
  theme: { extend: {} },
};
```

```html
<!-- Shell MFE — uses shell- prefix -->
<header class="shell-sticky shell-top-0 shell-z-50 shell-bg-white shell-shadow-sm shell-px-6 shell-py-4">
  <div class="shell-flex shell-items-center shell-justify-between">
    <span class="shell-text-xl shell-font-bold">Shell Header</span>
  </div>
</header>

<!-- Products MFE — uses prod- prefix (no conflicts with shell) -->
<div class="prod-grid prod-grid-cols-3 prod-gap-4 prod-p-6">
  <div class="prod-bg-white prod-rounded-xl prod-shadow prod-p-4">Product Card</div>
</div>
```

<h3>180. Configure Tailwind's <code>blocklist</code> option to prevent specific utilities from being generated, enforcing design system boundaries.</h3>

```js
// tailwind.config.js
module.exports = {
  blocklist: [
    // Prevent use of non-design-system colors
    'bg-lime-500', 'text-lime-500', 'border-lime-500',
    // Prevent fixed pixel sizing that breaks the grid
    'w-px', 'h-px',
    // Prevent z-index values outside the approved scale
    'z-30', 'z-40',
    // Prevent opacity shortcuts (use bg-color/opacity instead)
    'opacity-10', 'opacity-20', 'opacity-30', 'opacity-70', 'opacity-80', 'opacity-90',
    // Prevent raw tailwind scrollbar (use our custom plugin instead)
    'overflow-scroll',
  ],
  content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
  theme: { extend: {} },
  plugins: [],
};
```

```html
<!-- ❌ These classes won't generate any CSS (blocked): -->
<!-- <div class="bg-lime-500"> -->
<!-- <div class="z-30"> -->

<!-- ✅ Use approved alternatives instead: -->
<div class="bg-green-500">Approved green</div>
<div class="z-10">Approved z-index (10)</div>
<div class="z-20">Approved z-index (20)</div>
<div class="z-50">Approved z-index (50)</div>
<div class="bg-blue-500/30">Opacity via color modifier</div>
```

### 24. Advanced Tailwind Patterns

<h3>181. Build a polymorphic <code>Box</code> component in React that accepts an <code>as</code> prop and applies Tailwind classes using <code>cva</code> for all variants.</h3>

```jsx
// components/Box.jsx
import { cva } from 'class-variance-authority';
import { cn } from '@/lib/cn';

const box = cva('', {
  variants: {
    display: {
      block:      'block',
      flex:       'flex',
      'inline-flex': 'inline-flex',
      grid:       'grid',
    },
    padding: {
      none: '',
      sm:   'p-3',
      md:   'p-5',
      lg:   'p-8',
    },
    rounded: {
      none: '',
      md:   'rounded-lg',
      xl:   'rounded-xl',
      full: 'rounded-full',
    },
    shadow: {
      none: '',
      sm:   'shadow-sm',
      md:   'shadow-md',
      lg:   'shadow-lg',
    },
    bg: {
      white:      'bg-white',
      gray:       'bg-gray-50',
      blue:       'bg-blue-50',
      transparent:'bg-transparent',
    },
  },
  defaultVariants: {
    display: 'block',
    padding: 'none',
    rounded: 'none',
    shadow:  'none',
    bg:      'transparent',
  },
});

export function Box({ as: Component = 'div', className, display, padding, rounded, shadow, bg, ...props }) {
  return (
    <Component
      className={cn(box({ display, padding, rounded, shadow, bg }), className)}
      {...props}
    />
  );
}

// Usage examples:
// <Box as="section" display="flex" padding="lg" rounded="xl" shadow="md" bg="white">
// <Box as="article" display="grid" padding="md">
// <Box as="button" display="inline-flex" rounded="full" bg="blue">
```

<h3>182. Create a <code>Transition</code> wrapper component using Headless UI's <code>Transition</code> with enter/leave Tailwind animation classes.</h3>

```jsx
// components/FadeTransition.jsx
import { Transition } from '@headlessui/react';
import { Fragment } from 'react';

export function FadeTransition({ show, children }) {
  return (
    <Transition
      as={Fragment}
      show={show}
      enter="transition-all ease-out duration-300"
      enterFrom="opacity-0 translate-y-2 scale-95"
      enterTo="opacity-100 translate-y-0 scale-100"
      leave="transition-all ease-in duration-200"
      leaveFrom="opacity-100 translate-y-0 scale-100"
      leaveTo="opacity-0 translate-y-2 scale-95"
    >
      {children}
    </Transition>
  );
}

export function SlideTransition({ show, children }) {
  return (
    <Transition
      show={show}
      enter="transition-transform duration-300 ease-out"
      enterFrom="-translate-x-full"
      enterTo="translate-x-0"
      leave="transition-transform duration-200 ease-in"
      leaveFrom="translate-x-0"
      leaveTo="-translate-x-full"
    >
      {children}
    </Transition>
  );
}

// Usage:
// const [open, setOpen] = useState(false);
// <FadeTransition show={open}>
//   <div class="bg-white rounded-xl shadow p-6">Animated content</div>
// </FadeTransition>
```

<h3>183. Implement a compound component pattern using Headless UI's Menu styled entirely with Tailwind.</h3>

```jsx
// components/DropdownMenu.jsx
import { Menu, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { cn } from '@/lib/cn';

export function DropdownMenu({ label, items }) {
  return (
    <Menu as="div" className="relative inline-block">
      {/* Menu.Button */}
      <Menu.Button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300
                               rounded-xl text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50
                               focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500">
        {label}
        <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </Menu.Button>

      {/* Animated Dropdown */}
      <Transition as={Fragment}
        enter="transition ease-out duration-150"
        enterFrom="opacity-0 scale-95 -translate-y-1"
        enterTo="opacity-100 scale-100 translate-y-0"
        leave="transition ease-in duration-100"
        leaveFrom="opacity-100 scale-100 translate-y-0"
        leaveTo="opacity-0 scale-95 -translate-y-1"
      >
        <Menu.Items className="absolute right-0 mt-1.5 w-52 bg-white rounded-2xl shadow-xl
                                border border-gray-100 py-1 z-50 focus:outline-none">
          {items.map((item) => (
            <Menu.Item key={item.label}>
              {({ active }) => (
                <button
                  onClick={item.onClick}
                  className={cn(
                    'flex w-full items-center gap-2 px-4 py-2.5 text-sm transition-colors',
                    active ? 'bg-gray-50 text-gray-900' : 'text-gray-700',
                    item.danger && 'text-red-600 hover:bg-red-50'
                  )}
                >
                  {item.icon && <span className="w-4 h-4">{item.icon}</span>}
                  {item.label}
                </button>
              )}
            </Menu.Item>
          ))}
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
```

<h3>184. Build a drag-and-drop kanban board with column highlights (<code>bg-blue-50 border-blue-300</code>) using <code>dragover</code> class toggling.</h3>

```html
<div class="flex gap-4 p-6 overflow-x-auto min-h-screen bg-gray-100">
  <!-- Column -->
  <div id="col-todo"
    class="w-72 flex-shrink-0 bg-gray-50 rounded-2xl p-4 border-2 border-transparent
           transition-colors duration-150"
    ondragover="event.preventDefault(); this.classList.add('bg-blue-50','border-blue-300')"
    ondragleave="this.classList.remove('bg-blue-50','border-blue-300')"
    ondrop="event.preventDefault(); this.classList.remove('bg-blue-50','border-blue-300'); this.appendChild(event.dataTransfer._card)"
  >
    <h2 class="font-bold text-gray-700 text-sm uppercase tracking-wide mb-3 px-1">To Do</h2>

    <!-- Draggable Card -->
    <div class="bg-white rounded-xl p-4 shadow-sm border border-gray-200 cursor-grab active:cursor-grabbing
                hover:shadow-md transition-shadow"
      draggable="true"
      ondragstart="event.dataTransfer._card = this; this.classList.add('opacity-50')"
      ondragend="this.classList.remove('opacity-50')"
    >
      <p class="text-sm font-semibold text-gray-900">Design homepage mockup</p>
      <div class="flex items-center gap-2 mt-2">
        <span class="text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full font-medium">Design</span>
      </div>
    </div>
  </div>

  <!-- In Progress Column -->
  <div id="col-progress"
    class="w-72 flex-shrink-0 bg-gray-50 rounded-2xl p-4 border-2 border-transparent transition-colors duration-150"
    ondragover="event.preventDefault(); this.classList.add('bg-blue-50','border-blue-300')"
    ondragleave="this.classList.remove('bg-blue-50','border-blue-300')"
    ondrop="event.preventDefault(); this.classList.remove('bg-blue-50','border-blue-300'); this.appendChild(event.dataTransfer._card)"
  >
    <h2 class="font-bold text-yellow-700 text-sm uppercase tracking-wide mb-3 px-1">In Progress</h2>
  </div>

  <!-- Done Column -->
  <div id="col-done"
    class="w-72 flex-shrink-0 bg-gray-50 rounded-2xl p-4 border-2 border-transparent transition-colors duration-150"
    ondragover="event.preventDefault(); this.classList.add('bg-blue-50','border-blue-300')"
    ondragleave="this.classList.remove('bg-blue-50','border-blue-300')"
    ondrop="event.preventDefault(); this.classList.remove('bg-blue-50','border-blue-300'); this.appendChild(event.dataTransfer._card)"
  >
    <h2 class="font-bold text-green-700 text-sm uppercase tracking-wide mb-3 px-1">Done</h2>
  </div>
</div>
```

<h3>185. Create a virtualized list component where Tailwind classes are applied programmatically based on item index and selection state.</h3>

```jsx
// components/VirtualList.jsx
import { useState, useCallback } from 'react';
import { FixedSizeList as List } from 'react-window';
import { cn } from '@/lib/cn';

const items = Array.from({ length: 10000 }, (_, i) => ({
  id: i,
  name: `Item ${i + 1}`,
  status: i % 3 === 0 ? 'active' : i % 3 === 1 ? 'pending' : 'inactive',
}));

function Row({ index, style, data: { selectedId, onSelect } }) {
  const item = items[index];
  const isSelected  = item.id === selectedId;
  const isEven      = index % 2 === 0;

  return (
    <div
      style={style}
      onClick={() => onSelect(item.id)}
      className={cn(
        'flex items-center gap-4 px-4 cursor-pointer transition-colors duration-100',
        isSelected  ? 'bg-blue-50 border-l-2 border-blue-500' : isEven ? 'bg-white' : 'bg-gray-50',
        !isSelected && 'hover:bg-blue-50/50',
      )}
    >
      <span className="text-sm font-medium text-gray-900 flex-1">{item.name}</span>
      <span className={cn('text-xs font-semibold px-2 py-0.5 rounded-full',
        item.status === 'active'   && 'bg-green-100 text-green-700',
        item.status === 'pending'  && 'bg-yellow-100 text-yellow-700',
        item.status === 'inactive' && 'bg-gray-100 text-gray-500',
      )}>
        {item.status}
      </span>
    </div>
  );
}

export function VirtualList() {
  const [selectedId, setSelectedId] = useState(null);
  return (
    <div className="border border-gray-200 rounded-2xl overflow-hidden shadow-sm">
      <List
        height={400}
        itemCount={items.length}
        itemSize={48}
        itemData={{ selectedId, onSelect: setSelectedId }}
      >
        {Row}
      </List>
    </div>
  );
}
```

<h3>186. Build a command palette (cmd+k) with keyboard navigation, styled using Headless UI's <code>Combobox</code> and Tailwind.</h3>

```jsx
// components/CommandPalette.jsx
import { useState, useEffect } from 'react';
import { Combobox, Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { cn } from '@/lib/cn';

const commands = [
  { id: 1, name: 'Go to Dashboard', icon: '🏠', category: 'Navigation' },
  { id: 2, name: 'Create new project', icon: '➕', category: 'Actions' },
  { id: 3, name: 'Open Settings', icon: '⚙️', category: 'Navigation' },
  { id: 4, name: 'Toggle dark mode', icon: '🌙', category: 'Actions' },
  { id: 5, name: 'View documentation', icon: '📚', category: 'Navigation' },
];

export function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');

  useEffect(() => {
    const handler = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setOpen(true);
      }
    };
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, []);

  const filtered = query === '' ? commands :
    commands.filter(c => c.name.toLowerCase().includes(query.toLowerCase()));

  return (
    <Transition.Root show={open} as={Fragment} afterLeave={() => setQuery('')}>
      <Dialog onClose={() => setOpen(false)} className="relative z-50">
        {/* Backdrop */}
        <Transition.Child as={Fragment}
          enter="ease-out duration-200" enterFrom="opacity-0" enterTo="opacity-100"
          leave="ease-in duration-150" leaveFrom="opacity-100" leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/40 backdrop-blur-sm" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto p-4 pt-[10vh]">
          <Transition.Child as={Fragment}
            enter="ease-out duration-200" enterFrom="opacity-0 scale-95" enterTo="opacity-100 scale-100"
            leave="ease-in duration-150" leaveFrom="opacity-100 scale-100" leaveTo="opacity-0 scale-95"
          >
            <Dialog.Panel className="mx-auto max-w-xl bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200">
              <Combobox onChange={(item) => { item && console.log(item.name); setOpen(false); }}>
                {/* Search Input */}
                <div className="flex items-center gap-3 px-4 py-3 border-b border-gray-100">
                  <svg className="w-5 h-5 text-gray-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                  <Combobox.Input
                    className="flex-1 bg-transparent text-gray-900 placeholder:text-gray-400 focus:outline-none text-sm"
                    placeholder="Search commands..."
                    onChange={(e) => setQuery(e.target.value)}
                  />
                  <kbd className="text-xs text-gray-400 border border-gray-200 rounded px-1.5 py-0.5">ESC</kbd>
                </div>

                {/* Results */}
                <Combobox.Options static className="py-2 max-h-72 overflow-y-auto">
                  {filtered.length === 0 ? (
                    <p className="px-4 py-8 text-sm text-center text-gray-400">No results found.</p>
                  ) : (
                    filtered.map((item) => (
                      <Combobox.Option key={item.id} value={item}
                        className={({ active }) => cn(
                          'flex items-center gap-3 px-4 py-2.5 cursor-pointer text-sm transition-colors',
                          active ? 'bg-blue-50 text-blue-700' : 'text-gray-700'
                        )}
                      >
                        <span className="text-base">{item.icon}</span>
                        <span>{item.name}</span>
                        <span className="ml-auto text-xs text-gray-400">{item.category}</span>
                      </Combobox.Option>
                    ))
                  )}
                </Combobox.Options>

                {/* Footer -->*/}
                <div className="px-4 py-2 border-t border-gray-100 flex items-center gap-4 text-xs text-gray-400">
                  <span>↑↓ to navigate</span>
                  <span>↵ to select</span>
                  <span>ESC to close</span>
                </div>
              </Combobox>
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
```

<h3>187. Implement an infinite scroll component where a loading spinner (<code>animate-spin</code>) appears at the bottom using an IntersectionObserver.</h3>

```jsx
// components/InfiniteScroll.jsx
import { useState, useEffect, useRef } from 'react';

export function InfiniteScrollList() {
  const [items, setItems]       = useState(Array.from({ length: 10 }, (_, i) => i + 1));
  const [loading, setLoading]   = useState(false);
  const [hasMore, setHasMore]   = useState(true);
  const loaderRef               = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && !loading && hasMore) {
        loadMore();
      }
    }, { threshold: 0.5 });

    if (loaderRef.current) observer.observe(loaderRef.current);
    return () => observer.disconnect();
  }, [loading, hasMore]);

  const loadMore = async () => {
    setLoading(true);
    await new Promise(r => setTimeout(r, 1000)); // Simulate API call
    setItems(prev => {
      const next = [...prev, ...Array.from({ length: 10 }, (_, i) => prev.length + i + 1)];
      if (next.length >= 50) setHasMore(false);
      return next;
    });
    setLoading(false);
  };

  return (
    <div className="max-w-md mx-auto">
      <div className="space-y-3 p-4">
        {items.map(item => (
          <div key={item} className="bg-white rounded-xl border border-gray-100 shadow-sm p-4 flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-white text-sm font-bold flex-shrink-0">
              {item}
            </div>
            <div>
              <p className="font-semibold text-gray-900 text-sm">Item #{item}</p>
              <p className="text-xs text-gray-400 mt-0.5">Loaded on scroll</p>
            </div>
          </div>
        ))}
      </div>

      {/* Loader / End message */}
      <div ref={loaderRef} className="flex items-center justify-center py-8">
        {loading ? (
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 border-2 border-blue-200 border-t-blue-600 rounded-full animate-spin"></div>
            <span className="text-sm text-gray-500">Loading more...</span>
          </div>
        ) : !hasMore ? (
          <p className="text-sm text-gray-400">You've reached the end.</p>
        ) : null}
      </div>
    </div>
  );
}
```

<h3>188. Create a real-time form with live validation feedback using <code>peer-invalid:</code> modifiers for error states without JavaScript.</h3>

```html
<form class="max-w-sm p-6 space-y-5" novalidate>
  <!-- Email field with CSS-only validation -->
  <div>
    <label class="block text-sm font-medium text-gray-700 mb-1" for="email-field">Email</label>
    <input
      id="email-field"
      type="email"
      required
      minlength="5"
      placeholder="you@example.com"
      class="peer w-full border border-gray-300 rounded-lg px-4 py-2
             focus:outline-none focus:ring-2 focus:ring-blue-500
             invalid:[&:not(:placeholder-shown)]:border-red-500
             invalid:[&:not(:placeholder-shown)]:focus:ring-red-500"
    />
    <!-- Error message: visible only when peer is invalid AND not empty -->
    <p class="mt-1 text-xs text-red-600
              invisible peer-[&:not(:placeholder-shown)]:peer-invalid:visible">
      Please enter a valid email address.
    </p>
    <!-- Success indicator -->
    <p class="mt-1 text-xs text-green-600
              invisible peer-[&:not(:placeholder-shown)]:peer-valid:visible">
      ✓ Looks good!
    </p>
  </div>

  <!-- Password field -->
  <div>
    <label class="block text-sm font-medium text-gray-700 mb-1" for="pass-field">Password</label>
    <input
      id="pass-field"
      type="password"
      required
      minlength="8"
      placeholder="Min 8 characters"
      class="peer w-full border border-gray-300 rounded-lg px-4 py-2
             focus:outline-none focus:ring-2 focus:ring-blue-500
             invalid:[&:not(:placeholder-shown)]:border-red-500"
    />
    <p class="mt-1 text-xs text-red-600
              invisible peer-[&:not(:placeholder-shown)]:peer-invalid:visible">
      Password must be at least 8 characters.
    </p>
  </div>

  <button type="submit"
    class="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold
           hover:bg-blue-700 transition-colors">
    Create Account
  </button>
</form>
```

<h3>189. Build a rich text editor wrapper that applies <code>prose</code> typography classes to dynamically rendered markdown/HTML output.</h3>

```html
<!-- Requires @tailwindcss/typography plugin -->
<!-- npm install -D @tailwindcss/typography -->

<!-- tailwind.config.js:
  plugins: [require('@tailwindcss/typography')]
-->

<article class="prose prose-lg dark:prose-invert max-w-none
                prose-headings:font-bold prose-headings:tracking-tight
                prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline
                prose-code:bg-gray-100 dark:prose-code:bg-gray-800 prose-code:rounded
                prose-pre:bg-gray-900 prose-pre:text-gray-100
                prose-blockquote:border-blue-500 prose-blockquote:text-gray-600
                prose-img:rounded-2xl prose-img:shadow-lg">
  <!-- Dynamic HTML/Markdown rendered here -->
  <h1>Getting Started with Tailwind CSS</h1>
  <p>Tailwind CSS is a utility-first CSS framework that provides <strong>low-level utility classes</strong> to build custom designs.</p>
  <h2>Installation</h2>
  <pre><code>npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p</code></pre>
  <blockquote>
    <p>Tailwind is more than a framework — it's a design system in a box.</p>
  </blockquote>
  <h3>Config Example</h3>
  <p>Add the following to your <code>tailwind.config.js</code>:</p>
  <ul>
    <li>Set <code>content</code> to point to your source files</li>
    <li>Extend the <code>theme</code> with your brand colors</li>
    <li>Add plugins as needed</li>
  </ul>
  <img src="screenshot.png" alt="Tailwind config screenshot" />
</article>
```

<h3>190. Implement a theme switcher that stores the preference in <code>localStorage</code> and applies the <code>dark</code> class server-side to avoid flash.</h3>

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>No-Flash Dark Mode</title>

  <!-- Anti-flash script: runs synchronously BEFORE body renders -->
  <!-- This is the key to avoiding the flash of unstyled/wrong-theme content -->
  <script>
    (function () {
      try {
        const stored = localStorage.getItem('theme');
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        const shouldBeDark = stored === 'dark' || (!stored && prefersDark);

        if (shouldBeDark) {
          document.documentElement.classList.add('dark');
        } else {
          document.documentElement.classList.remove('dark');
        }
      } catch (e) {
        // If localStorage is unavailable (private mode), silently continue
      }
    })();
  </script>

  <script src="https://cdn.tailwindcss.com"></script>
  <script>tailwind.config = { darkMode: 'class' };</script>
</head>
<body class="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300 min-h-screen">

  <div class="max-w-2xl mx-auto px-6 py-12">
    <div class="flex items-center justify-between mb-8">
      <h1 class="text-3xl font-bold">No-Flash Dark Mode</h1>
      <!-- Theme Toggle -->
      <button
        id="theme-toggle"
        onclick="toggleTheme()"
        class="p-2 rounded-xl bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
        aria-label="Toggle theme"
      >
        <svg id="sun-icon" class="w-5 h-5 text-yellow-500 hidden dark:block" fill="currentColor" viewBox="0 0 20 20">
          <path fill-rule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clip-rule="evenodd" />
        </svg>
        <svg id="moon-icon" class="w-5 h-5 text-gray-600 block dark:hidden" fill="currentColor" viewBox="0 0 20 20">
          <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
        </svg>
      </button>
    </div>

    <p class="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
      The anti-flash script runs before the page renders, so there's no visible flash
      when loading. Preference is stored in localStorage.
    </p>
  </div>

  <script>
    function toggleTheme() {
      const isDark = document.documentElement.classList.toggle('dark');
      localStorage.setItem('theme', isDark ? 'dark' : 'light');
    }
  </script>
</body>
</html>
```

### 25. Real-World Projects

<h3>191. Build a complete landing page with hero, features grid, pricing cards, testimonials carousel, FAQ accordion, and footer — fully responsive.</h3>

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>SaaSApp Landing Page</title>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-white font-sans text-gray-900">

  <!-- Header -->
  <header class="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-gray-100">
    <div class="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
      <span class="text-xl font-bold text-blue-600">SaaSApp</span>
      <nav class="hidden md:flex items-center gap-6 text-sm font-medium">
        <a href="#features" class="text-gray-600 hover:text-gray-900">Features</a>
        <a href="#pricing"  class="text-gray-600 hover:text-gray-900">Pricing</a>
        <a href="#faq"      class="text-gray-600 hover:text-gray-900">FAQ</a>
        <a href="#" class="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">Start Free</a>
      </nav>
    </div>
  </header>

  <!-- Hero -->
  <section class="py-24 px-6 bg-gradient-to-br from-blue-50 to-indigo-50 text-center">
    <div class="max-w-4xl mx-auto">
      <span class="inline-block bg-blue-100 text-blue-700 text-xs font-bold px-3 py-1 rounded-full mb-4">Now in Public Beta</span>
      <h1 class="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6 leading-tight">
        Build faster with<br />our platform
      </h1>
      <p class="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
        The all-in-one SaaS platform that helps teams ship products faster, collaborate better, and delight customers.
      </p>
      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <a href="#" class="bg-blue-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-700 transition-colors">Get started free</a>
        <a href="#" class="bg-white text-gray-700 border border-gray-300 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-50">Watch demo</a>
      </div>
    </div>
  </section>

  <!-- Features Grid -->
  <section id="features" class="py-20 px-6">
    <div class="max-w-5xl mx-auto">
      <h2 class="text-3xl font-extrabold text-gray-900 text-center mb-12">Everything you need</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div class="bg-gray-50 rounded-2xl p-6 border border-gray-100">
          <div class="text-3xl mb-3">🚀</div>
          <h3 class="font-bold text-gray-900 text-lg mb-2">Blazing Fast</h3>
          <p class="text-gray-500 text-sm">Optimized for speed from day one. Your users will notice the difference.</p>
        </div>
        <div class="bg-gray-50 rounded-2xl p-6 border border-gray-100">
          <div class="text-3xl mb-3">🔒</div>
          <h3 class="font-bold text-gray-900 text-lg mb-2">Enterprise Security</h3>
          <p class="text-gray-500 text-sm">SOC 2 compliant, end-to-end encryption, and fine-grained permissions.</p>
        </div>
        <div class="bg-gray-50 rounded-2xl p-6 border border-gray-100">
          <div class="text-3xl mb-3">📊</div>
          <h3 class="font-bold text-gray-900 text-lg mb-2">Deep Analytics</h3>
          <p class="text-gray-500 text-sm">Real-time dashboards that give you insights into every aspect of your product.</p>
        </div>
        <div class="bg-gray-50 rounded-2xl p-6 border border-gray-100">
          <div class="text-3xl mb-3">🔌</div>
          <h3 class="font-bold text-gray-900 text-lg mb-2">100+ Integrations</h3>
          <p class="text-gray-500 text-sm">Connect with Slack, Notion, GitHub, Jira, and all your favorite tools.</p>
        </div>
        <div class="bg-gray-50 rounded-2xl p-6 border border-gray-100">
          <div class="text-3xl mb-3">🤖</div>
          <h3 class="font-bold text-gray-900 text-lg mb-2">AI-Powered</h3>
          <p class="text-gray-500 text-sm">Smart suggestions and automations powered by the latest AI models.</p>
        </div>
        <div class="bg-gray-50 rounded-2xl p-6 border border-gray-100">
          <div class="text-3xl mb-3">🌍</div>
          <h3 class="font-bold text-gray-900 text-lg mb-2">Global CDN</h3>
          <p class="text-gray-500 text-sm">Deployed on 300+ edge locations worldwide for minimal latency anywhere.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Pricing -->
  <section id="pricing" class="py-20 px-6 bg-gray-50">
    <div class="max-w-5xl mx-auto">
      <h2 class="text-3xl font-extrabold text-gray-900 text-center mb-12">Simple, transparent pricing</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
        <div class="bg-white rounded-2xl border border-gray-200 p-8">
          <h3 class="font-bold text-gray-900 text-xl">Starter</h3>
          <p class="text-gray-500 text-sm mt-1">For individuals and small teams.</p>
          <p class="text-4xl font-extrabold text-gray-900 mt-5">$9<span class="text-base font-normal text-gray-400">/mo</span></p>
          <ul class="mt-6 space-y-2 text-sm text-gray-600">
            <li class="flex items-center gap-2"><span class="text-green-500">✓</span> 5 projects</li>
            <li class="flex items-center gap-2"><span class="text-green-500">✓</span> 10 GB storage</li>
            <li class="flex items-center gap-2"><span class="text-green-500">✓</span> Email support</li>
          </ul>
          <button class="mt-8 w-full border border-blue-600 text-blue-600 py-2 rounded-xl font-semibold hover:bg-blue-50">Get Started</button>
        </div>
        <div class="bg-blue-600 rounded-2xl p-8 shadow-2xl scale-105">
          <span class="inline-block bg-yellow-400 text-yellow-900 text-xs font-bold px-3 py-1 rounded-full mb-4">MOST POPULAR</span>
          <h3 class="font-bold text-white text-xl">Pro</h3>
          <p class="text-blue-200 text-sm mt-1">For growing teams.</p>
          <p class="text-4xl font-extrabold text-white mt-5">$29<span class="text-base font-normal text-blue-300">/mo</span></p>
          <ul class="mt-6 space-y-2 text-sm text-blue-100">
            <li class="flex items-center gap-2"><span class="text-yellow-300">✓</span> Unlimited projects</li>
            <li class="flex items-center gap-2"><span class="text-yellow-300">✓</span> 100 GB storage</li>
            <li class="flex items-center gap-2"><span class="text-yellow-300">✓</span> Priority support</li>
          </ul>
          <button class="mt-8 w-full bg-white text-blue-600 py-2 rounded-xl font-bold hover:bg-blue-50">Get Pro</button>
        </div>
        <div class="bg-white rounded-2xl border border-gray-200 p-8">
          <h3 class="font-bold text-gray-900 text-xl">Enterprise</h3>
          <p class="text-gray-500 text-sm mt-1">For large organizations.</p>
          <p class="text-4xl font-extrabold text-gray-900 mt-5">$99<span class="text-base font-normal text-gray-400">/mo</span></p>
          <ul class="mt-6 space-y-2 text-sm text-gray-600">
            <li class="flex items-center gap-2"><span class="text-green-500">✓</span> Everything in Pro</li>
            <li class="flex items-center gap-2"><span class="text-green-500">✓</span> 1 TB storage</li>
            <li class="flex items-center gap-2"><span class="text-green-500">✓</span> SLA guarantee</li>
          </ul>
          <button class="mt-8 w-full border border-gray-300 text-gray-700 py-2 rounded-xl font-semibold hover:bg-gray-50">Contact Sales</button>
        </div>
      </div>
    </div>
  </section>

  <!-- FAQ -->
  <section id="faq" class="py-20 px-6">
    <div class="max-w-2xl mx-auto">
      <h2 class="text-3xl font-extrabold text-gray-900 text-center mb-12">Frequently asked questions</h2>
      <div class="space-y-3">
        <details class="group border border-gray-200 rounded-xl overflow-hidden">
          <summary class="flex items-center justify-between px-5 py-4 cursor-pointer hover:bg-gray-50 list-none font-semibold text-gray-900">
            Is there a free trial?
            <svg class="w-5 h-5 text-gray-400 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" /></svg>
          </summary>
          <div class="px-5 pb-4 pt-2 text-gray-600 text-sm border-t border-gray-100">
            Yes! All plans come with a 14-day free trial. No credit card required.
          </div>
        </details>
        <details class="group border border-gray-200 rounded-xl overflow-hidden">
          <summary class="flex items-center justify-between px-5 py-4 cursor-pointer hover:bg-gray-50 list-none font-semibold text-gray-900">
            Can I cancel anytime?
            <svg class="w-5 h-5 text-gray-400 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" /></svg>
          </summary>
          <div class="px-5 pb-4 pt-2 text-gray-600 text-sm border-t border-gray-100">
            Absolutely. Cancel anytime from your account settings with no hidden fees.
          </div>
        </details>
      </div>
    </div>
  </section>

  <!-- Footer -->
  <footer class="bg-gray-900 text-white py-16 px-6">
    <div class="max-w-6xl mx-auto">
      <div class="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
        <div>
          <h4 class="font-bold mb-4">Product</h4>
          <ul class="space-y-2 text-sm text-gray-400"><li><a href="#" class="hover:text-white">Features</a></li><li><a href="#" class="hover:text-white">Changelog</a></li></ul>
        </div>
        <div>
          <h4 class="font-bold mb-4">Company</h4>
          <ul class="space-y-2 text-sm text-gray-400"><li><a href="#" class="hover:text-white">About</a></li><li><a href="#" class="hover:text-white">Blog</a></li></ul>
        </div>
        <div>
          <h4 class="font-bold mb-4">Support</h4>
          <ul class="space-y-2 text-sm text-gray-400"><li><a href="#" class="hover:text-white">Docs</a></li><li><a href="#" class="hover:text-white">Help Center</a></li></ul>
        </div>
        <div>
          <h4 class="font-bold mb-4">Legal</h4>
          <ul class="space-y-2 text-sm text-gray-400"><li><a href="#" class="hover:text-white">Privacy</a></li><li><a href="#" class="hover:text-white">Terms</a></li></ul>
        </div>
      </div>
      <div class="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <span class="text-xl font-bold text-blue-400">SaaSApp</span>
        <p class="text-sm text-gray-500">© 2025 SaaSApp Inc. All rights reserved.</p>
      </div>
    </div>
  </footer>

</body>
</html>
```

<h3>192. Create a full-featured dashboard UI with sidebar navigation, stat cards, data table, and chart placeholders — all responsive and dark mode compatible.</h3>

```html
<!DOCTYPE html>
<html lang="en" class="dark">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Dashboard UI</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <script>tailwind.config = { darkMode: 'class' };</script>
</head>
<body class="bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100 font-sans">

  <div class="flex h-screen overflow-hidden">

    <!-- Sidebar -->
    <aside class="hidden lg:flex w-60 flex-shrink-0 flex-col bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-800">
      <div class="px-5 py-6 border-b border-gray-100 dark:border-gray-800">
        <span class="text-lg font-bold text-blue-600">Acme Dashboard</span>
      </div>
      <nav class="flex-1 p-3 space-y-1">
        <a href="#" class="flex items-center gap-3 px-3 py-2 rounded-lg bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 font-semibold text-sm">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6z" /><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6z" /><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2z" /><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" /></svg>
          Overview
        </a>
        <a href="#" class="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 text-sm">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
          Analytics
        </a>
        <a href="#" class="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 text-sm">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
          Users
        </a>
      </nav>
    </aside>

    <!-- Main Content -->
    <div class="flex-1 flex flex-col overflow-hidden">
      <!-- Top Bar -->
      <header class="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 px-6 py-4 flex items-center justify-between">
        <h1 class="text-lg font-bold text-gray-900 dark:text-white">Overview</h1>
        <div class="flex items-center gap-3">
          <button onclick="document.documentElement.classList.toggle('dark')"
            class="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700">
            🌙
          </button>
          <img src="https://ui-avatars.com/api/?name=Admin+User&background=2563eb&color=fff" alt="User" class="w-8 h-8 rounded-full" />
        </div>
      </header>

      <!-- Scrollable Content -->
      <main class="flex-1 overflow-y-auto p-6">

        <!-- Stat Cards -->
        <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 mb-6">
          <div class="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-5">
            <p class="text-sm text-gray-500 dark:text-gray-400">Total Revenue</p>
            <p class="text-3xl font-extrabold text-gray-900 dark:text-white mt-1">$48,295</p>
            <p class="text-xs text-green-600 font-semibold mt-2">↑ 12.5% from last month</p>
          </div>
          <div class="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-5">
            <p class="text-sm text-gray-500 dark:text-gray-400">Active Users</p>
            <p class="text-3xl font-extrabold text-gray-900 dark:text-white mt-1">12,430</p>
            <p class="text-xs text-green-600 font-semibold mt-2">↑ 8.2% from last month</p>
          </div>
          <div class="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-5">
            <p class="text-sm text-gray-500 dark:text-gray-400">New Signups</p>
            <p class="text-3xl font-extrabold text-gray-900 dark:text-white mt-1">1,893</p>
            <p class="text-xs text-red-600 font-semibold mt-2">↓ 3.1% from last month</p>
          </div>
          <div class="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-5">
            <p class="text-sm text-gray-500 dark:text-gray-400">Conversion Rate</p>
            <p class="text-3xl font-extrabold text-gray-900 dark:text-white mt-1">3.2%</p>
            <p class="text-xs text-green-600 font-semibold mt-2">↑ 0.4% from last month</p>
          </div>
        </div>

        <!-- Chart Placeholder + Data Table -->
        <div class="grid grid-cols-1 xl:grid-cols-3 gap-6">
          <!-- Chart placeholder -->
          <div class="xl:col-span-2 bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-6">
            <h3 class="font-bold text-gray-900 dark:text-white mb-4">Revenue Overview</h3>
            <div class="h-48 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-700 dark:to-gray-600 rounded-xl flex items-center justify-center">
              <span class="text-gray-400 dark:text-gray-500 text-sm">[ Revenue Chart — integrate Chart.js here ]</span>
            </div>
          </div>
          <!-- Top Products -->
          <div class="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-6">
            <h3 class="font-bold text-gray-900 dark:text-white mb-4">Top Products</h3>
            <ul class="space-y-3">
              <li class="flex items-center gap-3"><span class="w-8 h-8 bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 rounded-lg flex items-center justify-center text-xs font-bold">1</span><span class="text-sm text-gray-700 dark:text-gray-300 flex-1">Pro Plan</span><span class="text-sm font-semibold text-gray-900 dark:text-white">$18,420</span></li>
              <li class="flex items-center gap-3"><span class="w-8 h-8 bg-purple-100 dark:bg-purple-900/40 text-purple-600 dark:text-purple-400 rounded-lg flex items-center justify-center text-xs font-bold">2</span><span class="text-sm text-gray-700 dark:text-gray-300 flex-1">Enterprise</span><span class="text-sm font-semibold text-gray-900 dark:text-white">$14,280</span></li>
              <li class="flex items-center gap-3"><span class="w-8 h-8 bg-green-100 dark:bg-green-900/40 text-green-600 dark:text-green-400 rounded-lg flex items-center justify-center text-xs font-bold">3</span><span class="text-sm text-gray-700 dark:text-gray-300 flex-1">Starter</span><span class="text-sm font-semibold text-gray-900 dark:text-white">$9,180</span></li>
            </ul>
          </div>
        </div>

        <!-- Data Table -->
        <div class="mt-6 bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 overflow-hidden">
          <div class="px-6 py-4 border-b border-gray-100 dark:border-gray-700 flex items-center justify-between">
            <h3 class="font-bold text-gray-900 dark:text-white">Recent Transactions</h3>
            <a href="#" class="text-sm text-blue-600 dark:text-blue-400 font-medium hover:underline">View all →</a>
          </div>
          <table class="w-full text-sm">
            <thead class="bg-gray-50 dark:bg-gray-900/50">
              <tr>
                <th class="px-6 py-3 text-left font-semibold text-gray-600 dark:text-gray-400">Customer</th>
                <th class="px-6 py-3 text-left font-semibold text-gray-600 dark:text-gray-400">Plan</th>
                <th class="px-6 py-3 text-left font-semibold text-gray-600 dark:text-gray-400">Amount</th>
                <th class="px-6 py-3 text-left font-semibold text-gray-600 dark:text-gray-400">Status</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-100 dark:divide-gray-700">
              <tr class="hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors">
                <td class="px-6 py-3 font-medium text-gray-900 dark:text-white">Alice Johnson</td>
                <td class="px-6 py-3 text-gray-500 dark:text-gray-400">Pro</td>
                <td class="px-6 py-3 font-semibold text-gray-900 dark:text-white">$29.00</td>
                <td class="px-6 py-3"><span class="bg-green-100 dark:bg-green-900/40 text-green-700 dark:text-green-400 text-xs font-semibold px-2.5 py-0.5 rounded-full">Paid</span></td>
              </tr>
              <tr class="hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors">
                <td class="px-6 py-3 font-medium text-gray-900 dark:text-white">Bob Smith</td>
                <td class="px-6 py-3 text-gray-500 dark:text-gray-400">Enterprise</td>
                <td class="px-6 py-3 font-semibold text-gray-900 dark:text-white">$99.00</td>
                <td class="px-6 py-3"><span class="bg-yellow-100 dark:bg-yellow-900/40 text-yellow-700 dark:text-yellow-400 text-xs font-semibold px-2.5 py-0.5 rounded-full">Pending</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>
    </div>
  </div>

</body>
</html>
```

<h3>193. Build a multi-page e-commerce product listing with filter sidebar, product grid, pagination, and a sticky "Add to Cart" bar on mobile.</h3>

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Shop — Electronics</title>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-gray-50 text-gray-900 font-sans">

  <!-- Header -->
  <header class="sticky top-0 z-40 bg-white border-b border-gray-200 px-6 py-4">
    <div class="max-w-7xl mx-auto flex justify-between items-center">
      <a href="#" class="text-2xl font-extrabold text-gray-900">ShopCo</a>
      <div class="relative hidden md:block w-72">
        <input type="search" placeholder="Search products..." class="w-full border border-gray-300 rounded-xl pl-10 pr-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
        <svg class="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
      </div>
      <button class="relative p-2 text-gray-700 hover:bg-gray-100 rounded-lg">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"/></svg>
        <span class="absolute -top-1 -right-1 w-4 h-4 bg-blue-600 text-white text-xs rounded-full flex items-center justify-center font-bold">3</span>
      </button>
    </div>
  </header>

  <div class="max-w-7xl mx-auto px-4 py-6 flex gap-6">
    <!-- Filter Sidebar (hidden on mobile) -->
    <aside class="hidden lg:block w-56 flex-shrink-0">
      <div class="sticky top-20 bg-white rounded-2xl border border-gray-200 p-5 space-y-6">
        <div>
          <h3 class="font-bold text-gray-900 mb-3">Category</h3>
          <ul class="space-y-2 text-sm">
            <li><label class="flex items-center gap-2 cursor-pointer"><input type="checkbox" checked class="rounded" /><span>Headphones</span><span class="ml-auto text-gray-400 text-xs">24</span></label></li>
            <li><label class="flex items-center gap-2 cursor-pointer"><input type="checkbox" class="rounded" /><span>Speakers</span><span class="ml-auto text-gray-400 text-xs">18</span></label></li>
            <li><label class="flex items-center gap-2 cursor-pointer"><input type="checkbox" class="rounded" /><span>Earbuds</span><span class="ml-auto text-gray-400 text-xs">31</span></label></li>
          </ul>
        </div>
        <hr class="border-gray-100" />
        <div>
          <h3 class="font-bold text-gray-900 mb-3">Price Range</h3>
          <input type="range" min="0" max="500" value="200" class="w-full accent-blue-600" />
          <div class="flex justify-between text-xs text-gray-500 mt-1"><span>$0</span><span>$200</span><span>$500</span></div>
        </div>
        <hr class="border-gray-100" />
        <div>
          <h3 class="font-bold text-gray-900 mb-3">Brand</h3>
          <ul class="space-y-2 text-sm">
            <li><label class="flex items-center gap-2 cursor-pointer"><input type="checkbox" checked class="rounded" />Sony</label></li>
            <li><label class="flex items-center gap-2 cursor-pointer"><input type="checkbox" class="rounded" />Bose</label></li>
            <li><label class="flex items-center gap-2 cursor-pointer"><input type="checkbox" class="rounded" />Apple</label></li>
          </ul>
        </div>
      </div>
    </aside>

    <!-- Product Grid -->
    <main class="flex-1">
      <div class="flex items-center justify-between mb-4">
        <p class="text-sm text-gray-500">Showing <span class="font-semibold text-gray-900">24</span> of 148 products</p>
        <select class="text-sm border border-gray-300 rounded-lg px-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-blue-500">
          <option>Sort: Best Selling</option>
          <option>Price: Low to High</option>
          <option>Price: High to Low</option>
          <option>Newest First</option>
        </select>
      </div>

      <div class="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
        <!-- Product Card (repeated) -->
        <div class="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden group">
          <div class="relative overflow-hidden">
            <div class="w-full h-44 bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
              <span class="text-4xl">🎧</span>
            </div>
            <div class="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors"></div>
            <span class="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">-20%</span>
          </div>
          <div class="p-3">
            <p class="text-xs text-gray-400 font-semibold uppercase tracking-wide">Sony</p>
            <h3 class="text-sm font-bold text-gray-900 mt-0.5 truncate">WH-1000XM5 Headphones</h3>
            <div class="flex items-center gap-1.5 mt-1">
              <span class="font-extrabold text-gray-900 text-base">$279</span>
              <span class="text-xs text-gray-400 line-through">$349</span>
            </div>
            <button class="mt-2 w-full bg-blue-600 text-white text-xs font-semibold py-1.5 rounded-lg hover:bg-blue-700 transition-colors">Add to Cart</button>
          </div>
        </div>
        <!-- Add more product cards... -->
      </div>

      <!-- Pagination -->
      <nav class="flex items-center justify-center gap-1 mt-8" aria-label="Pagination">
        <button class="px-3 py-2 text-sm text-gray-500 border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-40" disabled>← Prev</button>
        <button class="px-3 py-2 text-sm bg-blue-600 text-white rounded-lg font-semibold">1</button>
        <button class="px-3 py-2 text-sm text-gray-500 border border-gray-200 rounded-lg hover:bg-gray-50">2</button>
        <button class="px-3 py-2 text-sm text-gray-500 border border-gray-200 rounded-lg hover:bg-gray-50">3</button>
        <span class="px-2 text-gray-400">…</span>
        <button class="px-3 py-2 text-sm text-gray-500 border border-gray-200 rounded-lg hover:bg-gray-50">7</button>
        <button class="px-3 py-2 text-sm text-gray-500 border border-gray-300 rounded-lg hover:bg-gray-50">Next →</button>
      </nav>
    </main>
  </div>

  <!-- Sticky Mobile "Cart" Bar -->
  <div class="fixed bottom-0 inset-x-0 z-50 bg-white border-t border-gray-200 p-4 flex items-center gap-3 lg:hidden shadow-lg">
    <div class="flex-1">
      <p class="text-xs text-gray-500">3 items in cart</p>
      <p class="font-extrabold text-gray-900 text-lg">$357.00</p>
    </div>
    <button class="bg-blue-600 text-white px-6 py-3 rounded-xl font-bold hover:bg-blue-700 transition-colors">
      View Cart →
    </button>
  </div>

</body>
</html>
```

<h3>194. Create a blog platform UI with homepage, article list, single post (using <code>prose</code>), author profile, and tag filtering pages.</h3>

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Dev Blog</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <script>tailwind.config = { plugins: [] };</script>
</head>
<body class="bg-white text-gray-900 font-sans">

  <!-- Header -->
  <header class="border-b border-gray-100 px-6 py-5 sticky top-0 bg-white/90 backdrop-blur z-40">
    <div class="max-w-4xl mx-auto flex justify-between items-center">
      <a href="#" class="text-2xl font-extrabold text-gray-900">DevBlog</a>
      <div class="flex items-center gap-4 text-sm font-medium">
        <a href="#" class="text-gray-600 hover:text-gray-900">Articles</a>
        <a href="#" class="text-gray-600 hover:text-gray-900">Tags</a>
        <a href="#" class="text-gray-600 hover:text-gray-900">Authors</a>
        <a href="#" class="bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-gray-700">Subscribe</a>
      </div>
    </div>
  </header>

  <!-- Featured Post -->
  <section class="max-w-4xl mx-auto px-6 py-10 border-b border-gray-100">
    <span class="text-xs font-bold uppercase tracking-widest text-blue-600">Featured</span>
    <h1 class="text-4xl font-extrabold text-gray-900 mt-3 mb-4 leading-tight">
      The Complete Guide to Tailwind CSS v4
    </h1>
    <p class="text-gray-600 text-lg leading-relaxed mb-5">
      Tailwind v4 brings a completely new architecture — zero config, CSS-first setup, and a blazing fast Rust compiler.
    </p>
    <div class="flex items-center gap-4">
      <img src="https://ui-avatars.com/api/?name=Jane+Doe&background=2563eb&color=fff" alt="Jane Doe" class="w-10 h-10 rounded-full" />
      <div>
        <p class="font-semibold text-gray-900 text-sm">Jane Doe</p>
        <p class="text-xs text-gray-400">May 15, 2025 · 8 min read</p>
      </div>
    </div>
  </section>

  <!-- Tag Filter -->
  <div class="max-w-4xl mx-auto px-6 py-6 flex flex-wrap gap-2">
    <button class="px-4 py-1.5 rounded-full bg-gray-900 text-white text-sm font-semibold">All</button>
    <button class="px-4 py-1.5 rounded-full bg-gray-100 text-gray-600 text-sm font-medium hover:bg-gray-200">Tailwind CSS</button>
    <button class="px-4 py-1.5 rounded-full bg-gray-100 text-gray-600 text-sm font-medium hover:bg-gray-200">React</button>
    <button class="px-4 py-1.5 rounded-full bg-gray-100 text-gray-600 text-sm font-medium hover:bg-gray-200">TypeScript</button>
    <button class="px-4 py-1.5 rounded-full bg-gray-100 text-gray-600 text-sm font-medium hover:bg-gray-200">Performance</button>
    <button class="px-4 py-1.5 rounded-full bg-gray-100 text-gray-600 text-sm font-medium hover:bg-gray-200">Accessibility</button>
  </div>

  <!-- Article List -->
  <main class="max-w-4xl mx-auto px-6 pb-16">
    <div class="space-y-8">
      <!-- Article Card -->
      <article class="grid grid-cols-1 md:grid-cols-3 gap-6 pb-8 border-b border-gray-100">
        <div class="md:col-span-2">
          <div class="flex items-center gap-2 mb-2">
            <span class="text-xs font-bold text-blue-600 uppercase tracking-wide">Tailwind CSS</span>
            <span class="text-gray-300">·</span>
            <span class="text-xs text-gray-400">7 min read</span>
          </div>
          <h2 class="text-xl font-extrabold text-gray-900 mb-2 leading-snug hover:text-blue-600 cursor-pointer">
            Building a Design System with Tailwind CSS and Storybook
          </h2>
          <p class="text-gray-500 text-sm leading-relaxed mb-4">
            Learn how to architect a scalable, maintainable component library using Tailwind utilities and Storybook for documentation.
          </p>
          <div class="flex items-center gap-3">
            <img src="https://ui-avatars.com/api/?name=John+Smith&background=7c3aed&color=fff" alt="John Smith" class="w-7 h-7 rounded-full" />
            <span class="text-sm font-medium text-gray-700">John Smith</span>
            <span class="text-gray-300">·</span>
            <span class="text-xs text-gray-400">May 10, 2025</span>
          </div>
        </div>
        <div class="hidden md:block">
          <div class="w-full h-36 bg-gradient-to-br from-purple-100 to-blue-100 rounded-2xl"></div>
        </div>
      </article>

      <!-- Single Post View (prose) -->
      <article class="prose prose-lg max-w-none
                      prose-headings:font-extrabold prose-headings:text-gray-900
                      prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline
                      prose-code:bg-gray-100 prose-code:rounded prose-code:text-blue-700
                      prose-blockquote:border-blue-500">
        <h2>How Tailwind's JIT Engine Works</h2>
        <p>The JIT (Just-in-Time) engine scans your HTML and JSX files as static strings and generates only the CSS classes you actually use.</p>
        <blockquote>Don't use dynamic class names — always use complete strings.</blockquote>
        <pre><code>// ❌ Bad — JIT can't detect this
const cls = `bg-${color}-500`;

// ✅ Good — complete class name as literal string
const colorMap = { red: 'bg-red-500', blue: 'bg-blue-500' };</code></pre>
      </article>
    </div>
  </main>

</body>
</html>
```

<h3>195. Build a SaaS application onboarding flow with a multi-step registration form, progress indicator, and animated step transitions.</h3>

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Onboarding</title>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-gradient-to-br from-blue-50 to-indigo-100 min-h-screen flex items-center justify-center p-6 font-sans">

  <div class="w-full max-w-lg">
    <!-- Logo -->
    <div class="text-center mb-8">
      <span class="text-3xl font-extrabold text-blue-600">SaaSApp</span>
      <p class="text-gray-500 mt-1">Set up your account in 4 easy steps</p>
    </div>

    <!-- Progress Indicator -->
    <div class="flex items-center mb-8">
      <div class="flex items-center justify-center w-10 h-10 rounded-full bg-blue-600 text-white font-bold text-sm shadow">✓</div>
      <div class="flex-1 h-1 bg-blue-600 mx-1"></div>
      <div class="flex items-center justify-center w-10 h-10 rounded-full bg-blue-600 text-white font-bold text-sm ring-4 ring-blue-100 shadow">2</div>
      <div class="flex-1 h-1 bg-gray-200 mx-1"></div>
      <div class="flex items-center justify-center w-10 h-10 rounded-full bg-gray-200 text-gray-500 font-bold text-sm">3</div>
      <div class="flex-1 h-1 bg-gray-200 mx-1"></div>
      <div class="flex items-center justify-center w-10 h-10 rounded-full bg-gray-200 text-gray-500 font-bold text-sm">4</div>
    </div>
    <div class="flex justify-between text-xs font-medium text-gray-500 mb-8 px-1">
      <span class="text-blue-600">Account</span>
      <span class="text-blue-600">Profile</span>
      <span>Team</span>
      <span>Billing</span>
    </div>

    <!-- Step Card with Transition Animation -->
    <div class="bg-white rounded-3xl shadow-xl p-8 transition-all duration-300">
      <h2 class="text-2xl font-extrabold text-gray-900 mb-1">Tell us about yourself</h2>
      <p class="text-gray-500 text-sm mb-6">Step 2 of 4 — Profile setup</p>

      <form class="space-y-4">
        <div class="grid grid-cols-2 gap-4">
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">First Name</label>
            <input type="text" placeholder="Alice" class="w-full border border-gray-300 rounded-xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm" />
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
            <input type="text" placeholder="Johnson" class="w-full border border-gray-300 rounded-xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm" />
          </div>
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">Job Title</label>
          <input type="text" placeholder="Senior Designer" class="w-full border border-gray-300 rounded-xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm" />
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2">Company Size</label>
          <div class="grid grid-cols-4 gap-2">
            <button type="button" class="border-2 border-blue-600 bg-blue-50 text-blue-700 rounded-xl py-2 text-xs font-semibold">1-10</button>
            <button type="button" class="border border-gray-200 text-gray-600 rounded-xl py-2 text-xs font-medium hover:border-blue-300">11-50</button>
            <button type="button" class="border border-gray-200 text-gray-600 rounded-xl py-2 text-xs font-medium hover:border-blue-300">51-200</button>
            <button type="button" class="border border-gray-200 text-gray-600 rounded-xl py-2 text-xs font-medium hover:border-blue-300">200+</button>
          </div>
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2">Profile Photo</label>
          <label class="flex items-center gap-3 border-2 border-dashed border-gray-300 rounded-xl px-4 py-3 cursor-pointer hover:border-blue-400 transition-colors">
            <div class="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 text-xl">👤</div>
            <div>
              <p class="text-sm font-medium text-gray-700">Upload photo</p>
              <p class="text-xs text-gray-400">PNG, JPG up to 5MB</p>
            </div>
            <input type="file" class="sr-only" accept="image/*" />
          </label>
        </div>

        <div class="flex gap-3 pt-2">
          <button type="button" class="flex-1 border border-gray-300 text-gray-700 py-3 rounded-xl font-semibold hover:bg-gray-50 transition-colors">← Back</button>
          <button type="submit" class="flex-2 flex-1 bg-blue-600 text-white py-3 rounded-xl font-bold hover:bg-blue-700 transition-colors">Continue →</button>
        </div>
      </form>
    </div>

    <!-- Step indicator text -->
    <p class="text-center text-xs text-gray-400 mt-5">Already have an account? <a href="#" class="text-blue-600 font-semibold hover:underline">Sign in</a></p>
  </div>

</body>
</html>
```

<h3>196. Create a fully accessible admin panel with sidebar, data tables, modals, toasts, and a dark mode toggle — all keyboard navigable.</h3>

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Admin Panel</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <script>tailwind.config = { darkMode: 'class' };</script>
  <!-- Anti-flash dark mode -->
  <script>(function(){const t=localStorage.getItem('theme');if(t==='dark'||(!t&&window.matchMedia('(prefers-color-scheme:dark)').matches))document.documentElement.classList.add('dark')})();</script>
</head>
<body class="bg-gray-100 dark:bg-gray-950 text-gray-900 dark:text-gray-100 font-sans min-h-screen">

  <!-- Skip to main content -->
  <a href="#main-content" class="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded-lg z-50 font-semibold">
    Skip to main content
  </a>

  <!-- Toast notification -->
  <div id="toast" role="status" aria-live="polite"
    class="fixed top-4 right-4 z-50 hidden flex items-center gap-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-lg px-5 py-3 max-w-sm">
    <div class="w-2 h-2 rounded-full bg-green-500 animate-pulse flex-shrink-0"></div>
    <p class="text-sm font-medium text-gray-900 dark:text-white">User saved successfully!</p>
    <button onclick="document.getElementById('toast').classList.add('hidden')"
      class="ml-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded"
      aria-label="Dismiss notification">✕</button>
  </div>

  <div class="flex h-screen overflow-hidden">
    <!-- Sidebar -->
    <aside aria-label="Sidebar navigation" class="hidden lg:flex w-60 flex-shrink-0 flex-col bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-800">
      <div class="px-5 py-6 border-b border-gray-100 dark:border-gray-800">
        <span class="text-lg font-bold text-blue-600">Admin Panel</span>
      </div>
      <nav class="flex-1 p-3 space-y-1" aria-label="Main">
        <a href="#" aria-current="page"
          class="flex items-center gap-3 px-3 py-2.5 rounded-xl bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 font-semibold text-sm
                 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500">
          🏠 Dashboard
        </a>
        <a href="#" class="flex items-center gap-3 px-3 py-2.5 rounded-xl text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500">
          👥 Users
        </a>
        <a href="#" class="flex items-center gap-3 px-3 py-2.5 rounded-xl text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500">
          📦 Products
        </a>
        <a href="#" class="flex items-center gap-3 px-3 py-2.5 rounded-xl text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500">
          ⚙️ Settings
        </a>
      </nav>
      <div class="p-3 border-t border-gray-100 dark:border-gray-800">
        <div class="flex items-center gap-3 px-2 py-2">
          <img src="https://ui-avatars.com/api/?name=Admin&background=2563eb&color=fff" class="w-8 h-8 rounded-full" alt="Admin" />
          <div class="flex-1 min-w-0">
            <p class="text-sm font-semibold text-gray-900 dark:text-white truncate">Admin User</p>
            <p class="text-xs text-gray-400 truncate">admin@example.com</p>
          </div>
        </div>
      </div>
    </aside>

    <!-- Main -->
    <div class="flex-1 flex flex-col overflow-hidden">
      <header class="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 px-6 py-4 flex items-center justify-between">
        <h1 class="text-lg font-bold text-gray-900 dark:text-white">User Management</h1>
        <div class="flex items-center gap-2">
          <!-- Dark mode toggle (keyboard accessible) -->
          <button
            onclick="document.documentElement.classList.toggle('dark');localStorage.setItem('theme',document.documentElement.classList.contains('dark')?'dark':'light')"
            class="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700
                   focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
            aria-label="Toggle dark mode"
          >🌙</button>
          <!-- Add User button triggers modal -->
          <button
            onclick="document.getElementById('user-modal').classList.remove('hidden')"
            class="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-blue-700 transition-colors
                   focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
          >
            + Add User
          </button>
        </div>
      </header>

      <main id="main-content" tabindex="-1" class="flex-1 overflow-y-auto p-6 focus:outline-none">
        <!-- Data Table -->
        <div class="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 overflow-hidden shadow-sm">
          <table class="w-full text-sm" role="table" aria-label="User list">
            <thead class="bg-gray-50 dark:bg-gray-900/50">
              <tr>
                <th scope="col" class="px-6 py-3 text-left font-semibold text-gray-600 dark:text-gray-400">Name</th>
                <th scope="col" class="px-6 py-3 text-left font-semibold text-gray-600 dark:text-gray-400">Role</th>
                <th scope="col" class="px-6 py-3 text-left font-semibold text-gray-600 dark:text-gray-400">Status</th>
                <th scope="col" class="px-6 py-3 text-left font-semibold text-gray-600 dark:text-gray-400"><span class="sr-only">Actions</span></th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-100 dark:divide-gray-700">
              <tr class="hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors">
                <td class="px-6 py-3"><div class="flex items-center gap-2"><img src="https://ui-avatars.com/api/?name=Alice+J&background=2563eb&color=fff" class="w-8 h-8 rounded-full" alt="" /><span class="font-medium text-gray-900 dark:text-white">Alice Johnson</span></div></td>
                <td class="px-6 py-3 text-gray-500 dark:text-gray-400">Admin</td>
                <td class="px-6 py-3"><span class="bg-green-100 dark:bg-green-900/40 text-green-700 dark:text-green-400 text-xs font-semibold px-2.5 py-0.5 rounded-full">Active</span></td>
                <td class="px-6 py-3 text-right">
                  <button onclick="document.getElementById('toast').classList.remove('hidden')"
                    class="text-blue-600 dark:text-blue-400 text-xs font-medium hover:underline
                           focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded">
                    Edit
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>
    </div>
  </div>

  <!-- Accessible Modal -->
  <div id="user-modal" class="hidden fixed inset-0 z-50 flex items-center justify-center" role="dialog" aria-modal="true" aria-labelledby="modal-h">
    <div onclick="document.getElementById('user-modal').classList.add('hidden')" class="absolute inset-0 bg-black/50"></div>
    <div class="relative bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-8 max-w-md w-full mx-4 z-10">
      <h2 id="modal-h" class="text-xl font-bold text-gray-900 dark:text-white mb-5">Add New User</h2>
      <div class="space-y-4">
        <input type="text" placeholder="Full Name" class="w-full border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm" />
        <input type="email" placeholder="Email" class="w-full border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm" />
      </div>
      <div class="flex gap-3 mt-6">
        <button onclick="document.getElementById('user-modal').classList.add('hidden')"
          class="flex-1 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 py-2.5 rounded-xl text-sm font-semibold hover:bg-gray-50 dark:hover:bg-gray-700
                 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500">Cancel</button>
        <button onclick="document.getElementById('user-modal').classList.add('hidden');document.getElementById('toast').classList.remove('hidden')"
          class="flex-1 bg-blue-600 text-white py-2.5 rounded-xl text-sm font-bold hover:bg-blue-700
                 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2">Save User</button>
      </div>
    </div>
  </div>

</body>
</html>
```

<h3>197. Build a portfolio website with a hero section, animated skill bars, project grid with hover overlays, and a contact form.</h3>

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Jane Doe — Portfolio</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800;900&display=swap" rel="stylesheet">
  <style>@layer base { body { font-family: 'Inter', sans-serif; } }</style>
</head>
<body class="bg-white text-gray-900">

  <!-- Navigation -->
  <header class="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-gray-100">
    <div class="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
      <span class="font-extrabold text-xl">jd.</span>
      <nav class="flex items-center gap-6 text-sm font-medium">
        <a href="#about"    class="text-gray-600 hover:text-gray-900">About</a>
        <a href="#projects" class="text-gray-600 hover:text-gray-900">Projects</a>
        <a href="#skills"   class="text-gray-600 hover:text-gray-900">Skills</a>
        <a href="#contact"  class="bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-gray-700">Hire Me</a>
      </nav>
    </div>
  </header>

  <!-- Hero -->
  <section id="about" class="min-h-screen flex items-center bg-gradient-to-br from-blue-50 via-white to-purple-50">
    <div class="max-w-5xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      <div>
        <span class="inline-flex items-center gap-2 bg-green-100 text-green-700 text-xs font-bold px-3 py-1.5 rounded-full mb-5">
          <span class="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
          Available for work
        </span>
        <h1 class="text-5xl font-extrabold text-gray-900 leading-tight mb-4">
          Hi, I'm Jane Doe 👋
        </h1>
        <p class="text-xl text-gray-600 leading-relaxed mb-8">
          Senior UI/UX Designer & Frontend Developer crafting beautiful, accessible digital experiences.
        </p>
        <div class="flex gap-4">
          <a href="#contact" class="bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition-colors">Get in touch</a>
          <a href="#projects" class="border border-gray-300 text-gray-700 px-6 py-3 rounded-xl font-semibold hover:bg-gray-50">View work</a>
        </div>
      </div>
      <div class="flex justify-center">
        <div class="w-72 h-72 rounded-3xl bg-gradient-to-br from-blue-400 to-purple-600 flex items-center justify-center text-8xl shadow-2xl">
          👩‍💻
        </div>
      </div>
    </div>
  </section>

  <!-- Skills with Animated Bars -->
  <section id="skills" class="py-20 px-6 bg-gray-50">
    <div class="max-w-3xl mx-auto">
      <h2 class="text-3xl font-extrabold text-gray-900 mb-10">Skills</h2>
      <div class="space-y-5">
        <div>
          <div class="flex justify-between text-sm font-medium mb-1.5"><span>Tailwind CSS</span><span class="text-blue-600">95%</span></div>
          <div class="w-full h-2.5 bg-gray-200 rounded-full overflow-hidden"><div class="h-full bg-blue-600 rounded-full transition-all duration-1000 ease-out" style="width: 95%"></div></div>
        </div>
        <div>
          <div class="flex justify-between text-sm font-medium mb-1.5"><span>React / Next.js</span><span class="text-purple-600">88%</span></div>
          <div class="w-full h-2.5 bg-gray-200 rounded-full overflow-hidden"><div class="h-full bg-purple-500 rounded-full" style="width: 88%"></div></div>
        </div>
        <div>
          <div class="flex justify-between text-sm font-medium mb-1.5"><span>TypeScript</span><span class="text-blue-500">82%</span></div>
          <div class="w-full h-2.5 bg-gray-200 rounded-full overflow-hidden"><div class="h-full bg-blue-500 rounded-full" style="width: 82%"></div></div>
        </div>
        <div>
          <div class="flex justify-between text-sm font-medium mb-1.5"><span>Figma / Design</span><span class="text-pink-600">90%</span></div>
          <div class="w-full h-2.5 bg-gray-200 rounded-full overflow-hidden"><div class="h-full bg-pink-500 rounded-full" style="width: 90%"></div></div>
        </div>
      </div>
    </div>
  </section>

  <!-- Projects Grid with Hover Overlay -->
  <section id="projects" class="py-20 px-6">
    <div class="max-w-5xl mx-auto">
      <h2 class="text-3xl font-extrabold text-gray-900 mb-10">Featured Projects</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div class="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-400 to-indigo-600 h-64 cursor-pointer">
          <div class="absolute inset-0 flex items-center justify-center text-6xl">🎨</div>
          <div class="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-6 text-center">
            <h3 class="text-white font-bold text-xl mb-2">Design System</h3>
            <p class="text-white/80 text-sm mb-4">A comprehensive Tailwind-based component library.</p>
            <a href="#" class="bg-white text-gray-900 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-gray-100">View Project →</a>
          </div>
        </div>
        <div class="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-green-400 to-emerald-600 h-64 cursor-pointer">
          <div class="absolute inset-0 flex items-center justify-center text-6xl">📱</div>
          <div class="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-6 text-center">
            <h3 class="text-white font-bold text-xl mb-2">Mobile App UI</h3>
            <p class="text-white/80 text-sm mb-4">Responsive fintech dashboard with dark mode.</p>
            <a href="#" class="bg-white text-gray-900 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-gray-100">View Project →</a>
          </div>
        </div>
        <div class="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-pink-400 to-rose-600 h-64 cursor-pointer">
          <div class="absolute inset-0 flex items-center justify-center text-6xl">🛍️</div>
          <div class="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-6 text-center">
            <h3 class="text-white font-bold text-xl mb-2">E-Commerce</h3>
            <p class="text-white/80 text-sm mb-4">Full-featured online store with cart and checkout.</p>
            <a href="#" class="bg-white text-gray-900 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-gray-100">View Project →</a>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Contact Form -->
  <section id="contact" class="py-20 px-6 bg-gray-50">
    <div class="max-w-xl mx-auto">
      <h2 class="text-3xl font-extrabold text-gray-900 mb-3">Let's work together</h2>
      <p class="text-gray-500 mb-8">Have a project in mind? Send me a message and I'll get back within 24 hours.</p>
      <form class="space-y-4">
        <div class="grid grid-cols-2 gap-4">
          <input type="text" placeholder="Your name" class="border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm" />
          <input type="email" placeholder="Email address" class="border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm" />
        </div>
        <input type="text" placeholder="Subject" class="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm" />
        <textarea rows="5" placeholder="Tell me about your project..." class="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm resize-none"></textarea>
        <button type="submit" class="w-full bg-blue-600 text-white py-3 rounded-xl font-bold hover:bg-blue-700 transition-colors text-lg">
          Send Message 🚀
        </button>
      </form>
    </div>
  </section>

</body>
</html>
```

<h3>198. Create a social media feed UI with post cards, stories row, suggested users sidebar, and infinite scroll loading indicators.</h3>

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Social Feed</title>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-gray-100 font-sans text-gray-900">

  <div class="max-w-5xl mx-auto px-4 py-6 grid grid-cols-1 lg:grid-cols-3 gap-6">

    <!-- Main Feed (2 cols wide on desktop) -->
    <div class="lg:col-span-2 space-y-4">

      <!-- Stories Row -->
      <div class="bg-white rounded-2xl border border-gray-100 shadow-sm p-4">
        <div class="flex gap-4 overflow-x-auto scrollbar-hide pb-1">
          <!-- Your Story -->
          <div class="flex flex-col items-center gap-1.5 flex-shrink-0">
            <div class="relative w-16 h-16 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center ring-2 ring-white ring-offset-2 cursor-pointer">
              <span class="text-white text-2xl">+</span>
            </div>
            <span class="text-xs text-gray-500 text-center w-16 truncate">Your Story</span>
          </div>
          <!-- Friends' Stories -->
          <div class="flex flex-col items-center gap-1.5 flex-shrink-0">
            <div class="w-16 h-16 rounded-full ring-2 ring-blue-500 ring-offset-2 cursor-pointer overflow-hidden">
              <div class="w-full h-full bg-gradient-to-br from-pink-400 to-red-500 flex items-center justify-center text-2xl text-white">👩</div>
            </div>
            <span class="text-xs text-gray-500 text-center w-16 truncate">Alice</span>
          </div>
          <div class="flex flex-col items-center gap-1.5 flex-shrink-0">
            <div class="w-16 h-16 rounded-full ring-2 ring-blue-500 ring-offset-2 cursor-pointer overflow-hidden">
              <div class="w-full h-full bg-gradient-to-br from-green-400 to-teal-500 flex items-center justify-center text-2xl text-white">👨</div>
            </div>
            <span class="text-xs text-gray-500 text-center w-16 truncate">Bob</span>
          </div>
          <div class="flex flex-col items-center gap-1.5 flex-shrink-0">
            <div class="w-16 h-16 rounded-full ring-2 ring-pink-500 ring-offset-2 cursor-pointer overflow-hidden">
              <div class="w-full h-full bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center text-2xl text-white">👩‍🎨</div>
            </div>
            <span class="text-xs text-gray-500 text-center w-16 truncate">Carol</span>
          </div>
        </div>
      </div>

      <!-- Post Card 1 -->
      <article class="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        <div class="p-4 flex items-center gap-3">
          <div class="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-white font-bold text-sm">AJ</div>
          <div class="flex-1">
            <p class="font-semibold text-gray-900 text-sm">Alice Johnson</p>
            <p class="text-xs text-gray-400">2 hours ago · 🌍</p>
          </div>
          <button class="text-gray-400 hover:text-gray-600 px-2">•••</button>
        </div>
        <p class="px-4 pb-3 text-gray-800 text-sm leading-relaxed">
          Just shipped a new feature using Tailwind CSS v4! The new @theme directive makes configuration so much cleaner. No more config file! 🚀
        </p>
        <div class="w-full h-64 bg-gradient-to-br from-blue-100 via-indigo-100 to-purple-100 flex items-center justify-center text-6xl">🎨</div>
        <div class="p-4">
          <!-- Reaction bar -->
          <div class="flex items-center justify-between text-sm text-gray-500 mb-3">
            <span>❤️ 128 likes</span>
            <span>24 comments</span>
          </div>
          <hr class="border-gray-100 mb-3" />
          <div class="flex items-center gap-1">
            <button class="flex-1 flex items-center justify-center gap-1.5 py-1.5 rounded-lg hover:bg-gray-50 text-sm text-gray-600 font-medium transition-colors">
              <span>❤️</span> Like
            </button>
            <button class="flex-1 flex items-center justify-center gap-1.5 py-1.5 rounded-lg hover:bg-gray-50 text-sm text-gray-600 font-medium transition-colors">
              <span>💬</span> Comment
            </button>
            <button class="flex-1 flex items-center justify-center gap-1.5 py-1.5 rounded-lg hover:bg-gray-50 text-sm text-gray-600 font-medium transition-colors">
              <span>↪️</span> Share
            </button>
          </div>
        </div>
      </article>

      <!-- Infinite Scroll Loader -->
      <div class="flex items-center justify-center py-8">
        <div class="flex items-center gap-3">
          <div class="w-6 h-6 border-2 border-blue-200 border-t-blue-600 rounded-full animate-spin"></div>
          <span class="text-sm text-gray-500 font-medium">Loading more posts...</span>
        </div>
      </div>
    </div>

    <!-- Right Sidebar (hidden on mobile) -->
    <aside class="hidden lg:block space-y-4">
      <!-- Suggested Users -->
      <div class="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
        <h3 class="font-bold text-gray-900 mb-4 text-sm">Suggested for you</h3>
        <div class="space-y-3">
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-full bg-gradient-to-br from-green-400 to-teal-500 flex items-center justify-center text-white text-sm font-bold flex-shrink-0">DW</div>
            <div class="flex-1 min-w-0">
              <p class="text-sm font-semibold text-gray-900 truncate">David Wang</p>
              <p class="text-xs text-gray-400 truncate">Followed by Alice</p>
            </div>
            <button class="text-blue-600 text-xs font-bold hover:text-blue-700">Follow</button>
          </div>
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-full bg-gradient-to-br from-pink-400 to-rose-500 flex items-center justify-center text-white text-sm font-bold flex-shrink-0">SM</div>
            <div class="flex-1 min-w-0">
              <p class="text-sm font-semibold text-gray-900 truncate">Sarah Miller</p>
              <p class="text-xs text-gray-400 truncate">New to SocialApp</p>
            </div>
            <button class="text-blue-600 text-xs font-bold hover:text-blue-700">Follow</button>
          </div>
        </div>
      </div>

      <!-- Trending Tags -->
      <div class="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
        <h3 class="font-bold text-gray-900 mb-4 text-sm">Trending Topics</h3>
        <div class="space-y-3">
          <div class="cursor-pointer hover:bg-gray-50 rounded-lg px-2 py-1.5 transition-colors">
            <p class="text-xs text-gray-400">Technology</p>
            <p class="font-bold text-gray-900 text-sm">#TailwindCSS</p>
            <p class="text-xs text-gray-400 mt-0.5">4,821 posts</p>
          </div>
          <div class="cursor-pointer hover:bg-gray-50 rounded-lg px-2 py-1.5 transition-colors">
            <p class="text-xs text-gray-400">Development</p>
            <p class="font-bold text-gray-900 text-sm">#ReactJS</p>
            <p class="text-xs text-gray-400 mt-0.5">12,334 posts</p>
          </div>
        </div>
      </div>
    </aside>
  </div>

</body>
</html>
```

<h3>199. Build a real-time chat application UI with a contact list sidebar, message bubbles, and input bar.</h3>

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Chat App</title>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-gray-100 font-sans text-gray-900 h-screen overflow-hidden">

  <div class="flex h-screen">

    <!-- Contact List Sidebar -->
    <aside class="hidden md:flex w-72 flex-shrink-0 flex-col bg-white border-r border-gray-200">
      <!-- Header -->
      <div class="px-5 py-5 border-b border-gray-100">
        <h1 class="text-xl font-bold text-gray-900">Messages</h1>
        <div class="relative mt-3">
          <input type="text" placeholder="Search conversations..."
            class="w-full bg-gray-100 rounded-xl pl-9 pr-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
          <svg class="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
        </div>
      </div>
      <!-- Contacts -->
      <div class="flex-1 overflow-y-auto">
        <!-- Active Contact -->
        <div class="flex items-center gap-3 px-4 py-3.5 bg-blue-50 border-l-2 border-blue-600 cursor-pointer">
          <div class="relative flex-shrink-0">
            <div class="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-white font-bold">AJ</div>
            <span class="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></span>
          </div>
          <div class="flex-1 min-w-0">
            <div class="flex justify-between items-baseline">
              <p class="font-semibold text-gray-900 text-sm">Alice Johnson</p>
              <span class="text-xs text-gray-400">2:34 PM</span>
            </div>
            <p class="text-xs text-gray-500 truncate">That looks amazing! Can you...</p>
          </div>
          <span class="w-5 h-5 bg-blue-600 text-white text-xs rounded-full flex items-center justify-center font-bold flex-shrink-0">3</span>
        </div>
        <!-- Other Contacts -->
        <div class="flex items-center gap-3 px-4 py-3.5 hover:bg-gray-50 cursor-pointer transition-colors">
          <div class="relative flex-shrink-0">
            <div class="w-12 h-12 rounded-full bg-gradient-to-br from-green-400 to-teal-500 flex items-center justify-center text-white font-bold">BS</div>
            <span class="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></span>
          </div>
          <div class="flex-1 min-w-0">
            <div class="flex justify-between items-baseline">
              <p class="font-semibold text-gray-900 text-sm">Bob Smith</p>
              <span class="text-xs text-gray-400">1:12 PM</span>
            </div>
            <p class="text-xs text-gray-500 truncate">Hey, are you free tomorrow?</p>
          </div>
        </div>
        <div class="flex items-center gap-3 px-4 py-3.5 hover:bg-gray-50 cursor-pointer transition-colors">
          <div class="relative flex-shrink-0">
            <div class="w-12 h-12 rounded-full bg-gradient-to-br from-pink-400 to-rose-500 flex items-center justify-center text-white font-bold">CW</div>
          </div>
          <div class="flex-1 min-w-0">
            <div class="flex justify-between items-baseline">
              <p class="font-semibold text-gray-900 text-sm">Carol White</p>
              <span class="text-xs text-gray-400">Yesterday</span>
            </div>
            <p class="text-xs text-gray-500 truncate">Thanks for the update!</p>
          </div>
        </div>
      </div>
    </aside>

    <!-- Chat Window -->
    <div class="flex-1 flex flex-col bg-gray-50">
      <!-- Chat Header -->
      <header class="bg-white border-b border-gray-200 px-5 py-4 flex items-center gap-3 shadow-sm">
        <div class="relative">
          <div class="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-white font-bold text-sm">AJ</div>
          <span class="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 border-2 border-white rounded-full"></span>
        </div>
        <div>
          <p class="font-semibold text-gray-900">Alice Johnson</p>
          <p class="text-xs text-green-600 font-medium">Online</p>
        </div>
        <div class="ml-auto flex items-center gap-2">
          <button class="p-2 rounded-lg hover:bg-gray-100 text-gray-500">📞</button>
          <button class="p-2 rounded-lg hover:bg-gray-100 text-gray-500">📹</button>
          <button class="p-2 rounded-lg hover:bg-gray-100 text-gray-500">•••</button>
        </div>
      </header>

      <!-- Messages -->
      <div class="flex-1 overflow-y-auto p-5 space-y-3">
        <!-- Date separator -->
        <div class="flex items-center gap-3 my-4">
          <hr class="flex-1 border-gray-200" />
          <span class="text-xs text-gray-400 font-medium whitespace-nowrap">Today</span>
          <hr class="flex-1 border-gray-200" />
        </div>

        <!-- Received message -->
        <div class="flex items-end gap-2 max-w-xs">
          <div class="w-7 h-7 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-white text-xs font-bold flex-shrink-0">AJ</div>
          <div>
            <div class="bg-white text-gray-900 rounded-3xl rounded-bl-sm px-4 py-2.5 text-sm shadow-sm border border-gray-100 max-w-xs">
              Hey! Did you see the new Tailwind v4 release? 🎉
            </div>
            <p class="text-xs text-gray-400 mt-1 pl-1">2:28 PM</p>
          </div>
        </div>

        <!-- Received message -->
        <div class="flex items-end gap-2 max-w-xs">
          <div class="w-7 h-7 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-white text-xs font-bold flex-shrink-0">AJ</div>
          <div>
            <div class="bg-white text-gray-900 rounded-3xl rounded-bl-sm px-4 py-2.5 text-sm shadow-sm border border-gray-100 max-w-xs">
              The new CSS-first config approach is incredible. No more tailwind.config.js!
            </div>
          </div>
        </div>

        <!-- Sent messages -->
        <div class="flex flex-col items-end gap-1">
          <div class="bg-blue-500 text-white rounded-3xl rounded-br-sm px-4 py-2.5 text-sm max-w-xs">
            Yes! I was just reading about it. The @theme directive changes everything 🔥
          </div>
          <p class="text-xs text-gray-400 pr-1">2:30 PM</p>
        </div>

        <div class="flex flex-col items-end gap-1">
          <div class="bg-blue-500 text-white rounded-3xl rounded-br-sm px-4 py-2.5 text-sm max-w-xs">
            That looks amazing! Can you send me the link to the docs?
          </div>
          <p class="text-xs text-gray-400 pr-1">2:34 PM ✓✓</p>
        </div>

        <!-- Typing indicator -->
        <div class="flex items-end gap-2">
          <div class="w-7 h-7 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-white text-xs font-bold flex-shrink-0">AJ</div>
          <div class="bg-white rounded-3xl rounded-bl-sm px-4 py-3 shadow-sm border border-gray-100">
            <div class="flex items-center gap-1">
              <span class="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style="animation-delay:0ms"></span>
              <span class="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style="animation-delay:150ms"></span>
              <span class="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style="animation-delay:300ms"></span>
            </div>
          </div>
        </div>
      </div>

      <!-- Input Bar -->
      <footer class="bg-white border-t border-gray-200 px-4 py-4">
        <div class="flex items-center gap-3 bg-gray-100 rounded-2xl px-4 py-2.5">
          <button class="text-gray-400 hover:text-gray-600 text-xl flex-shrink-0">😊</button>
          <input type="text" placeholder="Type a message..."
            class="flex-1 bg-transparent text-sm text-gray-900 placeholder-gray-400 focus:outline-none" />
          <button class="text-gray-400 hover:text-gray-600 flex-shrink-0">📎</button>
          <button class="w-9 h-9 bg-blue-600 rounded-xl flex items-center justify-center text-white hover:bg-blue-700 flex-shrink-0 transition-colors">
            <svg class="w-4 h-4 rotate-90" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
            </svg>
          </button>
        </div>
      </footer>
    </div>

  </div>

</body>
</html>
```

<h3>200. Create a complete design system showcase page displaying all tokens, components, patterns, and responsive behaviors for a Tailwind-based project.</h3>

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Design System Showcase</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <script>tailwind.config = { darkMode: 'class' };</script>
  <script>(function(){if(localStorage.theme==='dark'||(!localStorage.theme&&window.matchMedia('(prefers-color-scheme:dark)').matches))document.documentElement.classList.add('dark')})();</script>
</head>
<body class="bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100 font-sans">

  <!-- Header -->
  <header class="sticky top-0 z-40 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 px-6 py-4">
    <div class="max-w-7xl mx-auto flex justify-between items-center">
      <div>
        <h1 class="text-xl font-extrabold text-gray-900 dark:text-white">Design System</h1>
        <p class="text-xs text-gray-400">v2.0.0 · Tailwind CSS based</p>
      </div>
      <div class="flex items-center gap-3">
        <span class="hidden sm:inline text-xs bg-green-100 dark:bg-green-900/40 text-green-700 dark:text-green-400 font-semibold px-2.5 py-1 rounded-full">Stable</span>
        <button onclick="document.documentElement.classList.toggle('dark');localStorage.setItem('theme',document.documentElement.classList.contains('dark')?'dark':'light')"
          class="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 text-sm">🌙</button>
      </div>
    </div>
  </header>

  <div class="max-w-7xl mx-auto px-6 py-10 space-y-16">

    <!-- Section: Colors -->
    <section>
      <h2 class="text-2xl font-extrabold text-gray-900 dark:text-white mb-2">Color Tokens</h2>
      <p class="text-gray-500 dark:text-gray-400 mb-6">Semantic color palette with light and dark mode values.</p>
      <div class="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
        <div class="text-center"><div class="w-full h-14 rounded-xl bg-blue-50 border border-gray-200 dark:border-0 mb-1.5"></div><span class="text-xs text-gray-500">blue-50</span></div>
        <div class="text-center"><div class="w-full h-14 rounded-xl bg-blue-200 mb-1.5"></div><span class="text-xs text-gray-500">blue-200</span></div>
        <div class="text-center"><div class="w-full h-14 rounded-xl bg-blue-400 mb-1.5"></div><span class="text-xs text-gray-500">blue-400</span></div>
        <div class="text-center"><div class="w-full h-14 rounded-xl bg-blue-600 mb-1.5"></div><span class="text-xs text-white dark:text-gray-100">blue-600</span></div>
        <div class="text-center"><div class="w-full h-14 rounded-xl bg-blue-800 mb-1.5"></div><span class="text-xs text-gray-500">blue-800</span></div>
        <div class="text-center"><div class="w-full h-14 rounded-xl bg-green-500 mb-1.5"></div><span class="text-xs text-gray-500">green-500</span></div>
        <div class="text-center"><div class="w-full h-14 rounded-xl bg-red-500 mb-1.5"></div><span class="text-xs text-gray-500">red-500</span></div>
        <div class="text-center"><div class="w-full h-14 rounded-xl bg-gray-900 dark:bg-gray-700 mb-1.5"></div><span class="text-xs text-gray-500">gray-900</span></div>
      </div>
    </section>

    <!-- Section: Typography -->
    <section>
      <h2 class="text-2xl font-extrabold text-gray-900 dark:text-white mb-6">Typography Scale</h2>
      <div class="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-8 space-y-3">
        <div class="flex items-baseline gap-4"><span class="text-xs text-gray-400 w-16 flex-shrink-0">9xl</span><p class="text-9xl font-black text-gray-900 dark:text-white leading-none">Aa</p></div>
        <div class="flex items-baseline gap-4"><span class="text-xs text-gray-400 w-16 flex-shrink-0">5xl</span><p class="text-5xl font-extrabold text-gray-900 dark:text-white">The quick brown fox</p></div>
        <div class="flex items-baseline gap-4"><span class="text-xs text-gray-400 w-16 flex-shrink-0">3xl</span><p class="text-3xl font-bold text-gray-900 dark:text-white">Section Heading Level 2</p></div>
        <div class="flex items-baseline gap-4"><span class="text-xs text-gray-400 w-16 flex-shrink-0">xl</span><p class="text-xl font-semibold text-gray-900 dark:text-white">Card Heading Level 3</p></div>
        <div class="flex items-baseline gap-4"><span class="text-xs text-gray-400 w-16 flex-shrink-0">base</span><p class="text-base text-gray-600 dark:text-gray-400 leading-relaxed max-w-2xl">Body text with comfortable line-height. This is the standard paragraph size used throughout the application for content areas.</p></div>
        <div class="flex items-baseline gap-4"><span class="text-xs text-gray-400 w-16 flex-shrink-0">sm</span><p class="text-sm text-gray-500">Secondary text, captions, and metadata labels.</p></div>
        <div class="flex items-baseline gap-4"><span class="text-xs text-gray-400 w-16 flex-shrink-0">xs</span><p class="text-xs uppercase tracking-widest font-semibold text-gray-400">LABEL · CATEGORY · OVERLINE</p></div>
      </div>
    </section>

    <!-- Section: Buttons -->
    <section>
      <h2 class="text-2xl font-extrabold text-gray-900 dark:text-white mb-6">Button Components</h2>
      <div class="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-8">
        <div class="flex flex-wrap gap-3 mb-6">
          <button class="bg-blue-600 text-white px-5 py-2.5 rounded-xl font-semibold hover:bg-blue-700 transition-colors text-sm">Primary</button>
          <button class="bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white px-5 py-2.5 rounded-xl font-semibold hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors text-sm">Secondary</button>
          <button class="border border-blue-600 text-blue-600 px-5 py-2.5 rounded-xl font-semibold hover:bg-blue-50 transition-colors text-sm">Outline</button>
          <button class="text-gray-700 dark:text-gray-300 px-5 py-2.5 rounded-xl font-semibold hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors text-sm">Ghost</button>
          <button class="bg-red-600 text-white px-5 py-2.5 rounded-xl font-semibold hover:bg-red-700 transition-colors text-sm">Danger</button>
          <button disabled class="bg-blue-600 text-white px-5 py-2.5 rounded-xl font-semibold opacity-40 cursor-not-allowed text-sm">Disabled</button>
        </div>
        <div class="flex flex-wrap gap-3">
          <button class="bg-blue-600 text-white px-3 py-1.5 rounded-lg font-semibold text-xs">Small</button>
          <button class="bg-blue-600 text-white px-5 py-2.5 rounded-xl font-semibold text-sm">Medium</button>
          <button class="bg-blue-600 text-white px-7 py-3.5 rounded-2xl font-semibold text-base">Large</button>
        </div>
      </div>
    </section>

    <!-- Section: Cards -->
    <section>
      <h2 class="text-2xl font-extrabold text-gray-900 dark:text-white mb-6">Card Patterns</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-5">
        <!-- Basic card -->
        <div class="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-sm p-6">
          <h3 class="font-bold text-gray-900 dark:text-white">Basic Card</h3>
          <p class="text-sm text-gray-500 dark:text-gray-400 mt-2">Standard bordered card with shadow.</p>
        </div>
        <!-- Glassmorphism card -->
        <div class="bg-gradient-to-br from-blue-600 to-purple-700 rounded-2xl p-6">
          <div class="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4">
            <h3 class="font-bold text-white">Glass Card</h3>
            <p class="text-sm text-white/70 mt-2">Frosted glass effect.</p>
          </div>
        </div>
        <!-- Stat card -->
        <div class="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-sm p-6 flex items-start justify-between">
          <div>
            <p class="text-sm text-gray-500 dark:text-gray-400">Total Users</p>
            <p class="text-3xl font-extrabold text-gray-900 dark:text-white mt-1">12,430</p>
            <p class="text-xs text-green-600 font-semibold mt-1">↑ 12.5%</p>
          </div>
          <div class="bg-blue-50 dark:bg-blue-900/30 p-3 rounded-xl text-2xl">👥</div>
        </div>
      </div>
    </section>

    <!-- Section: Form Elements -->
    <section>
      <h2 class="text-2xl font-extrabold text-gray-900 dark:text-white mb-6">Form Elements</h2>
      <div class="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-8 max-w-lg">
        <div class="space-y-4">
          <div>
            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Default Input</label>
            <input type="text" placeholder="Placeholder text" class="w-full border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm" />
          </div>
          <div>
            <label class="block text-sm font-medium text-red-600 mb-1">Error State</label>
            <input type="text" value="Invalid input" class="w-full border border-red-500 rounded-xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-red-500 text-sm" />
            <p class="text-xs text-red-600 mt-1">This field contains an error.</p>
          </div>
          <div class="flex items-center gap-3">
            <label class="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" checked class="peer sr-only" />
              <div class="w-5 h-5 rounded border-2 border-gray-300 peer-checked:bg-blue-600 peer-checked:border-blue-600 flex items-center justify-center">
                <svg class="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" /></svg>
              </div>
              <span class="text-sm text-gray-700 dark:text-gray-300">Checkbox checked</span>
            </label>
            <label class="flex items-center gap-3 cursor-pointer">
              <input type="checkbox" class="peer sr-only" />
              <div class="relative w-11 h-6 bg-gray-200 dark:bg-gray-600 rounded-full peer-checked:bg-blue-600 transition-colors">
                <div class="absolute top-0.5 left-0.5 bg-white w-5 h-5 rounded-full shadow transition-transform peer-checked:translate-x-5"></div>
              </div>
              <span class="text-sm text-gray-700 dark:text-gray-300">Toggle</span>
            </label>
          </div>
        </div>
      </div>
    </section>

    <!-- Section: Badges & Alerts -->
    <section>
      <h2 class="text-2xl font-extrabold text-gray-900 dark:text-white mb-6">Badges & Alerts</h2>
      <div class="space-y-4">
        <div class="flex flex-wrap gap-2">
          <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-400">Info</span>
          <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-400">Success</span>
          <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-yellow-100 text-yellow-700 dark:bg-yellow-900/40 dark:text-yellow-400">Warning</span>
          <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-400">Error</span>
          <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300">Neutral</span>
        </div>
        <div class="max-w-lg space-y-2">
          <div class="flex items-start gap-3 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-900 rounded-xl p-4"><span class="text-green-600 flex-shrink-0">✓</span><p class="text-sm text-green-800 dark:text-green-300 font-medium">Operation completed successfully.</p></div>
          <div class="flex items-start gap-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-900 rounded-xl p-4"><span class="text-red-600 flex-shrink-0">✕</span><p class="text-sm text-red-800 dark:text-red-300 font-medium">An error occurred. Please try again.</p></div>
        </div>
      </div>
    </section>

    <!-- Section: Spacing & Shadows Reference -->
    <section>
      <h2 class="text-2xl font-extrabold text-gray-900 dark:text-white mb-6">Shadows Reference</h2>
      <div class="flex flex-wrap gap-6">
        <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm w-28 text-center border border-gray-100 dark:border-gray-700"><span class="text-xs text-gray-500">shadow-sm</span></div>
        <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow w-28 text-center"><span class="text-xs text-gray-500">shadow</span></div>
        <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md w-28 text-center"><span class="text-xs text-gray-500">shadow-md</span></div>
        <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg w-28 text-center"><span class="text-xs text-gray-500">shadow-lg</span></div>
        <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-xl w-28 text-center"><span class="text-xs text-gray-500">shadow-xl</span></div>
        <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-2xl w-28 text-center"><span class="text-xs text-gray-500">shadow-2xl</span></div>
      </div>
    </section>

  </div><!-- end max-w-7xl -->

  <!-- Footer -->
  <footer class="border-t border-gray-200 dark:border-gray-800 mt-16 py-10 px-6 bg-white dark:bg-gray-900">
    <div class="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
      <span class="font-extrabold text-gray-900 dark:text-white">Design System v2.0</span>
      <p class="text-sm text-gray-500">Built with Tailwind CSS · Last updated May 2025</p>
    </div>
  </footer>

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
