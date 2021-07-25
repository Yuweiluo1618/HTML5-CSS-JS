const fs =  require("fs");
const path = require("path");

let filePath = path.join(__dirname, 'res', '11.txt');

const p1 = new Promise((resolve, reject)=>{
    fs.readFile(filePath, "utf-8", (err, data)=>{
        if(err){
            reject(err);
        }
        resolve(data);
    });
})

p1.then(value=>{
    console.log(value);
    return p1;   
}, error=>{
    console.log(error);
    return p1;
    
}).then(value=>{
    console.log(value);
    
},error=>{
    console.log(error);
    
})