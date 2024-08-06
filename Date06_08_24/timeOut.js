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

setTimeout(() => {
  emp.forEach((e) => console.log(e.name));
}, 3000);
