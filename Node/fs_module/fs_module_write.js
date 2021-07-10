const path = require("path");
const fs = require("fs");

let fullPath = path.join(__dirname, "resource", "writeFile.txt");

fs.writeFile(fullPath, "write content", "utf-8", (err)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log('wirte finish');
    
});

console.log('end');
