const heroes=(mobile)=>{
 
     let total_salery=0;
    let min_Price=mobile[0].price;
    let emp={
        name: "Apple",
        ram: "8Gb",
        price: 1050,
    };
    mobile.map(m => {
        total_salery+=m.price; 
      
    });
    
      return total_salery;
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
    const m=heroes(mobile)
    console.log(m/mobile.length);
    
    