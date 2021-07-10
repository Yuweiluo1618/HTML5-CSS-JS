const fs = require("fs");
const path = require("path");

let fullPath = path.join(__dirname, "resource", "readFile.txt");


fs.readFile(fullPath,"utf-8", (err, data)=>{
    if(err){
        console.log(err);
        return;
    }

    console.log(data);
    
});

console.log('end');
