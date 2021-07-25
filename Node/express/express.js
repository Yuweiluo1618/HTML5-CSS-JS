const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const fs = require('fs');
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname,"static")));

async function fileReader(filePath, res){
    let content = await new Promise((resolve, reject)=>{
        fs.readFile(filePath, 'utf-8', (err, data)=>{
            if(err){
               reject(err);
            }
            resolve(data);
        });
    });
    res.send(content);
}

app.get('/', (req, res) => {
    res.send('Hello express');
});

// app.get('/register', (req, res) => {
//     let filePath = path.join(__dirname, "view", "registration.html");
//     fileReader(filePath, res)
// });

app.get('/list', (req, res) => {
    console.log(req.query);
    let {curPage, perPage,id } = req.query;
    res.send([curPage, perPage, id]);
    
});

app.get('/login', (req, res) => {
    let filePath = path.join(__dirname, "view", "login.html");
    fileReader(filePath, res);
});

// app.post('/register', (req, res) => {
//     console.log(req.body);
//     let{username, email, password, repwd} = req.body; 
//     // res.send(username)
//     res.redirect("/login");
// });

app.all("/register", (req, res)=>{
    // console.log(req.method);
    if(req.method === "GET"){
        let filePath = path.join(__dirname, "view", "registration.html");
        fileReader(filePath, res)
    }
    else if(req.method === "POST"){
        console.log(req.body);
        let{username, email, password, repwd} = req.body;
        res.redirect("/login");
    }
    
});

app.listen(port, () => {
    console.log(`Server started on port`);
});