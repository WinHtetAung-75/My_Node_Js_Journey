// Creating Server From Express Module //
// Call Express Module //
const express = require("express");

// Create Server From express //
const myServer = new express();

// Require Path Module To Use HTML File //
const path = require("path");

////////// Require Use Permission ////////
myServer.use(express.json());

let staff = [
  { name: "Aung Aung", age: 25, salary: 600000 },
  { name: "Su Su", age: 28, salary: 750000 },
  { name: "Mya Mya", age: 22, salary: 450000 },
  { name: "Kyaw Kyaw", age: 30, salary: 900000 },
  { name: "Hla Hla", age: 24, salary: 550000 },
  { name: "Thiri", age: 27, salary: 800000 },
];

// Get Method //
// Simple Text Send //
myServer.get("/", function (req, res) {
  res.send("Hello World");
});

// JSON Send //
myServer.get("/names", function (req, res) {
  res.json({ names: ["Aung", "Htet", "Myat"] });
});

// File Send //
myServer.get("/file", function (req, res) {
  res.sendFile(path.join(__dirname, "/index.html"));
});

// Response Status Code JSON //
myServer.get("/status", function (req, res) {
  res.json({ con: true, msg: "Success", result: { data: "data" } });
});

// Get Staff
myServer.get("/staff", function (req, res) {
  res.json({ con: true, msg: "Succcess", result: { data: staff } });
});

// // Get Method With Parameter
// myServer.get("/staff/:name", function (req, res,next) {
//   let queryName = req.params.name;
//   let user = staff.find((s) => s.name === queryName);
//   if (user) {
//     res.json({ con: true, msg: "Success", Result: { data: user } });
//   } else {
//     next(new Error("No User With That Name"));
//   }
// });

// // Response Name And Age From The Params
myServer.get("/staff/:name/:age", function (req, res) {
  let name = req.params.name;
  let age = req.params.age;
  res.json({ con: true, msg: "Success", result: { data: { name, age } } });
});

// // Get All Names With Get Method
myServer.get("/staff/names", function (req, res) {
  let names = staff.map((s) => s.name);
  res.json({ con: true, msg: "Show All Names", Result: { data: names } });
});

// // Get Total Salary With Get Method
myServer.get("/totalSalary", function (req, resp) {
  let totalSalary = staff.reduce((total, staff) => total + staff.salary, 0);
  resp.json({
    con: true,
    msg: "Give Total Salary",
    Result: { data: totalSalary },
  });
});

// // Post Method // //
// //Simple Post Method ////
myServer.post("/", function (req, res) {
  //   res.json({
  //     con: true,
  //     msg: "Success",
  //     result: {
  //       data: "data",
  //     },
  //   });
  res.send("Post Method Testing");
});

// // Post Method With Body Data // //
myServer.post("/bodyData", function (req, res) {
  let bodyData = req.body;
  console.log(bodyData);
  res.json({ con: true, msg: "Success", result: { data: bodyData } });
});

// // Add New User (Body Data) With Post Method
myServer.post("/newUser", function (req, res) {
  let newUser = req.body;
  staff.push(newUser);
  res.json({ con: true, msg: "Success", result: { data: staff } });
});

// // Patch Method Update Salary From Params
myServer.patch("/staff/:name/:salary", function (req, res, next) {
  let name = req.params.name;
  let salary = Number(req.params.salary);

  let foundUser = staff.find((s) => s.name === name);

  if (foundUser) {
    foundUser.salary = salary;
    res.json({ con: true, msg: "Updated Salary", Result: { data: foundUser } });
  } else {
    next(new Error("No User With That Name"));
  }
});

// // Patch Method Update Salary From Body Data
myServer.patch("/staff/bodyData", function (req, res, next) {
  let name = req.body.name;
  let salary = req.body.salary;

  let foundUser = staff.find((s) => s.name === name);

  if (foundUser) {
    foundUser.salary = salary;
    res.json({ con: true, msg: "Success", Result: { data: foundUser } });
  } else {
    next(new Error("No User With That Name"));
  }
});

// // Delete Method
myServer.delete("/staff/:name", function (req, res, next) {
  let name = req.params.name;

  let foundUser = staff.find((s) => s.name === name);

  if (foundUser) {
    let result = staff.filter((s) => s.name != foundUser.name);
    res.json({ con: true, msg: "Delete Name", Result: { data: result } });
  } else {
    next(new Error("No User With That Name"));
  }
});

// Listen My Server //
myServer.listen(3000, function () {
  console.log("Server Is Running At Port 3000");
});
