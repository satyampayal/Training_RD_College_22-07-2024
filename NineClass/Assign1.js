let emp = [
  {
    id: 1,
    name: "satyam",
    age: 28,
    sallery: 30,
    post: "Lecturer",
  },
  {
    id: 2,
    name: "Shankar",
    age: 28,
    sallery: 30,
    post: "HR",
  },
  {
    id: 3,
    name: "Tushar",
    age: 28,
    sallery: 30,
    post: "C.S.E",
  },
  {
    id: 4,
    name: "Ronak",
    age: 28,
    sallery: 30,
    post: "",
  },
];
const getEmp = (indx) => {
  const pr = new Promise((res, rej) => {
    setTimeout(() => {
      if (indx < emp.length) {
        let result=emp.find((emp)=>emp.id===indx);
        res(result)
      }
      else rej("Id is not  Present");
    }, 1000);
  });
  return pr;
};

const getBasicSalery = (post) => {
  const pr = new Promise((res, rej) => {
    setTimeout(() => {
      if (post == "") rej("Invalid Emp");
      else {
        if (post == "Professor") res(40000);
        else if (post == "Lecturer") res(30000);
        else res(2000);
      }
    }, 1000);
  });
  return pr;
};

const getGrossSalery = (basicSalery,post) => {
  const pr = new Promise((res, rej) => {
    let hra;
    setTimeout(() => {
      if (post == "Professor") hra = 10000;
      else if (post == "Lecturer") hra = 8000;
      else hra = 6000;
      let da = basicSalery * 0.4;
      let ma = basicSalery * 0.1;
      let pf = basicSalery * 0.1;
      let grossSalery = da + ma + pf + basicSalery +hra;

      res(grossSalery);
    }, 1000);
  });
  return pr;

};

let temp={};
getEmp(3).then(empl=>{
    console.log(empl);
    temp=empl;
    return getBasicSalery(empl.post);
}).then(bs=>{
    console.log(bs);
    return getGrossSalery(bs,temp.post)
})
.then(grossSalery=>console.log(grossSalery))
.catch(e=>console.log(e))
.catch(e=>console.log(e));

