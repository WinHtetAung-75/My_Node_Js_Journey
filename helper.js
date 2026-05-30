// Function Expressions
const greet = function (name) {
  console.log(`Hello ${name}`);
};

const eat = function (name) {
  console.log(`${name} can eat`);
};

const sleep = function (name) {
  console.log(`${name} can sleep`);
};

// Single Module Exports
// module.exports = greet;

//// Multiple Module Exports//
// module.exports.eat = eat;
// module.exports.sleep = sleep;

module.exports = {
    greet,
  eat,
  sleep,
};
