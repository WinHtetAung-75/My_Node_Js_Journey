// // // Creating Server
// // // Call http Module
// const http = require("http");

// // // Create Server From The http Module
// const myServer = http.createServer(function (req, res) {
//   res.writeHead(200, { "content-type": "text/html" });
//   res.end("Hello My Name Is Win Htet Aung");
// });

// // // Listen Server At Port 3000
// myServer.listen(3000, function () {
//   console.log("Server Is Running At Port 3000");
// });

// // // Response Pipping Stream To User
// // // Call File System Module
// const fs = require("fs");

// // // Create Readable Stream From fs Module
// const myReadableStream = fs.createReadStream("text.txt", "utf-8");

// // // Call http Module
// const http = require("http");

// // // Create Server And Response
// const myServer = http.createServer(function (req, res) {
//   res.writeHead(200, { "content-type": "text/html" });
//   myReadableStream.pipe(res);
// });

// // // Listen Server
// myServer.listen(3000, function () {
//   console.log("Server Is Running At Port 3000");
// });

// // // Response HTML File
// // // Call fs Module
// const fs = require("fs");

// // // Create Readable Stream From fs Module
// const myReadableStr = fs.createReadStream("index.html", "utf-8");

// // // Call http Module
// const http = require("http");

// // // Create Server From http Module
// const myServer = http.createServer(function (req, res) {
//   res.writeHead(200, { "content-type": "text/html" });
//   myReadableStr.pipe(res);
// });

// // // Listen Server
// myServer.listen(3000, function () {
//   console.log("Server Is Running At Port 3000");
// });

// // Response JSON Object
// // Call http Module To Create Server
const http = require("http");

const myServer = http.createServer(function (req, res) {
  res.writeHead(200, { "content-type": "application/json" });
  let obj = {
    name: "Win Htet Aung",
    age: 23,
    job: "Mobile Applicaton Developer",
    hasGf: true,
  };
  res.end(JSON.stringify(obj));
});

myServer.listen(3000, function () {
  console.log("Server Is Running");
});
