const fs=require('fs');

console.log(__dirname);
const num1=process.argv[0];
const num2=process.argv[1];
console.log(num1+num2);



// async read file 
fs.readFile('./data.txt','utf8',(err,data)=>{
    if(err){
        console.log("Error");
        retun ;
    }
     console.log("file Content: "+data);
})


