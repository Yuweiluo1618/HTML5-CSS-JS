const { request } = require("express");
const express = require("express");

const app = express();

app.get("/",  (request, response)=>{
    response.send('HELLO EXPRESS');
});

app.listen(8000, ()=>{
    console.log('server started');
    
})