const fs = require("fs");

function read_resource(url){
    return new Promise((resolve, reject) => {
        fs.readFile(url, (err, data)=>{
            if(err){
                reject(err);
            }
            resolve(data);
        });
    });
    
}

async function main(){
    let text1 = await read_resource("./resource/test.txt");
    let text2 = await read_resource("./resource/test2.txt");
    let text3 = await read_resource("./resource/test3.txt");

    console.log(`${text1}\r\n${text2}\r\n${text3} `);
    
}

main();