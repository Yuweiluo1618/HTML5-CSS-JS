const http = require('http');
const path = require('path');
const fs = require('fs');
const port = 8080;
const usn = "a";
const pwd = "123";

async function FileReader(url, res){
   
    let data = await new Promise((resolve, reject)=>{
        fs.readFile(url, "utf-8", (err, data)=>{
            if(err){
                reject(err)
            }
            resolve(data);
        });
    });

    res.end(data);
}

const server = http.createServer((request, response)=>{
    let reqURL = request.url;
    let filePath;
    if(reqURL === "/" || reqURL === "/index.html"){
         filePath = path.join(__dirname, "res", "html", "index.html");
    }
    else if(reqURL === "/jquery.html"){
        filePath = path.join(__dirname, "res", "html", "jquery.html");
    }
    else if(reqURL === "/jquery_post.html"){
        filePath = path.join(__dirname, "res", "html", "jquery_post.html");
    }
    else if(reqURL === "/login.html"){
        filePath = path.join(__dirname, "res", "html", "login.html");
    }
    else if(reqURL.startsWith("/btn_click")){
        response.end("This info is from AJAX");
        return;
    }
    else if(reqURL === "/login_btn"){
        request.on("data", postData=>{
            let {username, password} = JSON.parse(postData.toString());
            if(username === usn && password === pwd){
                response.end("login successful");
            }else{
                response.end("login fail");
            }  
        });
        return;
    }
    else if(reqURL.endsWith(".css")){
        filePath = path.join(__dirname, "res", "css", "index.css");
    }
    else if(reqURL === "/js/jQuery.js"){
        filePath = path.join(__dirname, "res", "js", "jQuery.js");
    }
    else if(reqURL.endsWith(".js")){
        filePath = path.join(__dirname, "res", "js", "index.js");
    }
    else{
        response.end();
        return;
    }
    FileReader(filePath, response);
});

server.listen(port, (err)=>{
    console.log('server is starting...');
});