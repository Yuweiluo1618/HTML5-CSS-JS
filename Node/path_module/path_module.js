const path = require("path");
// console.log(__dirname);
// console.log(__filename);

let extname = path.extname(__filename);
let basename = path.basename(__filename);
let dirname = path.dirname(__filename);
let parse = path.parse(__filename);


let fullPath = path.join(__dirname,"module","m1.js");
// console.log(fullPath);


// console.log(parse);


