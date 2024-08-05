const heroes=(mobile)=>{
//    const list={
//     name:"Spider man",
//     Age:16,
//     Power:"Swing ",
//     Team_Work:true,
//    }
// let total_salery=0;
let min_Price=mobile[0].price;
let emp={
    name: "Apple",
    ram: "8Gb",
    price: 1050,
};
mobile.map(m => {
    // console.log(m.name); 
    // total_salery+=m.price; 
    if(min_Price>m.price) {
        min_Price=m.price;
        emp.name=m.name;
        emp.ram=m.ram;
        emp.price=m.price;
    }
});

   console.log(emp)
}

let mobile=[
    {
        name: "samsung",
        ram: "8Gb",
        price: 40000,
      },
      {
        name: "Apple",
        ram: "8Gb",
        price: 1050,
      },
      {
        name: "vivo",
        ram: "8Gb",
        price: 45050,
      },
      {
        name: "Redmi",
        ram: "8Gb",
        price: 350,
      }
]

heroes(mobile)

