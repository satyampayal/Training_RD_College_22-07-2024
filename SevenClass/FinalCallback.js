// Final Assignment
let emp = [
  {
    id: 1,
    name: "Ram",
    Post: "Professor",
  },
  {
    id: 2,
    name: "Sam",
    Post: "Lecturer",
  },
  {
    id: 3,
    name: "Kam",
    Post: "Lecturer",
  },
  {
    id: 4,
    name: "ram Ram",
    Post: "Professor",
  },
];

// const salery={
//     hra:7000,
//     da:50% of grossAl,
//     pf::10% of grossAl,
//     grossAl:bs+hra+da+pf
// }
function getEmp(id, callback) {
  setTimeout(() => {
    callback(emp[id - 1]);
  }, 3000);
}
function getBasicSalery(post, callback) {
   
  setTimeout(() => {
    if (post == "Lecturer") {
      callback(40000);
    } else if (post == "Professor") {
      callback(50000);
    } else callback(30000);
  }, 4000);
}

function calculateGrossSalery(basicSalery, callback) {
  setTimeout(() => {
    let crossSlery =
      basicSalery + 7000 + 0.5 * basicSalery + 0.1 * basicSalery;
    callback(crossSlery);
  }, 4000);
}

function showmessage(res) {
  setTimeout(() => {
    console.log(res);
  }, 1000);
}

getEmp(1, (emp) => {
  console.log(emp);

  getBasicSalery(emp.Post, (basicSalery) => {
    console.log(basicSalery);
    calculateGrossSalery(basicSalery, (res) => {
      showmessage("Your Cross Salery is: "+res);
    });
  });
});
