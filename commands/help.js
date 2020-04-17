module.exports.help = async function help() {
        console.log("Weather [command] <options> ");
        console.log(`
        today                ->  show current weather
        today --l <place>    ->  show current weather of <place>
        forecast             ->  shows 5 days weather
        forecast --l <place> ->  shows 5 days weather of <place>
        version              ->  show package version
        help                 ->  shows help menu `);
}
