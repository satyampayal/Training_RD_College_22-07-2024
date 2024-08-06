let emp = [
  {
    name: "ram",
    age: 10,
    salery: 1234,
  },
  {
    name: "sam",
    age: 10,
    salery: 1234,
  },
  {
    name: "kam",
    age: 10,
    salery: 1234,
  },
];

function showName() {
  setTimeout(() => {
    emp.forEach((e) => console.log(e.name));
  }, 3000);
}

// const promice = new Promise((res, rej) => {
  function addEmployee() {
    setTimeout(()=>{emp.push({ name: "satyam", age: 10, salery: 1234 })}, 7000);
  }
  addEmployee();
//   if(res) showName();
//   if(rej) console.log("Not add Succesfully") ;
// });
// addEmployee();
showName();
