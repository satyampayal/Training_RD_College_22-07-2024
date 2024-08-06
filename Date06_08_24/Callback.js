// function show() {
//   console.log("Show ");
// }

// function display(callback) {
//   callback();
//   console.log("Display");
// }

// display(show);

// now  Q

function display(){
    console.log("Simple Interset Calsulated successfully")
}
function simpleInterst(p,r,t,callback){
    console.log((p*r*t)/100);
    callback();

}

simpleInterst(1000,2,2,display);
