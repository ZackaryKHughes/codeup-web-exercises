"use strict";

(function () {
  mapboxgl.accessToken = myMapboxKey;
  let map = new mapboxgl.Map({
    container: "map", // container ID
    style: "mapbox://styles/mapbox/streets-v12", // style URL
    center: [-97.586248, 33.234371], // starting position [lng, lat]
    zoom: 12, // starting zoom
  });

  let restaurants = [
    {
      name: "Sweetie Pie's Ribeyes",
      location: [-97.58745, 33.23393],
      description: "https://sweetiepiesribeyes.com/#section-about",
      menuLink: "https://sweetiepiesribeyes.com/#section-menu",
      image: "sweeties.jpg",
      myDish:
        "Green Chile Burger: We take our Angus burger and heap on green chiles, Monterrey Jack cheese and sautéed onions and serve it on a homemade bun.",
    },
    {
      name: "Casa Torres",
      location: [-97.5875, 33.2146],
      description: "https://decatur-tx.opendi.us/5346545.html",
      menuLink: "https://www.zmenu.com/casa-torres-decatur-online-menu/",
      image: "casaTorres.jpg",
      myDish: "No. 7: 2 sour cream enchiladas rice & beans",
    },
    {
      name: "Roosters Roadhouse BBQ",
      location: [-97.586248, 33.234371],
      description: "http://www.roosters-roadhouse.com/about-us-folder/",
      menuLink: "http://www.roosters-roadhouse.com/menu",
      image: "roostersbbq.jpg",
      myDish:
        "Pulled Pork Nachos: Queso • Shredded cheese • Smashed beans • BBQ sauce • Jalapenos • Mexican pico • Chips",
    },
  ];

  function makeMarkers() {
    restaurants.forEach(function (data) {
      let popup = new mapboxgl.Popup().setHTML(
        `<h3>${data.name}</h3><a href=${data.menuLink} target='_blank'>Menu</a><a href=${data.description} target='_blank'> About us</a><img src="../img/${data.image}" class="card-img-top" alt="..."><p>${data.myDish}</p>`
      );
      new mapboxgl.Marker()
        .setLngLat(data.location)
        .addTo(map)
        .setPopup(popup);
    });
  }

  function removeMarkers() {
   window.location.reload()
  }

  document.querySelector("#add-markers").addEventListener("click", makeMarkers);
  document.querySelector("#hide-markers").addEventListener("click", removeMarkers);

})();
