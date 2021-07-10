const http = require("http");
const url = require("url");
const port = 8080;


const server = http.createServer((request, response)=>{
    let reqUrl = request.url;
    let reqMethod = request.method;
    console.log(reqUrl, reqMethod);
    
    // console.log(reqUrl);
    let urlObj = url.parse(reqUrl, true);
    // console.log(urlObj.query.curPage);
    
    response.end("end");
});

server.listen(port, err=>{
    if(err){
        console.log(err);
        return;
    }
    console.log('server is starting...');
    
})