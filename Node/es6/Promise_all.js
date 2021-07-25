const fs = require('fs');
const path = require('path');
const util = require('util');

function fileReader(filePath){
    return new Promise((resolve, reject)=>{
        fs.readFile(filePath, "utf-8", (err, data)=>{
            if(err){
                reject(err);
            }
            resolve(data);
        });
    })
}

const fileWriter = util.promisify(fs.writeFile);

const p1 = fileReader(path.join(__dirname,"res", "1.txt"));
const p2 = fileReader(path.join(__dirname,"res", "2.txt"));
const p3 = fileReader(path.join(__dirname,"res", "3.txt"));

Promise.all([p1,p2,p3]).then(data=>{
    // console.log(data);
    // console.log(data.join("\t"));
    fileWriter(path.join(__dirname, "res", "data.txt"), data.join("\t"))
    
    
}).catch(reason=>{
    console.log(reason);
    
})