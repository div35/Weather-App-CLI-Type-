const axios = require("axios");

module.exports.location = async function location() {
    var data1 = await axios.get("http://ip-api.com/json/");
    var temp1 = data1.data.city;
    //console.log(temp1);
    return temp1;
}



