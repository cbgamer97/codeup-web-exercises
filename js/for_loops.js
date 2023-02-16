"use strict";

const randomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
const showMultiplicationTable = (number) => {
    let result = '';
    for (let i = 1; i < 11; i++) {
        let daMath = parseInt(number) * i;
        let output = `${number} * ${i} is equal to: ${daMath}\n`
        result += output;
    }
    return result;
}

// let sevenTable = showMultiplicationTable(7);
// console.log(sevenTable);

for (let i = 1; i < 11; i++) {
    let numGenerator = randomNumber(20, 200);
    if (numGenerator % 2 === 0) {
        console.log(`Your number, ${numGenerator} is even`);
    } else {
        console.log(`Your number, ${numGenerator} is odd`);
    }
}

// LOOP WITHIN A LOOP
 for (let i = 0; i < 9; i++){
     let output = `${i+1}`;
     // LOOP AGAIN WITH I AS MY DECLARATION. CONDITION IS >= 0. DECREMENT.
     for(let j = i; j > 0; j--){
         let moNumbers = `${i+1}`;
         output += moNumbers;
     }
     console.log(output);
 }



// const numberPyramid = (rows) => {
//     for (let i = 1; i <= rows; i++){
//         console.log(`${i}`.repeat(i));
//     }
// }
//  numberPyramid(9);

for (let i = 100; i >= 5; i-= 5) {
    console.log(i);

}