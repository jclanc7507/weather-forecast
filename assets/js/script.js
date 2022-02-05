// https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}

// fields in API response:

// for temp in F and wind speed in MPH, use "&units"

// current.dt = current time
// current.weather
// current.weather.icon
// current.temp
// current.humidity
// current.wind_speed
// current.uvi

// daily.dt
// daily.weather.icon
// daily.temp
// daily.wind_speed
// daily.humidity

var fetchBtn = document.getElementById("fetch-btn");
var currentCity = document.getElementById("current");
var currentWeather = document.getElementById("current.weather current.weather.icon");
var currentTemp = document.getElementById("current.temp");
var currentHumid = document.getElementById("current.humidity");
var currentWind = document.getElementById("current.wind_speed");
var currentUvi = document.getElementById("current.uvi");



//$("#fetch-button").on("click", function() {
//    var city = $("#city").val();
//
//    var 
//}

var getCurrentWeather = function() {
    var apiUrl = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&units=imperial&appid=6c67c4835694c684558e73f604f2beb5";
    console.log("fetched api url");
    console.log(apiUrl);
};

getCurrentWeather();