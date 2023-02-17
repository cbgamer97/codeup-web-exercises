// - Write a function called `identity(input)` that takes in an argument called
// input and returns that input.

const indentity = (input) => {
    return input;
}

// - Write a function called `getRandomNumber(min, max)` that returns a random
// number between min and max values sent to that function call.

const getRandomNumber = (min, max) => {
    let number = Math.floor(Math.random() * (max - min + 1)) + min;
    return number;
}

// console.log(getRandomNumber(5, 500));

// - Write a function called `first(input)` that returns the first character in the
// provided string.

const first = (input) => {
    let inputSplit = input.split('');
    let firstLetter = inputSplit.shift();
    return firstLetter
}

// console.log(first("Connor"));

// - Write a function called `last(input)` that returns the last character of a
// string

const last = input => {
    let inSplit = input.split('');
    let lastLetter = inSplit.pop();
    return lastLetter;
}

// console.log(last("Brinkley"));

// - Write a function called `rest(input)` that returns everything but the first
// character of a string.

const rest = input => {
    let split = input.split('');
    let firstLetter = split.shift();
    let restOfWord = split.join('');
    return restOfWord;
}

// console.log(rest("blue"));


// - Write a function called `reverse(input)` that takes a string and returns it
// reversed.

const reverse = input => {
    let split = input.split('');
    let reverse = split.reverse();
    let joinString = reverse.join('');
    return joinString;
}

// console.log(reverse("green"))

// - Write a function called `isNumeric(input)` that takes an input and returns a
// boolean if the input is numeric.

const isNumeric = input => {
    if (Number.isInteger(input)) {
        return true
    } else {
        return false;
    }
}

// console.log(isNumeric(12));

// - Write a function called `count(input)` that takes in a string and returns the
// number of characters.

const count = input => {
    return input.length;
}

// console.log(count("blue"));


// - Write a function called `add(a, b)` that returns the sum of a and b

const add = (a, b) => {
    return a + b;
}

// - Write a function called `subtract(a, b)` that return the difference between
// the two inputs.

const subtract = (a, b) => {
    return a - b;
}

// - Write `multiply(a, b)` function that returns the product

const multiply = (a, b) => {
    return a * b;
}

// - Write a `divide(numerator, denominator)` function that returns a divided by b

const divide = (numerator, denominator) => {
    return numerator / denominator;
}
// console.log(divide(25, 5));

// - Write a `remainder(number, divisor)` function that returns the remainder left
// over when dividing `number` by the `divisor`

const remainder = (number, divisor) => {
    return number % divisor;
}
// console.log(remainder(24, 5));

// - Write the function `square(a)` that takes in a number and returns the number
// multiplied by itself.

const square = a => {
    return a * a;
}

// - Write a function called `sumOfSquares(a, b)` that uses only your `add()` function
// and your square function and not + or * operators

const sumOfSquares = (a, b) => {
    return add(square(a), square(b));
}

// console.log(sumOfSquares(5, 5));

// - Write a function called `doMath(operator, a, b)` that takes 3 parameters. The
// first parameter is the name of the math function you want to apply. a and b
// are the two numbers to run that function on.

const doMath = (operator, a, b) => {
    operator = add(a, b);
    return operator;
}

// console.log(doMath(0, 4, 5));

// ## Even More Function Bonuses
//
// 1. Create a function that will return how many whitespace characters are at the
// beginning and end of a string.

const whiteSpace = (input) => {
    let trimmed = input.trim();
    //let spaces = trimmed.length;
    return trimmed;
}
console.log(whiteSpace('  greetings   '));


// 1. Create a function that takes in two string inputs.
//
// - If the second string input is present in the first, return the first input
// string with the second input string removed from it.
// - If the second string input is present multiple times in the first, the
// second string will only be removed where it first occurs in the first
// string.
// - If the second string input is not present in the first, return the first
// string as entered in the function.
//
// 1. Create a function that takes in a string and returns true if the last letter
// is an "a" (otherwise, return false).
//
// 1. EXTRA CHALLENGE: create a function that will return how many whitespace
// characters are at the beginning of a string (hint: use regex).
//
// 1. Create a function `returnTrueMessage()` that returns the string "Hey, it's true!"
//
// - Create a function `returnFalseMessage()` that returns the string "Hey, it's false!"
// - Create a function `returnMessage()` that takes in a function and returns the call to the function
// - Experiement passing in different functions.
//
// 1. Create a function, `willLoginUser()` that takes in a username string,
//     password string, user age, a boolean indicating if they are an admin.
//
//     The function will return true if the username is not the same as the
// password and the user is at least 18 years old. If the user is an admin,
//     they do not have to be a certain age but the password must still not match
// the username.