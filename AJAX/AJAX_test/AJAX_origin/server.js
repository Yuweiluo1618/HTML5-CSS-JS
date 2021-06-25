const { request, response } = require('express');
const express = require('express');

const app = express();

app.get('/test', (request, response)=>{
    response.setHeader("Access-Control-Allow-Origin", '*');
    response.send("test1");
});

app.get('/server', (request, response)=>{
    response.setHeader("Access-Control-Allow-Origin", '*');
    let data = {name: "tom", age: 9};
    data = JSON.stringify(data)
    response.send(data);
});

app.all('/ie', (request, response)=>{
    response.setHeader("Access-Control-Allow-Origin", "*");
    response.setHeader("Access-Control-Allow-Headers", "*");
    response.send("AJAX ie5");
});

app.get('/delay', (request, response)=>{
    response.setHeader("Access-Control-Allow-Origin", '*');
    setTimeout(function(){
        response.send("test1");
    }, 3000);
    
});

app.all('/jquery', (request, response)=>{
    response.setHeader("Access-Control-Allow-Origin", "*");
    response.setHeader("Access-Control-Allow-Headers", "*");
    var data = {name: "jquery"};
    response.send(JSON.stringify(data));
});

app.all('/axios', (request, response)=>{
    response.setHeader("Access-Control-Allow-Origin", "*");
    response.setHeader("Access-Control-Allow-Headers", "*");
    var data = {name: "axios"};
    response.send(JSON.stringify(data));
});

app.all('/fetch', (request, response)=>{
    response.setHeader("Access-Control-Allow-Origin", "*");
    response.setHeader("Access-Control-Allow-Headers", "*");
    var data = {name: "fetch"};
    response.send(JSON.stringify(data));
});

app.listen(8000, ()=>{
    console.log("server started....");
    
});
