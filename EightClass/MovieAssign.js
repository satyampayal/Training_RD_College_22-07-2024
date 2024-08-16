function getMovie(id){
    return new Promise(res=>{
        setTimeout(function(){
            res(["movie1","movie2"])
        },3000)
    })
    
}
function getcinemas(id){
    return new Promise(res=>{
        setTimeout(function(){
            res([{name:"xyz",cineType:"multiplex"},
            {name:"abc",cineType:"regular"},
            {name:"pqr",cineType:"multiplex"},
            {name:"mno",cineType:"regular"}
            ])
        },3000)
    })
   
}
function getTickets(id){
    return new Promise(res=>{
        setTimeout(function(){ 
            res({premium:1000,diamond:900,gold:800,normal:500})
        },3000)
    })
   
}

getMovie(1)
.then(m=>{
    console.log(m);
    return getcinemas();
})
.then(
    c=>{
        console.log(c);
        return getTickets(c[0].name);
    }
)
.then(t=>console.log(t))