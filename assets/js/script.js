// ("https://api.openweathermap.org/data/2.5/uvi?lat=${lat}&lon=${lon}&units=imperial&appid=6c67c4835694c684558e73f604f2beb5")

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

let uvi = {    
    "apiKey": "6c67c4835694c684558e73f604f2beb5",
    fetchUrl: function (uvi) {
        fetch("https://api.openweathermap.org/data/2.5/uvi?lat=${lat}&lon=${lon}&units=imperial&appid=" + apiKey)
        .then((response) => response.json())
        .then((data) => this.displayWeather(data))
    },   
};  

document.querySelector(".search button").addEventListener("click", function() {
    weather.search();
    uvi.search();
});

document.querySelector(".search-box").addEventListener("keyup", function (event) {
    if (event.key == "Enter") {
        weather.search();
        uvi.search();
    }
});

weather.fetchWeather("Chambersburg");

fetchUvi();