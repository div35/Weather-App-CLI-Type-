const package = require("./../package");

module.exports.version = async function version() {
    var ver = package.version;
    console.log("v" + ver);
}

