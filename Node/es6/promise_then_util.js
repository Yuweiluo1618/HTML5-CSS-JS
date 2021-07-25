const fs = require('fs');
const path = require('path');
const util = require('util');
let content = "";


const fileReader = util.promisify(fs.readFile);
const fileWriter = util.promisify(fs.writeFile);

const p1 = fileReader(path.join(__dirname,"res", "1.txt"));
const p2 = fileReader(path.join(__dirname,"res", "2.txt"));
const p3 = fileReader(path.join(__dirname,"res", "3.txt"));


p1.then(data=>{
    content += data + "\t";
    return p2;
}).then(data=>{
    content += data + "\t";
    return p3;
}).then(data=>{
    content += data;
    fileWriter(path.join(__dirname,"res","data.txt"), content);
})