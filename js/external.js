"use strict";
console.log("Hello from external JavaScript");
alert("Welcome to my Website!");
let favoriteColor = prompt("What is your favorite color?");
alert(`${favoriteColor} is my favorite color too!`);


// movies problem My Code

let moviesRented = prompt("What movies would you like to rent, and for how long?");
let littleMermaid = 3 * 3;
let broBear =  5 * 3;
let hercules = 1 * 3;
let totalCost = littleMermaid + broBear + hercules;
let movieCost = alert(`The cost to rent ${moviesRented} is $${totalCost}`);

let priceInput = prompt('How much does a movie cost per day?');
let pricePerDay = parseFloat(priceInput);
let movie1Name = prompt('What was the name of the first movie?');
let movie1Input = prompt(`How many days did you rent ${movie1Name}?`);
let movie1 = parseFloat(movie1Input);
let movie2Name = prompt('What was the name of the second movie?');
 let movie2Input = prompt(`How many days did you rent ${movie2Name}?`);
 let movie2 = parseFloat(movie2Input);
 let movie3Name = prompt('What was the name of the third movie?')
 let movie3Input = prompt(`How many days did you rent ${movie3Name}?`);
 let movie3 = parseFloat(movie3Input);
let totalMovieCost = pricePerDay * (movie1 + movie2 + movie3);
alert(`The total cost of your rentals is ${totalMovieCost.toLocaleString("en-US", {style:"currency", currency:"USD"})}`);


// payment problem

let googlePay = parseFloat(prompt('How much does Google pay you per hour?'));
let googleHours = parseFloat(prompt('How many hours did you work for Google?'));
let google = googlePay * googleHours;
let metaPay = parseFloat(prompt('How much did Meta pay you per hour?'));
let metaHours = parseFloat(prompt('How many hours did you work for Meta?'));
let meta = metaPay * metaHours;
let amazonPay = parseFloat(prompt('How much did Amazon pay you per hour?'));
let amazonHours = parseFloat(prompt('How many hours did you work for Amazon?'));
let amazon = amazonPay * amazonHours;
let paycheck = google + meta + amazon;
let formattedPaycheck = paycheck.toLocaleString("en-US", {style:"currency", currency:"USD"});
alert(`Your paycheck will be ${formattedPaycheck}`);


//class schedule problem


let scheduleConflicts = false;
let maxClassSize = parseInt(prompt('What is the maximum size of the class?'));
let currentClassSize = parseInt(prompt('What is the current size of the class?'));
let canEnroll = !scheduleConflicts && (currentClassSize < maxClassSize);
alert(`It is ${canEnroll} that the student can enroll in the class.`);

//grocery store problem

let minCartSize = 2;
let cartSize = parseInt( prompt('How many items did you purchase?') );
let premiumMember = confirm('Are you a premium member?');
let offerExpired = confirm('Has the offer expired?');
let canOfferApply = (premiumMember || (cartSize > minCartSize)) && !offerExpired;
alert(`It is ${canOfferApply} that the offer does apply.`);