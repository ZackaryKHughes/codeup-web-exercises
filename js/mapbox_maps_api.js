"use strict";

(function () {
    mapboxgl.accessToken = myMapboxKey;
    let map = new mapboxgl.Map({
        container: 'map', // container ID
        style: 'mapbox://styles/mapbox/streets-v12', // style URL
        center: [-97.586248, 33.234371], // starting position [lng, lat]
        zoom: 12, // starting zoom
    });

    let restaurants = [{
        name: 'Sweetie Pie\'s Ribeyes',
        location: [-97.58745, 33.23393],
        description: 'https://sweetiepiesribeyes.com/#section-about',
        menuLink: 'https://sweetiepiesribeyes.com/#section-menu',
        image: 'sweeties.jpg',
    }, {
        name: 'Casa Torres',
        location: [-97.5875, 33.2146],
        description: 'https://decatur-tx.opendi.us/5346545.html',
        menuLink: 'https://www.zmenu.com/casa-torres-decatur-online-menu/',
        image: 'casaTorres.jpg'
    }, {
        name: 'Roosters Roadhouse BBQ',
        location: [-97.586248, 33.234371],
        description: 'http://www.roosters-roadhouse.com/about-us-folder/',
        menuLink: 'http://www.roosters-roadhouse.com/menu',
        image: 'roostersbbq.jpg'
    }]

    function makeMarkers() {
        restaurants.forEach(function (data) {
            let popup = new mapboxgl.Popup().setHTML(
                `<h3>${data.name}</h3><a href=${data.menuLink} target='_blank'>Menu</a><a href=${data.description} target='_blank'> About us</a><img src="../img/${data.image}" class="card-img-top" alt="...">`
            );
            let marker = new mapboxgl.Marker()
                .setLngLat(data.location)
                .addTo(map)
                .setPopup(popup);
        });
    }

    document.querySelector("#add-markers").addEventListener("click", makeMarkers);



    // // Markers
    // let sweeties = new mapboxgl.Marker()
    //     .setLngLat([-97.58745, 33.23393])
    //     .addTo(map);
    //
    // let casaTorres = new mapboxgl.Marker()
    //     .setLngLat([-97.5875, 33.2146])
    //     .addTo(map);
    //
    //
    // let roosters = new mapboxgl.Marker()
    //     .setLngLat([-97.586248, 33.234371])
    //     .addTo(map);
    //
    //
    // // Popups
    // let roostersPopup = new mapboxgl.Popup()
    //     .setHTML('<img src="img/roostersbbq.jpg" alt="Roosters Roadhouse BBQ Logo"/>')
    //
    // roosters.setPopup(roostersPopup)
    //
    // let sweetiesPopup = new mapboxgl.Popup()
    //     .setHTML('<img src="img/sweeties.jpg" alt="Sweetie Pies Logo"/>')
    //
    // roosters.setPopup(sweetiesPopup)
    //
    // let casaTorresPopup = new mapboxgl.Popup()
    //     .setHTML('<img src="img/casaTorres.jpg" alt="Casa Torres Logo"/>')
    //
    // roosters.setPopup(casaTorresPopup)
})();