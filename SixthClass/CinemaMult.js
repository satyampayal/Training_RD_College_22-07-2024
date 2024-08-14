function getMovie(id,callbaack){
    setTimeout(function(){
        callbaack(["movie1","movie2"])
    },3000)
}
function getcinemas(id,callbaack){
    setTimeout(function(){
        callbaack([{name:"xyz",cineType:"multiplex"},
        {name:"abc",cineType:"regular"},
        {name:"pqr",cineType:"multiplex"},
        {name:"mno",cineType:"regular"}
        ])
    },3000)
}
function getTickets(id,callbaack){
    setTimeout(function(){ 
        callbaack({premium:1000,diamond:900,gold:800,normal:500})
    },3000)
}

getMovie(1,(movie)=>{
    console.log(movie)
    getcinemas(movie[0],(cinema)=>{
        cinema.forEach(cinema => {
            if(cinema.type==1)
                console.log(cinema)
        });
        getTickets(cinema,(hallName)=>{
            console.log(hallName)
        })
    })
})