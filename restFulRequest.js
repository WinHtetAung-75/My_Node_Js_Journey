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

// Listen My Server //
myServer.listen(3000, function () {
  console.log("Server Is Running At Port 3000");
});
