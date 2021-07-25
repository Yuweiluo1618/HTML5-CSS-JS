const fs = require('fs');
const path = require('path');
let filePath = path.join(__dirname,"res", "1.txt");
let content = "";

function fileReader(filePath){
    return new Promise((resolve, reject)=>{
        fs.readFile(filePath, "utf-8", (err, data)=>{
            if(err){
                reject(err);
            }
            resolve(data);
        })
    })
}

fileReader(filePath)
.then(data=>{
    content += data+" ";
    filePath = path.join(__dirname,"res", "2.txt");
    return fileReader(filePath);
}).then(data=>{
    content += data+ " ";
    filePath = path.join(__dirname,"res", "3.txt");
    return fileReader(filePath);
}).then(data=>{
    content += data;
    console.log(content);
    
})

