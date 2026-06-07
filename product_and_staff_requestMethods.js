// /// Restful Request Methods For Staffs And Products

// // Call Express Module And Create Server
const express = require("express");
const myServer = new express();

// // Middleware
myServer.use(express.json());

const staffs = [
  { name: "Aung Aung", age: 25, salary: 600000 },
  { name: "Su Su", age: 28, salary: 750000 },
  { name: "Mya Mya", age: 22, salary: 450000 },
  { name: "Kyaw Kyaw", age: 30, salary: 900000 },
  { name: "Hla Hla", age: 24, salary: 550000 },
  { name: "Thiri", age: 27, salary: 800000 },
];

const products = [
  { name: "T shirt", price: 23000, stocks: 34 },
  { name: "Shoes", price: 85000, stocks: 12 },
  { name: "Wallet", price: 45000, stocks: 25 },
  { name: "Buds", price: 120000, stocks: 8 },
  { name: "Jeans", price: 65000, stocks: 40 },
  { name: "Bag", price: 55000, stocks: 18 },
  { name: "Mug", price: 12000, stocks: 50 },
  { name: "Glasses", price: 38000, stocks: 15 },
];

// // RestFul Request Methods For Staffs

// // Using Route
myServer
  .route("/staffs")
  .get(function (req, res) {
    res.json({ con: true, msg: "Show All Staff", Result: { result: staffs } });
  })

  .post(function (req, res) {
    let bodyData = req.body;
    staffs.push(bodyData);
    res.json({
      con: true,
      msg: "New User From Body Data Updated",
      Result: { data: staffs },
    });
  })

  .patch(function (req, res, next) {
    let name = req.body.name;
    let salary = Number(req.body.salary);
    let foundUser = staffs.find((s) => s.name === name);
    if (foundUser) {
      foundUser.salary = salary;
      res.json({
        con: true,
        msg: "Updated Saalry",
        Result: { data: foundUser },
      });
    } else {
      next(new Error("No User With That Name"));
    }
  });
myServer.delete("/staffs/:name", function (req, res, next) {
  let name = req.params.name;
  let foundUser = staffs.find((s) => s.name === name);

  if (foundUser) {
    result = staffs.filter((s) => s.name != name);
    res.json({ con: true, msg: "Delete A Staff", Result: { data: result } });
  } else {
    next(new Error("No User With That Name"));
  }
});

//   //// Route And Request Methods For Products
myServer
  .route("/products")
  .get((req, res) => {
    res.json({
      con: true,
      msg: "Show All Products",
      Results: { data: products },
    });
  })
  .post((req, res) => {
    let newProduct = req.body;
    products.push(newProduct);
    res.json({ con: true, msg: "Add New Product", Result: { data: products } });
  });

myServer
  .route("/products/:name/:price")

  .patch((req, res, next) => {
    let productName = req.params.name;
    let productPrice = req.params.price;
    let findProduct = products.find((p) => p.name === productName);
    if (findProduct) {
      findProduct.price = productPrice;
      res.json({
        con: true,
        msg: "Price Updated",
        Result: { data: findProduct },
      });
    } else {
      next(new Error("No Product With That Name"));
    }
  })

  //   In Delete You Must Add Params For Price
  .delete((req, res, next) => {
    let productName = req.params.name;
    let foundUser = products.find((p) => p.name === productName);

    if (foundUser) {
      let result = products.filter((p) => p.name != productName);
      res.json({
        con: true,
        msg: "Price Updated",
        Result: { data: result },
      });
    } else {
      next(new Error("No Product With That Name"));
    }
  });

// // Listen Server
myServer.listen("3000", function () {
  console.log("Server Is Running At Port 3000");
});
