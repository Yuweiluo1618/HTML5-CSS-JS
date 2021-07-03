const { response } = require("express");
const express = require("express");
const { request } = require("http");
const app = new express();

app.all("/server", (request, response)=>{
    response.setHeader("Access-Control-Allow-Origin", '*');
    response.send("test1");
})


app.listen(8000, ()=>{
    console.log("server started....");
    
});
