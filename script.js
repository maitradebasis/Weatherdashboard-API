
const apiKey = '1b75cd5a9ba27cba7fcc4314b2f79deb';
async function fetchWeather(city) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;    
    try {
        const response = await fetch (`https://api.openweathermap.org/data/2.5/weather?q=London&appid=${apiKey}&units=metric`)
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching weather data:', error);
        return null;
    }
}

document.getElementById('search-form').addEventListener('submit', async function(event) {
    event.preventDefault();
    const city = document.getElementById('search-input').value;
    const weatherData = await fetchWeather('London');
    

fetchWeather(city)
    .then(data => {
        console.log('Weather data:', data)});
// Here we run our Fetch call to the OpenWeatherMap API
fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
  .then(function (response) {
    // Calling .json() to access the json data stored inside the returned promise
    return response.json();
  })
  // We store all of the retrieved data inside of an object called "data"
  .then(function (data) {

    // Log the queryURL
//    console.log(queryURL);

    // Log the resulting object
    console.log(data);

    // Transfer content to HTML
    $(".London").html("<h1>" + data.name + " Weather Details</h1>");
//    $(".temp").text("Wind Speed: " + data.main.temp);
    $(".wind").text("Wind Speed: " + data.wind.speed);
    $(".humidity").text("Humidity: " + data.main.humidity);

    // Convert the temp to Celsius
    var tempC = data.main.temp;

    // add temp content to html
    $(".temp").text("Temperature (C) " + data.main.temp);
    $(".tempC").text("Temperature (C) " + tempC.toFixed(2));

    // Log the data in the console as well
    console.log("Wind Speed: " + data.wind.speed);
    console.log("Humidity: " + data.main.humidity);
    console.log("Temperature (C): " + tempC);
  });        
    


});