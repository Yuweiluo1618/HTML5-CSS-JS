const fs = require("fs");
const path = require("path");

let fileList = fs.readdirSync("./Node/resource");
// console.log(fileList);

fileList.forEach(val=>{
    //add prefix
    // fs.renameSync(`./Node/resource/${val}`, `./Node/resource/[test]${val}`);
    //delete prefix
    let newName = val.substring(6); 
    fs.renameSync(`./Node/resource/${val}`, `./Node/resource/${newName}`);
})


