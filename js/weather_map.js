(function () {
  mapboxgl.accessToken = weatherMapBox;
  let map = new mapboxgl.Map({
    container: "map", // container ID
    style: "mapbox://styles/zackhughes/clidafkkj000t01qh5zwkf6zh", // style URL
    center: [-97.238075, 33.261505], // starting position [lng, lat]
    zoom: 12, // starting zoom
  });

  $.get("https://api.openweathermap.org/data/2.5/weather", {
    APPID: weatherMapKey,
    q: "Krum, US",
  }).done(function (data) {
  });


  let latLong =[-97.238075, 33.261505];
  $.get(`https://api.openweathermap.org/data/2.5/forecast?lat=${latLong[0]}&lon=${latLong[1]}&units=imperial&appid=${weatherMapKey}`).done(function(data){
    console.log(data)
  })



  $(window).on("load", function () {
    $.get(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${latLong[1]}&lon=${latLong[0]}&units=imperial&appid=${weatherMapKey}`
    ).done(function (data) {
      console.log(data);

      $("#card-container").empty();
      $(".header")
          .empty()
          .append(`<h1>${data.city.name} ${data.city.country}</h1>`);
      weatherData(data)
    });
  });

  let updatedCoordinates = [];
  const marker = new mapboxgl.Marker({
    draggable: true,
  })
      .setLngLat(latLong)
      .addTo(map);

  marker.on("dragend", onDragEnd);

  function onDragEnd() {
    updatedCoordinates = [];
    let lngLat = marker.getLngLat();
    updatedCoordinates.push(lngLat.lng);
    updatedCoordinates.push(lngLat.lat);
    console.log(updatedCoordinates);

    $.get(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${updatedCoordinates[1]}&lon=${updatedCoordinates[0]}&units=imperial&appid=${weatherMapKey}`
    ).done(function (data) {

      $("#card-container").empty();
      $(".header").empty();
      $(".header").append(`<h1 class="text-info">${data.city.name} ${data.city.country}</h1>`);
      weatherData(data)
    });
  }

  let searchLocation = document.querySelector("#user-search");

  $("#user-search-button").on("click", function (event) {
    event.preventDefault();
    marker.remove();
    let userLocation = geocode(`${searchLocation.value}`, weatherMapBox);
    userLocation.then(function (data) {
      marker.setLngLat(data).addTo(map);
      map.flyTo({
        center: data,
        essential: true,
      });
      $.get(
          `https://api.openweathermap.org/data/2.5/forecast?lat=${data[1]}&lon=${data[0]}&units=imperial&appid=${weatherMapKey}`
      ).done(function (data) {
        $("#card-container").empty();
        $(".header").empty();
        $(".header").append(`<h1 class="text-info">${data.city.name} ${data.city.country}</h1>`);
        weatherData(data)
      });
    });
  });


  function weatherData(data) {
    data.list.forEach(function (item, index) {
      let milliseconds = (item.dt * 1000)
      if (index % 8 === 0) {
        $("#card-container").append(`<div class="card col">
  <div class="card-header ">
    <h6>${new Date(milliseconds).toDateString()}</h6>
  </div>
  <ul class="list-group">
    <li class="list-group-item">Temp: ${item.main.temp.toFixed(0)}&#8457</li>
    <li class="list-group-item">Feels Like: ${item.main.feels_like.toFixed(
            0
        )}&#8457</li>
        <li class="list-group-item">Wind: ${item.wind.speed.toFixed(0)}mph</li>
    <li class="list-group-item">Chance of Rain: ${(item.pop * 100).toFixed(
            0
        )} % </li>
  </ul>
</div>`);
      }
    });
  }
})();
