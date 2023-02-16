"use strict";

while(true){
    const number = parseFloat(prompt('Enter odd number'));
    if (number % 2 === 1) {
        for (let i = 1; i <= 50; i += 2){
            if(i === number) continue;
            console.log(`You have an odd number: ${i}`);
        }
        break;
    }
}