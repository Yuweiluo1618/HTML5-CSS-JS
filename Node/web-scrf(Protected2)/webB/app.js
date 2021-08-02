const express = require('express');
const app = express();
const path = require("path");

app.engine('html', require('express-art-template'));
app.set('view options', {
    debug: process.env.NODE_ENV !== 'production'
});
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');


app.all('/', (req, res) => {
    res.render("temp_index");
});

app.listen(4000, () => {
    console.log('Example app listening on port 4000!')
});