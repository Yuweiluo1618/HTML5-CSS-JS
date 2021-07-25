const fs = require('fs');
const path = require('path');


let filePath = path.join(__dirname,"res", "1.txt");

const p1 = new Promise((resolve, reject) => {
  fs.readFile(filePath, "utf-8", (err, data) => {
      if(err){
          reject(err);
      }
      resolve(data);
  });
});

p1.then(value=>{
    return new Promise((resolve, reject)=>{
        filePath = path.join(__dirname,"res", "2.txt");
        let content = []
        fs.readFile(filePath, "utf-8", (err, data) => {
            if(err){
                reject(err);
            }
            content = [value, data]
            resolve(content);
        });
    })
}, reason=>{
    console.log(reason);
}).then(value=>{
    filePath = path.join(__dirname,"res", "3.txt");
        fs.readFile(filePath, "utf-8", (err, data) => {
            if(err){
                return;
            }
            value.push(data);
            let result = value.join(" ")
            console.log(result);
            
        });
})