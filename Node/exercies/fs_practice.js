const fs = require("fs");
const path = require("path");

let fileList = fs.readdirSync("./Node/resource");
fileList.map(val=>{
    fs.renameSync(`./Node/resource/${val}`, `./Node/resource/[test]${val}`)     
})


