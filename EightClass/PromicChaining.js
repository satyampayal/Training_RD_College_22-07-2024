const getUser = (id) => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res({ id: 1, name: "satyam" });
    }, 100);
  });
};
const getRepos = (id) => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(["R1", "R2", "R3"]);
    }, 100);
  });
};

const getCommits=()=>{
    return new Promise((res, rej) => {
        setTimeout(() => {
          res(["C1", "C2", "C3"]);
        }, 100);
      });
}

getUser(1).then((u) => {
  console.log(u);
  return getRepos(u.id)
})
.then((r) =>{ console.log(r)
    return  getCommits(r[0])
})
.then(c=>console.log(c));

