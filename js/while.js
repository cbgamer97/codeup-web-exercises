"use strict";

let i = 2;
while (i <= 65536) {
    console.log(i);
    i*= 2;
}

let i = randomNumber(50, 100);
console.log(`You need to sell: ${i}`)

do {
    let conesSold = randomNumber(1, 5);
    if (conesSold <= i) {
        i -= conesSold;
        console.log(`${conesSold} sold`);
    } else if (conesSold > i) {
        console.log(`Cannot sell you ${conesSold} I only have ${i} left.`)
    }
    if (i === 0){
         console.log('I sold all of my cones!')
     }

} while (i > 0);