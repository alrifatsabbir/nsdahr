# Javascript Beginner Programming Questions and Answers

> ##  Basic Math & Simple Functions

 <h3>1. Write a function to find the sum of two numbers.</h3>

 ```javascript
 function sum(a, b) {
     return a + b;
 }
 ```

 <h3>2. Write a function to find the subtraction of two numbers.</h3>

 ```javascript
 function subtract(a, b) {
     return a - b;
 }
 ```

 <h3>3. Write a function to multiply two numbers.</h3>

 ```javascript
 function multiply(a, b) {
     return a * b;
 }
 ```

 <h3>4. Write a function to divide two numbers and return the quotient.</h3>

 ```javascript
 function divide(a, b) {
     return a / b;
 }
 ```

 <h3>5. Write a function to find the remainder of two numbers using the modulus operator.</h3>

 ```javascript
 function getRemainder(a, b) {
     return a % b;
 }
 ```

 <h3>6. Write a function to find the square of a given number.</h3>

 ```javascript
 function square(num) {
     return num * num;
 }
 ```

 <h3>7. Write a function to calculate the area of a rectangle given its width and height.</h3>

 ```javascript
 function rectangleArea(width, height) {
     return width * height;
 }
 ```

 <h3>8. Write a function to calculate the area of a circle given its radius.</h3>

 ```javascript
 function circleArea(radius) {
     return Math.PI * radius * radius;
 }
 ```

 <h3>9. Write a function to convert Celsius to Fahrenheit.</h3>

 ```javascript
 function celsiusToFahrenheit(celsius) {
     return (celsius * 9/5) + 32;
 }
 ```

 <h3>10. Write a function to convert Fahrenheit to Celsius.</h3>

 ```javascript
 function fahrenheitToCelsius(fahrenheit) {
     return (fahrenheit - 32) * 5/9;
 }
 ```

> ## Conditional Logic (If / Else)

 <h3>11. Write a function that checks if a number is positive, negative, or zero.</h3>

 ```javascript
 function checkNumber(num) {
     if (num > 0) return "Positive";
     if (num < 0) return "Negative";
     return "Zero";
 }
 ```
 <h3>12. Write a function to check if a given number is even or odd.</h3>

 ```javascript
 function isEvenOrOdd(num) {
     return num % 2 === 0 ? "Even" : "Odd";
 }
 ```
 <h3>13. Write a function to find the maximum between two numbers.</h3>

 ```javascript
 function findMax(a, b) {
     return a > b ? a : b;
 }
 ```

 <h3>14. Write a function to find the maximum among three numbers.</h3>

 ```javascript
 function findMaxOfThree(a, b, c) {
     return Math.max(a, b, c);
 }
 ```

 <h3>15. Write a function to check if a year is a leap year or not.</h3>

 ```javascript
 function isLeapYear(year) {
     return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
 }
 ```

 <h3>16. Write a function that takes a score (0-100) and returns a letter grade (A, B, C, D, F).</h3>

 ```javascript
 function getGrade(score) {
     if (score >= 90) return "A";
     if (score >= 80) return "B";
     if (score >= 70) return "C";
     if (score >= 60) return "D";
     return "F";
 }
 ```

 <h3>17. Write a function to check if a person is eligible to vote (age 18 or above).</h3>

 ```javascript
 function canVote(age) {
     return age >= 18;
 }
 ```

 <h3>18. Write a function that checks if a string is empty or not.</h3>

 ```javascript
 function isEmpty(str) {
     return str.length === 0;
 }
 ```

 <h3>19. Write a function that checks if a given number is a multiple of 5.</h3>

 ```javascript
 function isMultipleOfFive(num) {
     return num % 5 === 0;
 }
 ```

 <h3>20. Write a function that checks if a number lies between a specific range (e.g., between 10 and 50).</h3>

 ```javascript
 function inRange(num, min, max) {
     return num >= min && num <= max;
 }
 ```

> ## Loops & Series

 <h3>21. Write a function to print numbers from 1 to 10 using a loop.</h3>

 ```javascript
 function printOneToTen() {
     for (let i = 1; i <= 10; i++) {
         console.log(i);
     }
 }
 ```

 <h3>22. Write a function to print all even numbers between 1 and 20.</h3>

 ```javascript
 function printEvens() {
     for (let i = 2; i <= 20; i += 2) {
         console.log(i);
     }
 }
 ```

 <h3>23. Write a function to print all odd numbers between 1 and 20.</h3>

 ```javascript
 function printOdds() {
     for (let i = 1; i <= 20; i += 2) {
         console.log(i);
     }
 }
 ```

 <h3>24. Write a function to calculate the sum of numbers from 1 to n.</h3>

 ```javascript
 function sumToN(n) {
     let sum = 0;
     for (let i = 1; i <= n; i++) {
         sum += i;
     }
     return sum;
 }
 ```

 <h3>25. Write a function to calculate the factorial of a given number.</h3>

 ```javascript
 function factorial(num) {
     let result = 1;
     for (let i = 2; i <= num; i++) {
         result *= i;
     }
     return result;
 }
 ```

 <h3>26. Write a function to print the multiplication table of a given number.</h3>

 ```javascript
 function printTable(num) {
     for (let i = 1; i <= 10; i++) {
         console.log(`${num} x ${i} = ${num * i}`);
     }
 }
 ```

 <h3>27. Write a function to count the number of digits in an integer.</h3>

 ```javascript
 function countDigits(num) {
     return Math.abs(num).toString().length;
 }
 ```

 <h3>28. Write a function to find the sum of all digits of a number.</h3>

 ```javascript
 function sumDigits(num) {
     let sum = 0;
     let str = Math.abs(num).toString();
     for (let char of str) {
         sum += parseInt(char);
     }
     return sum;
 }
 ```

 <h3>29. Write a function to reverse a given number (e.g., 123 becomes 321).</h3>

 ```javascript
 function reverseNumber(num) {
     let reversed = parseInt(num.toString().split('').reverse().join(''));
     return num < 0 ? -reversed : reversed;
 }
 ```

 <h3>30. Write a function to check if a given number is a prime number.</h3>

 ```javascript
 function isPrime(num) {
     if (num <= 1) return false;
     for (let i = 2; i <= Math.sqrt(num); i++) {
         if (num % i === 0) return false;
     }
     return true;
 }
 ```

> ## String Manipulation

 <h3>31. Write a function to return the length of a string.</h3>

 ```javascript
 function getLength(str) {
     return str.length;
 }
 ```

 <h3>32. Write a function to convert a string to uppercase.</h3>

 ```javascript
 function toUpper(str) {
     return str.toUpperCase();
 }
 ```

 <h3>33. Write a function to convert a string to lowercase.</h3>

 ```javascript
 function toLower(str) {
     return str.toLowerCase();
 }
 ```

 <h3>34. Write a function to reverse a string.</h3>

 ```javascript
 function reverseString(str) {
     return str.split('').reverse().join('');
 }
 ```

 <h3>35. Write a function to check if a string is a palindrome (reads the same forward and backward).</h3> 
 
 
 ```javascript
 
 function isPalindrome(str) {
     let reversed = str.split('').reverse().join('');
     return str === reversed;
 }
 ```

 <h3>36. Write a function to count the number of vowels in a string.</h3>

 ```javascript
 function countVowels(str) {
     let count = 0;
     let vowels = "aeiouAEIOU";
     for (let char of str) {
         if (vowels.includes(char)) count++;
     }
     return count;
 }
 ```

 <h3>37. Write a function to concatenate two strings together.</h3>

 ```javascript
 function combineStrings(str1, str2) {
     return str1 + str2;
 }
 ```

 <h3>38. Write a function to check if a string contains a specific substring.</h3>

 ```javascript
 function containsWord(str, word) {
     return str.includes(word);
 }
 ```

 <h3>39. Write a function to return the first character of a string.</h3>

 ```javascript
 function getFirstChar(str) {
     return str.charAt(0);
 }
 ```

 <h3>40. Write a function to return the last character of a string.</h3>

 ```javascript
 function getLastChar(str) {
     return str.charAt(str.length - 1);
 }
 ```

> ## Array Basics

 <h3>41. Write a function to find the sum of all elements in an array.</h3>

 ```javascript
 function sumArray(arr) {
     let sum = 0;
     for (let num of arr) {
         sum += num;
     }
     return sum;
 }
 ```

 <h3>42. Write a function to find the average of all elements in an array.</h3>

 ```javascript
 function averageArray(arr) {
     if (arr.length === 0) return 0;
     let sum = 0;
     for (let num of arr) {
         sum += num;
     }
     return sum / arr.length;
 }
 ```

 <h3>43. Write a function to find the largest number in an array.</h3>

 ```javascript
 function findLargest(arr) {
     return Math.max(...arr);
 }
 ```

 <h3>44. Write a function to find the smallest number in an array.</h3>

 ```javascript
 function findSmallest(arr) {
     return Math.min(...arr);
 }
 ```

 <h3>45. Write a function to count how many times a specific element appears in an array.</h3>

 ```javascript
 function countOccurrences(arr, target) {
     let count = 0;
     for (let item of arr) {
         if (item === target) count++;
     }
     return count;
 }
 ```

 <h3>46. Write a function to remove the first element from an array and return the new array.</h3>

 ```javascript
 function removeFirst(arr) {
     let newArr = [...arr];
     newArr.shift();
     return newArr;
 }
 ```

 <h3>47. Write a function to add an element to the beginning of an array.</h3>

 ```javascript
 function addFirst(arr, element) {
     let newArr = [...arr];
     newArr.unshift(element);
     return newArr;
 }
 ```

 <h3>48. Write a function to reverse the elements of an array.</h3>

 ```javascript
 function reverseArray(arr) {
     return [...arr].reverse();
 }
 ```

 <h3>49. Write a function to filter out all even numbers from an array and return a new array.</h3>

 ```javascript
 function filterEvens(arr) {
     return arr.filter(num => num % 2 === 0);
 }
 ```

 <h3>50. Write a function to check if an array contains a specific element.</h3>

 ```javascript
 function containsElement(arr, target) {
     return arr.includes(target);
 }
 ```
