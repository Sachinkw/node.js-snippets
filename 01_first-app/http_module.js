const http = require('http');

// const server = http.createServer(); //server is an EventEmitter

// server.on('connection', (socket)=> {
//     console.log(('New connection...'));
// })



const server = http.createServer((req, res) => {
    if (req.url === '/'){
        res.write('Hello World');
        res.end();
    }

    if(req.url === '/api/courses') {
        res.write(JSON.stringify([1, 2, 3]));
        res.end();
    }
});



server.listen(3000); 
/* Everytime there is a request, server raises an event. */

console.log('Listening on port 3000...');