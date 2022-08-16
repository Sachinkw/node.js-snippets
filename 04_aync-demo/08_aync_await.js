console.log('Before');

// getUser(1, (user) => {
//     getRepositories(user.gitHubUsername, (repos) => {
//         getCommits(repo, (commits) => {
//            console.log('Commits', commits);
//         });
//     });
// });

// Promise-based approach
// getUser(1)
//     .then(user => getRepositories(user.gitHubUsername))
//     .then(repos => getCommits(repos[0]))
//     .then(commits => console.log('Commits', commits))
//     .catch(err => console.log('Error', err.message));
 

// Async and await approach
// Anytime we call a fuction that returns a promise, we can await the result of that func, and then get the actual result just like calling a synchronous function.

async function displayCommits(){
    try {
        const user = await getUser(1);
        const repos = await getRepositories(user.gitHubUsername);
        const commits = await getCommits(repos[0]);
        console.log(commits);
    } catch (error) {
        console.log(error);
    }
}

displayCommits();




console.log('After');





function getUser(id){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Reading a user from a database...');
            resolve({id: id, gitHubUsername: 'Sachin' });
        }, 2000);
    });
    
}


function getRepositories(username){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Calling GitHub API...');
            resolve(['repo1', 'repo2', 'repo3']);
        }, 2000);
    });
}


function getCommits(repo){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Fetch all commits...');
            resolve(['commit1', 'commit2']);
        }, 2000);
    })

}

