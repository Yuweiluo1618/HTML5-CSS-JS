const fs = require('fs');
const path = require('path');

function fileReader(filePath){
    return new Promise((resolve, reject)=>{
        fs.readFile(filePath, "utf-8", (err, data)=>{
            if(err){
                reject(err);
            }
            resolve(data);
        })
    });
}

async function display(){
    let data1 = await fileReader(path.join(__dirname,"res","1.txt"));
    let data2 = await fileReader(path.join(__dirname,"res","2.txt"));
    let data3 = await fileReader(path.join(__dirname,"res","3.txt"));
    console.log(`${data1} ${data2} ${data3}`);
    
}

display()