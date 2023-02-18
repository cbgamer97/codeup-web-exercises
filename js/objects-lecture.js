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
}