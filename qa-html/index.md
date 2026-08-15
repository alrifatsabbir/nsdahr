# HTML Practice Questions and Answers (All 200 Items)

> ## 🟢 Level 1: Beginner (1 - 50)

### 1. Basic HTML Structure

<h3>1. Create a basic HTML5 document.</h3>

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Webpage</title>
</head>
<body>

</body>
</html>
```

<h3>2. Add a title to your webpage.</h3>

```html
<title>My First HTML Page</title>
```

<h3>3. Create a webpage with a heading and a paragraph.</h3>

```html
<h1>Welcome</h1>
<p>This is my first webpage.</p>
```

<h3>4. Add a favicon to a webpage.</h3>

```html
<link rel="icon" href="favicon.ico">
```

<h3>5. Set the language of the webpage to English.</h3>

```html
<html lang="en">
```

### 2. Headings & Text

<h3>6. Create all six heading tags (h1 to h6).</h3>

```html
<h1>Heading 1</h1>
<h2>Heading 2</h2>
<h3>Heading 3</h3>
<h4>Heading 4</h4>
<h5>Heading 5</h5>
<h6>Heading 6</h6>
```

<h3>7. Create a paragraph containing at least three sentences.</h3>

```html
<p>
HTML is the foundation of web development.
It is easy to learn.
It works together with CSS and JavaScript.
</p>
```

<h3>8. Make a word bold using HTML.</h3>

```html
<p>This is <strong>important</strong>.</p>
```

<h3>9. Make a word italic using HTML.</h3>

```html
<p>This is <em>italic</em> text.</p>
```

<h3>10. Insert a horizontal line between two paragraphs.</h3>

```html
<p>First paragraph.</p>

<hr>

<p>Second paragraph.</p>
```

### 3. Links & Images

<h3>11. Create a hyperlink to Google.</h3>

```html
<a href="https://www.google.com">Google</a>
```

<h3>12. Open a hyperlink in a new tab.</h3>

```html
<a href="https://www.google.com" target="_blank">
    Google
</a>
```

<h3>13. Display an image on the webpage.</h3>

```html
<img src="image.jpg" alt="Sample Image">
```

<h3>14. Add alternative text to an image.</h3>

```html
<img src="cat.jpg" alt="A cute cat">
```

<h3>15. Create an image that acts as a hyperlink.</h3>

```html
<a href="https://example.com">
    <img src="logo.png" alt="Logo">
</a>
```

### 4. Lists

<h3>16. Create an unordered list of five fruits.</h3>

```html
<ul>
    <li>Apple</li>
    <li>Mango</li>
    <li>Banana</li>
    <li>Orange</li>
    <li>Grapes</li>
</ul>
```

<h3>17. Create an ordered list of five programming languages.</h3>

```html
<ol>
    <li>C</li>
    <li>C++</li>
    <li>Java</li>
    <li>Python</li>
    <li>JavaScript</li>
</ol>
```

<h3>18. Create a nested list.</h3>

```html
<ul>
    <li>Frontend
        <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
        </ul>
    </li>
</ul>
```

<h3>19. Create a description list.</h3>

```html
<dl>
    <dt>HTML</dt>
    <dd>Markup Language</dd>

    <dt>CSS</dt>
    <dd>Stylesheet Language</dd>
</dl>
```

<h3>20. Add list items using the correct HTML tag.</h3>

```html
<ul>
    <li>Item One</li>
    <li>Item Two</li>
    <li>Item Three</li>
</ul>
```

### 5. Tables

<h3>21. Create a table with three columns.</h3>

```html
<table border="1">
    <tr>
        <th>Name</th>
        <th>Age</th>
        <th>City</th>
    </tr>
</table>
```

<h3>22. Add a table header.</h3>

```html
<tr>
    <th>Name</th>
    <th>Email</th>
</tr>
```

<h3>23. Add three rows of data.</h3>

```html
<tr>
    <td>John</td>
    <td>20</td>
</tr>

<tr>
    <td>Jane</td>
    <td>22</td>
</tr>

<tr>
    <td>Alex</td>
    <td>25</td>
</tr>
```

<h3>24. Merge two columns using colspan.</h3>

```html
<tr>
    <td colspan="2">
        Merged Columns
    </td>
</tr>
```

<h3>25. Merge two rows using rowspan.</h3>

```html
<tr>
    <td rowspan="2">Merged Rows</td>
    <td>Row 1</td>
</tr>

<tr>
    <td>Row 2</td>
</tr>
```

### 6. Forms

<h3>26. Create a simple form.</h3>

```html
<form>
</form>
```

<h3>27. Add a text input field.</h3>

```html
<form>
    <input type="text" placeholder="Enter your name">
</form>
```

<h3>28. Add an email input field.</h3>

```html
<form>
    <input type="email" placeholder="Enter your email">
</form>
```

<h3>29. Add a password input field.</h3>

```html
<form>
    <input type="password" placeholder="Enter your password">
</form>
```

<h3>30. Add a submit button.</h3>

```html
<form>
    <input type="submit" value="Submit">
</form>
```

### 7. Semantic HTML

<h3>31. Create a header section.</h3>

```html
<header>
    <h1>My Website</h1>
</header>
```

<h3>32. Create a navigation bar.</h3>

```html
<nav>
    <a href="#">Home</a>
    <a href="#">About</a>
    <a href="#">Contact</a>
</nav>
```

<h3>33. Create a main content section.</h3>

```html
<main>
    <h2>Main Content</h2>
    <p>This is the main section of the webpage.</p>
</main>
```

<h3>34. Create an article with a section.</h3>

```html
<article>
    <h2>Article Title</h2>

    <section>
        <h3>Section Title</h3>
        <p>Section content goes here.</p>
    </section>
</article>
```

<h3>35. Create a footer.</h3>

```html
<footer>
    <p>&copy; 2026 My Website</p>
</footer>
```

### 8. Multimedia

<h3>36. Add an audio file.</h3>

```html
<audio controls>
    <source src="audio.mp3" type="audio/mpeg">
</audio>
```

<h3>37. Add a video file.</h3>

```html
<video controls width="500">
    <source src="video.mp4" type="video/mp4">
</video>
```

<h3>38. Embed a YouTube video.</h3>

```html
<iframe
    width="560"
    height="315"
    src="https://www.youtube.com/embed/VIDEO_ID"
    title="YouTube video"
    allowfullscreen>
</iframe>
```

<h3>39. Add controls to a video.</h3>

```html
<video controls>
    <source src="movie.mp4" type="video/mp4">
</video>
```

<h3>40. Display an iframe.</h3>

```html
<iframe
    src="https://example.com"
    width="600"
    height="400">
</iframe>
```

### 9. HTML Entities & Attributes

<h3>41. Display the copyright symbol.</h3>

```html
<p>&copy; 2026</p>
```

<h3>42. Display the less-than symbol.</h3>

```html
<p><</p>
```

<h3>43. Add a tooltip using the title attribute.</h3>

```html
<p title="This is a tooltip">
    Hover over me.
</p>
```

<h3>44. Make an input field required.</h3>

```html
<input type="text" required>
```

<h3>45. Disable a button.</h3>

```html
<button disabled>
    Submit
</button>
```

### 10. Miscellaneous

<h3>46. Create a button.</h3>

```html
<button>Click Me</button>
```

<h3>47. Create a comment in HTML.</h3>

```html
<!-- This is an HTML comment -->
```

<h3>48. Create a progress bar.</h3>

```html
<progress value="60" max="100"></progress>
```

<h3>49. Create a meter element.</h3>

```html
<meter value="75" min="0" max="100"></meter>
```

<h3>50. Display the current date using the <code><time></code> element.</h3>

```html
<time datetime="2026-08-04">
    August 4, 2026
</time>
```

---

> ## 🟡 Level 2: Medium (51 - 100)

### 11. Advanced Forms & Validation

<h3>51. Create a form with name, email, and message fields.</h3>

```html
<form>
    <label for="name">Name:</label>
    <input type="text" id="name" name="name" required>
    
    <label for="email">Email:</label>
    <input type="email" id="email" name="email" required>
    
    <label for="message">Message:</label>
    <textarea id="message" name="message" required></textarea>
    
    <button type="submit">Send</button>
</form>
```

<h3>52. Add a dropdown select with multiple options.</h3>

```html
<select name="country" id="country">
    <option value="">Select a country</option>
    <option value="us">United States</option>
    <option value="uk">United Kingdom</option>
    <option value="ca">Canada</option>
    <option value="au">Australia</option>
</select>
```

<h3>53. Create a textarea for multi-line input.</h3>

```html
<textarea name="bio" id="bio" rows="5" cols="30" placeholder="Tell us about yourself"></textarea>
```

<h3>54. Add a checkbox for terms and conditions.</h3>

```html
<label>
    <input type="checkbox" name="terms" required>
    I agree to the Terms and Conditions
</label>
```

<h3>55. Create radio buttons for gender selection.</h3>

```html
<fieldset>
    <legend>Gender:</legend>
    <label><input type="radio" name="gender" value="male"> Male</label>
    <label><input type="radio" name="gender" value="female"> Female</label>
    <label><input type="radio" name="gender" value="other"> Other</label>
</fieldset>
```

<h3>56. Add a date picker input.</h3>

```html
<label for="dob">Date of Birth:</label>
<input type="date" id="dob" name="dob">
```

<h3>57. Create a file upload input.</h3>

```html
<input type="file" name="resume" accept=".pdf,.doc,.docx">
```

<h3>58. Add a range slider input.</h3>

```html
<label for="volume">Volume:</label>
<input type="range" id="volume" name="volume" min="0" max="100" value="50">
```

<h3>59. Create a color picker input.</h3>

```html
<label for="favcolor">Favorite Color:</label>
<input type="color" id="favcolor" name="favcolor" value="#ff0000">
```

<h3>60. Add a search input with placeholder.</h3>

```html
<input type="search" name="q" placeholder="Search...">
```

### 12. Advanced Tables

<h3>61. Create a table with thead, tbody, and tfoot.</h3>

```html
<table border="1">
    <thead>
        <tr>
            <th>Product</th>
            <th>Price</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Apple</td>
            <td>$1.00</td>
        </tr>
        <tr>
            <td>Banana</td>
            <td>$0.50</td>
        </tr>
    </tbody>
    <tfoot>
        <tr>
            <td>Total</td>
            <td>$1.50</td>
        </tr>
    </tfoot>
</table>
```

<h3>62. Add a caption to a table.</h3>

```html
<table border="1">
    <caption>Monthly Sales Report</caption>
    <tr>
        <th>Month</th>
        <th>Sales</th>
    </tr>
    <tr>
        <td>January</td>
        <td>$10,000</td>
    </tr>
</table>
```

<h3>63. Create a table with grouped columns using colgroup.</h3>

```html
<table border="1">
    <colgroup>
        <col style="background-color: #f0f0f0">
        <col span="2" style="background-color: #e0e0e0">
    </colgroup>
    <tr>
        <th>Name</th>
        <th>Age</th>
        <th>City</th>
    </tr>
    <tr>
        <td>John</td>
        <td>25</td>
        <td>New York</td>
    </tr>
</table>
```

<h3>64. Style alternate table rows using CSS classes.</h3>

```html
<style>
    .odd { background-color: #f9f9f9; }
    .even { background-color: #ffffff; }
</style>
<table border="1">
    <tr class="odd"><td>Row 1</td></tr>
    <tr class="even"><td>Row 2</td></tr>
    <tr class="odd"><td>Row 3</td></tr>
</table>
```

<h3>65. Create a responsive table with horizontal scroll.</h3>

```html
<div style="overflow-x: auto;">
    <table border="1" style="min-width: 600px;">
        <tr>
            <th>Name</th><th>Email</th><th>Phone</th><th>Address</th><th>City</th><th>Country</th>
        </tr>
        <tr>
            <td>John</td><td>john@example.com</td><td>123-456-7890</td><td>123 Main St</td><td>New York</td><td>USA</td>
        </tr>
    </table>
</div>
```

### 13. Advanced Lists & Navigation

<h3>66. Create a breadcrumb navigation using ordered list.</h3>

```html
<nav aria-label="Breadcrumb">
    <ol>
        <li><a href="/">Home</a></li>
        <li><a href="/products">Products</a></li>
        <li><a href="/products/electronics">Electronics</a></li>
        <li aria-current="page">Smartphones</li>
    </ol>
</nav>
```

<h3>67. Build a multi-level dropdown menu using nested lists.</h3>

```html
<ul class="dropdown-menu">
    <li><a href="#">Home</a></li>
    <li>
        <a href="#">Products ▼</a>
        <ul>
            <li><a href="#">Electronics</a></li>
            <li><a href="#">Clothing</a></li>
            <li>
                <a href="#">Accessories ▼</a>
                <ul>
                    <li><a href="#">Bags</a></li>
                    <li><a href="#">Jewelry</a></li>
                </ul>
            </li>
        </ul>
    </li>
    <li><a href="#">Contact</a></li>
</ul>
```

<h3>68. Create a pagination component with list items.</h3>

```html
<nav aria-label="Pagination">
    <ul class="pagination">
        <li><a href="#">&laquo; Previous</a></li>
        <li><a href="#" aria-current="page">1</a></li>
        <li><a href="#">2</a></li>
        <li><a href="#">3</a></li>
        <li><a href="#">Next &raquo;</a></li>
    </ul>
</nav>
```

<h3>69. Build a tag cloud using an unordered list.</h3>

```html
<ul class="tag-cloud">
    <li><a href="#" style="font-size: 1.5em;">JavaScript</a></li>
    <li><a href="#" style="font-size: 1.2em;">HTML</a></li>
    <li><a href="#" style="font-size: 1.1em;">CSS</a></li>
    <li><a href="#" style="font-size: 1.3em;">React</a></li>
    <li><a href="#" style="font-size: 1.0em;">Node.js</a></li>
</ul>
```

<h3>70. Create a definition list for a glossary.</h3>

```html
<dl>
    <dt>API</dt>
    <dd>Application Programming Interface - a set of rules for building software applications.</dd>
    
    <dt>DOM</dt>
    <dd>Document Object Model - a programming interface for HTML and XML documents.</dd>
    
    <dt>CSS</dt>
    <dd>Cascading Style Sheets - a stylesheet language for describing document presentation.</dd>
</dl>
```

### 14. Media & Embeds

<h3>71. Add a video with multiple source formats.</h3>

```html
<video controls width="600">
    <source src="movie.webm" type="video/webm">
    <source src="movie.mp4" type="video/mp4">
    <source src="movie.ogv" type="video/ogg">
    Your browser does not support the video tag.
</video>
```

<h3>72. Create a video with poster image.</h3>

```html
<video controls poster="thumbnail.jpg" width="600">
    <source src="movie.mp4" type="video/mp4">
</video>
```

<h3>73. Add audio with multiple source formats.</h3>

```html
<audio controls>
    <source src="audio.ogg" type="audio/ogg">
    <source src="audio.mp3" type="audio/mpeg">
    Your browser does not support the audio element.
</audio>
```

<h3>74. Embed a Google Map using iframe.</h3>

```html
<iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.12345!2d-73.987654!3d40.758896!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sTimes%20Square!5e0!3m2!1sen!2sus!4v1234567890"
    width="600"
    height="450"
    style="border:0;"
    allowfullscreen=""
    loading="lazy"
    referrerpolicy="no-referrer-when-downgrade">
</iframe>
```

<h3>75. Embed a PDF document using iframe.</h3>

```html
<iframe src="document.pdf" width="100%" height="500px">
    <p>Your browser does not support iframes. <a href="document.pdf">Download the PDF</a>.</p>
</iframe>
```

<h3>76. Create a picture element with multiple sources.</h3>

```html
<picture>
    <source media="(max-width: 600px)" srcset="image-small.jpg">
    <source media="(max-width: 1200px)" srcset="image-medium.jpg">
    <img src="image-large.jpg" alt="Responsive image">
</picture>
```

<h3>77. Add subtitles/captions to a video using track.</h3>

```html
<video controls width="600">
    <source src="movie.mp4" type="video/mp4">
    <track kind="subtitles" src="subtitles_en.vtt" srclang="en" label="English" default>
    <track kind="subtitles" src="subtitles_es.vtt" srclang="es" label="Español">
</video>
```

<h3>78. Create a responsive image using srcset.</h3>

```html
<img src="image-800w.jpg"
     srcset="image-400w.jpg 400w,
             image-800w.jpg 800w,
             image-1200w.jpg 1200w"
     sizes="(max-width: 600px) 400px,
            (max-width: 1200px) 800px,
            1200px"
     alt="Responsive image example">
```

<h3>79. Add a video with loop and muted attributes.</h3>

```html
<video autoplay loop muted playsinline width="600">
    <source src="background.mp4" type="video/mp4">
</video>
```

<h3>80. Embed a social media post (Twitter/X, Instagram).</h3>

```html
<!-- Twitter/X Embed -->
<blockquote class="twitter-tweet">
    <p lang="en" dir="ltr">Hello world! <a href="https://twitter.com/hashtag/webdev?src=hash">#webdev</a></p>
</blockquote>
<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

<!-- Instagram Embed -->
<blockquote class="instagram-media" data-instgrm-permalink="https://www.instagram.com/p/ABC123/"></blockquote>
<script async src="//www.instagram.com/embed.js"></script>
```

### 15. Semantic Layout & Structure

<h3>81. Create a complete page layout with header, nav, main, aside, footer.</h3>

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Page Layout</title>
</head>
<body>
    <header>
        <h1>Site Title</h1>
    </header>
    <nav>
        <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
        </ul>
    </nav>
    <main>
        <article>
            <h2>Main Article</h2>
            <p>Content goes here...</p>
        </article>
    </main>
    <aside>
        <h3>Sidebar</h3>
        <p>Related links...</p>
    </aside>
    <footer>
        <p>&copy; 2026 My Site</p>
    </footer>
</body>
</html>
```

<h3>82. Build a blog post layout with article, section, and aside.</h3>

```html
<article>
    <header>
        <h1>Blog Post Title</h1>
        <p>By Author Name | <time datetime="2026-01-15">January 15, 2026</time></p>
    </header>
    <section>
        <h2>Introduction</h2>
        <p>This is the introduction to the blog post...</p>
    </section>
    <section>
        <h2>Main Content</h2>
        <p>The main content goes here...</p>
    </section>
    <aside>
        <h3>Related Posts</h3>
        <ul>
            <li><a href="#">Post 1</a></li>
            <li><a href="#">Post 2</a></li>
        </ul>
    </aside>
    <footer>
        <p>Tags: <a href="#">HTML</a>, <a href="#">CSS</a>, <a href="#">JavaScript</a></p>
    </footer>
</article>
```

<h3>83. Create a product card using semantic elements.</h3>

```html
<article class="product-card">
    <figure>
        <img src="product.jpg" alt="Product Name">
        <figcaption>Product Name - $29.99</figcaption>
    </figure>
    <div class="product-details">
        <h3>Product Name</h3>
        <p>Short description of the product...</p>
        <button>Add to Cart</button>
    </div>
</article>
```

<h3>84. Build a testimonial section using figure and figcaption.</h3>

```html
<figure class="testimonial">
    <blockquote>
        <p>"This product changed my life! Highly recommended."</p>
    </blockquote>
    <figcaption>
        <cite>Jane Doe</cite>, CEO at Company Inc.
    </figcaption>
</figure>
```

<h3>85. Create a FAQ section using details and summary.</h3>

```html
<section class="faq">
    <h2>Frequently Asked Questions</h2>
    <details>
        <summary>What is HTML?</summary>
        <p>HTML stands for HyperText Markup Language...</p>
    </details>
    <details>
        <summary>What is CSS?</summary>
        <p>CSS stands for Cascading Style Sheets...</p>
    </details>
    <details>
        <summary>What is JavaScript?</summary>
        <p>JavaScript is a programming language...</p>
    </details>
</section>
```

<h3>86. Build a timeline using semantic elements.</h3>

```html
<ol class="timeline">
    <li>
        <time datetime="2026-01-01">January 2026</time>
        <article>
            <h3>Project Started</h3>
            <p>Initial planning and research phase.</p>
        </article>
    </li>
    <li>
        <time datetime="2026-03-15">March 2026</time>
        <article>
            <h3>Design Phase</h3>
            <p>UI/UX design and prototyping.</p>
        </article>
    </li>
    <li>
        <time datetime="2026-06-01">June 2026</time>
        <article>
            <h3>Development</h3>
            <p>Frontend and backend development.</p>
        </article>
    </li>
</ol>
```

<h3>87. Create a card grid layout using section and article.</h3>

```html
<section class="card-grid">
    <article class="card">
        <h3>Card 1</h3>
        <p>Content for card 1...</p>
    </article>
    <article class="card">
        <h3>Card 2</h3>
        <p>Content for card 2...</p>
    </article>
    <article class="card">
        <h3>Card 3</h3>
        <p>Content for card 3...</p>
    </article>
</section>
```

<h3>88. Build a sidebar navigation with nav and ul.</h3>

```html
<aside class="sidebar">
    <nav aria-label="Sidebar navigation">
        <ul>
            <li><a href="#">Dashboard</a></li>
            <li><a href="#">Profile</a></li>
            <li><a href="#">Settings</a></li>
            <li><a href="#">Reports</a></li>
            <li><a href="#">Logout</a></li>
        </ul>
    </nav>
</aside>
```

<h3>89. Create a hero section with header and main.</h3>

```html
<header class="hero">
    <div class="hero-content">
        <h1>Welcome to Our Website</h1>
        <p>Building amazing web experiences with HTML, CSS, and JavaScript.</p>
        <a href="#get-started" class="btn">Get Started</a>
    </div>
</header>
<main>
    <section id="get-started">
        <h2>Getting Started</h2>
        <p>Learn the basics of web development...</p>
    </section>
</main>
```

<h3>90. Build a contact section with address and form.</h3>

```html
<section class="contact">
    <h2>Contact Us</h2>
    <address>
        <p>123 Main Street</p>
        <p>New York, NY 10001</p>
        <p>Email: <a href="mailto:info@example.com">info@example.com</a></p>
        <p>Phone: <a href="tel:+1234567890">+1 (234) 567-890</a></p>
    </address>
    <form>
        <label for="name">Name:</label>
        <input type="text" id="name" name="name" required>
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" required>
        <label for="message">Message:</label>
        <textarea id="message" name="message" required></textarea>
        <button type="submit">Send Message</button>
    </form>
</section>
```

### 16. Forms - Advanced

<h3>91. Create a login form with validation attributes.</h3>

```html
<form novalidate>
    <div>
        <label for="username">Username:</label>
        <input type="text" id="username" name="username" required minlength="3" maxlength="20" pattern="[a-zA-Z0-9_]+">
        <span class="error" aria-live="polite"></span>
    </div>
    <div>
        <label for="password">Password:</label>
        <input type="password" id="password" name="password" required minlength="8">
        <span class="error" aria-live="polite"></span>
    </div>
    <button type="submit">Login</button>
</form>
```

<h3>92. Build a registration form with multiple field types.</h3>

```html
<form>
    <fieldset>
        <legend>Personal Information</legend>
        <label for="firstName">First Name:</label>
        <input type="text" id="firstName" name="firstName" required>
        <label for="lastName">Last Name:</label>
        <input type="text" id="lastName" name="lastName" required>
    </fieldset>
    <fieldset>
        <legend>Account Details</legend>
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" required>
        <label for="password">Password:</label>
        <input type="password" id="password" name="password" required minlength="8">
        <label for="confirmPassword">Confirm Password:</label>
        <input type="password" id="confirmPassword" name="confirmPassword" required>
    </fieldset>
    <fieldset>
        <legend>Preferences</legend>
        <label><input type="checkbox" name="newsletter"> Subscribe to newsletter</label>
        <label><input type="checkbox" name="terms" required> Accept Terms</label>
    </fieldset>
    <button type="submit">Register</button>
</form>
```

<h3>93. Create a contact form with required fields.</h3>

```html
<form>
    <div>
        <label for="contactName">Name *</label>
        <input type="text" id="contactName" name="name" required>
    </div>
    <div>
        <label for="contactEmail">Email *</label>
        <input type="email" id="contactEmail" name="email" required>
    </div>
    <div>
        <label for="contactSubject">Subject</label>
        <select id="contactSubject" name="subject">
            <option value="general">General Inquiry</option>
            <option value="support">Technical Support</option>
            <option value="billing">Billing</option>
        </select>
    </div>
    <div>
        <label for="contactMessage">Message *</label>
        <textarea id="contactMessage" name="message" rows="5" required></textarea>
    </div>
    <button type="submit">Send</button>
</form>
```

<h3>94. Add pattern validation for phone number.</h3>

```html
<label for="phone">Phone (US format):</label>
<input type="tel" id="phone" name="phone" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder="123-456-7890" title="Format: 123-456-7890">
```

<h3>95. Create a form with datalist for autocomplete.</h3>

```html
<label for="browser">Choose a browser:</label>
<input type="text" id="browser" name="browser" list="browsers">
<datalist id="browsers">
    <option value="Chrome">
    <option value="Firefox">
    <option value="Safari">
    <option value="Edge">
    <option value="Opera">
</datalist>
```

<h3>96. Build a multi-step form using fieldset.</h3>

```html
<form id="multiStepForm">
    <fieldset class="step active">
        <legend>Step 1: Account</legend>
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" required>
        <button type="button" onclick="nextStep()">Next</button>
    </fieldset>
    <fieldset class="step">
        <legend>Step 2: Profile</legend>
        <label for="name">Full Name:</label>
        <input type="text" id="name" name="name" required>
        <button type="button" onclick="prevStep()">Back</button>
        <button type="button" onclick="nextStep()">Next</button>
    </fieldset>
    <fieldset class="step">
        <legend>Step 3: Confirm</legend>
        <p>Review your information and submit.</p>
        <button type="button" onclick="prevStep()">Back</button>
        <button type="submit">Submit</button>
    </fieldset>
</form>
```

<h3>97. Add custom validation messages using title.</h3>

```html
<form>
    <label for="username">Username:</label>
    <input type="text" id="username" name="username" required pattern="[a-zA-Z0-9]{5,}" title="Username must be at least 5 alphanumeric characters">
    <button type="submit">Submit</button>
</form>
```

<h3>98. Create a form with optgroup in select.</h3>

```html
<label for="framework">Choose a framework:</label>
<select id="framework" name="framework">
    <optgroup label="Frontend">
        <option value="react">React</option>
        <option value="vue">Vue.js</option>
        <option value="angular">Angular</option>
    </optgroup>
    <optgroup label="Backend">
        <option value="node">Node.js</option>
        <option value="django">Django</option>
        <option value="rails">Ruby on Rails</option>
    </optgroup>
</select>
```

<h3>99. Build a survey form with radio groups.</h3>

```html
<form>
    <fieldset>
        <legend>How satisfied are you with our service?</legend>
        <label><input type="radio" name="satisfaction" value="very-satisfied"> Very Satisfied</label>
        <label><input type="radio" name="satisfaction" value="satisfied"> Satisfied</label>
        <label><input type="radio" name="satisfaction" value="neutral"> Neutral</label>
        <label><input type="radio" name="satisfaction" value="dissatisfied"> Dissatisfied</label>
        <label><input type="radio" name="satisfaction" value="very-dissatisfied"> Very Dissatisfied</label>
    </fieldset>
    <fieldset>
        <legend>Would you recommend us?</legend>
        <label><input type="radio" name="recommend" value="yes"> Yes</label>
        <label><input type="radio" name="recommend" value="no"> No</label>
    </fieldset>
    <button type="submit">Submit Survey</button>
</form>
```

<h3>100. Create a newsletter signup form.</h3>

```html
<form action="/subscribe" method="POST">
    <label for="newsletterEmail">Email address:</label>
    <input type="email" id="newsletterEmail" name="email" required placeholder="you@example.com">
    <button type="submit">Subscribe</button>
    <p class="privacy-note">We respect your privacy. Unsubscribe at any time.</p>
</form>
```

---

> ## 🟠 Level 3: Professional (101 - 150)

### 17. Accessibility (a11y)

<h3>101. Add proper heading hierarchy (h1-h6) to a page.</h3>

```html
<h1>Main Page Title</h1>
<section>
    <h2>Section Title</h2>
    <article>
        <h3>Article Title</h3>
        <section>
            <h4>Subsection Title</h4>
        </section>
    </article>
</section>
```

<h3>102. Create accessible form labels using label element.</h3>

```html
<form>
    <div>
        <label for="fullName">Full Name:</label>
        <input type="text" id="fullName" name="fullName" required>
    </div>
    <div>
        <label for="emailAddress">Email Address:</label>
        <input type="email" id="emailAddress" name="email" required>
    </div>
</form>
```

<h3>103. Add aria-label to icon-only buttons.</h3>

```html
<button aria-label="Close dialog">
    <svg aria-hidden="true"><use xlink:href="#icon-close"></use></svg>
</button>
<button aria-label="Search">
    <svg aria-hidden="true"><use xlink:href="#icon-search"></use></svg>
</button>
```

<h3>104. Use aria-describedby for form help text.</h3>

```html
<label for="password">Password:</label>
<input type="password" id="password" aria-describedby="passwordHelp">
<span id="passwordHelp">Must be at least 8 characters with one number and one special character.</span>
```

<h3>105. Create skip navigation link.</h3>

```html
<a href="#main-content" class="skip-link">Skip to main content</a>
<nav>...</nav>
<main id="main-content">
    <h1>Page Title</h1>
</main>
```

<h3>106. Add role="alert" for dynamic messages.</h3>

```html
<div role="alert" aria-live="assertive">
    Your session will expire in 5 minutes.
</div>
```

<h3>107. Use aria-live for live region updates.</h3>

```html
<div aria-live="polite" aria-atomic="true" id="notifications">
    <!-- Dynamic content updates will be announced -->
</div>
```

<h3>108. Create accessible modal dialog with aria-modal.</h3>

```html
<div role="dialog" aria-modal="true" aria-labelledby="modalTitle" aria-describedby="modalDesc">
    <h2 id="modalTitle">Confirm Action</h2>
    <p id="modalDesc">Are you sure you want to delete this item?</p>
    <button>Cancel</button>
    <button>Delete</button>
</div>
```

<h3>109. Add aria-expanded to collapsible elements.</h3>

```html
<button aria-expanded="false" aria-controls="panel1" onclick="togglePanel()">
    Show Details
</button>
<div id="panel1" hidden>
    <p>Detailed content here...</p>
</div>
```

<h3>110. Use aria-controls for related elements.</h3>

```html
<button aria-controls="searchResults" aria-expanded="false">Search</button>
<div id="searchResults" role="region" aria-live="polite">
    <!-- Search results appear here -->
</div>
```

### 18. SEO & Meta Tags

<h3>111. Add Open Graph meta tags for social sharing.</h3>

```html
<head>
    <meta property="og:title" content="Page Title">
    <meta property="og:description" content="Page description for social sharing.">
    <meta property="og:image" content="https://example.com/image.jpg">
    <meta property="og:url" content="https://example.com/page">
    <meta property="og:type" content="website">
    <meta property="og:site_name" content="Site Name">
</head>
```

<h3>112. Add Twitter Card meta tags.</h3>

```html
<head>
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:site" content="@username">
    <meta name="twitter:title" content="Page Title">
    <meta name="twitter:description" content="Page description for Twitter.">
    <meta name="twitter:image" content="https://example.com/image.jpg">
</head>
```

<h3>113. Create JSON-LD structured data for Article.</h3>

```html
<script type="application/ld+json">
{
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Article Title",
    "author": {
        "@type": "Person",
        "name": "Author Name"
    },
    "datePublished": "2026-01-15",
    "image": "https://example.com/image.jpg",
    "publisher": {
        "@type": "Organization",
        "name": "Publisher Name"
    }
}
</script>
```

<h3>114. Add JSON-LD for Product schema.</h3>

```html
<script type="application/ld+json">
{
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Product Name",
    "image": "https://example.com/product.jpg",
    "description": "Product description",
    "brand": {
        "@type": "Brand",
        "name": "Brand Name"
    },
    "offers": {
        "@type": "Offer",
        "priceCurrency": "USD",
        "price": "29.99",
        "availability": "https://schema.org/InStock"
    }
}
</script>
```

<h3>115. Create JSON-LD for BreadcrumbList.</h3>

```html
<script type="application/ld+json">
{
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
        {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://example.com/"
        },
        {
            "@type": "ListItem",
            "position": 2,
            "name": "Category",
            "item": "https://example.com/category"
        },
        {
            "@type": "ListItem",
            "position": 3,
            "name": "Product",
            "item": "https://example.com/category/product"
        }
    ]
}
</script>
```

<h3>116. Add canonical URL link tag.</h3>

```html
<head>
    <link rel="canonical" href="https://example.com/preferred-url">
</head>
```

<h3>117. Create hreflang tags for multilingual sites.</h3>

```html
<head>
    <link rel="alternate" hreflang="en" href="https://example.com/en/page">
    <link rel="alternate" hreflang="es" href="https://example.com/es/page">
    <link rel="alternate" hreflang="fr" href="https://example.com/fr/page">
    <link rel="alternate" hreflang="x-default" href="https://example.com/">
</head>
```

<h3>118. Add meta robots tag for indexing control.</h3>

```html
<head>
    <meta name="robots" content="index, follow">
    <!-- Or for noindex: -->
    <meta name="robots" content="noindex, nofollow">
</head>
```

<h3>119. Create sitemap.xml reference in HTML.</h3>

```html
<head>
    <link rel="sitemap" type="application/xml" title="Sitemap" href="/sitemap.xml">
</head>
```

<h3>120. Add theme-color meta tag for PWA.</h3>

```html
<head>
    <meta name="theme-color" content="#317EFB">
    <meta name="msapplication-navbutton-color" content="#317EFB">
    <meta name="apple-mobile-web-app-status-bar-style" content="#317EFB">
</head>
```

### 19. Performance & Optimization

<h3>121. Add preload for critical CSS.</h3>

```html
<head>
    <link rel="preload" href="critical.css" as="style" onload="this.onload=null;this.rel='stylesheet'">
    <noscript><link rel="stylesheet" href="critical.css"></noscript>
</head>
```

<h3>122. Add preconnect for third-party domains.</h3>

```html
<head>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link rel="preconnect" href="https://cdn.example.com">
</head>
```

<h3>123. Use prefetch for next page resources.</h3>

```html
<head>
    <link rel="prefetch" href="/next-page.html">
    <link rel="prefetch" href="/assets/next-page.css">
    <link rel="prefetch" href="/assets/next-page.js">
</head>
```

<h3>124. Add dns-prefetch for external resources.</h3>

```html
<head>
    <link rel="dns-prefetch" href="//fonts.googleapis.com">
    <link rel="dns-prefetch" href="//cdn.jsdelivr.net">
    <link rel="dns-prefetch" href="//www.google-analytics.com">
</head>
```

<h3>125. Implement lazy loading for images.</h3>

```html
<img src="image.jpg" alt="Description" loading="lazy" width="800" height="600">
<iframe src="video.html" loading="lazy" width="560" height="315"></iframe>
```

<h3>126. Add fetchpriority for LCP image.</h3>

```html
<img src="hero.jpg" alt="Hero image" fetchpriority="high" width="1200" height="600">
<img src="below-fold.jpg" alt="Below fold" fetchpriority="low" loading="lazy">
```

<h3>127. Use decoding="async" for images.</h3>

```html
<img src="image.jpg" alt="Description" decoding="async" width="800" height="600">
```

<h3>128. Add resource hints for fonts.</h3>

```html
<head>
    <link rel="preload" href="font.woff2" as="font" type="font/woff2" crossorigin>
    <link rel="preload" href="font-bold.woff2" as="font" type="font/woff2" crossorigin>
</head>
```

<h3>129. Implement critical CSS inlining.</h3>

```html
<head>
    <style>
        /* Critical above-the-fold CSS inlined here */
        header { background: #333; color: white; padding: 1rem; }
        .hero { min-height: 50vh; display: flex; align-items: center; }
    </style>
    <link rel="preload" href="full.css" as="style" onload="this.onload=null;this.rel='stylesheet'">
</head>
```

<h3>130. Add modulepreload for JavaScript modules.</h3>

```html
<head>
    <link rel="modulepreload" href="/js/main.js">
    <link rel="modulepreload" href="/js/components/header.js">
    <link rel="modulepreload" href="/js/utils/api.js">
</head>
```

### 20. Web Components & Custom Elements

<h3>131. Create a custom element using class syntax.</h3>

```html
<script>
class MyElement extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }
    connectedCallback() {
        this.shadowRoot.innerHTML = `<style>:host { display: block; }</style><p>Hello from custom element!</p>`;
    }
}
customElements.define('my-element', MyElement);
</script>
<my-element></my-element>
```

<h3>132. Define a custom element with observedAttributes.</h3>

```html
<script>
class UserCard extends HTMLElement {
    static get observedAttributes() { return ['name', 'avatar']; }
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }
    attributeChangedCallback(name, oldValue, newValue) {
        this.render();
    }
    render() {
        this.shadowRoot.innerHTML = `
            <style>img { border-radius: 50%; }</style>
            <img src="${this.getAttribute('avatar')}" alt="${this.getAttribute('name')}">
            <h3>${this.getAttribute('name')}</h3>
        `;
    }
}
customElements.define('user-card', UserCard);
</script>
<user-card name="John Doe" avatar="john.jpg"></user-card>
```

<h3>133. Use connectedCallback and disconnectedCallback.</h3>

```html
<script>
class TimerElement extends HTMLElement {
    constructor() {
        super();
        this.interval = null;
    }
    connectedCallback() {
        this.interval = setInterval(() => {
            this.textContent = new Date().toLocaleTimeString();
        }, 1000);
    }
    disconnectedCallback() {
        clearInterval(this.interval);
    }
}
customElements.define('live-timer', TimerElement);
</script>
<live-timer></live-timer>
```

<h3>134. Implement attributeChangedCallback.</h3>

```html
<script>
class Counter extends HTMLElement {
    static get observedAttributes() { return ['count']; }
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }
    attributeChangedCallback(name, oldValue, newValue) {
        this.shadowRoot.textContent = `Count: ${newValue}`;
    }
}
customElements.define('my-counter', Counter);
</script>
<my-counter count="0"></my-counter>
<script>
    setTimeout(() => document.querySelector('my-counter').setAttribute('count', '5'), 1000);
</script>
```

<h3>135. Create a Shadow DOM for encapsulation.</h3>

```html
<script>
class StyledCard extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });
        shadow.innerHTML = `
            <style>
                .card { border: 1px solid #ccc; border-radius: 8px; padding: 1rem; }
                .card h3 { margin-top: 0; color: #333; }
            </style>
            <div class="card">
                <h3><slot name="title">Default Title</slot></h3>
                <slot>Default content</slot>
            </div>
        `;
    }
}
customElements.define('styled-card', StyledCard);
</script>
<styled-card>
    <span slot="title">Custom Title</span>
    <p>Custom content goes here.</p>
</styled-card>
```

<h3>136. Use slot for content projection.</h3>

```html
<script>
class Layout extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                header { background: #f0f0f0; padding: 1rem; }
                main { padding: 1rem; }
                footer { background: #f0f0f0; padding: 1rem; text-align: center; }
            </style>
            <header><slot name="header">Default Header</slot></header>
            <main><slot>Main content</slot></main>
            <footer><slot name="footer">Default Footer</slot></footer>
        `;
    }
}
customElements.define('page-layout', Layout);
</script>
<page-layout>
    <h1 slot="header">My Site</h1>
    <p>Welcome to my page!</p>
    <p slot="footer">&copy; 2026</p>
</page-layout>
```

<h3>137. Create a template element for cloning.</h3>

```html
<template id="card-template">
    <style>
        .card { border: 1px solid #ddd; border-radius: 4px; padding: 1rem; margin: 0.5rem; }
    </style>
    <article class="card">
        <h3 class="title"></h3>
        <p class="description"></p>
        <button class="action">Action</button>
    </article>
</template>
<script>
const template = document.getElementById('card-template');
const data = [
    { title: 'Card 1', desc: 'Description 1' },
    { title: 'Card 2', desc: 'Description 2' }
];
data.forEach(item => {
    const clone = template.content.cloneNode(true);
    clone.querySelector('.title').textContent = item.title;
    clone.querySelector('.description').textContent = item.desc;
    document.body.appendChild(clone);
});
</script>
```

<h3>138. Build a reusable button component.</h3>

```html
<script>
class CustomButton extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                button { padding: 0.5rem 1rem; border: none; border-radius: 4px; cursor: pointer; }
                .primary { background: #007bff; color: white; }
                .secondary { background: #6c757d; color: white; }
                .danger { background: #dc3545; color: white; }
            </style>
            <button class="${this.getAttribute('variant') || 'primary'}">
                <slot>Button</slot>
            </button>
        `;
    }
}
customElements.define('custom-button', CustomButton);
</script>
<custom-button variant="primary">Primary</custom-button>
<custom-button variant="secondary">Secondary</custom-button>
<custom-button variant="danger">Delete</custom-button>
```

<h3>139. Create a custom form input component.</h3>

```html
<script>
class CustomInput extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                .input-wrapper { display: flex; flex-direction: column; gap: 0.25rem; }
                label { font-weight: bold; font-size: 0.875rem; }
                input { padding: 0.5rem; border: 1px solid #ccc; border-radius: 4px; }
                input:invalid { border-color: #dc3545; }
                .error { color: #dc3545; font-size: 0.75rem; }
            </style>
            <div class="input-wrapper">
                <label><slot name="label">Input</slot></label>
                <input type="${this.getAttribute('type') || 'text'}" 
                       placeholder="${this.getAttribute('placeholder') || ''}"
                       required="${this.hasAttribute('required')}">
                <span class="error"><slot name="error"></slot></span>
            </div>
        `;
    }
}
customElements.define('custom-input', CustomInput);
</script>
<form>
    <custom-input label="Email" type="email" placeholder="you@example.com" required>
        <span slot="error">Please enter a valid email</span>
    </custom-input>
    <custom-button variant="primary">Submit</custom-button>
</form>
```

<h3>140. Build a modal dialog web component.</h3>

```html
<script>
class ModalDialog extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                .backdrop { position: fixed; inset: 0; background: rgba(0,0,0,0.5); display: none; }
                .dialog { position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); background: white; padding: 2rem; border-radius: 8px; max-width: 90vw; }
                :host([open]) .backdrop { display: block; }
            </style>
            <div class="backdrop" @click="${() => this.removeAttribute('open')}"></div>
            <div class="dialog" role="dialog" aria-modal="true" aria-labelledby="title">
                <h2 id="title"><slot name="title">Dialog</slot></h2>
                <slot></slot>
                <div style="margin-top: 1rem; text-align: right;">
                    <button @click="${() => this.removeAttribute('open')}">Close</button>
                </div>
            </div>
        `;
    }
}
customElements.define('modal-dialog', ModalDialog);
</script>
<modal-dialog>
    <span slot="title">Confirm Delete</span>
    <p>Are you sure you want to delete this item?</p>
</modal-dialog>
<button onclick="document.querySelector('modal-dialog').setAttribute('open', '')">Open Modal</button>
```

### 21. Advanced HTML5 APIs

<h3>141. Use localStorage to persist form data.</h3>

```html
<form id="persistForm">
    <input type="text" name="name" placeholder="Name">
    <textarea name="message" placeholder="Message"></textarea>
    <button type="submit">Save</button>
</form>
<script>
const form = document.getElementById('persistForm');
form.addEventListener('input', () => {
    const data = Object.fromEntries(new FormData(form));
    localStorage.setItem('formData', JSON.stringify(data));
});
window.addEventListener('load', () => {
    const saved = localStorage.getItem('formData');
    if (saved) {
        const data = JSON.parse(saved);
        Object.keys(data).forEach(key => {
            form.elements[key].value = data[key];
        });
    }
});
</script>
```

<h3>142. Implement sessionStorage for temporary data.</h3>

```html
<script>
function saveToSession(key, value) {
    sessionStorage.setItem(key, JSON.stringify(value));
}
function getFromSession(key) {
    const item = sessionStorage.getItem(key);
    return item ? JSON.parse(item) : null;
}
const tempData = { step: 2, draft: 'Partial content...' };
saveToSession('wizardState', tempData);
console.log(getFromSession('wizardState'));
</script>
```

<h3>143. Use IndexedDB for client-side storage.</h3>

```html
<script>
const request = indexedDB.open('MyDatabase', 1);
request.onupgradeneeded = (event) => {
    const db = event.target.result;
    db.createObjectStore('users', { keyPath: 'id', autoIncrement: true });
};
request.onsuccess = (event) => {
    const db = event.target.result;
    const transaction = db.transaction(['users'], 'readwrite');
    const store = transaction.objectStore('users');
    store.add({ name: 'John', email: 'john@example.com' });
    store.getAll().onsuccess = (e) => console.log(e.target.result);
};
</script>
```

<h3>144. Implement Service Worker registration.</h3>

```html
<script>
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js')
        .then(reg => console.log('SW registered:', reg.scope))
        .catch(err => console.log('SW registration failed:', err));
}
</script>
```

<h3>145. Add Cache API for offline support.</h3>

```html
<script>
const CACHE_NAME = 'v1';
const urlsToCache = ['/', '/index.html', '/styles.css', '/app.js'];
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => cache.addAll(urlsToCache))
    );
});
self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => response || fetch(event.request))
    );
});
</script>
```

<h3>146. Use Geolocation API with fallback.</h3>

```html
<button onclick="getLocation()">Get Location</button>
<p id="location"></p>
<script>
function getLocation() {
    if (!navigator.geolocation) {
        document.getElementById('location').textContent = 'Geolocation not supported';
        return;
    }
    navigator.geolocation.getCurrentPosition(
        (pos) => document.getElementById('location').textContent = `Lat: ${pos.coords.latitude}, Lon: ${pos.coords.longitude}`,
        (err) => document.getElementById('location').textContent = `Error: ${err.message}`,
        { enableHighAccuracy: true, timeout: 5000, maximumAge: 0 }
    );
}
</script>
```

<h3>147. Implement Drag and Drop API.</h3>

```html
<div id="dropZone" style="border: 2px dashed #ccc; padding: 2rem; text-align: center;">
    Drop files here
</div>
<script>
const dropZone = document.getElementById('dropZone');
['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
    dropZone.addEventListener(eventName, (e) => { e.preventDefault(); e.stopPropagation(); });
});
['dragenter', 'dragover'].forEach(eventName => {
    dropZone.addEventListener(eventName, () => dropZone.style.borderColor = '#007bff');
});
['dragleave', 'drop'].forEach(eventName => {
    dropZone.addEventListener(eventName, () => dropZone.style.borderColor = '#ccc');
});
dropZone.addEventListener('drop', (e) => {
    const files = e.dataTransfer.files;
    Array.from(files).forEach(file => console.log(file.name, file.type, file.size));
});
</script>
```

<h3>148. Use File API for file handling.</h3>

```html
<input type="file" id="fileInput" multiple accept="image/*">
<div id="previews"></div>
<script>
document.getElementById('fileInput').addEventListener('change', (e) => {
    const previews = document.getElementById('previews');
    Array.from(e.target.files).forEach(file => {
        if (file.type.startsWith('image/')) {
            const reader = new FileReader();
            reader.onload = (e) => {
                const img = document.createElement('img');
                img.src = e.target.result;
                img.style.maxWidth = '100px';
                previews.appendChild(img);
            };
            reader.readAsDataURL(file);
        }
    });
});
</script>
```

<h3>149. Implement Web Share API.</h3>

```html
<button onclick="shareContent()">Share This Page</button>
<script>
async function shareContent() {
    if (navigator.share) {
        try {
            await navigator.share({
                title: document.title,
                text: 'Check out this page!',
                url: window.location.href
            });
            console.log('Shared successfully');
        } catch (err) {
            console.log('Share cancelled:', err.message);
        }
    } else {
        alert('Web Share API not supported');
    }
}
</script>
```

<h3>150. Use IntersectionObserver for lazy loading.</h3>

```html
<img data-src="image1.jpg" alt="Image 1" class="lazy">
<img data-src="image2.jpg" alt="Image 2" class="lazy">
<img data-src="image3.jpg" alt="Image 3" class="lazy">
<script>
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src;
            img.classList.remove('lazy');
            observer.unobserve(img);
        }
    });
}, { rootMargin: '50px' });
document.querySelectorAll('.lazy').forEach(img => observer.observe(img));
</script>
```

---

> ## 🔴 Level 4: Expert (151 - 200)

### 22. Progressive Web Apps (PWA)

<h3>151. Create a Web App Manifest file.</h3>

```json
{
    "name": "My Progressive Web App",
    "short_name": "MyPWA",
    "description": "A sample Progressive Web App",
    "start_url": "/",
    "display": "standalone",
    "background_color": "#ffffff",
    "theme_color": "#317EFB",
    "icons": [
        {
            "src": "/icons/icon-192.png",
            "sizes": "192x192",
            "type": "image/png",
            "purpose": "any maskable"
        },
        {
            "src": "/icons/icon-512.png",
            "sizes": "512x512",
            "type": "image/png",
            "purpose": "any maskable"
        }
    ],
    "categories": ["productivity", "utilities"],
    "screenshots": [],
    "shortcuts": [
        {
            "name": "New Task",
            "short_name": "New",
            "description": "Create a new task",
            "url": "/new",
            "icons": [{ "src": "/icons/new.png", "sizes": "192x192" }]
        }
    ]
}
```

<h3>152. Add manifest link to HTML head.</h3>

```html
<head>
    <link rel="manifest" href="/manifest.json">
    <meta name="theme-color" content="#317EFB">
    <link rel="apple-touch-icon" href="/icons/icon-192.png">
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-status-bar-style" content="default">
    <meta name="apple-mobile-web-app-title" content="MyPWA">
</head>
```

<h3>153. Configure service worker for offline caching.</h3>

```javascript
// sw.js
const CACHE_NAME = 'pwa-v1';
const STATIC_ASSETS = ['/', '/index.html', '/styles.css', '/app.js', '/manifest.json'];
self.addEventListener('install', (event) => {
    event.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(STATIC_ASSETS)));
    self.skipWaiting();
});
self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((keys) => Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k))))
    );
    self.clients.claim();
});
self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((cached) => cached || fetch(event.request).then((response) => {
            if (response.ok) {
                const clone = response.clone();
                caches.open(CACHE_NAME).then((cache) => cache.put(event.request, clone));
            }
            return response;
        }))
    );
});
```

<h3>154. Implement install prompt handling.</h3>

```html
<script>
let deferredPrompt;
window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e;
    document.getElementById('installBtn').style.display = 'block';
});
document.getElementById('installBtn').addEventListener('click', async () => {
    if (deferredPrompt) {
        deferredPrompt.prompt();
        const { outcome } = await deferredPrompt.userChoice;
        console.log(`User ${outcome} the install prompt`);
        deferredPrompt = null;
        document.getElementById('installBtn').style.display = 'none';
    }
});
</script>
<button id="installBtn" style="display: none;">Install App</button>
```

<h3>155. Add background sync for form submissions.</h3>

```javascript
// In service worker
self.addEventListener('sync', (event) => {
    if (event.tag === 'form-submit') {
        event.waitUntil(submitForms());
    }
});
async function submitForms() {
    const cache = await caches.open('form-submissions');
    const requests = await cache.keys();
    for (const request of requests) {
        try {
            await fetch(request);
            await cache.delete(request);
        } catch (err) {
            console.log('Retry later:', err);
        }
    }
}
// In main thread
navigator.serviceWorker.ready.then((reg) => {
    document.querySelector('form').addEventListener('submit', async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const request = new Request('/api/submit', { method: 'POST', body: formData });
        const cache = await caches.open('form-submissions');
        await cache.put(request, new Response(JSON.stringify(Object.fromEntries(formData))));
        await reg.sync.register('form-submit');
    });
});
```

<h3>156. Implement push notifications setup.</h3>

```javascript
// In service worker
self.addEventListener('push', (event) => {
    const data = event.data ? event.data.json() : { title: 'Notification', body: 'New update!' };
    event.waitUntil(
        self.registration.showNotification(data.title, {
            body: data.body,
            icon: '/icons/icon-192.png',
            badge: '/icons/badge.png',
            data: { url: data.url || '/' }
        })
    );
});
self.addEventListener('notificationclick', (event) => {
    event.notification.close();
    event.waitUntil(clients.openWindow(event.notification.data.url));
});
// In main thread
async function subscribeToPush() {
    const reg = await navigator.serviceWorker.ready;
    const subscription = await reg.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey: urlBase64ToUint8Array('YOUR_VAPID_PUBLIC_KEY')
    });
    await fetch('/api/push/subscribe', { method: 'POST', body: JSON.stringify(subscription) });
}
```

<h3>157. Create offline fallback page.</h3>

```html
<!-- offline.html -->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Offline - My App</title>
    <style>
        body { font-family: sans-serif; text-align: center; padding: 2rem; }
        .offline-icon { font-size: 4rem; margin-bottom: 1rem; }
    </style>
</head>
<body>
    <div class="offline-icon">📡</div>
    <h1>You're Offline</h1>
    <p>Check your connection and try again.</p>
    <button onclick="window.location.reload()">Retry</button>
</body>
</html>
```

```javascript
// In service worker fetch handler
self.addEventListener('fetch', (event) => {
    event.respondWith(
        fetch(event.request).catch(() => caches.match(event.request)).then((response) => {
            return response || caches.match('/offline.html');
        })
    );
});
```

<h3>158. Add app shortcuts in manifest.</h3>

```json
{
    "shortcuts": [
        {
            "name": "New Document",
            "short_name": "New",
            "description": "Create a new document",
            "url": "/new",
            "icons": [{ "src": "/icons/new.png", "sizes": "192x192" }]
        },
        {
            "name": "Recent Files",
            "short_name": "Recent",
            "description": "View recent files",
            "url": "/recent",
            "icons": [{ "src": "/icons/recent.png", "sizes": "192x192" }]
        },
        {
            "name": "Settings",
            "short_name": "Settings",
            "description": "Open settings",
            "url": "/settings",
            "icons": [{ "src": "/icons/settings.png", "sizes": "192x192" }]
        }
    ]
}
```

<h3>159. Configure splash screens for iOS.</h3>

```html
<head>
    <link rel="apple-touch-startup-image" href="/splash-640x1136.png" media="(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2)">
    <link rel="apple-touch-startup-image" href="/splash-750x1334.png" media="(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2)">
    <link rel="apple-touch-startup-image" href="/splash-1242x2208.png" media="(device-width: 621px) and (device-height: 1104px) and (-webkit-device-pixel-ratio: 3)">
    <link rel="apple-touch-startup-image" href="/splash-1125x2436.png" media="(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3)">
    <link rel="apple-touch-startup-image" href="/splash-828x1792.png" media="(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2)">
    <link rel="apple-touch-startup-image" href="/splash-1242x2688.png" media="(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3)">
    <link rel="apple-touch-startup-image" href="/splash-1536x2048.png" media="(device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2)">
    <link rel="apple-touch-startup-image" href="/splash-1668x2224.png" media="(device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2)">
    <link rel="apple-touch-startup-image" href="/splash-1668x2388.png" media="(device-width: 834px) and (device-height: 1194px) and (-webkit-device-pixel-ratio: 2)">
    <link rel="apple-touch-startup-image" href="/splash-2048x2732.png" media="(device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2)">
</head>
```

<h3>160. Implement periodic background sync.</h3>

```javascript
// In service worker
self.addEventListener('periodicsync', (event) => {
    if (event.tag === 'content-sync') {
        event.waitUntil(syncContent());
    }
});
async function syncContent() {
    const cache = await caches.open('content');
    const response = await fetch('/api/content');
    if (response.ok) {
        await cache.put('/api/content', response);
    }
}
// In main thread
async function registerPeriodicSync() {
    const reg = await navigator.serviceWorker.ready;
    try {
        await reg.periodicSync.register('content-sync', { minInterval: 24 * 60 * 60 * 1000 });
        console.log('Periodic sync registered');
    } catch (err) {
        console.log('Periodic sync not supported:', err);
    }
}
```

### 23. Internationalization (i18n)

<h3>161. Set lang attribute with region code.</h3>

```html
<html lang="en-US">
<html lang="es-ES">
<html lang="zh-CN">
<html lang="ar-SA">
```

<h3>162. Add dir="rtl" for RTL languages.</h3>

```html
<html lang="ar" dir="rtl">
<head>
    <meta charset="UTF-8">
    <title>مرحبا بالعالم</title>
</head>
<body>
    <p>هذا نص باللغة العربية</p>
</body>
</html>
```

<h3>163. Use bdi for bidirectional text isolation.</h3>

```html
<ul>
    <li>User <bdi>John Doe</bdi>: 5 posts</li>
    <li>User <bdi>محمد علي</bdi>: 3 posts</li>
    <li>User <bdi>李明</bdi>: 7 posts</li>
</ul>
```

<h3>164. Implement bdo for text direction override.</h3>

```html
<p>Normal: Hello World</p>
<p><bdo dir="rtl">Overridden: Hello World</bdo></p>
<p><bdo dir="ltr">Forced LTR: مرحبا</bdo></p>
```

<h3>165. Add translate="no" for brand names.</h3>

```html
<p>Welcome to <span translate="no">Google</span> and <span translate="no">GitHub</span>!</p>
<p>Our product <span translate="no">iPhone</span> is amazing.</p>
```

<h3>166. Use data-* attributes for localized content.</h3>

```html
<article data-i18n-key="welcome">
    <h1 data-i18n="title">Welcome</h1>
    <p data-i18n="description">This is a localized page.</p>
</article>
<script>
const translations = {
    en: { title: 'Welcome', description: 'This is a localized page.' },
    es: { title: 'Bienvenido', description: 'Esta es una página localizada.' },
    fr: { title: 'Bienvenue', description: 'Ceci est une page localisée.' }
};
function applyTranslations(lang) {
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.dataset.i18n;
        if (translations[lang]?.[key]) el.textContent = translations[lang][key];
    });
}
</script>
```

<h3>167. Create language switcher navigation.</h3>

```html
<nav aria-label="Language selection">
    <ul>
        <li><a href="?lang=en" hreflang="en" lang="en">English</a></li>
        <li><a href="?lang=es" hreflang="es" lang="es">Español</a></li>
        <li><a href="?lang=fr" hreflang="fr" lang="fr">Français</a></li>
        <li><a href="?lang=de" hreflang="de" lang="de">Deutsch</a></li>
        <li><a href="?lang=ja" hreflang="ja" lang="ja">日本語</a></li>
        <li><a href="?lang=ar" hreflang="ar" lang="ar" dir="rtl">العربية</a></li>
    </ul>
</nav>
```

<h3>168. Implement hreflang annotations.</h3>

```html
<head>
    <link rel="alternate" hreflang="en" href="https://example.com/en/">
    <link rel="alternate" hreflang="es" href="https://example.com/es/">
    <link rel="alternate" hreflang="fr" href="https://example.com/fr/">
    <link rel="alternate" hreflang="de" href="https://example.com/de/">
    <link rel="alternate" hreflang="x-default" href="https://example.com/">
</head>
```

<h3>169. Use time element with datetime for dates.</h3>

```html
<time datetime="2026-01-15T10:30:00-05:00">January 15, 2026, 10:30 AM EST</time>
<time datetime="2026-01-15">2026-01-15</time>
<time datetime="PT2H30M">2 hours 30 minutes</time>
<time datetime="P3D">3 days</time>
```

<h3>170. Format numbers with locale-aware output.</h3>

```html
<script>
const number = 1234567.89;
console.log(new Intl.NumberFormat('en-US').format(number)); // 1,234,567.89
console.log(new Intl.NumberFormat('de-DE').format(number)); // 1.234.567,89
console.log(new Intl.NumberFormat('ja-JP').format(number)); // 1,234,567.89
console.log(new Intl.NumberFormat('ar-EG').format(number)); // ١٬٢٣٤٬٥٦٧٫٨٩
console.log(new Intl.NumberFormat('zh-CN', { style: 'currency', currency: 'CNY' }).format(number)); // ¥1,234,567.89
</script>
```

### 24. Security & Privacy

<h3>171. Add Content Security Policy meta tag.</h3>

```html
<head>
    <meta http-equiv="Content-Security-Policy" content="
        default-src 'self';
        script-src 'self' 'unsafe-inline' https://cdn.jsdelivr.net;
        style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
        font-src 'self' https://fonts.gstatic.com;
        img-src 'self' data: https:;
        connect-src 'self' https://api.example.com;
        frame-ancestors 'none';
        base-uri 'self';
        form-action 'self';
    ">
</head>
```

<h3>172. Implement Referrer-Policy header.</h3>

```html
<head>
    <meta name="referrer" content="strict-origin-when-cross-origin">
    <!-- Or via HTTP header: Referrer-Policy: strict-origin-when-cross-origin -->
</head>
```

<h3>173. Add Cross-Origin-Opener-Policy.</h3>

```html
<head>
    <meta http-equiv="Cross-Origin-Opener-Policy" content="same-origin">
    <!-- Or: same-origin-allow-popups, unsafe-none -->
</head>
```

<h3>174. Use Cross-Origin-Embedder-Policy.</h3>

```html
<head>
    <meta http-equiv="Cross-Origin-Embedder-Policy" content="require-corp">
    <!-- Requires cross-origin resources to have CORP or CORS headers -->
</head>
```

<h3>175. Implement Permissions-Policy header.</h3>

```html
<head>
    <meta http-equiv="Permissions-Policy" content="
        accelerometer=(),
        camera=(),
        geolocation=(self),
        gyroscope=(),
        magnetometer=(),
        microphone=(),
        payment=(),
        usb=(),
        interest-cohort=()
    ">
</head>
```

<h3>176. Add nonce to inline scripts.</h3>

```html
<head>
    <script nonce="r4nd0mN0nc3V4lu3">
        // Inline script with nonce
        console.log('This script runs because nonce matches CSP');
    </script>
</head>
```
```html
<!-- CSP must include: script-src 'nonce-r4nd0mN0nc3V4lu3' -->
```

<h3>177. Use integrity attribute for external scripts.</h3>

```html
<script src="https://cdn.jsdelivr.net/npm/jquery@3.7.1/dist/jquery.min.js"
        integrity="sha256-/JqT3SQfawRcv/BIHPThkBvs0OEvtFFmqPF/lYI/Cxo="
        crossorigin="anonymous"></script>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
      integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM"
      crossorigin="anonymous">
```

<h3>178. Implement Trusted Types policy.</h3>

```html
<script>
if (window.trustedTypes && trustedTypes.createPolicy) {
    const policy = trustedTypes.createPolicy('default', {
        createHTML: (string) => DOMPurify.sanitize(string, { RETURN_TRUSTED_TYPE: true }),
        createScript: (string) => string,
        createScriptURL: (string) => string
    });
}
</script>
<meta http-equiv="Content-Security-Policy" content="trusted-types default; require-trusted-types-for 'script'">
```

<h3>179. Add sandbox to untrusted iframes.</h3>

```html
<!-- Restricted iframe - no scripts, no forms, no popups -->
<iframe src="https://untrusted.example.com" sandbox></iframe>

<!-- Allow scripts and same-origin -->
<iframe src="https://trusted.example.com" sandbox="allow-scripts allow-same-origin"></iframe>

<!-- Allow forms and popups -->
<iframe src="https://form.example.com" sandbox="allow-forms allow-popups allow-scripts"></iframe>
```

<h3>180. Use rel="noopener noreferrer" for external links.</h3>

```html
<a href="https://external.com" target="_blank" rel="noopener noreferrer">External Link</a>
<a href="https://another.com" target="_blank" rel="noopener">Opener only</a>
<a href="https://third.com" target="_blank" rel="noreferrer">Referrer only</a>
```

### 25. Advanced Semantics & Microdata

<h3>181. Add microdata for Person schema.</h3>

```html
<div itemscope itemtype="https://schema.org/Person">
    <h1 itemprop="name">John Doe</h1>
    <img itemprop="image" src="john.jpg" alt="John Doe">
    <p>Job: <span itemprop="jobTitle">Software Engineer</span></p>
    <p>Company: <span itemprop="worksFor" itemscope itemtype="https://schema.org/Organization">
        <span itemprop="name">Tech Corp</span>
    </span></p>
    <p>Email: <a itemprop="email" href="mailto:john@example.com">john@example.com</a></p>
    <p>Phone: <span itemprop="telephone">+1-555-123-4567</span></p>
    <link itemprop="url" href="https://johndoe.example.com">
</div>
```

<h3>182. Implement microdata for Organization.</h3>

```html
<div itemscope itemtype="https://schema.org/Organization">
    <h1 itemprop="name">Tech Corporation</h1>
    <img itemprop="logo" src="logo.png" alt="Tech Corp Logo">
    <p itemprop="description">Leading technology solutions provider.</p>
    <div itemprop="address" itemscope itemtype="https://schema.org/PostalAddress">
        <span itemprop="streetAddress">123 Tech Street</span>
        <span itemprop="addressLocality">San Francisco</span>
        <span itemprop="addressRegion">CA</span>
        <span itemprop="postalCode">94105</span>
        <span itemprop="addressCountry">USA</span>
    </div>
    <p>Phone: <span itemprop="telephone">+1-555-0123</span></p>
    <link itemprop="url" href="https://techcorp.example.com">
    <link itemprop="sameAs" href="https://twitter.com/techcorp">
    <link itemprop="sameAs" href="https://linkedin.com/company/techcorp">
</div>
```

<h3>183. Add microdata for Event schema.</h3>

```html
<div itemscope itemtype="https://schema.org/Event">
    <h2 itemprop="name">Web Development Conference 2026</h2>
    <meta itemprop="eventStatus" content="https://schema.org/EventScheduled">
    <time itemprop="startDate" datetime="2026-06-15T09:00">June 15, 2026, 9:00 AM</time>
    <time itemprop="endDate" datetime="2026-06-17T18:00">June 17, 2026, 6:00 PM</time>
    <div itemprop="location" itemscope itemtype="https://schema.org/Place">
        <span itemprop="name">Convention Center</span>
        <div itemprop="address" itemscope itemtype="https://schema.org/PostalAddress">
            <span itemprop="streetAddress">100 Main St</span>
            <span itemprop="addressLocality">New York</span>
            <span itemprop="addressRegion">NY</span>
            <span itemprop="postalCode">10001</span>
            <span itemprop="addressCountry">USA</span>
        </div>
    </div>
    <p itemprop="description">Three days of web development talks and workshops.</p>
    <link itemprop="url" href="https://webconf2026.example.com">
    <div itemprop="offers" itemscope itemtype="https://schema.org/Offer">
        <meta itemprop="price" content="299">
        <meta itemprop="priceCurrency" content="USD">
        <link itemprop="availability" href="https://schema.org/InStock">
        <a itemprop="url" href="https://webconf2026.example.com/tickets">Buy Tickets</a>
    </div>
</div>
```

<h3>184. Create microdata for Review/Rating.</h3>

```html
<div itemscope itemtype="https://schema.org/Review">
    <div itemprop="itemReviewed" itemscope itemtype="https://schema.org/Product">
        <span itemprop="name">Amazing Web Framework</span>
    </div>
    <meta itemprop="reviewRating" content="5" itemtype="https://schema.org/Rating">
    <meta itemprop="ratingValue" content="5">
    <meta itemprop="bestRating" content="5">
    <meta itemprop="worstRating" content="1">
    <p itemprop="reviewBody">This framework changed how I build web apps!</p>
    <p>By <span itemprop="author" itemscope itemtype="https://schema.org/Person">
        <span itemprop="name">Jane Smith</span>
    </span> on <time itemprop="datePublished" datetime="2026-01-15">January 15, 2026</time></p>
</div>
```

<h3>185. Implement microdata for FAQPage.</h3>

```html
<div itemscope itemtype="https://schema.org/FAQPage">
    <div itemprop="mainEntity" itemscope itemtype="https://schema.org/Question">
        <h3 itemprop="name">What is HTML?</h3>
        <div itemprop="acceptedAnswer" itemscope itemtype="https://schema.org/Answer">
            <p itemprop="text">HTML (HyperText Markup Language) is the standard markup language for creating web pages.</p>
        </div>
    </div>
    <div itemprop="mainEntity" itemscope itemtype="https://schema.org/Question">
        <h3 itemprop="name">What is CSS?</h3>
        <div itemprop="acceptedAnswer" itemscope itemtype="https://schema.org/Answer">
            <p itemprop="text">CSS (Cascading Style Sheets) is a stylesheet language used to describe the presentation of HTML documents.</p>
        </div>
    </div>
</div>
```

<h3>186. Add microdata for HowTo schema.</h3>

```html
<div itemscope itemtype="https://schema.org/HowTo">
    <h1 itemprop="name">How to Create a Basic HTML Page</h1>
    <p itemprop="description">Learn to create your first HTML document.</p>
    <meta itemprop="totalTime" content="PT10M">
    <div itemprop="step" itemscope itemtype="https://schema.org/HowToStep">
        <h3 itemprop="name">Create the file</h3>
        <p itemprop="text">Create a new file named index.html in your code editor.</p>
    </div>
    <div itemprop="step" itemscope itemtype="https://schema.org/HowToStep">
        <h3 itemprop="name">Add HTML structure</h3>
        <p itemprop="text">Add the basic HTML5 structure with doctype, html, head, and body tags.</p>
    </div>
    <div itemprop="step" itemscope itemtype="https://schema.org/HowToStep">
        <h3 itemprop="name">Save and open</h3>
        <p itemprop="text">Save the file and open it in a web browser.</p>
    </div>
</div>
```

<h3>187. Create microdata for Recipe schema.</h3>

```html
<div itemscope itemtype="https://schema.org/Recipe">
    <h1 itemprop="name">Chocolate Chip Cookies</h1>
    <img itemprop="image" src="cookies.jpg" alt="Chocolate chip cookies">
    <p itemprop="description">Classic homemade chocolate chip cookies.</p>
    <meta itemprop="prepTime" content="PT15M">
    <meta itemprop="cookTime" content="PT10M">
    <meta itemprop="totalTime" content="PT25M">
    <meta itemprop="recipeYield" content="24 cookies">
    <meta itemprop="recipeCategory" content="Dessert">
    <meta itemprop="recipeCuisine" content="American">
    <div itemprop="nutrition" itemscope itemtype="https://schema.org/NutritionInformation">
        <meta itemprop="calories" content="150">
        <meta itemprop="fatContent" content="7g">
        <meta itemprop="carbohydrateContent" content="20g">
        <meta itemprop="proteinContent" content="2g">
    </div>
    <h3>Ingredients</h3>
    <ul>
        <li itemprop="recipeIngredient">2 1/4 cups flour</li>
        <li itemprop="recipeIngredient">1 tsp baking soda</li>
        <li itemprop="recipeIngredient">1 tsp salt</li>
        <li itemprop="recipeIngredient">1 cup butter</li>
        <li itemprop="recipeIngredient">3/4 cup sugar</li>
        <li itemprop="recipeIngredient">3/4 cup brown sugar</li>
        <li itemprop="recipeIngredient">2 eggs</li>
        <li itemprop="recipeIngredient">2 tsp vanilla</li>
        <li itemprop="recipeIngredient">2 cups chocolate chips</li>
    </ul>
    <h3>Instructions</h3>
    <ol>
        <li itemprop="recipeInstructions">Preheat oven to 375°F.</li>
        <li itemprop="recipeInstructions">Mix flour, baking soda, and salt.</li>
        <li itemprop="recipeInstructions">Cream butter and sugars, add eggs and vanilla.</li>
        <li itemprop="recipeInstructions">Combine wet and dry ingredients, stir in chips.</li>
        <li itemprop="recipeInstructions">Drop tablespoons onto baking sheet.</li>
        <li itemprop="recipeInstructions">Bake 9-11 minutes until golden.</li>
    </ol>
</div>
```

<h3>188. Implement microdata for VideoObject.</h3>

```html
<div itemscope itemtype="https://schema.org/VideoObject">
    <h2 itemprop="name">Introduction to HTML5</h2>
    <meta itemprop="description" content="Learn the basics of HTML5 in this tutorial.">
    <meta itemprop="duration" content="PT15M30S">
    <meta itemprop="uploadDate" content="2026-01-15T10:00:00Z">
    <meta itemprop="contentUrl" content="https://example.com/video/html5-intro.mp4">
    <meta itemprop="embedUrl" content="https://example.com/embed/html5-intro">
    <img itemprop="thumbnailUrl" src="thumbnail.jpg" alt="Video thumbnail">
    <div itemprop="author" itemscope itemtype="https://schema.org/Person">
        <span itemprop="name">Jane Developer</span>
    </div>
    <div itemprop="publisher" itemscope itemtype="https://schema.org/Organization">
        <span itemprop="name">WebDev Academy</span>
    </div>
</div>
```

<h3>189. Add microdata for Course schema.</h3>

```html
<div itemscope itemtype="https://schema.org/Course">
    <h1 itemprop="name">Complete Web Development Bootcamp</h1>
    <p itemprop="description">Learn HTML, CSS, JavaScript, React, Node.js and more.</p>
    <div itemprop="provider" itemscope itemtype="https://schema.org/Organization">
        <span itemprop="name">Code Academy</span>
    </div>
    <meta itemprop="educationalLevel" content="Beginner to Advanced">
    <meta itemprop="timeRequired" content="P40H">
    <div itemprop="hasCourseInstance" itemscope itemtype="https://schema.org/CourseInstance">
        <meta itemprop="courseMode" content="Online">
        <meta itemprop="courseWorkload" content="P40H">
        <div itemprop="offers" itemscope itemtype="https://schema.org/Offer">
            <meta itemprop="price" content="99">
            <meta itemprop="priceCurrency" content="USD">
            <link itemprop="availability" href="https://schema.org/InStock">
        </div>
    </div>
</div>
```

<h3>190. Create microdata for JobPosting.</h3>

```html
<div itemscope itemtype="https://schema.org/JobPosting">
    <h1 itemprop="title">Senior Frontend Developer</h1>
    <div itemprop="hiringOrganization" itemscope itemtype="https://schema.org/Organization">
        <span itemprop="name">Tech Solutions Inc.</span>
        <link itemprop="sameAs" href="https://techsolutions.example.com">
    </div>
    <div itemprop="jobLocation" itemscope itemtype="https://schema.org/Place">
        <div itemprop="address" itemscope itemtype="https://schema.org/PostalAddress">
            <span itemprop="streetAddress">456 Innovation Dr</span>
            <span itemprop="addressLocality">Seattle</span>
            <span itemprop="addressRegion">WA</span>
            <span itemprop="postalCode">98101</span>
            <span itemprop="addressCountry">USA</span>
        </div>
    </div>
    <meta itemprop="employmentType" content="FULL_TIME">
    <meta itemprop="workHours" content="40">
    <meta itemprop="baseSalary" content="120000" itemtype="https://schema.org/MonetaryAmount">
    <meta itemprop="salaryCurrency" content="USD">
    <meta itemprop="datePosted" content="2026-01-15">
    <meta itemprop="validThrough" content="2026-03-15">
    <p itemprop="description">We are looking for a Senior Frontend Developer...</p>
    <p itemprop="qualifications">5+ years React, TypeScript, GraphQL experience.</p>
    <p itemprop="responsibilities">Lead frontend architecture, mentor junior developers.</p>
</div>
```

### 26. Modern HTML & Emerging Features

<h3>191. Use popover attribute for tooltips.</h3>

```html
<button popovertarget="tooltip1">Hover for tooltip</button>
<div id="tooltip1" popover role="tooltip">
    <p>This is a popover tooltip!</p>
</div>
```

<h3>192. Implement dialog with showModal().</h3>

```html
<dialog id="modal">
    <h2>Confirm Action</h2>
    <p>Are you sure you want to proceed?</p>
    <menu>
        <button value="cancel" onclick="document.getElementById('modal').close()">Cancel</button>
        <button value="confirm" onclick="document.getElementById('modal').close('confirmed')">Confirm</button>
    </menu>
</dialog>
<button onclick="document.getElementById('modal').showModal()">Open Modal</button>
<script>
document.getElementById('modal').addEventListener('close', (e) => {
    console.log('Dialog closed with:', e.target.returnValue);
});
</script>
```

<h3>193. Use inert attribute for disabled sections.</h3>

```html
<form>
    <fieldset>
        <legend>Active Section</legend>
        <input type="text" placeholder="This works">
    </fieldset>
    <fieldset inert>
        <legend>Disabled Section</legend>
        <input type="text" placeholder="This is inert">
        <button>This button is inert</button>
    </fieldset>
</form>
```

<h3>194. Implement anchor positioning API.</h3>

```html
<style>
    .anchor { anchor-name: --my-anchor; }
    .floating {
        position: absolute;
        top: anchor(--my-anchor bottom);
        left: anchor(--my-anchor center);
        transform: translateX(-50%);
    }
</style>
<button class="anchor">Anchor Button</button>
<div class="floating" popover>Floating content anchored to button</div>
```

<h3>195. Use CSS custom properties in HTML style.</h3>

```html
<div style="--primary-color: #317EFB; --spacing: 1rem;">
    <h1 style="color: var(--primary-color);">Custom Properties</h1>
    <p style="padding: var(--spacing);">Using CSS variables directly in style attribute.</p>
    <button style="background: var(--primary-color); padding: var(--spacing);">Button</button>
</div>
```

<h3>196. Implement view transitions API.</h3>

```html
<script>
if (document.startViewTransition) {
    document.querySelectorAll('nav a').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            document.startViewTransition(() => {
                window.location.href = link.href;
            });
        });
    });
}
</script>
<style>
@view-transition {
    navigation: auto;
}
::view-transition-old(root),
::view-transition-new(root) {
    animation-duration: 0.3s;
}
</style>
```

<h3>197. Use scroll-driven animations.</h3>

```html
<style>
@keyframes fadeIn {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
}
.animated {
    animation: fadeIn linear;
    animation-timeline: scroll();
    animation-range: entry 0% cover 50%;
}
</style>
<div class="animated">This fades in as you scroll</div>
<div class="animated">This also fades in</div>
<div class="animated">And this one too</div>
```

<h3>198. Implement declarative shadow DOM.</h3>

```html
<template shadowrootmode="open">
    <style>
        :host { display: block; border: 1px solid #ccc; padding: 1rem; }
        h3 { margin-top: 0; color: #317EFB; }
    </style>
    <h3><slot name="title">Declarative Shadow DOM</slot></h3>
    <slot>Default content</slot>
</template>
<my-component>
    <span slot="title">Custom Title</span>
    <p>Content projected into shadow DOM.</p>
</my-component>
```

<h3>199. Use HTML imports (deprecated) vs ES modules.</h3>

```html
<!-- Deprecated HTML Imports (do not use) -->
<!-- <link rel="import" href="component.html"> -->

<!-- Modern ES Modules -->
<script type="module">
    import { MyComponent } from './components/MyComponent.js';
    import { utils } from './utils/helpers.js';
    
    customElements.define('my-component', MyComponent);
    console.log(utils.formatDate(new Date()));
</script>

<!-- Module preloading for performance -->
<link rel="modulepreload" href="./components/MyComponent.js">
<link rel="modulepreload" href="./utils/helpers.js">
```

<h3>200. Create a complete accessible, performant, PWA-ready page template.</h3>

```html
<!DOCTYPE html>
<html lang="en" dir="ltr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="theme-color" content="#317EFB">
    <meta name="description" content="A complete, accessible, performant, PWA-ready HTML template.">
    <title>PWA-Ready Template</title>
    
    <!-- PWA Manifest -->
    <link rel="manifest" href="/manifest.json">
    <link rel="apple-touch-icon" href="/icons/icon-192.png">
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-status-bar-style" content="default">
    <meta name="apple-mobile-web-app-title" content="PWA Template">
    
    <!-- SEO & Social -->
    <meta property="og:title" content="PWA-Ready Template">
    <meta property="og:description" content="A complete, accessible, performant, PWA-ready HTML template.">
    <meta property="og:type" content="website">
    <meta property="og:image" content="/og-image.jpg">
    <meta name="twitter:card" content="summary_large_image">
    
    <!-- Performance Hints -->
    <link rel="preconnect" href="https://fonts.googleapis.com" crossorigin>
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link rel="dns-prefetch" href="//cdn.example.com">
    <link rel="preload" href="/fonts/inter-var.woff2" as="font" type="font/woff2" crossorigin>
    <link rel="preload" href="/css/critical.css" as="style" onload="this.onload=null;this.rel='stylesheet'">
    <noscript><link rel="stylesheet" href="/css/critical.css"></noscript>
    <link rel="modulepreload" href="/js/main.js">
    
    <!-- Security -->
    <meta http-equiv="Content-Security-Policy" content="default-src 'self'; script-src 'self'; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https:; connect-src 'self' https://api.example.com;">
    <meta http-equiv="Cross-Origin-Opener-Policy" content="same-origin">
    <meta http-equiv="Cross-Origin-Embedder-Policy" content="require-corp">
    <meta http-equiv="Permissions-Policy" content="camera=(), microphone=(), geolocation=(self)">
    
    <!-- Critical CSS Inlined -->
    <style>
        *, *::before, *::after { box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        body { margin: 0; font-family: system-ui, sans-serif; line-height: 1.6; }
        .skip-link { position: absolute; top: -100%; left: 50%; transform: translateX(-50%); padding: 1rem; background: #317EFB; color: white; z-index: 1000; }
        .skip-link:focus { top: 0; }
        header, main, footer { max-width: 1200px; margin: 0 auto; padding: 1rem; }
        .visually-hidden { position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px; overflow: hidden; clip: rect(0,0,0,0); white-space: nowrap; border: 0; }
    </style>
    
    <!-- JSON-LD Structured Data -->
    <script type="application/ld+json">
    {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": "PWA Template",
        "url": "https://example.com/",
        "potentialAction": {
            "@type": "SearchAction",
            "target": "https://example.com/search?q={search_term_string}",
            "query-input": "required name=search_term_string"
        }
    }
    </script>
</head>
<body>
    <a href="#main-content" class="skip-link">Skip to main content</a>
    
    <header role="banner">
        <nav aria-label="Main navigation">
            <ul style="display: flex; gap: 1rem; list-style: none; padding: 0;">
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/services">Services</a></li>
                <li><a href="/contact">Contact</a></li>
            </ul>
        </nav>
    </header>
    
    <main id="main-content" role="main">
        <section aria-labelledby="hero-title">
            <h1 id="hero-title">Welcome to PWA-Ready Template</h1>
            <p>This template includes accessibility, performance, PWA, SEO, and security best practices.</p>
            <button id="installBtn" style="display: none;">Install App</button>
        </section>
        
        <section aria-labelledby="features-title">
            <h2 id="features-title">Features</h2>
            <ul>
                <li>✅ Semantic HTML5 structure</li>
                <li>✅ WCAG 2.1 AA accessible</li>
                <li>✅ Core Web Vitals optimized</li>
                <li>✅ PWA with offline support</li>
                <li>✅ SEO & structured data ready</li>
                <li>✅ Security headers configured</li>
                <li>✅ Internationalization support</li>
                <li>✅ Modern HTML features</li>
            </ul>
        </section>
    </main>
    
    <footer role="contentinfo">
        <p>&copy; 2026 PWA Template. Built with modern web standards.</p>
        <nav aria-label="Footer navigation">
            <a href="/privacy">Privacy</a> | <a href="/terms">Terms</a> | <a href="/accessibility">Accessibility</a>
        </nav>
    </footer>
    
    <!-- Service Worker Registration -->
    <script>
    if ('serviceWorker' in navigator) {
        window.addEventListener('load', () => {
            navigator.serviceWorker.register('/sw.js')
                .then(reg => console.log('SW registered:', reg.scope))
                .catch(err => console.log('SW failed:', err));
        });
    }
    
    // Install prompt handling
    let deferredPrompt;
    window.addEventListener('beforeinstallprompt', (e) => {
        e.preventDefault();
        deferredPrompt = e;
        document.getElementById('installBtn').style.display = 'block';
    });
    document.getElementById('installBtn').addEventListener('click', async () => {
        if (deferredPrompt) {
            deferredPrompt.prompt();
            await deferredPrompt.userChoice;
            deferredPrompt = null;
            document.getElementById('installBtn').style.display = 'none';
        }
    });
    </script>
    
    <!-- Main JS Module -->
    <script type="module" src="/js/main.js"></script>
</body>
</html>
```

---

## **You will find these programs in `index.html` in this directory.**

> [index.html](https://github.com/alrifatsabbir/nsdahr/blob/main/qa-html/index.html)  
> [index.md](https://github.com/alrifatsabbir/nsdahr/blob/main/qa-html/index.md)

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
