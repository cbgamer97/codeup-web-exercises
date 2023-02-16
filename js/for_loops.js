"use strict";

const randomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
const showMultiplicationTable = (number) => {
    let result;
    for (let i = 1; i < 11; i++) {
        result = number * i;
        console.log(`${number} * ${i} is equal to: ${result}`);
    }

}

// showMultiplicationTable(7);

for (let i = 1; i < 11; i++) {
    let numGenerator = randomNumber(20, 200);
    if (numGenerator % 2 === 0) {
        console.log(`Your number, ${numGenerator} is even`);
    } else {
        console.log(`Your number, ${numGenerator} is odd`);
    }
}

const numberPyramid = (rows) => {
    for (let i = 1; i <= rows; i++){
        console.log(`${i}`.repeat(i));
    }
}
// numberPyramid(5);

for (let i = 100; i >= 5; i-= 5) {
    console.log(i);

}