const fs = require("fs");
const path = require("path");

let filePath = path.join(__dirname,"res","1.txt");

const p1 = new Promise((resolve, reject)=>{
    fs.readFile(filePath, "utf-8", (err, data)=>{
        if(err){
            reject(err);
        }
        resolve(data);
    });
});

p1.then(value=>{
    console.log(value);
    
}, err=>{
    console.log(err);
    
})