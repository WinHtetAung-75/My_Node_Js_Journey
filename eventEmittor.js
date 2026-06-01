// // Call Event Module
// const event = require("events");

// //Build New Event Object
// const myEventEmittor = new event();

// // Listen
// myEventEmittor.on("greetNow", function (name) {
//   console.log(`Hello ${name}`);
// });

// // Emit (Alarm/Ring The Bell To Do Work)
// myEventEmittor.emit("greetNow", "Win Htet Aung");

// // Real World Examples
// // Call Event Module
// const eventEmittor = require("events");

// // Create New EventEmittor Object(Instance / Real Home)
// const myGirlfriend = new eventEmittor.EventEmitter();
// const myFriend = new eventEmittor.EventEmitter();

// // Listen To Work
// myGirlfriend.on("sendMessage", () => {
//   console.log("Hey My Girl...What Are You Doing???");
// });

// myFriend.on("sendMessage", () => {
//   console.log("Hey My Friend...Shall We Go To Drink Beer...");
// });

// let i = 0;

// // Emit (Alarm/Ring The Bell To Work)
// setInterval(() => {
//   i++;
//   if (i % 5 === 0) {
//     myGirlfriend.emit("sendMessage");
//   } else {
//     myFriend.emit("sendMessage");
//   }
// }, 1000);

// // // User Created Examples
// // // Call Event Module
// const event = require("events");

// // // Inheritance The Class event
// class UserService extends event {
//   userRegister(userName, email) {
//     console.log(`Saving ${userName} To Database`);

//     console.log("User Register Successfully");

//     this.emit("userCreated", userName, email);
//   }
// }

// // Build Instance Object For userService
// const userService = new UserService();

// // Listen To Work
// userService.on("userCreated", (userName) => {
//   console.log("Hello " + userName);
// });

// userService.on("userCreated", (email) => {
//   console.log("We are sending the team policy to the email " + email);
// });

// // New User Created
// userService.userRegister("Win Htet Aung", "wha@gmail.com");
// userService.userRegister("Aung  Aung", "aa@gmail.com");
// userService.userRegister("Wai Gyi", "waigyi@gmail.com");

// // ///// Member Card Register
// ////// Call Event Module
// const Event = require("events");

// // /////// Inheritance The Class Event
// class MemberCardRegister extends Event {
//   cardRegister(name, phone, amount) {
//     // Check First Amount Is Over 300000
//     if (amount >= 300000) {
//       this.emit("register", name, phone, amount);
//     } else {
//       console.log("Only Customer Who Buy Over 300000 Can Get Member Card");
//     }
//   }
// }

// // ////Build Instance Object For MemberCardRegister
// const memberCardRegister = new MemberCardRegister();

// // ///// Listen To Work
// memberCardRegister.on("register", (name) => {
//   console.log(`Hello ${name} You are a member of our shop. `);
// });

// memberCardRegister.on("register", (name, phone) => {
//   console.log(`Saving ${name} - ${phone} to database`);
// });

// // ///// Real Customer Register
// memberCardRegister.cardRegister("Win Htet Aung", "09989289645", 300000);
// memberCardRegister.cardRegister("Aung Htet", "09989289645", 100000);

// //////// Payment System
//////  Call Event Module
const Event = ("events");

// ////Inheritance The Class Event
class PaymentSystem extends Event {
  donePayment(item, amount) {
    console.log(`${item} is ${amount}`);
    this.emit("pay", item, amount);
  }
}

// //// Build Instance For PaymentSysten
const paymentSystem = new PaymentSystem();

//////Listen To Work
paymentSystem.on("pay", () => {
  console.log("Checking The Stocks");
});

paymentSystem.on("pay", (item, amount) => {
  console.log(`${item} - ${amount} is Sold Out`);
});


// ////Real Call
paymentSystem.donePayment("Apple",5000);