// // Use File System Module
const fs = require("fs");

// // Create Readable Stream
const myReadableStream = fs.createReadStream("text.txt", "utf8");

myReadableStream.on("data", function (chunk) {
  console.log(chunk);
});

// // Create Writeable Stream
const myWriteableStream = fs.createWriteStream("new.txt");

// // Write New Text To New File
myWriteableStream.write("Hello");
myWriteableStream.write("Win");
myWriteableStream.write("Htet");
myWriteableStream.write("Aung");

// // Write Data From Readable Stream To New File
myReadableStream.on("data", function (chunk) {
  myWriteableStream.write(chunk);
});

// // Pipping
myReadableStream.pipe(myWriteableStream);

// /// Error no need to use .on('data') in pipe()
// myReadableStream.on("data", function () {
//   myReadableStream.pipe(myWriteableStr);
// });
