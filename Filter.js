
let emp = [
    {
      name: "ram",
      age: 10,
      salery: 134,
    },
    {
      name: "sam",
      age: 10,
      salery: 1234,
    },
    {
      name: "kam",
      age: 10,
      salery: 12454,
    },
  ];

  const saleryGrether1000=emp.filter((e)=>{
    if(e.salery>1000) return  e;
  })
  console.log(saleryGrether1000)

  // square 
  const numbers=[1,2,3,4,-2,33,782];
  const filterList=numbers.filter(val=>{
       return val%2==0;
  })

  console.log(filterList);