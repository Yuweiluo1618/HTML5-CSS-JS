const fs = require('fs');
const path = require('path');
const util = require('util');

const fileReader = util.promisify(fs.readFile);

const p1 = fileReader(path.join(__dirname, "res", "1.txt"), "utf-8");
const p2 = fileReader(path.join(__dirname, "res", "2.txt"), "utf-8");
const p3 = fileReader(path.join(__dirname, "res", "3.txt"), "utf-8");

Promise.race([p1,p2,p3]).then(value=>{
    console.log(value);
    
}).catch(err=>{
    console.log(err);
    
})
