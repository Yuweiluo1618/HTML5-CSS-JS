const path = require("path");
const fs = require("fs");

fs.readFile("./Node/resource/1.txt", "utf-8", (err, data1)=>{
    if(err){
        console.log(err);
        return;
    }
    fs.readFile("./Node/resource/2.txt", "utf-8", (err, data2)=>{
        if(err){
            console.log(err);
            return;
        }
        fs.writeFile("./Node/resource/3.txt", `${data1}\r\n${data2}`, "utf-8", err=>{
            if(err){
                console.log(err);
                return;
            }
            console.log('done');
            
        })
    })
    
});