'use strict';

// OBJECT LITERALS

const currentWeather = {
    temperature: 54.4,
    humidity: 28,
    clouds: 0,
    windDirection: "NNE"
}

//  TO ACCESS OBJECT PROPERTIES, USE DOT NOTATION
// RETURNS 54.4
// console.log(currentWeather.temperature);

const displayWeatherProperty = (property) => {
    // console.log(currentWeather[property]);
}

if(currentWeather.temperature < 80){
    // // console.log("It's so cold!");
} else {
    // // console.log("Ahh nice and warm");
}

for (let property in currentWeather){
    // // console.log(property);
    // // console.log(currentWeather[property]);
    // // console.log(property + ": " + currentWeather[property])
}

const hourlyWeather = [
    {
        time: "08:00",
        temperature: 78.91,
        feels_like: 78.91
    },
    {
        time: "09:00",
        temperature: 79.57,
        feels_like: 79.57
    },
    {
        time: "10:00",
        temperature: 81.46,
        feels_like: 86.04
    },
    {
        time: "11:00",
        temperature: 84.49,
        feels_like: 89.24
    }
];

// hourlyWeather.forEach(hourlyForecast => console.log(hourlyForecast.temperature));


// hourlyWeather.forEach(({time, temperature, feels_like}) =>
// console.log(`At ${time} the temperature will be ${temperature}`));

for (let i = 0; i < hourlyWeather.length; i++){
    console.log(hourlyWeather[i].temperature);
};


// METHODS

const fighter = {
    name: 'Arata',
    hitPoints: 18,
    maxDamage: 8
};

const fighter2 = {
    name: 'BigFoot',
    hitPoints: 17,
    maxDamage: 10,
};

const monster = {
    name: 'goblin',
    hitPoints: 8,
    maxDamage: 6
};

//          CONTROLLER AND VIEW ARE PART OF A DESIGN PATTERN CALLED MODEL-VIEW-CONTROLLER

//          CONTROLLER AS METHODS THAT CONTROL EFFECTS ON GAME STATES
//   FOR EXAMPLE, IT WOULD TAKE USER INPUT AND DETERMINE THE EFFECT OF USER ACTIONS ON THE PROGRAM

const controller = {
    attack: function(attacker, defender) {
        const startingHp = defender.hitPoints;
        const damage = Math.ceil(Math.random() * attacker.maxDamage);
        defender.hitPoints -= damage;
        view.displayAttackResults(attacker.name, defender.name, startingHp, defender.hitPoints, damage);
    }
};

// ABSTRACT ALL OUR OUTPUT INTO A VIEW OBJECT
// THAT ALLOWS US TO SEPARATE CONCERNS
// SO OUR PROGRAM LOGIC IS INDEPENDENT OF OUR OUTPUT

const view = {
    displayAttackResults: function(attackerName, defenderName, hpBeforeAttack, hpAfterAttack, damage) {
        console.log(`${defenderName} has ${hpBeforeAttack} hit points!`);
        console.log(`${attackerName} attacks!`)
        console.log(`${attackerName} does ${damage} hit points!`);
        console.log(`${defenderName} now has ${hpAfterAttack} hit points left!`);
        console.log('----------------')
    }
};

// ====== CONSTRUCTOR FUNCTION ========


function Goblin (name, hitPoints, maxDamage) {
    this.name = name;
    this.hitPoints = hitPoints;
    this.maxDamage = maxDamage;
};

// const goblin1 = new Goblin("goblin 1", 8, 6);
// const goblin2 = new Goblin("goblin 2", 8, 6);
// const goblin3 = new Goblin("goblin 2", 8, 6);


// CREATE AN ARRAY
const goblins = []
goblins.push(new Goblin("goblin 1"));
goblins.push(new Goblin("goblin 2"));
goblins.push(new Goblin("goblin 2"));

// LOOP OVER THE GOBLINS ARRAY

goblins.forEach(goblin => controller.attack(goblin, fighter));


//LOOP OVER THE GOBLINS ARRAY TO DISPLAY DATA

// goblins.forEach(goblin => {
//     console.log(goblin.name);
//     console.log(goblin.hitPoints);
//     console.log(goblin.maxDamage);
// })

goblins.forEach(function (goblin){
    console.log(goblin.name);
    console.log(goblin.hitPoints);

})


// USE A FOR LOOP TO ITERATE OVER AN ARRAY OF OBJECTS

for (let i = 0; i < goblins.length; i++){
    console.log("We are at index " + 1);
    console.log(goblins[i].name);
    console.log(goblins[i].hitPoints);
}