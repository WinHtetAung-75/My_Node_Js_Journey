// function statement
function greet(name) {
  console.log(`Hello ${name}`);
}

// function expression
let sayHello = function (n) {
  console.log(`Hello ${n}`);
};

// greet("Win Htet Aung");
// sayHello("Tinzar Wai");

// Dynamic Function
let dynamicFunction = function (func, value) {
  func(value);
};

dynamicFunction(greet, "Aung Aung");
dynamicFunction(sayHello, "Su Su");
