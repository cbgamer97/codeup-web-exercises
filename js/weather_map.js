const SALong = -98.48527;
const SALat = 29.423017;
//
// $.get("http://api.openweathermap.org/data/2.5/forecast", {
//     APPID: OPEN_WEATHER_APPID,
//     lat:    SALat,
//     lon:   SALong,
//     units: "imperial"
// }).done(function(data) {
//     console.log('5 day forecast', data);
//     data.list.forEach((forecast, index) => {
//         // day1
//         if (index % 8 === 0){
//             let day1Date = dateFromTimeStamp(forecast.dt);
//             let day1High = forecast.main.temp_max;
//             let day1Low = forecast.main.temp_min;
//             let day1Wind = `${forecast.wind.speed}mph ${windCardinalDirection(forecast.wind.deg)}`;
//             let day1Pressure = forecast.main.pressure;
//             let day1Humidity = forecast.main.humidity;
//             let day1Description = forecast.weather[0].description;
//             console.log(forecast)
//             console.log(day1Date)
//         }
//     })
// });

(async()=>{
    const weather = async() =>{
        try {
            let response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${SALat}&lon=${SALong}&appid=${OPEN_WEATHER_APPID}`);
            let data = await response.json()
            return data;
        } catch (error) {
            console.log(error);
        }
    };

    mapboxgl.accessToken = MAPBOX_API_TOKEN;
    const map = new mapboxgl.Map({
        container: 'map', // container ID
        style: 'mapbox://styles/mapbox/streets-v12', // style URL
        center: [-98.458570, 29.489620], // starting position [lng, lat]
        zoom: 9, // starting zoom
    });

    let weatherData = await weather();
    console.log(weatherData.list);
    for (let i = 0; i < weatherData.list.length; i++){
        console.log(weatherData.list[i])
    }
})();