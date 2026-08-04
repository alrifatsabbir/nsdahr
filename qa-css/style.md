# CSS Beginner Practice Questions and Answers

> ## Colors & Backgrounds

<h3>1. Set the text color of a paragraph to blue.</h3>

```css
p {
    color: blue;
}
```

<h3>2. Change the background color of a div to light gray.</h3>

```css
div {
    background-color: lightgray;
}
```

<h3>3. Add a background image to the body.</h3>

```css
body {
    background-image: url("background.jpg");
}
```

<h3>4. Make the background image cover the entire page.</h3>

```css
body {
    background-size: cover;
    background-repeat: no-repeat;
}
```

<h3>5. Change the opacity of an element.</h3>

```css
.box {
    opacity: 0.5;
}
```

> ## Typography

<h3>6. Change the font size of a heading.</h3>

```css
h1 {
    font-size: 36px;
}
```

<h3>7. Make a paragraph bold.</h3>

```css
p {
    font-weight: bold;
}
```

<h3>8. Italicize a piece of text.</h3>

```css
p {
    font-style: italic;
}
```

<h3>9. Center-align a heading.</h3>

```css
h1 {
    text-align: center;
}
```

<h3>10. Change the font family of the page.</h3>

```css
body {
    font-family: Arial, sans-serif;
}
```

> ## Box Model

<h3>11. Add 20px padding to a div.</h3>

```css
div {
    padding: 20px;
}
```

<h3>12. Add a 2px solid black border around a box.</h3>

```css
.box {
    border: 2px solid black;
}
```

<h3>13. Add 30px margin to the top of an element.</h3>

```css
.box {
    margin-top: 30px;
}
```

<h3>14. Create a square box with equal width and height.</h3>

```css
.box {
    width: 200px;
    height: 200px;
}
```

<h3>15. Round the corners of a box.</h3>

```css
.box {
    border-radius: 10px;
}
```

> ## Display & Position

<h3>16. Hide an element using CSS.</h3>

```css
.box {
    display: none;
}
```

<h3>17. Display elements side by side using Flexbox.</h3>

```css
.container {
    display: flex;
}
```

<h3>18. Center an element horizontally.</h3>

```css
.box {
    width: 200px;
    margin: 0 auto;
}
```

<h3>19. Center an element both horizontally and vertically using Flexbox.</h3>

```css
.container {
    display: flex;
    justify-content: center;
    align-items: center;
}
```

<h3>20. Make an element fixed at the top of the page.</h3>

```css
.navbar {
    position: fixed;
    top: 0;
    width: 100%;
}
```

> ## Flexbox Basics

<h3>21. Create a flex container.</h3>

```css
.container {
    display: flex;
}
```

<h3>22. Align items vertically in the center.</h3>

```css
.container {
    display: flex;
    align-items: center;
}
```

<h3>23. Space items evenly across the container.</h3>

```css
.container {
    display: flex;
    justify-content: space-evenly;
}
```

<h3>24. Change the direction of flex items to column.</h3>

```css
.container {
    display: flex;
    flex-direction: column;
}
```

<h3>25. Allow flex items to wrap.</h3>

```css
.container {
    display: flex;
    flex-wrap: wrap;
}
```

> ## Grid Basics

<h3>26. Create a two-column grid.</h3>

```css
.container {
    display: grid;
    grid-template-columns: 1fr 1fr;
}
```

<h3>27. Create three equal columns.</h3>

```css
.container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
}
```

<h3>28. Add spacing between grid items.</h3>

```css
.container {
    display: grid;
    gap: 20px;
}
```

<h3>29. Make one item span two columns.</h3>

```css
.item {
    grid-column: span 2;
}
```

<h3>30. Center items inside a grid.</h3>

```css
.container {
    display: grid;
    place-items: center;
}
```

> ## Pseudo Classes & Effects

<h3>31. Change a button color when hovered.</h3>

```css
button:hover {
    background-color: blue;
    color: white;
}
```

<h3>32. Style the first child of a list.</h3>

```css
li:first-child {
    color: red;
    font-weight: bold;
}
```

<h3>33. Change the color of visited links.</h3>

```css
a:visited {
    color: purple;
}
```

<h3>34. Remove underline from links.</h3>

```css
a {
    text-decoration: none;
}
```

<h3>35. Add a smooth transition to a button hover.</h3>

```css
button {
    transition: all 0.3s ease;
}

button:hover {
    background-color: green;
}
```

> ## Responsive Design

<h3>36. Write a media query for screens smaller than 768px.</h3>

```css
@media (max-width: 768px) {
    body {
        background-color: #f5f5f5;
    }
}
```

<h3>37. Make an image responsive.</h3>

```css
img {
    max-width: 100%;
    height: auto;
}
```

<h3>38. Change the layout from row to column on mobile.</h3>

```css
.container {
    display: flex;
}

@media (max-width: 768px) {
    .container {
        flex-direction: column;
    }
}
```

<h3>39. Hide an element only on mobile devices.</h3>

```css
@media (max-width: 768px) {
    .mobile-hide {
        display: none;
    }
}
```

<h3>40. Set the viewport width correctly in HTML.</h3>

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

> ## Animations

<h3>41. Create a simple fade-in animation.</h3>

```css
.fade {
    animation: fadeIn 1s ease;
}

@keyframes fadeIn {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}
```

<h3>42. Rotate an element on hover.</h3>

```css
.box:hover {
    transform: rotate(45deg);
}
```

<h3>43. Scale a button when hovered.</h3>

```css
button:hover {
    transform: scale(1.1);
}
```

<h3>44. Move an element from left to right using keyframes.</h3>

```css
.box {
    animation: moveRight 2s linear;
}

@keyframes moveRight {
    from {
        transform: translateX(0);
    }
    to {
        transform: translateX(200px);
    }
}
```

<h3>45. Create an infinite loading animation.</h3>

```css
.loader {
    animation: spin 1s linear infinite;
}

@keyframes spin {
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
}
```

> ## Miscellaneous

<h3>46. Add a box shadow to an element.</h3>

```css
.box {
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
}
```

<h3>47. Add a text shadow to a heading.</h3>

```css
h1 {
    text-shadow: 2px 2px 5px gray;
}
```

<h3>48. Make an image circular.</h3>

```css
img {
    border-radius: 50%;
}
```

<h3>49. Change the mouse cursor when hovering over a button.</h3>

```css
button {
    cursor: pointer;
}
```

<h3>50. Make a sticky navigation bar.</h3>

```css
.navbar {
    position: sticky;
    top: 0;
}
```