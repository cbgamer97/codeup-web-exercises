"use strict";

/**
 * TODO:
 * Create a function called 'sayHello' that takes a parameter 'name'.
 * When called, the function should return a message that says hello to the passed in name.
 *
 * Example
 * > sayHello("codeup") // returns "Hello, codeup!"
 */

// function sayHello(name) {
//     let message = (`Hello, ${name}`);
//     return message;
// }

const sayHello = (name) => {
    let message = (`Hello, ${name}`);
    return message;
}

//console.log(sayHello('codeup'));

/**
 * TODO:
 * Call the function 'sayHello' and pass your name as a string literal argument.
 * Store the result of the function call in a variable named 'helloMessage'.
 *
 * console.log 'helloMessage' to check your work
 */

// let helloMessage = sayHello('Connor');

//console.log(helloMessage);

/**
 * TODO:
 * Store your name as a string in a variable named 'myName', and pass that
 * variable to the 'sayHello' function. You should see the same output in the
 * console.
 */


const myName = 'Connor';
const helloMessage = sayHello(myName);


// Don't modify the following line, it generates a random number between 1 and 3
// and stores it in a variable named random
let random = Math.floor((Math.random() * 3) + 1);

/**
 * TODO:
 * Create a function called 'isTwo' that takes a number as a parameter.
 * The function should return a boolean value based on whether or not the passed
 * number is the number 2.
 *
 * Example
 * > isTwo(1) // returns false
 * > isTwo(2) // returns true
 * > isTwo(3) // returns false
 *
 * Call the function 'isTwo' passing the variable 'random' as a argument.
 *
 * console.log *outside of the function* to check your work (you should see a
 * different result everytime you refresh the page if you are using the random
 * number)
 */

const isTwo = (num) => {
    let number2 = num === 2;
    return number2;
}

//console.log(isTwo(random));

/**
 * TODO:
 * Create a function named 'calculateTip' to calculate a tip on a bill at a
 * restaurant. The function should accept a tip percentage and the total of the
 * bill, and return the amount to tip
 *
 * Examples:
 * > calculateTip(0.20, 20) // returns 4
 * > calculateTip(0.25, 25.50) // returns 6.375
 * > calculateTip(0.15, 33.42) // returns 5.013
 */

// const calculateTip = (total, tip) => {
//     let totalTip = (total * (tip / 100));
//     let formattedTip = totalTip.toLocaleString("en-US", {style:"currency", currency:"USD"});
//     return formattedTip;
// }

const calculateTip = (tipPercentage, billTotal) => {
    let tipPercentageNum = parseFloat(tipPercentage);
    let billTotalNum = parseFloat(billTotal);
    let amountToTip = (tipPercentageNum / 100) * billTotalNum;
    let formattedTip = amountToTip.toLocaleString("en-US", {style:"currency", currency:"USD"});
    return formattedTip;
}

//console.log(`The amount you should tip is ${calculateTip(300, 20)}`);

/**
 * TODO:
 * Use prompt and alert in combination with your calculateTip function to
 * prompt the user for the bill total and a percentage they would like to tip,
 * then display the dollar amount they should tip
 */


// let billTotal = random;
// let restTotal = parseFloat(prompt(`Your bill was ${billTotal}, how much would you like to tip?`));
// let tipTotal = (calculateTip(billTotal, restTotal));
// let formattedCost = tipTotal.toLocaleString("en-US", {style:"currency", currency:"USD"});
// alert(`Your should tip ${formattedCost}`);

let userBill = parseFloat(prompt('How much was your bill?'));
let userTipPercentage = parseFloat(prompt('What percentage would you like to tip?'));
let tipAmount = calculateTip(userTipPercentage, userBill);
let tipInDollars = tipAmount.toLocaleString("en-US", {style:"currency", currency:"USD"});
let tipTotal = alert(tipInDollars);

// console.log(tipTotal);

/**
 * TODO:
 * Create a function named `applyDiscount`. This function should accept a price
 * (before a discount is applied), and a discount percentage (a number between 0
 * and 1). It should return the result of applying the discount to the original
 * price.
 *
 * Example:
 * > var originalPrice = 100;
 * > var discountPercent = .2; // 20%
 * > applyDiscount(originalPrice, discountPercent) // 80
 *
 * > applyDiscount(45.99, 0.12) // 40.4712
 */

// const applyDiscount = (price, discount,) => {
//     let discountTotal = discountPercent * originalPrice;
//     let billTotal = originalPrice - discountTotal;
//     let formattedBill = billTotal.toLocaleString("en-US", {style:"currency", currency:"USD"});
//     return formattedBill;
// }

const applyDiscount = (price, discount) => {
    let appliedDiscount = parseFloat(price) - (parseFloat(price) * parseFloat(discount));
    let applyDiscDollars = appliedDiscount.toLocaleString("en-US", {style:"currency", currency:"USD"});
    return applyDiscDollars;
}

// console.log(applyDiscount(100, .2));


(function(){

})();

const initPage = () => {




}
initPage();