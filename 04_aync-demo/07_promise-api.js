// Promise holds user object here
// const p1 = Promise.resolve({id: 1});
// p.then(result => console.log(result))

// const p2 = Promise.reject(new Error('reason for rejection...'));
// p.catch(error => console.log(error))


const p1 = new Promise((resolve) => {
    setTimeout(() => {
        console.log('Async operation 1...');
        resolve(1);
    }, 2000);
});

const p2 = new Promise((resolve) => {
    setTimeout(() => {
        console.log('Async operation 2...');
        resolve(2);
    }, 2000);
});


// all function takes an array of promises and returns a new proimse that will be resolved when all the promises will be resolved in the array. 
Promise.all([p1, p2])
.then(result => console.log(result));

/*
1. Here we have a single thread, it does not wait for the result from the first async operation.
2. Each promise is resolved with a value, and the result is stored in an array
3. If any of the promise is rejected, the final promise returned from all() is considered rejected
4. If we want to consider the promise returned as fulfilled as soon as any asyn operation completes, we use race function.
*/