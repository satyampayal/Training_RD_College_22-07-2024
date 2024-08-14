// getMovie(1)
// getCinema(movieId)
//getTickets(cinemaHallname)
//


function getMovie(id,callback){
    setTimeout(()=>{
          callback({id:1,name:"Fighter"});
    },3000);
}
function getCinema(name,callback){
    setTimeout(()=>{
          callback(["PVR cinema","VVIP Cinema","city cinema"]);
    },3000);
}
function getTicket(cinemaName,callback){
    setTimeout(()=>{
          callback({Gold:"100 Ru.",Platenium:"200 Ru."});
    },3000);
}


getMovie(1,(movie)=>{
    console.log(movie);
    getCinema(movie.name,(cinemas)=>{
        console.log(cinemas);
        getTicket(cinemas[1],(prices)=>{
            console.log(prices)
        })
    })
})

// Assignment 
// now you update logic 
// fix list of Cinams approx 10 some regular and some multiplex  
// we send movieName  we need only multiplex cinemas 
