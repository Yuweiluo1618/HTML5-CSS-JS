const express = require('express');
const app = express();

app.get('/get_data', (req, res) => {
    let data = {
        name: "node.js",
        age: "11"
    }
    // res.send("callback({name: 'node.js', age: 11})");
    res.jsonp(data);
});

app.listen(3000, () => {
    console.log(`Server started on port 3000`);
});