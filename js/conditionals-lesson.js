"use strict";

// let question = prompt("Welcome to Codeup Ice Cream! What flavor do you want?");

// if (flavor === "chocolate") {
//     alert("One chocolate coming up!")
// } else if (flavor === "vanilla") {
//     alert("One vanilla coming up!")
// } else {
//     alert("We don't have that flavor, sorry :(");
// }

// switch(flavor.toLowerCase()) {
//     case ("chocolate"):
//         alert("One chocolate coming up!");
//         break;
//     case ("vanilla"):
//         alert("One vanilla coming up!");
//         break;
//     case ("strawberry"):
//         alert("One strawberry coming up!");
//         break;
//     default:
//         alert("We don't have that flavor, sorry :(");
// }

const serveIceCream = (flavor) => {
    if (flavor === "chocolate" || flavor === "vanilla" || flavor === "strawberry") {
        alert (`One ${flavor} coming right up!`)
    } else {
        alert("We don't have that flavor, sorry :(");
    }
}

const divisibleByFive = (number) => {
    if (number % 5 === 0) {
        console.log("Divisible by 5!");
    } else {
        console.log("Not divisible by 5!");
    }
}

const divisibleByFiveTernary = number => {
    number % 5 === 0 ? console.log("Divisible by 5!") : console.log("Not divisible by 5!");
}



