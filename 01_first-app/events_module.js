
/*
An event is an signal that indicates something is happened in our app
 HTTP class is used to build web server, which will listen on certain port. Everytime, it receives a request on that port, HTTP class will raise an event.
 Our job is to response to that event
 Several classes in node raises different kind of events.

 Listener is a func that is called when event is raised
*/


const EventEmitter = require('events'); //returns a class
const emitter = new EventEmitter();

// Register a listener
emitter.on('messageLogged', (arg) => {
    console.log('Listener called', arg);
})

// Raise an event
emitter.emit('messageLogged', {id: 1, url: 'http://'});



/**
 We rarely use events and listener in the above way. We create our class extending EventEmitter class. The function inside that class will raise that event.
 Now, in the other module, where we are creating the object of the class and invoking its funciton, we will register a listener in that module.
 */

