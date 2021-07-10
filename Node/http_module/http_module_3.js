const http = require("http");
const port = 8080;

const server = http.createServer((request, response)=>{
    
    request.on("data", (PostData)=>{
        console.log(PostData.toString());
    });
    response.end("post request has recieved");
});

server.listen(port, (err)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log('server is starting....');
    
});


