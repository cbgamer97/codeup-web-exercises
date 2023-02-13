"use strict";

// 1. Make a function called returnTwo() that returns the number 2 when called
const returnTwo = () => {
    return 2;
}


// console.log(returnTwo())


//     1. Make a function called sayHowdy() which console.logs the string “Howdy!”
const sayHowdy = () => {
    console.log("Howdy");
}

// sayHowdy()


// Remember this function does not need a defined return value
// 1. Make a function called returnName() that returns the string of your name

const returnName = () => {
    let stringName = "Connor Brinkley";
    return stringName;
}

// console.log(returnName())

//     1. Make a function called addThree() which takes in a number input and returns the number plus 3.
// Test this function with `console.log(addThree(5))`
const addThree = (num) => {
    let plusThree = num + 3;
    return plusThree;
}

// console.log(addThree(4));

//     1. Make a function called sayString() which returns the string input passed in.

const sayString = (string) => {
    return string;
}

console.log(sayString('hello'))

// write function that converts positive numbers to negative but leaves negative numbers negative.
const negativize = (input) => {
    if (typeof input === "string" || isNaN(parseFloat(input))) {
        return "That is not a number!"
    } else if (input > 0) {
        return -input;
    } else {
        return input;
    }
}


// function to reverse a string.

const reverseString = (str) => {
    let stringArray = str.split('');
    let reverseStringArray = stringArray.reverse();
    return reverseStringArray.join('');

}

console.log(reverseString("hello"));
