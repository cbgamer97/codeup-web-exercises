"use strict";

const cities = [
    {
        name: "New York City",
        state: "New York",
        population: 8336817
    },
    {
        name: "Los Angeles",
        state: "California",
        population: 3979576
    },
    {
        name: "Chicago",
        state: "Illinois",
        population: 2693976
    },
    {
        name: "Houston",
        state: "Texas",
        population: 2320268
    },
    {
        name: "Phoenix",
        state: "Arizona",
        population: 1680992
    },
    {
        name: "Philadelphia",
        state: "Pennsylvania",
        population: 1584064
    },
    {
        name: "San Antonio",
        state: "Texas",
        population: 1547253
    },
    {
        name: "San Diego",
        state: "California",
        population: 1423851
    },
    {
        name: "Dallas",
        state: "Texas",
        population: 1343573
    },
    {
        name: "San Jose",
        state: "California",
        population: 1030119
    },
    {
        name: "Austin",
        state: "Texas",
        population: 964254
    },
    {
        name: "Jacksonville",
        state: "Florida",
        population: 903889
    },
    {
        name: "Fort Worth",
        state: "Texas",
        population: 895008
    },
    {
        name: "Columbus",
        state: "Ohio",
        population: 892533
    },
    {
        name: "San Francisco",
        state: "California",
        population: 883305
    },
    {
        name: "Charlotte",
        state: "North Carolina",
        population: 885708
    },
    {
        name: "Indianapolis",
        state: "Indiana",
        population: 876384
    },
    {
        name: "Seattle",
        state: "Washington",
        population: 753675
    },
    {
        name: "Denver",
        state: "Colorado",
        population: 727211
    },
    {
        name: "Washington",
        state: "District of Columbia",
        population: 702455
    }
];

for(let i = 0; i < cities.length; i++){
    if (cities[i].state === "Texas" && cities[i].population > 1000000) {
        console.log(`${cities[i].state}: ${cities[i].name}`)
    }
}

const denver = {
    name: "Denver",
    state: "Colorado",
    population: 727211
}

const ftWorth = {
    name: "Fort Worth",
    state: "Texas",
    population: 895008
}

const isTexas = (cityObject) => {
    return cityObject.state === "Texas"
}

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

const peoplesBudget = [
    { name: "John", age: 21, budget: 23000 },
    { name: "Steve",  age: 32, budget: 40000 },
    { name: "Martin",  age: 16, budget: 2700 }
]

const getBudgets = (array) => {
    let totalBudget = 0;
    array.forEach(object => totalBudget += object.budget);
    return totalBudget;
}

// Write a function that takes an array of numbers and returns the sum of all the numbers in the array.

const numbers = [1, 2, 3, 4, 5]

const addArray = (array) => {

    let sumOfNumbers = 0;

    for (let i = 0; i < array.length; i++) {
        sumOfNumbers += array[i];
    }
    return sumOfNumbers
}

// console.log(addArray(numbers));

//     Write a function that takes an array of strings and returns the longest string in the array.

// const returnLongestString = (array) => {
//     let longestString = "";
//
//     for (let i = 0; i < array.length; i++) {
//         if (array[i].length) {
//
//         }
//     }
//     return longestString;
// }

//     Write a function that takes an array of numbers and returns a new array with only the even numbers from the original array.

let arrayOfStrings = [1, 2, 10, 11, 13, 15, 18]

const onlyEven = (array) => {
    let evenNumbers = "";
    let arrayEven = [];

    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            return array[i].toString();
        }
    }
}

console.log(onlyEven(arrayOfStrings));

//     Write a function that takes a string and returns a new string with all the vowels removed.
//
//     Write a function that takes an array of strings and returns a new array with the first letter of each string capitalized.
//
//     Write a function that takes an array of numbers and returns the largest number in the array.
//
//     Write a function that takes a string and returns true if the string is a palindrome, and false otherwise.
//
//     Write a function that takes an array of numbers and returns a new array with only the numbers that are greater than 5.
//
// Write a function that takes a string and returns a new string with the words in reverse order.
//
//     Write a function that takes an array of strings and returns a new array with the strings sorted in alphabetical order.

