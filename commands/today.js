const axios = require("axios");
const ora = require("ora");
const location = require("./../utility/location");
const weather = require("./../utility/weather");

module.exports.today = async function today(data) {
    var spinner = ora("Loading Today's Weather");
    spinner.start();

    var city = data.l || data.location || await location.location();

    var weather_arr = await weather.weather(city);
    //console.log(weather_arr);
    spinner.stop();

    console.log("Current condition in " + city + " : \n" + "        " + Math.floor(weather_arr[0].the_temp) + "°C " + weather_arr[0].weather_state_name);
    console.log("\n");
}

