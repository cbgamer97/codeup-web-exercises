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
// console.log(whiteSpace('  greetings   '));


// 1. Create a function that takes in two string inputs.
//
// - If the second string input is present in the first, return the first input
// string with the second input string removed from it.
// - If the second string input is present multiple times in the first, the
// second string will only be removed where it first occurs in the first
// string.
// - If the second string input is not present in the first, return the first
// string as entered in the function.

// function twoStrings(input1, input2) {
//     if (input2 === input1) {
//         return
//     }
// }


// 1. Create a function that takes in a string and returns true if the last letter
// is an "a" (otherwise, return false).

function lastIsA (input) {
    if (input.endsWith('a')) {
        return 'It ends with a!';
    } else {
        return false;
    }
}

// console.log(lastIsA('baa'));

// 1. EXTRA CHALLENGE: create a function that will return how many whitespace
// characters are at the beginning of a string (hint: use regex).

function beginningSpace (input) {
    let whiteSpace = input.trimStart().length;
    return whiteSpace;
};

// console.log(beginningSpace('   hello!'));

// 1. Create a function `returnTrueMessage()` that returns the string "Hey, it's true!"
function returnTrueMessage () {
    return "Hey it's true!"
}
// - Create a function `returnFalseMessage()` that returns the string "Hey, it's false!"

function returnFalseMessage () {
    return "Hey, it's false!"
}

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

/**
 * Convert Address to Object
 * Write a function named convertAddressToObject that accepts a string that contains a street number (as a string) and
 * street name separated by a space characters, and returns an object with properties streetNumber and streetName.
 *
 * Examples
 *
 * >> convertAddressToObject('8646 Sunny Oaks') ➞ {streetNumber: '8646', streetName: 'Sunny Oaks'}
 * >> convertAddressToObject('5408 Villa Nueva') ➞ {streetNumber: '5408', streetName: 'Villa Nueva'}
 **/

const convertAddressToObject = (input) => {
    let numbersIndex = input.indexOf(' ');
    let addressNumber = input.substring(0, numbersIndex);
    let nameIndex = input.indexOf(' ');
    let addressName = input.substring(nameIndex);
    return {streetNumber: addressNumber, streetName: addressName}
}

// console.log(convertAddressToObject('8646 Sunny Oaks'));

/**
 * Count total pets
 * Write a function named totalPets that accepts an array of objects where each object represents a person,
 * and has a 'pets' property for their owned pets. The function should return the sum of every object's numPets property.
 *
 * Examples
 *
 * >> totalPets([
 *       {name: 'Fernando Mendoza', pets: 1},
 *       {name: 'Douglas Hirsh', pets: 8},
 *       {name: 'Kenneth Howell', pets: 2}
 *    ]) ➞ 11
 */

 totalPets([
     {name: 'Fernando Mendoza', pets: 1},
       {name: 'Douglas Hirsh', pets: 8},
       {name: 'Kenneth Howell', pets: 2}
    ]);


// function totalPets(personsArray) {
//     let total = 0;
//     for (let i = 0; i < personsArray.length; i++){
//         total += personsArray[i].pets
//     }
//     return total;
// }

function totalPets(personsArray) {
    let total = 0;
    personsArray.forEach(person => total += person.pets);
    return total;
}

/**
 * Drink Sorting
 * You will be given an array of drinks, with each drink being an object with two properties: name and price.
 * Create a function named sortDrinkByPrice that has the drinks array as an argument and return the drinks objects sorted by price in ascending order.
 *
 * Assume that the following array of drink objects needs to be sorted:
 * drinks = [
 *     {name: "lemonade", price: 50},
 *     {name: "lime", price: 10}
 * ]
 *
 * Examples
 * >> sortDrinkByPrice(drinks) ➞ [{name: "lime", price: 10}, {name: "lemonade", price: 50}]
 */

drinks = [
    {name: 'beer', price: 8},
    {name: 'wine', price: 10},
    {name: 'soda', price: 2},
    {name: 'juice', price: 5}
]

const sortDrinkByPrice = (drink) => {
    drink.sort(drink.price)
}

console.log(sortDrinkByPrice(drinks))

/**
 * Get Sum of People's Budget
 * Create the function named getBudgets that takes an array with objects and returns the sum of people's budgets.
 *
 * Examples
 *
 * >> getBudgets([
 *        { name: "John", age: 21, budget: 23000 },
 *        { name: "Steve",  age: 32, budget: 40000 },
 *        { name: "Martin",  age: 16, budget: 2700 }
 *    ]) ➞ 65700
 * >> getBudgets([
 *        { name: "John",  age: 21, budget: 29000 },
 *        { name: "Steve",  age: 32, budget: 32000 },
 *        { name: "Martin",  age: 16, budget: 1600 }
 *    ]) ➞ 62600
 */

const budgets = ([
    { name: "John", age: 21, budget: 23000 },
    { name: "Steve",  age: 32, budget: 40000 },
    { name: "Martin",  age: 16, budget: 2700 }
])


const getBudgets = (budget) => {
    let sumOfBudgets = 0;
    for (let i = 0; i < budget.length; i++) {
        sumOfBudgets += budget[i].budget
    }
    return sumOfBudgets
}

console.log(getBudgets(budgets))