const express = require('express');
const app = express();

const path = require("path");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cookieSession = require('cookie-session');
const appRouter = require('./router/router');
const validation =  require("./utils/csrf_validation")


app.use(cookieParser());
app.use(cookieSession({
    name:"my_session",  //name为session名，自己起一个字符串就行
    keys:["$^%%&^&%$RT%&TYGSGSFRR554785432$#@$$#%$@#%"],  // 内部加密需要的keys， keys为随机字符串
    maxAge: 1000 * 60 * 60 * 24   // 过期时间
}))
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.engine('html', require('express-art-template'));
app.set('view options', {
    debug: process.env.NODE_ENV !== 'production'
});
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');

app.use(validation, appRouter);


app.listen(8000, () => {
    console.log('Example app listening on port 8000!')
});