#!/usr/bin/env node
const minimist = require("minimist");
const today = require("./commands/today");
const forecast = require("./commands/forecast");
const version = require("./commands/version");
const help = require("./commands/help");
const readline = require("readline");

var reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: "> "
});

console.log("Welcome To The Weather Api :)");
console.log("Enter help to know more");
reader.prompt();
reader.on("line", function (input) {
    input = input.split(" ");
    var data = minimist(input);
    // console.log(data);
    // console.log(data._.join(""));
    //console.log(data._[0])

    if (data._[0] === "today") {
        today.today(data);
    }
    else if (data._[0] === "forecast") {
        forecast.forecast(data);
    }
    else if (data._[0]  === "version") {
        version.version();
        console.log("\n");
    }
    else if (data._[0]  === "help") {
        help.help();
        console.log("\n");
    }
    else {
        console.log("ERROR!!! Try Again ")
        console.log("\n");
    }
    reader.prompt();

})

reader.on("close", function () {
    console.log("^C");
})




