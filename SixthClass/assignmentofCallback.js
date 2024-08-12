let students = [
  {
    name: "Satyam",
    marks: 97,
    rollNo: 97,
  },
  {
    name: "Satyam",
    marks: 97,
    rollNo: 97,
  },
  {
    name: "Satyam",
    marks: 97,
    rollNo: 97,
  },
  {
    name: "Satyam",
    marks: 97,
    rollNo: 97,
  },
  {
    name: "shaurya",
    marks: 100,
    rollNo: 97,
  },
];

function showStudent(student, callback) {
  let maxMarks = -1;
  let maxStudne = {};
  setTimeout(() => {
    student.forEach((s) => {
      if (s.marks > maxMarks) {
        maxStudne.name = s.name;
        maxStudne.marks = s.marks;
        maxStudne.rollNo = s.rollNo;
      }
    });
    callback(maxStudne);
  }, 4000);
}

showStudent(students, (s) => {
  console.log(s);
});


// assignment top 5 student on basic marks
