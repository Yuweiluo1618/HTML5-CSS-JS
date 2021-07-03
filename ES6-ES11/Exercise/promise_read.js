const fs = require("fs");
// fs.readFile("./resource/test.txta", (err, data)=>{
//     if(err) throw err;
//     console.log(data.toString());
// })


const p = new Promise(function(resolve, reject){
    fs.readFile("./resource/test.txta", (err, data)=>{
        if(err){
            reject(err);
        }

        resolve(data);
    });
})

p.then(function(value){
    console.log(value.toString());
    
}, function(reason){
    console.error(reason);
    
})