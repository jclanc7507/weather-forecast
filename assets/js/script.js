// ("https://api.openweathermap.org/data/2.5/weather?q=chambersburg&exclude=minutely&units=imperial&appid=6c67c4835694c684558e73f604f2beb5")

let weather = {
    // fetching weather elements from json
    "apiKey": "6c67c4835694c684558e73f604f2beb5",
    fetchWeather: function(city) {
        fetch("https://api.openweathermap.org/data/2.5/weather?q=" 
        + city 
        + "&exclude=minutely&units=imperial&appid=" 
        + this.apiKey
        )
        .then((response) => response.json())
        .then((data) => this.displayWeather(data));
    },
    // displaying weather elements on web page
    displayWeather: function(data) {
        const { name } = data; 
        const { icon, description } = data.weather[0];
        const { temp, humidity } = data.main;
        const { speed } = data.wind;
        document.querySelector(".city").innerText = "Weather in " + name;
        document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon + ".png";
        document.querySelector(".temp").innerText = temp + "°F";
        document.querySelector(".icon").innerText = icon;
        document.querySelector(".description").innerText = description;
        document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%";
        document.querySelector(".wind").innerText = "Wind Speed: " + speed + "mph";
        document.querySelector(".weather").classList.remove("loading");
        document.body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?" + name + "')"
    },
    search: function() {
       this.fetchWeather(document.querySelector(".search-box").value);
    },
};

function fiveDay () {
    var lat = object.coord.lat;
    var lon = object.coord.lon;
    var apiUrl = "https://api.openweathermap.org/data/2.5/uvi?lat=" + lat + "&lon=" + lon + "&appid=" + apiKey;

    $.ajax({
        method: "GET",
        url: apiUrl
    }).then(function (Response) {
        var 
    })


};

function searchHistory () {
    var location = localStorage.getItem("name", JSON.stringify(data));
    if (location !== null) {
        printButtonInfo(location);
        renderLastButtons();
    }
};

document.querySelector(".search button").addEventListener("click", function() {
    weather.search();
});

document.querySelector(".search-box").addEventListener("keyup", function (event) {
    if (event.key == "Enter") {
        weather.search();
    }
});

weather.fetchWeather("Chambersburg");

searchHistory();