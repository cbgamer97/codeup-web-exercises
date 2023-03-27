const SALong = -98.48527;
const SALat = 29.423017;

(async()=>{

    mapboxgl.accessToken = MAPBOX_API_TOKEN;
    const map = new mapboxgl.Map({
        container: 'map', // container ID
        style: 'mapbox://styles/mapbox/dark-v10', // style URL
        center: [-98.458570, 29.489620], // starting position [lng, lat]
        zoom: 9, // starting zoom
    });

    const weather = async(lat, lng) =>{
        try {
            let response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lng}&units=imperial&appid=${OPEN_WEATHER_APPID}`);
            let data = await response.json()
            return data;
        } catch (error) {
            console.log(error);
        }
    };

    let SaWeatherData = await weather(SALat, SALong);


    // LOOP PUSHING DATA INTO HTML
    SaWeatherData.list.forEach((forecast, index) => {
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
        if (index === 0){
                document.querySelector('#day1').setHTML(`
                    <p class="date">${date}</p>
                    <p>Low: ${tempLow}</p>
                    <p>High: ${tempHigh}</p>
                    <p>Feels Like: ${feelsLike}</p>
                    <p>Description: ${description}</p>
                    <p>Humidity: ${humidity}</p>
                    <p>Wind: ${wind}</p>
                    <p>Pressure: ${pressure}</p>
                `)
        } else if (index === 8){
            document.querySelector('#day2').setHTML(`
                    <p class="date">${date}</p>
                    <p>Low: ${tempLow}</p>
                    <p>High: ${tempHigh}</p>
                    <p>Feels Like: ${feelsLike}</p>
                    <p>Description: ${description}</p>
                    <p>Humidity: ${humidity}</p>
                    <p>Wind: ${wind}</p>
                    <p>Pressure: ${pressure}</p>
                `)
        } else if (index === 16){
            document.querySelector('#day3').setHTML(`
                    <p class="date">${date}</p>
                    <p>Low: ${tempLow}</p>
                    <p>High: ${tempHigh}</p>
                    <p>Feels Like: ${feelsLike}</p>
                    <p>Description: ${description}</p>
                    <p>Humidity: ${humidity}</p>
                    <p>Wind: ${wind}</p>
                    <p>Pressure: ${pressure}</p>
                `)
        } else if (index === 24){
            document.querySelector('#day4').setHTML(`
                    <p class="date">${date}</p>
                    <p>Low: ${tempLow}</p>
                    <p>High: ${tempHigh}</p>
                    <p>Feels Like: ${feelsLike}</p>
                    <p>Description: ${description}</p>
                    <p>Humidity: ${humidity}</p>
                    <p>Wind: ${wind}</p>
                    <p>Pressure: ${pressure}</p>
                `)
        } else if (index === 32){
            document.querySelector('#day5').setHTML(`
                    <p class="date">${date}</p>
                    <p>Low: ${tempLow}</p>
                    <p>High: ${tempHigh}</p>
                    <p>Feels Like: ${feelsLike}</p>
                    <p>Description: ${description}</p>
                    <p>Humidity: ${humidity}</p>
                    <p>Wind: ${wind}</p>
                    <p>Pressure: ${pressure}</p>
                `);
        }
    });


    document.getElementById('city-submit').addEventListener('click', async (event) => {
        event.preventDefault();
        const address = document.getElementById('city-search').value;
        geocode(address, MAPBOX_API_TOKEN).then(async coords => {
            const newMarker = new mapboxgl.Marker({
                draggable: true
            })
                .setLngLat(coords)
                .addTo(map);
            map.setCenter(coords);
        //     let newWeather = await weather(coords[0], coords[1]);
        //     newWeather.list.forEach((forecast, index) => {
        //         // DATA VARIABLES
        //         let date = dateFromTimeStamp(forecast.dt);
        //         let humidity = forecast.main.humidity;
        //         let wind = `${forecast.wind.speed}mph ${windCardinalDirection(forecast.wind.deg)}`;
        //         let tempHigh = forecast.main.temp_max;
        //         let tempLow = forecast.main.temp_min;
        //         let description = forecast.weather[0].description;
        //         let pressure = forecast.main.pressure;
        //         let feelsLike = forecast.main.feels_like;
        //         console.log(forecast)
        //         if (index === 0){
        //             document.querySelector('#day1').setHTML(`
        //             <p class="date">${date}</p>
        //             <p>Low: ${tempLow}</p>
        //             <p>High: ${tempHigh}</p>
        //             <p>Feels Like: ${feelsLike}</p>
        //             <p>Description: ${description}</p>
        //             <p>Humidity: ${humidity}</p>
        //             <p>Wind: ${wind}</p>
        //             <p>Pressure: ${pressure}</p>
        //         `)
        //         } else if (index === 8){
        //             document.querySelector('#day2').setHTML(`
        //             <p class="date">${date}</p>
        //             <p>Low: ${tempLow}</p>
        //             <p>High: ${tempHigh}</p>
        //             <p>Feels Like: ${feelsLike}</p>
        //             <p>Description: ${description}</p>
        //             <p>Humidity: ${humidity}</p>
        //             <p>Wind: ${wind}</p>
        //             <p>Pressure: ${pressure}</p>
        //         `)
        //         } else if (index === 16){
        //             document.querySelector('#day3').setHTML(`
        //             <p class="date">${date}</p>
        //             <p>Low: ${tempLow}</p>
        //             <p>High: ${tempHigh}</p>
        //             <p>Feels Like: ${feelsLike}</p>
        //             <p>Description: ${description}</p>
        //             <p>Humidity: ${humidity}</p>
        //             <p>Wind: ${wind}</p>
        //             <p>Pressure: ${pressure}</p>
        //         `)
        //         } else if (index === 24){
        //             document.querySelector('#day4').setHTML(`
        //             <p class="date">${date}</p>
        //             <p>Low: ${tempLow}</p>
        //             <p>High: ${tempHigh}</p>
        //             <p>Feels Like: ${feelsLike}</p>
        //             <p>Description: ${description}</p>
        //             <p>Humidity: ${humidity}</p>
        //             <p>Wind: ${wind}</p>
        //             <p>Pressure: ${pressure}</p>
        //         `)
        //         } else if (index === 32){
        //             document.querySelector('#day5').setHTML(`
        //             <p class="date">${date}</p>
        //             <p>Low: ${tempLow}</p>
        //             <p>High: ${tempHigh}</p>
        //             <p>Feels Like: ${feelsLike}</p>
        //             <p>Description: ${description}</p>
        //             <p>Humidity: ${humidity}</p>
        //             <p>Wind: ${wind}</p>
        //             <p>Pressure: ${pressure}</p>
        //         `);
        //         }
        //     });

        });

    });

})();