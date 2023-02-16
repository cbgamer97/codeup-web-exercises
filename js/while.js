"use strict";

let i = 1;
let accumulator = 1;
while(i <= 16){
    accumulator *= 2;
    console.log(accumulator)
    i++
}

// let a = 2;
// while (a <= 65536) {
//     console.log(a);
//     a*= 2;
// }

let coneInventory = randomNumber(50, 100);
console.log(`You need to sell: ${coneInventory}`)

// do {
//     let conesSold = randomNumber(1, 5);
//     if (conesSold <= coneInventory) {
//         coneInventory -= conesSold;
//         console.log(`${conesSold} sold`);
//     } else if (conesSold > coneInventory) {
//         console.log(`Cannot sell you ${conesSold} I only have ${coneInventory} left.`)
//     }
//     if (coneInventory === 0){
//          console.log('I sold all of my cones!')
//      }
//
// } while (coneInventory > 0);

do {
    let conesWanted = randomNumber(1, 5);
    if (conesWanted > coneInventory) {
        console.log(`Cannot sell you ${conesWanted}, I only have ${coneInventory}`);
        console.log(`${coneInventory} sold...`);
        coneInventory = 0;
    } else {
        console.log(`{conesWanted} sold...`)
        coneInventory = coneInventory - conesWanted;
    }
    console.log(`${coneInventory} left`);
} while (coneInventory > 0);
console.log('I sold all of my cones!');
