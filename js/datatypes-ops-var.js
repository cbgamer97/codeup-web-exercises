let a = 1;
let b = a++;
let c = ++a;
// what is the value of a, b, and c?
// a = 3 b = 1 c = 3



// console.log(a);
// console.log(b);
// console.log(c);

let d = "hello";
let e = false;

d++;
e++;

//d = NaN
//e = 1

// console.log(d);
// console.log(e);

let perplexed; // perplexed is undefined (no value is assigned)
perplexed + 2;

//NaN

//

 let price = 2.7;
 price.toFixed(2);

// should return 2.70 as a string
// console.log(price);

 let price1 = "2.7";
 price.toFixed(2);
//
// // will receive a runtime error
//
// console.log(price1);

isNaN(0)
//false
isNaN(1)
//false
isNaN("")
//false
isNaN("string")
//true
isNaN("0")
//false
isNaN("1")
//false
isNaN("3.145")
//false
isNaN(Number.MAX_VALUE)
//false
isNaN(Infinity)
//false
isNaN("true")
//true
isNaN(true)
//false
isNaN("false")
//true
isNaN(false)
//false
// to illustrate why the isNaN() function is needed:
NaN == NaN


//!true
//false
//!false
//true
//!!true
//true
//!!false
//false
//!!0
//false
//!!-0
//false
//!!1
//true
//!!-1
//true
//!!0.1
//true
//!!"hello"
//true
//!!""
//false
//!!''
//false
//!!"false"
// false
//!!"0"
//true

let sample = "Hello Codeup";
sample.length;
sample.toLowerCase();
sample = sample + " Students.";
let newClass = sample.replace(" Students", " Class");
// console.log(newClass);

let indexC = newClass.indexOf("C");
 // console.log(indexC);

let substring = newClass.substring(6, 12)
// console.log(substring);

let littleMermaid = 3 * 3;
let broBear =  5 * 3;
let hercules = 1 * 3;
let totalCost = littleMermaid + broBear + hercules;
// console.log(totalCost);

let work = (400 * 6) + (380 * 4) + (350 * 10);
// console.log(work);


let classSize = 19;
let fullClass = 25;
let classTime = 2;
let classStart = 12;

if (classSize < fullClass && classStart !== classTime) {
    console.log("You may enroll in this class!");
} else {
    console.log("You may not enroll.")
}
let months = ["january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"]
let cartSize = 4;
let cartRequirement = 2;
let offerExpires = months.indexOf("april");
console.log(`The offer expires on month ${offerExpires}`);
let memberLevel = "";

if (memberLevel === "premium" ) {
    console.log("You are a valued member, there is no cart requirements here's 20% off!")
} else if (cartSize >= cartRequirement && offerExpires >= months.indexOf("march")) {
    console.log("You met the requirements to receive your discount, here's 20% off!")
} else {
    console.log("Sorry the requirements have not been met.")
}

let username = 'codeup';
let password = 'notastrongpassword';

let password5 = password.length >= 5;
console.log(password5);

let onlyPassword = username.substring(0, 5) !== password;
console.log(onlyPassword);

let lessThan20 = username.length <= 20;
console.log(lessThan20);

let noWhiteSpace1 = username.indexOf(" ") >= 0;
let noWhiteSpace2 = password.indexOf(" ") >= 0;
console.log(noWhiteSpace2);
console.log(noWhiteSpace1);
