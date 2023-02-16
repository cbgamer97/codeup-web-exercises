"use strict";

// while(true){
//     const number = parseFloat(prompt('Enter odd number'));
//     if (number % 2 === 1) {
//         for (let i = 1; i <= 50; i += 2){
//             if(i === number) continue;
//             console.log(`You have an odd number: ${i}`);
//         }
//         break;
//     }
// }

(() => {

    let userPrompt;
    let userPromptNum;
    while(true){
        userPrompt = prompt('Enter odd number');
        userPromptNum = parseInt(userPrompt);
        if(userPromptNum % 2 !== 1 && !(userPromptNum >= 1) && !(userPromptNum <= 50)){
            break;
        }
    }
    for(let i = 1; i <= 49; i += 2){
        if(i === userPromptNum) {
            console.log(`Your skipping number is: ${i}`)
            continue;
        }
        console.log(`You have an odd number: ${i}`);
    }

})();