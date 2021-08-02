const express = require('express');

const path = require('path');
const port = 4000;

const app = express();


app.engine('html', require('express-art-template'));
app.set('view options', {
    debug: process.env.NODE_ENV !== 'production'
});
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');

app.get("/", (req, res)=>{
    res.render("hacker");
})


app.listen(port, () => {
    console.log(`Server started on port`);
});