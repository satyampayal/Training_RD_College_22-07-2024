// function show() {
//   console.log("Show ");
// }

// function display(callback) {
//   callback();
//   console.log("Display");
// }

// display(show);

// now  Q

function display() {
  console.log("Simple Interset Calculated successfully");
}
function simpleInterst(p, r, t, callback) {
  setTimeout(() => {
    console.log((p * r * t) / 100);
    callback();
  }, 3000);
}

simpleInterst(1000, 2, 2, display);
