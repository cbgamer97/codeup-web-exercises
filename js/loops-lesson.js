'use strict';

// basic while loop

let i = 1;
while (i < 10) {
    console.log(`Loop #${i}`);
    i++;
}

// Do while loop

do{
    console.log(`Loop #${i}`);
    i++;
} while
(i < 10)


// FOR LOOPS

for (let i = 0; i <= 10; i++) {
    console.log(`Loop #${i}`);
}


for (let i = 0; i < 10; i++) {
    console.log(i + 1);
}

const getFactorial = (num) => {
    let result = 0;
    for(let i = num; i > 0; i--) {
        let thisResult = i * result;

    }
    return result;
}

getFactorial(5);


const buildPyramid = (rows) => {
    // loop through the rows
    for (let i = 1; i <= rows; i++) {
        let row = "";
        // add loop  to add spaces
        for (let j = 1; j <= rows - i; j++){
            row += "  ";
        }
        // loop to add the asterisks;
        for (let k = 1; k <= 2 * i - 1; k++) {
            row += "* ";
        }


        console.log(row);
    }
}

buildPyramid(5);