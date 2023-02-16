"use strict";

// DECLARING ARRAY'S
let fruits = ["bananas", "apples", "oranges", "mangos", "tomato"];

// // ACCESSING ITEMS IN AN ARRAY

let var1 = fruits[2];

// //ACCESSING NUMBER OF ITEMS IN AN ARRAY

let numberOfFruits = fruits.length; // RETURNS 5
console.log(`The number of fruits is ${numberOfFruits}`);

// // TURN AN ARRAY INTO A STRING

let fruitsString = fruits.toString();
console.log(fruitsString);
console.log(`Using toString() on fruits => ${fruitsString}`);

// // STORING DIFFERENT DATA TYPES IN AN ARRAY

let fruitsAndNumbers = ["banana", 2, "apples", 8675309, undefined];
console.log(fruitsAndNumbers);

// LOOPING THROUGH AN ARRAY

for (let i = 0; i < fruits.length; i++){
    let fruit = fruits[i];
    console.log(fruit);
}

// USING forEach() METHOD TO EASILY LOOP THROUGH AN ARRAY

fruits.forEach((element, index, array) => {
   console.log("The elements follows:", element);
    console.log("The index follows:", index);
    console.log("The array follows:", array);
});

let studentSeating = [
    ['c', 'm', 'y', 'k', 'n', 'j'],
    ['s', 'j', 'm', 'r', 'q', 'k', 'd']
];

// USING forEach() TO ITERATE THROUGH MULTI LEVEL ARRAY
studentSeating.forEach((row) => {
    row.forEach((student) => {
      console.log(student);
    })
});