const http = require("http");
const port = 8080;

const server = http.createServer((request, response)=>{
    response.write("bug");
    response.end("helllo world");
});


server.listen(port, (err)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log('server start....');
    
})

