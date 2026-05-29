//First App With Node_Js
console.log("My first app");

// File Name And Dir Name
let fileName = __filename;
console.log(fileName);

let dirName = __dirname;
console.log(dirName);

// Split Only File Name And Dir Name
let fileNameArr = fileName.split("\\");
let dirNameArr = dirName.split("\\");

console.log(fileNameArr);
console.log(dirNameArr);

console.log(fileNameArr[fileNameArr.length - 1]);
console.log(dirNameArr[dirNameArr.length - 1]);
