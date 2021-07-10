const http = require("http");
const path = require("path");
const fs = require("fs");
const port = 8080;

async function responseFile(filePath){
     return new Promise((resolve, reject)=>{
        fs.readFile(filePath, (err, data)=>{
            if(err){
                reject(err);
            }
            
            resolve(data);
        })
    });
    
    
    
}


const server = http.createServer((request, response)=>{
    let filePath = "";
    console.log(request.url);
    
    if(request.url === "/" || request.url === "/index.html" ){
        filePath = path.join(__dirname,"server_response","html","index.html");  
    }else if(request.url.endsWith(".css")){
        filePath =  path.join(__dirname,"server_response","css", "index.css");
    }else if(request.url === "/detail.html" || request.url === "/detail"){
        filePath = path.join(__dirname,"server_response","html","detail.html");  
    }else{
        response.end();
    }
    
    responseFile(filePath)
    .then(value=>{
        response.end(value);
    },reason=>{

    })
});


server.listen(port,(err)=>{
    if(err) return;
    console.log('server is starting');
    
})