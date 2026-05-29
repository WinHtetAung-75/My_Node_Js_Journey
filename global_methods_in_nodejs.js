// SetTimeOut Methods
// setTimeout(callbackFunction,Time To Work)
setTimeout(function greet() {
  console.log("Hello. I am waiting for 3 seconds");
}, 3000);

let i = 0;
// setInterval Method
// setInterval(callbackFunction,Time To Wait)
setInterval(function count() {
  i++;
  console.log(`I am looping and counting ${i}`);
}, 1000);

// clearInterval Method
let myInterval = setInterval(function () {
  i++;
  if (i === 5) clearInterval(myInterval);
  console.log(`I am counting ${i}`);
}, 1000);

let loadingData = setInterval(function () {
  i++;
  console.log("loading data " + i);

  stopLoadingData();
}, 1000);

function stopLoadingData() {
  if (i === 5) clearInterval(loadingData);
}
