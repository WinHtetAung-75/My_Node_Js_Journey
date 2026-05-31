// Call File System Module
const fs = require("fs");

// console.log(fs);

// // // Read / Write / Append Sync
// // // Write
// fs.writeFileSync("text.txt", "Hello");

// // // Read
// const data = fs.readFileSync("text.txt", "utf-8");
// console.log(data);

// // // Append
// fs.appendFileSync("text.txt", "One");
// fs.appendFileSync("text.txt", "Two");
// fs.appendFileSync("text.txt", "Three");

// const lastData = fs.readFileSync("text.txt", "utf-8");
// console.log(lastData);

// // //// Write / Append / Read Async
// // /// Read   Can Access Result As A Paremeter
// fs.readFile("text.txt", "utf-8", (err, result) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(result);
//   }
// });

// ///// Write
// fs.writeFile("text.txt", " My Name is Win Htet Aung", (err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("Write File Successfully");
//   }
// });

// // //// Append
// fs.appendFile("text.txt", "My Friend Is Coding", (err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("Append File Successfully");
//   }
// });

// //// Delete File And Create Dir
// /// Delete File
fs.unlink("text.txt", (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Delete File Successfully");
  }
});

// // Create Dir
fs.mkdir("Test", (err) => {
  if (err) console.log(err);
  else console.log("Create Dir Successfully");
});
