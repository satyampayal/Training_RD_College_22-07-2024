function getUser(id, callback) {
  setTimeout(function (id) {
    let user = { id: 1, name: "ram" };
    callback(user);
  }, 3000);
}

function getRepos(id, callback) {
  setTimeout(function (id) {
    let repos = ["r1", "R2", "R3"];
    callback(repos);
  }, 3000);
}
function getCommits(id, callback) {
  setTimeout(function (id) {
    let commits = ["C1", "C2", "C3"];
    callback(commits);
  }, 3000);
}
getUser(1, (user) => {
  console.log(user);
  getRepos(user.id, (repos) => {
    console.log(repos);
    getCommits(repos[1], (commits) => {
      console.log(commits);
    });
  });
});
