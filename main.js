// Call With Require
const help = require("./helper");
console.log(help);

// Single Module Caller
// Only Single Module Can Call From This
// help("Win Htet Aung");

// Multiple Module Caller
help.greet("Win Htet");
help.eat("Aung Aung");
help.sleep("Su Su");
