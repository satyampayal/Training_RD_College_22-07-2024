let students = [
  {
    name: "Satyam",
    marks: 97,
    rollNo: 57,
  },
  {
    name: "Satyam",
    marks: 27,
    rollNo: 207,
  },
  {
    name: "Satyam",
    marks: 7,
    rollNo: 87,
  },
  {
    name: "Satyam",
    marks: 47,
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
];

function maxMarks(student) {
  let maxMarks = student[0].marks;
  let pr = new Promise((res, rej) => {
    setTimeout(() => {
      student.forEach((s) => {
        if (s.marks > maxMarks) {
          maxMarks = s.marks;
        }
      });
      if(maxMarks>0)
      res(maxMarks);
    else rej("Marks not be in negetive ")
    }, 1000);
  });
  return pr;
}

maxMarks(students)
.then((maxMarks) => console.log(maxMarks))
.catch((e) => console.log(e))
