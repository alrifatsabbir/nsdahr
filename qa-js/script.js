// Basic Math & Simple Functions

// 1. Write a function to find the sum of two numbers.

function sum(a, b){
    return a+b;
}

/*
To run this program-
console.log("Sum:", sum(10,4)); 
*/

// 2. Write a function to find the subtraction of two numbers.

function subtraction(a,b){
    return a-b;
}

/*
To run this program-
console.log("Substraction:", subtraction(10,4)); 
*/

// 3. Write a function to multiply two numbers.

function multiply(a,b){
    return a*b;
}

/*
To run this program-
console.log("Multiplication:", multiply(10,4)); 
*/

// 4. Write a function to divide two numbers and return the quotient.

function divide(a,b){
    return a/b;
}

/*
To run this program-
console.log("Divition:", divide(10,4)); 
*/

// 5. Write a function to find the remainder of two numbers using the modulus operator.

function remainder(a,b){
    return a%b;
}

/*
To run this program-
console.log("Remaining:", remainder(10,4)); 
*/

// 6. Write a function to find the square of a given number.

function square(n){
    return n*n;
}

/*
To run this program-
console.log("Square:", square(7)); 
*/

// 7. Write a function to calculate the area of a rectangle given its width and height.

function area(w, h) {
    return w * h;
}

/*
To run this program-
console.log("Area of Rectangular:", area(10,4)); 
*/

// 8. Write a function to calculate the area of a circle given its radius.

function circleArea(r){
    return Math.PI * r * r;
}

// Alternative~

function circleArea2(r){
    const pi = 3.1416;
    return  pi * r * r;
}

/*
To run this program-
console.log("Area of Circle:", circleArea2(5))
*/

// 9. Write a function to convert Celsius to Fahrenheit.

function celsiusToFahrenheit(c) {
    return (c * 9/5) + 32;
}

/*
To run this program-
console.log("Celsius to Fahrenheit: ", celsiusToFahrenheit(5))
*/

// 10. Write a function to convert Fahrenheit to Celsius.

function fahrenheitToCelsius(f) {
    return (f - 32) * 5/9;
}

/*
To run this program-
console.log("Fahrenheit to Celsius: ", fahrenheitToCelsius(5))
*/

// // Conditional Logic (If / Else)

// 11. Write a function that checks if a number is positive, negative, or zero.

function checkNumber(num) {
    if (num > 0) {
        return "Positive";
    } else if (num < 0) {
        return "Negative";
    } else {
        return "Zero";
    }
}

/*
To run this program-
console.log("Number Type:", checkNumber(10)); 
*/

// 12. Write a function to check if a given number is even or odd.

function isEvenOrOdd(num) {
    if (num % 2 === 0) {
        return "Even";
    } else {
        return "Odd";
    }
}

/*
To run this program-
console.log("Even or Odd:", isEvenOrOdd(7)); 
*/

// 13. Write a function to find the maximum between two numbers.

function findMax(a, b) {
    if (a > b) {
        return a;
    } else {
        return b;
    }
}

/*
To run this program-
console.log("Maximum:", findMax(15, 25)); 
*/

// 14. Write a function to find the maximum among three numbers.

function findMaxOfThree(a, b, c) {
    if (a >= b && a >= c) {
        return a;
    } else if (b >= a && b >= c) {
        return b;
    } else {
        return c;
    }
}

/*
To run this program-
console.log("Maximum of Three:", findMaxOfThree(10, 45, 20)); 
*/

// 15. Write a function to check if a year is a leap year or not.

function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        return true;
    } else {
        return false;
    }
}

/*
To run this program-
console.log("Is Leap Year:", isLeapYear(2024)); 
*/

// 16. Write a function that takes a score (0-100) and returns a letter grade (A, B, C, D, F).

function getGrade(score) {
    if (score >= 90) return "A";
    else if (score >= 80) return "B";
    else if (score >= 70) return "C";
    else if (score >= 60) return "D";
    else return "F";
}

/*
To run this program-
console.log("Grade:", getGrade(85)); 
*/

// 17. Write a function to check if a person is eligible to vote (age 18 or above).

function canVote(age) {
    return age >= 18;
}

/*
To run this program-
console.log("Eligible to Vote:", canVote(20)); 
*/

// 18. Write a function that checks if a string is empty or not.

function isEmpty(str) {
    return str.length === 0;
}

/*
To run this program-
console.log("Is String Empty:", isEmpty("")); 
*/

// 19. Write a function that checks if a given number is a multiple of 5.

function isMultipleOfFive(num) {
    return num % 5 === 0;
}

/*
To run this program-
console.log("Is Multiple of 5:", isMultipleOfFive(25)); 
*/

// 20. Write a function that checks if a number lies between a specific range (e.g., between 10 and 50).

function inRange(num, min, max) {
    return num >= min && num <= max;
}

/*
To run this program-
console.log("Is In Range:", inRange(25, 10, 50)); 
*/


// // Loops & Series

// 21. Write a function to print numbers from 1 to 10 using a loop.

function printOneToTen() {
    for (let i = 1; i <= 10; i++) {
        console.log(i);
    }
}

/*
To run this program-
printOneToTen(); 
*/

// 22. Write a function to print all even numbers between 1 and 20.

function printEvens() {
    for (let i = 2; i <= 20; i += 2) {
        console.log(i);
    }
}

/*
To run this program-
printEvens(); 
*/

// 23. Write a function to print all odd numbers between 1 and 20.

function printOdds() {
    for (let i = 1; i <= 20; i += 2) {
        console.log(i);
    }
}

/*
To run this program-
printOdds(); 
*/

// 24. Write a function to calculate the sum of numbers from 1 to n.

function sumToN(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}

/*
To run this program-
console.log("Sum up to N:", sumToN(5)); 
*/

// 25. Write a function to calculate the factorial of a given number.

function factorial(num) {
    let result = 1;
    for (let i = 2; i <= num; i++) {
        result *= i;
    }
    return result;
}

/*
To run this program-
console.log("Factorial:", factorial(5)); 
*/

// 26. Write a function to print the multiplication table of a given number.

function printTable(num) {
    for (let i = 1; i <= 10; i++) {
        console.log(`${num} x ${i} = ${num * i}`);
    }
}

/*
To run this program-
printTable(5); 
*/

// 27. Write a function to count the number of digits in an integer.

function countDigits(num) {
    return Math.abs(num).toString().length;
}

/*
To run this program-
console.log("Total Digits:", countDigits(12345)); 
*/

// 28. Write a function to find the sum of all digits of a number.

function sumDigits(num) {
    let sum = 0;
    let str = Math.abs(num).toString();
    for (let i = 0; i < str.length; i++) {
        sum += parseInt(str[i]);
    }
    return sum;
}

/*
To run this program-
console.log("Sum of Digits:", sumDigits(123)); 
*/

// 29. Write a function to reverse a given number (e.g., 123 becomes 321).

function reverseNumber(num) {
    let reversedStr = num.toString().split('').reverse().join('');
    let reversedNum = parseInt(reversedStr);
    return num < 0 ? -reversedNum : reversedNum;
}

/*
To run this program-
console.log("Reversed Number:", reverseNumber(123)); 
*/

// 30. Write a function to check if a given number is a prime number.

function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

/*
To run this program-
console.log("Is Prime:", isPrime(7)); 
*/


// // String Manipulation

// 31. Write a function to return the length of a string.

function getLength(str) {
    return str.length;
}

/*
To run this program-
console.log("String Length:", getLength("JavaScript")); 
*/

// 32. Write a function to convert a string to uppercase.

function toUpper(str) {
    return str.toUpperCase();
}

/*
To run this program-
console.log("Uppercase:", toUpper("hello")); 
*/

// 33. Write a function to convert a string to lowercase.

function toLower(str) {
    return str.toLowerCase();
}

/*
To run this program-
console.log("Lowercase:", toLower("HELLO")); 
*/

// 34. Write a function to reverse a string.

function reverseString(str) {
    return str.split('').reverse().join('');
}

/*
To run this program-
console.log("Reversed String:", reverseString("world")); 
*/

// 35. Write a function to check if a string is a palindrome (reads the same forward and backward).

function isPalindrome(str) {
    let reversed = str.split('').reverse().join('');
    return str === reversed;
}

/*
To run this program-
console.log("Is Palindrome:", isPalindrome("racecar")); 
*/

// 36. Write a function to count the number of vowels in a string.

function countVowels(str) {
    let count = 0;
    let vowels = "aeiouAEIOU";
    for (let i = 0; i < str.length; i++) {
        if (vowels.includes(str[i])) {
            count++;
        }
    }
    return count;
}

/*
To run this program-
console.log("Total Vowels:", countVowels("Hello World")); 
*/

// 37. Write a function to concatenate two strings together.

function combineStrings(str1, str2) {
    return str1 + str2;
}

/*
To run this program-
console.log("Combined:", combineStrings("Hello ", "World")); 
*/

// 38. Write a function to check if a string contains a specific substring.

function containsWord(str, word) {
    return str.includes(word);
}

/*
To run this program-
console.log("Contains Word:", containsWord("Learning JavaScript", "Java")); 
*/

// 39. Write a function to return the first character of a string.

function getFirstChar(str) {
    return str.charAt(0);
}

/*
To run this program-
console.log("First Character:", getFirstChar("Node")); 
*/

// 40. Write a function to return the last character of a string.

function getLastChar(str) {
    return str.charAt(str.length - 1);
}

/*
To run this program-
console.log("Last Character:", getLastChar("Node")); 
*/


// // Array Basics

// 41. Write a function to find the sum of all elements in an array.

function sumArray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

/*
To run this program-
console.log("Sum of Array:", sumArray([1, 2, 3, 4, 5])); 
*/

// 42. Write a function to find the average of all elements in an array.

function averageArray(arr) {
    if (arr.length === 0) return 0;
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum / arr.length;
}

/*
To run this program-
console.log("Average of Array:", averageArray([10, 20, 30])); 
*/

// 43. Write a function to find the largest number in an array.

function findLargest(arr) {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

/*
To run this program-
console.log("Largest Number:", findLargest([5, 12, 8, 23, 4])); 
*/

// 44. Write a function to find the smallest number in an array.

function findSmallest(arr) {
    let min = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    return min;
}

/*
To run this program-
console.log("Smallest Number:", findSmallest([5, 12, 8, 23, 4])); 
*/

// 45. Write a function to count how many times a specific element appears in an array.

function countOccurrences(arr, target) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            count++;
        }
    }
    return count;
}

/*
To run this program-
console.log("Total Occurrences:", countOccurrences([1, 2, 3, 2, 4, 2], 2)); 
*/

// 46. Write a function to remove the first element from an array and return the new array.

function removeFirst(arr) {
    let newArr = [...arr];
    newArr.shift();
    return newArr;
}

/*
To run this program-
console.log("After Removing First:", removeFirst([1, 2, 3, 4])); 
*/

// 47. Write a function to add an element to the beginning of an array.

function addFirst(arr, element) {
    let newArr = [...arr];
    newArr.unshift(element);
    return newArr;
}

/*
To run this program-
console.log("After Adding First:", addFirst([2, 3, 4], 1));
*/


// 48. Write a function to reverse the elements of an array.

function reverseArray(arr) {
    return [...arr].reverse();
}

/*
To run this program-
console.log("Reversed Array:", reverseArray([1, 2, 3, 4, 5])); 
*/

// 49. Write a function to filter out all even numbers from an array and return a new array.

function filterEvens(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            result.push(arr[i]);
        }
    }
    return result;
}

/*
To run this program-
console.log("Filtered Evens:", filterEvens([1, 2, 3, 4, 5, 6])); 
*/

// 50. Write a function to check if an array contains a specific element.

function containsElement(arr, target) {
    return arr.includes(target);
}

/*
To run this program-
console.log("Contains Element:", containsElement([10, 20, 30], 20)); 
*/

