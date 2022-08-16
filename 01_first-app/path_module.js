// To the argument in the require function, node first assumes it as a built-in module, if doesn't exist, then it looks at the relative path mentioned

const path = require('path');

var pathObj = path.parse(__filename);
console.log(pathObj);


const os = require('os');
var totalMemory = os.totalmem();
var freeMemory = os.freemem();

console.log('Total Memory: '+ totalMemory);

