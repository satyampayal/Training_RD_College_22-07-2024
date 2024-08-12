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
  function insertionSort(marks){
    for(let i=1;i<marks.length;i++){
        if(marks[i].marks>marks[i-1].marks){
            for(let j=i;j>0;j--){
                if(marks[j].marks>marks[j-1].marks) {
                    let temp=marks[j];
                    marks[j]=marks[j-1];
                    marks[j-1]=temp;
                }
            }
        }
    }
  }
//   let marks=[3,5,1,4,2];
//   insertionSort(students);
//   console.log(students);

  function top5(students,callback){
    setTimeout(()=>{
      insertionSort(students);
      let  top5Studnent=students.filter((s,idx)=>{
        return  idx<5;
      })
        callback(top5Studnent)
    },3000);

  }

  top5(students,(students)=>{
        students.forEach((s)=>{
            console.log(s);
        })
  })