// Asynchronous version
console.log('Before');
getUser(1, (user) => {
    getRepositories(user.gitHubUsername, (repos) => {
        getCommits(repo, (commits) => {
           //Callback hell 
        });
    });
});
console.log('After');


// Synchronous version
console.log('Before');
const user = getUser(1);
const resp = getRepositories(user.gitHubUsername);
const commits = getCommits(repos[0]);
console.log('After');