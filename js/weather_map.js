const SALong = -98.48527;
const SALat = 29.423017;

(async()=>{
    const weather = async(forecast) =>{
        try {
            let response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${SALat}&lon=${SALong}&units=imperial&appid=${OPEN_WEATHER_APPID}`);
            let data = await response.json()
            return data;
        } catch (error) {
            console.log(error);
        }
    };

    // mapboxgl.accessToken = MAPBOX_API_TOKEN;
    // const map = new mapboxgl.Map({
    //     container: 'map', // container ID
    //     style: 'mapbox://styles/mapbox/streets-v12', // style URL
    //     center: [-98.458570, 29.489620], // starting position [lng, lat]
    //     zoom: 9, // starting zoom
    // });

    let weatherData = await weather();
    // LOOP PUSHING DATA INTO HTML
    weatherData.list.forEach((forecast, index) => {
        // DATA VARIABLES
        let date = dateFromTimeStamp(forecast.dt);
        let humidity = forecast.main.humidity;
        let wind = `${forecast.wind.speed}mph ${windCardinalDirection(forecast.wind.deg)}`;
        let tempHigh = forecast.main.temp_max;
        let tempLow = forecast.main.temp_min;
        let description = forecast.weather[0].description;
        let pressure = forecast.main.pressure;
        let feelsLike = forecast.main.feels_like;
        console.log(forecast)
        switch(index){
            case 0:
                document.querySelector('#day1').setHTML(`
                    <p class="date">${date}</p>
                    <p>${tempLow} / ${tempHigh}</p>
                    <p>${feelsLike}</p>
                    <p>Description: ${description}</p>
                `)
        }
    })
})();