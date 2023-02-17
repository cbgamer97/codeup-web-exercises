"use strict";

let daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

const myName = 'Connor';

const sPosition = myName.indexOf('n');

// TURN STRING INTO AN ARRAY
// const myNameArray = myName.split('');
//
//
// const thursday = daysOfWeek.indexOf('Thursday');
//
// const removeSunday = daysOfWeek.pop();
//
// const removeFirst = daysOfWeek.shift();

// REMOVING AN ITEM FROM THE MIDDLE OF AN ARRAY

const indexOFThursday = daysOfWeek.indexOf('Thursday');
const lastHalf = daysOfWeek.slice(indexOFThursday + 1);
const firstHalf = daysOfWeek.slice(0, indexOFThursday);
// daysOfWeek = daysOfWeek.slice(0, indexOFThursday).join(',') + ',';
// daysOfWeek += lastHalf.join(',');
// daysOfWeek.split(',');

// SPREAD OPERATOR

// daysOfWeek = [
//     ...firstHalf,
//     ...lastHalf,
//     "Merrellday"
// ];
//
// console.log(daysOfWeek);

// SPLICE

// const removedDay = daysOfWeek.splice(indexOFThursday, 1);
// console.log(daysOfWeek);
// console.log(removedDay);

// SORT METHOD

// console.log(daysOfWeek.sort());

