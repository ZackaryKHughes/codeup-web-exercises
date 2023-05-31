(function () {
  mapboxgl.accessToken = weatherMapBox;
  let map = new mapboxgl.Map({
    container: "map", // container ID
    style: "mapbox://styles/mapbox/streets-v12", // style URL
    center: [-97.238075, 33.261505], // starting position [lng, lat]
    zoom: 12, // starting zoom
  });

  $.get("https://api.openweathermap.org/data/2.5/weather", {
    APPID: weatherMapKey,
    q: "San Antonio, US",
  }).done(function (data) {
  });

  let latLong =[33.261505, -97.238075];
  $.get(`https://api.openweathermap.org/data/2.5/forecast?lat=${latLong[0]}&lon=${latLong[1]}&units=imperial&appid=${weatherMapKey}`).done(function(data){
    console.log(data)
    let todayDate = new Date(data.list[0].dt * 1000);
    let month;
    let day;

    switch (todayDate.getMonth()) {
      case 0:
        month = 'January';
        break;
      case 1:
        month = 'February';
        break;
      case 2:
        month = 'March';
        break;
      case 3:
        month = 'April';
        break;
      case 4:
        month = 'May';
        break;
      case 5:
        month = 'June';
        break;
      case 6:
        month = 'July';
        break;
      case 7:
        month = 'August';
        break;
      case 8:
        month = 'September';
        break;
      case 9:
        month = 'October';
        break;
      case 10:
        month = 'November';
        break;
      case 11:
        month = 'December';
        break;
      default:
        month = 'Unknown';
        break;
    }

    switch (todayDate.getDay()) {
      case 0:
        day = 'Sunday';
        break;
      case 1:
        day = 'Monday';
        break;
      case 2:
        day = 'Tuesday';
        break;
      case 3:
        day = 'Wednesday';
        break;
      case 4:
        day = 'Thursday';
        break;
      case 5:
        day = 'Friday';
        break;
      case 6:
        day = 'Saturday';
        break;
      default:
        day = 'Stan\'s Day';
        break;
    }



    let weatherHTML = `<section><h4>${day}, ${month}, ${todayDate.getDate()}</h4><p>${data.list[0].main.temp_max} / ${data.list[0].main.temp_min}</p><p>${data.list[0].wind.speed + 'mph'}</p><p>${data.list[0].weather[0].main}</p></section>`;
    $('#weather-info3').html(weatherHTML);
  })




})();
