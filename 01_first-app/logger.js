var url = "http://mylogger.io/log";

function log(message){
    console.log(message);
}

// url and log functions are scoped in this module

module.exports.log = log;
module.exports.endPoint = url;

// If we want to just export a function instead of the exports object, we may write like:
// module.exports = log;