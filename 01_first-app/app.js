// global.console.log("Sachin")        // is equivalent to console.log("Sachin")

// require function returns an object that contain all functions and variables as the keys
const logger = require('./logger');
// As a best practice, we should use const instead of var in above line

// console.log(logger);
logger.log('message')
console.log(logger.endPoint);