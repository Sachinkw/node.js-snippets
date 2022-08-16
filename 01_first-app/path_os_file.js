// To the argument in the require function, node first assumes it as a built-in module, if doesn't exist, then it looks at the relative path mentioned

// path module
const path = require('path');

var pathObj = path.parse(__filename);
console.log(pathObj);


// os module
const os = require('os');
var totalMemory = os.totalmem();
var freeMemory = os.freemem();
console.log(`Total Memory: ${totalMemory}`); // Template string
console.log(`freeMemory: ${freeMemory}`);


// file system module
const fs = require('fs');
fs.readdir('./', function(err, files){ 
// only one arg is passed, other is null
    if(err) console.log('Error', err);
    else console.log('Result', files);
})
