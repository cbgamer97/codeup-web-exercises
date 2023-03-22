


document.getElementById('zoomSubmit').addEventListener('click', event =>{
    event.preventDefault();
    map.setZoom(document.getElementById('zoom').value);
});



document.getElementById('setMarkerButton').addEventListener('click', event => {
    event.preventDefault();
    const address = document.getElementById('setMarker').value;
    geocode(address, MAPBOX_API_TOKEN).then(coords=>{
        const newMarker = new mapboxgl.Marker()
            .setLngLat(coords)
            .addTo(map);
        map.setCenter(coords);
    });
});

const restaurants = [
    {
        name: "Julian's Italian Pizzeria and Kitchen",
        cuisine: 'Italian',
        longitude: -98.45627643064857,
        latitude: 29.500807998696594,
    },
    {
        name: "Jim's",
        cuisine: 'American/Diner',
        longitude: -98.46505667194478,
        latitude: 29.518241356291423,
    },
    {
        name: "Tong's Thai",
        cuisine: 'Thai Food',
        longitude: -98.44818834665034,
        latitude: 29.48679578209198,
    }
]

restaurants.forEach(restaurant=>{
    const marker = new mapboxgl.Marker()
        .setLngLat([restaurant.longitude, restaurant.latitude])
        .addTo(map)
    const popup = new mapboxgl.Popup()
        .setHTML(`
            <p class="popup">${restaurant.name}</p>
            <p class="popup">${restaurant.cuisine}</p>
        `)
    marker.setPopup(popup);
})