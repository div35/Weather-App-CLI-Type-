const axios = require("axios");
// const location = require("./location");

module.exports.weather = async function weather(temp1) {
    //var temp1 = await location.location();
    var location1 = "http://www.metaweather.com/api/location/search/?query=" + temp1;
    var data2 = await axios.get(location1);
    var temp2 = data2.data[0].woeid;
    //console.log(temp2);
    var location2 = "http://www.metaweather.com/api/location/" + temp2 + "/";
    var data3 = await axios.get(location2);
    return data3["data"].consolidated_weather;

}

