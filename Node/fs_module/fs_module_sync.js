const fs = require("fs");
const path = require("path");

let filePath = path.join(__dirname,"resource","readFile.txt");

let content = fs.readFileSync(filePath, "utf-8");

// console.log(content.toString());
console.log(content);

