let var1 = true;
let var2 = 2342.234;
let var3 = "Hello Codeup";
let var4 = "2432.234";
let var5 = "2" + "2";
let var6 = 'single quote string';
console.log(var2);

// back tick allows for use of single and double quotes withing string.
let var8 = `It wouldn't matter if I "used" single or double`;

// escaping characters
let var14 = 'I like Yamba\'s sweater';

// && operator only runs if both arguments are true, if one is false argument returns false
console.log(true && true && false); //returns false
console.log(true && true && true); //returns true

// || operator runs if at lease one condition is true
console.log(true || false); //returns true
console.log(false || false); //returns false

// ! not operator does the opposite of what you tell it to do
console.log(!false); // returns true
console.log(!true); // returns false

//Variables

// "let" can be reassigned
let myShoes = "Ariats";

// const cannot be reassigned and will throw an error back when you try to reassign
const myName = "Jason";

myShoes = "Chanclas"

