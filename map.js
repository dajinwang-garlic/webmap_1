console.log("Hello, world!")
https://dajinwang-garlic.github.io/webmap_1/
'use strict'        // let the browser know we're serious

// debug statement letting us know the file is loaded
console.log('Loaded map.js')

// your mapbox token
mapboxgl.accessToken = 'pk.eyJ1IjoiZGFqaW4iLCJhIjoiY21vdWg0M2xiMGc0eTJ4cG9vMnk1dHpqbCJ9.44fqVN-unJH4RMGWoE2G-A'
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/light-v11',
    center: [-73.93324, 40.80877],
    zoom: 14
});
