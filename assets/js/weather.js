var cityFormEl = document.querySelector("#city-form");
var cityInputEl = document.querySelector("#city");
var apiKey = "38de1bdb444f9c9452356228729d5cbc";

var formSubmitHandler = function (event) {
    event.preventDefault();
    var city = cityInputEl.value.trim();

    if (city) {
        getWeatherRepo(city);
        cityInputEl.value = "";
    } else {
        alert("Enter a City");
    }
    console.log(event);
}

var getWeatherRepo = function (weather) {
    //format the weather api url
    var apiUrl = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + apiKey;

    //make a request to the url
    fetch(apiUrl).then(function (response) {
        response.json().then(function (data) {
            console.log(data);
        });
    });
};

cityFormEl.addEventListener("submit", formSubmitHandler);