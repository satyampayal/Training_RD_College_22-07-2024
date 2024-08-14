let cart = ["books", "mobile", " Laptop"];

function createOrder(item, callback) {
  setTimeout(() => {
    let orderId = item.slice(0, 2);
    for (let i = 0; i < 5; i++) {
      orderId += Math.round(Math.random() * 10);
    }
    callback(orderId);
  }, 1000);
}
function goforPayment(orderId, callback) {
  setTimeout(() => {
    let transitionId = orderId.slice(0, 2);
    for (let i = 0; i < 5; i++) {
      transitionId += Math.round(Math.random() * 10);
    }
    callback(transitionId);
  }, 1000);
}

function updatewallet(transitionId, callback) {
  setTimeout(() => {
    let res = "Your Payment has been done with TranstionId: " + transitionId;
    callback(res);
  }, 1000);
}
createOrder(cart[0], (orderId) => {
  console.log("Order ID: " + orderId);
  goforPayment(orderId, (transitionId) => {
    console.log("Transition Id : " + transitionId);
    updatewallet(transitionId, (message) => {
      console.log(message);
    });
  });
});