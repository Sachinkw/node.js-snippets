console.log('Before');
setTimeout(() => {
    console.log('Reading a user from database...');
}, 2000)
console.log('After');

// setTimeout is an example of asynchronous function which schedules a task after some specified time, which does not block the flow of program.
// One single thread executes all the three functions.
