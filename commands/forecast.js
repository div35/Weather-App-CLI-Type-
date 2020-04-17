const axios = require("axios");
const ora = require("ora");
const location = require("./../utility/location");
const weather = require("./../utility/weather");

module.exports.forecast = async function forecast(data) {
    var spinner = ora("Loading The Forecast ");
    spinner.start();
    var city = data.l || data.location || await location.location();
    //console.log(city);

    var weather_arr = await weather.weather(city);
    //console.log(weather_arr);
    spinner.stop();
    console.log("Forecast for " + city + " : ");

    for (var i = 0; i < weather_arr.length; i++) {
        console.log("        " + weather_arr[i].applicable_date + " - " + "Low: " + Math.floor(weather_arr[i].min_temp) + "°C | " + "High: " + Math.floor(weather_arr[i].max_temp) + "°C | " + weather_arr[i].weather_state_name);
    }
    console.log("\n");
}

