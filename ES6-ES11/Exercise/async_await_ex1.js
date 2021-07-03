const fs = require("fs");

const p = new Promise((resolve, reject)=>{
    fs.readFile("./resource/test.txt", (err, data)=>{
        if(err){
            reject("read fail");
        }
        resolve(data);
    });

    
});

async function content(){
    let result = await p;
    let result_content = [result];
    return new Promise((resolve, reject)=>{
        fs.readFile("./resource/test2.txt", (err, data)=>{
            if(err){
                reject(err);
            }
            result_content.push(data)
            resolve(result_content);
        })
    });
    
}

async function content1(){
    let result = await p1;
    return new Promise((resolve, reject)=>{
        fs.readFile("./resource/test3.txt", (err, data)=>{
            if(err){
                reject(err);
            }
            result.push(data)
            resolve(result);
        })
    });
    
}

async function content2(){
    let result = await p2;
    console.log(result.join("\r\n"));
    
}


const p1 = content();
const p2 = content1();
content2();
