'use strict';

// Write a function that takes an array of numbers as input and returns the sum of all the numbers in the array.

let numArray = [4, 5, 6];
let sum = 0;
numArray.forEach(item => {
    sum += item;
})

// console.log(sum);

//     Write a function that takes a string as input and returns the string in reverse order.

function reverseString (string) {
    let splitString = string.split('');
    let reversedString = splitString.reverse();
    let stringJoin = reversedString.join('');
    return stringJoin;
}

// console.log(reverseString('Hello'));


//     Write a function that takes an array of strings as input and returns the longest string in the array.
//
//     Write a function that takes a string as input and returns true if the string is a palindrome (i.e., it reads the same backwards as forwards), and false otherwise.
//
//     Write a function that takes an array of numbers as input and returns a new array containing only the even numbers from the original array.
//
//     Write a function that takes an array of strings as input and returns a new array with all the strings capitalized.
//
//     Write a function that takes a string as input and returns the number of vowels (a, e, i, o, u) in the string.
//
//     Write a function that takes an array of numbers as input and returns the largest number in the array.
//
//     Write a function that takes an array of strings as input and returns a new array with only the strings that have more than 5 characters.
//
//     Write a function that takes a string as input and returns a new string with all the vowels removed.