console.log('Before');
// user = getUser(1);   // getUser without a callback and storing result this way will store undefined in the user

// getUser(1, function (user) {
//     console.log('User', user);
// });

// We also write above one as:
getUser(1, (user) => {
    console.log('User', user);

    getRepositories(user.gitHubUsername, (repos) => {
        console.log('Repos', repos);
    });
});

console.log('After');



// function getUser(id){
//     setTimeout(() => {
//         console.log('Reading user from database...');
//         return {id: id, gitHubUsername: 'Sachinkw'};
//     }, 2000);
// }




// callback is a function that will be called when result from asynchronous operation is ready
function getUser(id, callback){
    setTimeout(() => {
        console.log('Reading a user from a database...');
        callback({id: id, gitHubUsername: 'Sachin' });
    }, 2000);
}


function getRepositories(username, callback){
    setTimeout(() => {
        console.log('Calling GitHub API...');
        callback(['repo1', 'repo2', 'repo3']);
    }, 2000);
}