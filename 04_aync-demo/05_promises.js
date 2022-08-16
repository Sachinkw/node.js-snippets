// Promises are the objects which promise us to give the result of any asynchronous operation to the consumer of the promise

const p = new Promise((resolve, reject) => {
    // Kick off some async work ...

    setTimeout(() => {
        // resolve(1);   // pending --> resolved, fulfilled
        reject(new Error('message'));  // pending -- rejected
    }, 2000);
});

p
.then(result => console.log('Result', result))
.catch(err => console.log('Error', err.message));  


// Anywhere we have async function which takes callback, modify that function to return promise
