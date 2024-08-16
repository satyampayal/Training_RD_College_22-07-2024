let students = [
    {
      name: "Satyam",
      marks: 97,
      rollNo: 57,
    },
    {
      name: "Satyam",
      marks: 65,
      rollNo: 207,
    },
    {
      name: "Satyam",
      marks: 7,
      rollNo: 87,
    },
    {
      name: "Satyam",
      marks: 65,
      rollNo: 7,
    },
    {
      name: "shaurya",
      marks: 100,
      rollNo: 97,
    },
    {
      name: "shaurya",
      marks: 1077,
      rollNo: 107,
    },
    {
        name: "shaurya",
        marks: 8,
        rollNo: 107,
      },
  ];


  function findMarks(student,lo,hi) {
    let ans=[];
    let pr = new Promise((res, rej) => {
      setTimeout(() => {
        student.forEach((s) => {
            if(s.marks<0) return rej("Student have Negative ")
          if (s.marks > lo && s.marks<hi) {
            ans.push(s);
              
          }
        });
        if(ans.length>0)
        res(ans);
      else rej("Not even single student meet condition  ")
      }, 1000);
    });
    return pr;
  }

  findMarks(students,50,70)
  .then((ans)=> console.log(ans))
  .catch((e)=> console.log(e))