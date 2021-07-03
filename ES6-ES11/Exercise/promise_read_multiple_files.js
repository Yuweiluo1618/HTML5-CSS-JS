const fs =  require("fs");
// let read_content;

const p = new Promise(function(resolve, reject){
    fs.readFile("./resource/test.txt", (err, data)=>{
        if(err){
            reject(err);
        }
        resolve(data);
    });
})

p.then(value=>{
    // read_content = value.toString();
    
    return new Promise((resolve, reject)=>{
        fs.readFile("./resource/test2.txt", (err, data)=>{
            if(err){
                reject(err);
            } 
            console.log(data);
            
            resolve([value, data]);
        });
    })
}).then(value=>{
    // read_content += "\n" + value.toString();
    console.log(value);
    
    return new Promise((resolve, rejecct)=>{
        fs.readFile("./resource/test3.txt", (err, data)=>{
            if(err){
                reject(err);
            }
            console.log(data);
            value.push(data)
            
            resolve(value);
        })
    })
}).then(value=>{
    // read_content += "\n" + value.toString();
    // console.log(value);
    
    console.log(value.join("\r\n"));
    
})


