console.log('Before');

getUser(1, getRepositories);

console.log('After');



// Named functions 
function displayCommits(commits){
    console.log(commits);
}

function getCommits(repos){
    getCommits(repos[0], displayCommits);
}

function getRepositories(user){
    getRepositories(user.gitHubUsername, getCommits);
}



// Asynchronous function
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

function getCommits(repo, callback){
    setTimeout(() => {
        console.log('Fetch all commits...');
        callback(['commit1', 'commit2']);
    }, 2000);
}