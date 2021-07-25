const express = require('express');
const path = require('path');
const template = require("art-template");
const cookieParser = require('cookie-parser');
const cookieSession = require('cookie-session');

const passportRouter= require('./router/passport');
const indexRouter = require('./router/index');
const listRouter = require('./router/lisr');
const inheritanceRouter = require('./router/inheritance');
const cookieRouter =  require('./router/cookie_set_get');
const sessionRouter =  require('./router/session_set_get');

const utils = require('./utils/index')

const app = express();
const port = 3000;

app.engine('html', require('express-art-template'));
app.set('view options', {
    debug: process.env.NODE_ENV !== 'production'
});
app.set('views', path.join(__dirname, 'view'));
app.set('view engine', 'html');

template.defaults.imports.timestamp = function(value){return value * 1000};

app.use(cookieParser());
app.use(cookieSession({
    name: "my_session",
    keys: ["1weqdasdasdasdasdadsa@@"],
    maxAge: 1000*60*60*24*2
}));

app.use(express.static(path.join(__dirname,"static")))

app.use(passportRouter);
app.use(listRouter);
app.use(inheritanceRouter);
app.use(cookieRouter);
app.use(sessionRouter);
app.use(utils.verification, indexRouter);


app.listen(port, () => {
    console.log(`Server started on port`);
});

