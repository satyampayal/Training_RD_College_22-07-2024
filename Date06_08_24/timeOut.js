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

  function addEmployee(callback) {
    setTimeout(()=>{
        emp.push({ name: "satyam", age: 10, salery: 1234 })
        callback();}
    , 7000);
  }
  addEmployee(showName);

