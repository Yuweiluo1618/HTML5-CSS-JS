const { request, response } = require('express');
const express = require('express');

const app = new express();

app.get("/home", (request, response)=>{
    response.sendFile(__dirname+'/index.html')
});

app.get("/data", (request, response)=>{
    response.send("user data");
});

app.get("/jsonp", (request, response)=>{
    var data = {name:"jack"};
    data = JSON.stringify(data);
    response.end(`handle(${data})`)

});

app.get("/check", (request, response)=>{
    var data = {message: "input wrong"};
    data = JSON.stringify(data);
    response.end(`handle(${data})`)

});

app.get("/jsonp-jquery", (request, response)=>{
    var data = {message: "jquery"};
    data = JSON.stringify(data);
    var cb = request.query.callback;
    response.end(`${cb}(${data})`)

});

app.get("/cros", (request, response)=>{
    response.setHeader("Access-Control-Allow-Origin", "*");
    response.send("cros");

});

app.listen(9000, ()=>{
    console.log('server start...');
    
});