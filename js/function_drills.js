// # Function Drills





// Functions using conditionals but not loops or arrays:
//
//     - Make a function named `isOdd(number)`

const isOdd = (number) => {
    if(number % 2 !== 0) {
        return `${number} is odd`;
    } else {
        return false;
    }
}
// console.log(isOdd(25));

// - Make a function named `isEven(number)`

const isEven = (number) => {
    if (number % 2 === 0) {
        return `${number} is even`;
    } else {
        return false;
    }
}

// console.log(isEven(24));

// - Make a function named `identity(input)` that returns the input exactly as
// provided.

const identity = (input) => {
    return input;
}

// - Make a function named `isFive(input)`

const isFive = (input) => {
    return 5;
}

// - Make a function named `addFive(input)` that adds five to some input.

const addFive = (input) => {
    return input + isFive();
}

// - Make a function named `isMultipleOfFive(input)`

const isMultipleOfFive = (input) => {
    return input * isFive();
}

// - Make a function named `isThree(input)`

const isThree = (input) => {
    return 3;
}

// - Make a function named `isMultipleOfThree(input)`

const isMultipleOfThree = (input) => {
    return input * isThree();
}

// - Make a function named `isMultipleOfThreeAndFive(input)`

const isMultipleOfThreeAndFive = (input) => {
    return input = isThree() * isFive();
}

// - Make a function named `isMultipleOf(target, n)` which checks if target is
// evenly divisible by `n`

const isMultipleOf = (target, n) => {
    return target % n;
}

// console.log(isMultipleOf(25, 5));

// - Make a function named `isTrue(boolean)`

const isTrue = (boolean) => {

}

// - Make a function named `isFalse(boolean)`

function isFalse (boolean) {
    return false;
}

// - Make a function named `isTruthy(input)`, remember that values other than true
// will behave like true

function isTruthy (input) {
    return !input;
}

// - Make a function named `isFalsy(input)`, remember that values other than false
// behave like false

function isFalsy (input) {
    return !input;
}

// - Make a function named `isVowel(letter)`

const isVowel = (letter) => {
    switch (letter) {
        case 'a':
            return `${letter} is a vowel`;
            break;
        case 'e':
            return `${letter} is a vowel`;
            break;
        case 'i':
            return `${letter} is a vowel`;
            break;
        case 'o':
            return `${letter} is a vowel`;
            break;
        case 'u':
            return `${letter} is a vowel`;
            break;
        default:
            return `${letter} is not a vowel`;
            break;
    }
}

// - Make a function named `isConsonant(letter)`

function isConsonant (letter) {
    if (letter !== 'a' || letter !== 'e' || letter !== 'i' || letter !== 'o' || letter !== 'u') {
        return true;
    }
}

// - Make a function named `isCapital(letter)`

function isCapital (letter) {
    return /[A-Z]/.test(letter);
}

// - Make a function named `isLowerCase(letter)`

function isLowerCase (letter) {
    return /[a-z]/.test(letter);
}

// - Make a function named `hasLowerCase(string)` that returns if a string has any
// lower cased letter

function hasLowerCase(string) {
    if (string === /[a-z]/.test(string)){
        return string;
    }
}

// - Make a function named `isSpace(letter)` that returns if a character is a space
// character

function isSpace (letter) {
    if (letter.includes(" ")){
        return letter;
    }
}

// - Make a function named `isZero(number)`

const isZero = (number) => {
    if (number === 0) {
        return true
    } else {
        return false;
    }
}

// - Make a function named `notZero(input)` that returns true if the input is not
// zero

const notZero = (input) => {
    if (input !== 0) {
        return true;
    } else {
        return false;
    }
}

// - Write a function named `lowerCase(string)`

function lowerCase(string) {
    return string.toLowerCase();
}

// - Write a function named `double(n)` that returns a number times two

const double = (n) => {
    return n * 2;
}

// - Write a function named `triple(n)` that returns a number times 3

const triple = (n) => {
    return n * 3;
}

// - Write a function named `quadruple(n)` that returns a number times 4

const quadruple = (n) => {
    return n * 4;
}

// - Write a function named `half(n)` that returns 1/2 of the provided input

const half = (n) => {
    return n * 0.5;
}

// - Write a function named `subtract(a, b)` that returns `a` minus `b`

const subtract = (a, b) => {
    return a - b;
}

// - Write a function named `multiply(a, b)` that returns the product of `a` times
//     `b`

const multiple = (a, b) => {
    return a * b;
}

// - Write a function named divide(a, b) that returns `a` divided by ~b~

const divide = (a, b) => {
    return a / b;
}

//     - Write a function named `remainder(a, b)` that returns the remainder after
// dividing a by b

const remainder = (a, b) => {
    return a % b;
}

// - Make a function named `modulo(a, b)` that returns the returns the remainder
// after dividing a by b

const modulo = (a, b) => {
    return a % b;
}

// - Write a function named `cube(n)` that returns n * n * n

const cube = (n) => {
    return n * n * n;
}

// - Write a function named `squareRoot(n)` that returns the square root of the
// input

const squareRoot = (n) => {
    return Math.sqrt(n);
}

// console.log(squareRoot(9));

// - Write a function named `cubeRoot(n)` that returns the cube root of the input

const cubeRoot = (n) => {
    return Math.cbrt(n);
}

// - Write a function named `invertSign(number)` that returns a negative version of
// a postive number, a positve version of negative, and false for all else.

const invertSign = (number) => {
    if (parseFloat(number) > 0) {
        return number * -1;
    } else if (parseFloat(number) < 0) {
        return number * -1;
    } else{
        return false;
    }
}

console.log(invertSign(100));

// - Write a function named `degreesToRadians(number)`

function degreesToRadians (number) {
    return number * (Math.PI / 180);
}

// - Write a function named `radiansToDegrees(number)`

function radiansToDegrees (number) {
    return number / (Math.PI / 180);
}

// - Make a function named `isBlank(input)` that determines if a given input is
// spaces, newline characters, or tabs.

function isBlank (input){
    if (input.includes(" ") || input.includes('\n' || input.includes('\t'))) {
        return true;
    }
}

// - Make a function named `trim(string)` that removes empty spaces before and
// after the input.

const trim = (string) => {
    return string.trim();
}

// - Make a function named `areEqual(input1, input2)` that returns if both inputs
// have the same value

const areEqual = (input1, input2) => {
    return input1 == input2;
}

// - Make a function named `areIdentical(input1, input2)` that returns if both
//     inputs are same value and data type.

const areIdentical = (input1, input2) => {
    return input1 === input2;
}

// - Make a function named `not(input)` returns the input with a flipped boolean

const not = (input) => {
    return !input;
}

// - Make a function named `notNot(input)` that the negation of the negation of the
// input.

const notNot = (input) => {
    return !!input;
}

// - Make a function named `and(predicate1, predicate2)` that returns the logical
// operation of AND

const and = (predicate1, predicate2) => {
    return predicate1 && predicate2;
}

// - Make a function named `or(predicate1, predicate2)` that returns the logical
// operation of OR

const or = (predicate1, predicate2) => {
    return predicate1 || predicate2;
}

// - Write a function called `reverseString(string)` that reverses a string

const reverseString = (string) => {
    let splitString = string.split('');
    let reverse = splitString.reverse();
    let reveresedString = reverse.join('');
    return reveresedString;
}

// console.log(reverseString('hello world'));

// - Make a function named `absoluteValue(number)` that returns the absolute value
// of a number.

const absoluteValue = (number) => {
    return Math.abs(number);
}

// - Make a function named `rollDice(sides)` that takes in an argument containing
// the number of sides the die should have. Generate a random number between 1 up
// to and including the number of sides.

const rollDice = (sides) => {
    sides = randomNumber(1, 20);
    return `The die has ${sides} sides.`
}

// ## Simple Function Drills
//
// 1. Make a function called returnTwo() that returns the number 2 when called

const returnTwo = () => {
    return 2;
}


// Test this function with `console.log(returnTwo())`
//
//     1. Make a function called sayHowdy() which console.logs the string "Howdy!"

const sayHowdy = () => {
    console.log('Howdy');
}

// Test this function by directly calling `sayHowdy()`
//
// Remember this function does not need a defined return value


// 1. Make a function called returnName() that returns the string of your name

const returnName = () => {
    return 'Connor';
}


// Test this function with `console.log(returnName())`
//
//     1. Make a function called addThree() which takes in a number input and returns the number plus 3.

const addThree = (number) => {
    return number + 3;
}

// Test this function with `console.log(addThree(5))`
//
//     1. Make a function called sayString() which returns the string input passed in.

const sayString = (string) => {
    return string;
}

 // console.log(sayString('codeup'))
//
//
//     ## Challenge Function Drills
//
// - Write a function called `identity(input)` that takes in an argument called
// input and returns that input.

const id = (input) => {
    return input;
}


// - Write a function called `getRandomNumber(min, max)` that returns a random
// number between min and max values sent to that function call.

const randomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
}


// - Write a function called `first(input)` that returns the first character in the
// provided string.

const first = (input) => {
    let splitInput = input.split('');
    let firstLetter = splitInput[0];
    return firstLetter;
}
// console.log(first('hello'));

// - Write a function called `last(input)` that returns the last character of a
// string

const last = (input) => {
    let splitInput = input.split('');
    let lastLetter = splitInput[4];
    return lastLetter;
}
// console.log(last('hello'));

// - Write a function called `rest(input)` that returns everything but the first
// character of a string.



// - Write a function called `reverse(input)` that takes a string and returns it
// reversed.
//
// - Write a function called `isNumeric(input)` that takes an input and returns a
// boolean if the input is numeric.
//
// - Write a function called `count(input)` that takes in a string and returns the
// number of characters.

const count = (input) => {
    return input.length
}


// - Write a function called `add(a, b)` that returns the sum of a and b


// - Write a function called `subtract(a, b)` that return the difference between
// the two inputs.
//
// - Write `multiply(a, b)` function that returns the product
//
// - Write a `divide(numerator, denominator)` function that returns a divided by b
//
// - Write a `remainder(number, divisor)` function that returns the remainder left
// over when dividing `number` by the `divisor`
//
// - Write the function `square(a)` that takes in a number and returns the number
// multiplied by itself.
//
// - Write a function called `sumOfSquares(a, b)` that uses only your `add()` function
// and your square function and not + or * operators
//
// - Write a function called `doMath(operator, a, b)` that takes 3 parameters. The
// first parameter is the name of the math function you want to apply. a and b
// are the two numbers to run that function on.
//
// ## Even More Function Bonuses
//
// 1. Create a function that will return how many whitespace characters are at the
// beginning and end of a string.
//
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
//
//
//
//
//
//
//
//
//
//
//
//     Message bigfoot



