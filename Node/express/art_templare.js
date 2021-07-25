const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.engine('html', require('express-art-template'));
app.set('view options', {
    debug: process.env.NODE_ENV !== 'production'
});
app.set('views', path.join(__dirname, 'view'));
app.set('view engine', 'html');

app.get('/index', (req, res) => {
    let data = {
        num1: 30,
        num2: 20,
        arr: ["a", "b", "c", "d"]
    }
    res.render("index", data);	
});

app.listen(port, () => {
    console.log(`Server started on port`);
});