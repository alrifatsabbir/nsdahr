# HTML Beginner Practice Questions and Answers

> ## Basic HTML Structure

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

> ## Headings & Text

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

> ## Links & Images

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

> ## Lists

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

> ## Tables

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

> ## Forms

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

> ## Semantic HTML

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

> ## Multimedia

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

> ## HTML Entities & Attributes

<h3>41. Display the copyright symbol.</h3>

```html
<p>&copy; 2026</p>
```

<h3>42. Display the less-than symbol.</h3>

```html
<p>&lt;</p>
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

> ## Miscellaneous

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

<h3>50. Display the current date using the <code>&lt;time&gt;</code> element.</h3>

```html
<time datetime="2026-08-04">
    August 4, 2026
</time>
```