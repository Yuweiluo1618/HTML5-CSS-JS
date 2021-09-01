const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.get('/get_data', (req, res) => {
    let data = {
        name: "node.js",
        age: "11"
    }
    // res.send("callback({name: 'node.js', age: 11})");
    res.jsonp(data);
});

app.get('/get_data2', (req, res) => {
    
    let data = {
        name: "node.js",
        age: "11"
    }

    
    // res.setHeader('Access-Control-Allow-Origin', '*');
    res.send(data);
});

app.listen(3000, () => {
    console.log(`Server started on port 3000`);
});