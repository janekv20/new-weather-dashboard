//define global variables

var cityFormEl = document.querySelector("#city-form");
var cityInputEl = document.querySelector("#city");
var currentContainerEl = document.querySelector("#current-container");
var citySearch = document.querySelector(".searchHistory");
var repoSearchTerm = ("#rep-search-term");
var apiKey = "38de1bdb444f9c9452356228729d5cbc";
var apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=";
var cityName

// Search city form/function
var formSubmitHandler = function (e) {
    e.preventDefault();
    cityName = cityInputEl.value.trim();
    //check if city is typed in text field
    if (cityName) {
        getWeatherRepo(cityName);

        var searchButton = document.createElement("button");
        currentContainerEl.textContent = "";
        searchButton.textContent = cityName;
        searchButton.addEventListener("click", function () {

        })
        citySearch.appendChild(searchButton);

    } else {
        alert("Enter a City");
    }
}

function getWeatherRepo(city) {
    //format the weather api url for city
    var weatherUrl = apiUrl + cityName + "&appid=" + apiKey;

    //make a request to the url
    fetch(weatherUrl).then(function (response) {
        if (response.ok) {
            return response.json()
        } else {
            alert("Error: Weather Data Not Found");
        }
    })
        .then((data) => {


            displayWeather(data);
        })

}

var displayWeather = function (data) {
    currentContainerEl.textContent = ('City: ' + data.name + ' Temperature: ' + data.main.temp + ' Wind Speed: ' + data.wind.speed + ' Humidity: ' + data.main.humidity + ' Currently Feesl Like: ' + data.main.feels_like);




};

cityFormEl.addEventListener("submit", formSubmitHandler);