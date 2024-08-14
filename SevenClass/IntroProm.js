// callback hell is complicated to understand because of its structure 
// there is function pass 
// now we come to Promices // here is function attached ... and easy to ...

function simpleInterst(p,r,t){
    let pr=new Promise((res,rej)=>{
        setTimeout(()=>{
            if(p>0)
            res((p*r*t)/100);
            else rej(" Principle value less then 0")
        },200)
    })
    return pr;
}

simpleInterst(1,2,3)
.then((res)=>console.log(res))
.catch((e)=> console.log(e))