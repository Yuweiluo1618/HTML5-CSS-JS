const express = require('express');
const app = express();
const path = require("path");
const cookieParser = require('cookie-parser');
const token = require('./static/js/token');

const bodyParser = require("body-parser");
const cookieSession = require('cookie-session');

app.use(cookieSession({
    name:"my_session",  //name为session名，自己起一个字符串就行
    keys:["$^%%&^&%$RT%&TYGSGSFRR554785432$#@$$#%$@#%"],  // 内部加密需要的keys， keys为随机字符串
    maxAge: 1000 * 60 * 60 * 24   // 过期时间
}))

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cookieParser());

app.engine('html', require('express-art-template'));
app.set('view options', {
    debug: process.env.NODE_ENV !== 'production'
});
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');


app.all('/', (req, res) => {
    if(req.method=="GET"){
        res.render('temp_login')
    }else if(req.method=="POST"){

        let {username, password} = req.body;
        if(username=="laozhuang"&&password=="123456"){
            // 状态保持，在session中保存登录用户名代表用户登录
            req.session["username"] = username;
            // 跳转到转账页面
            res.redirect("/transfer");
        }else{
            console.log("密码错误");
        }

    }
});

app.all('/transfer', (req, res) => {
    // 看看能不能获取到这个username，
    let username = req.session["username"];

    if(!username){ //获取不到表示没有登录, 要跳转到首页
        res.redirect("/");
    }

    if(req.method=="GET"){
        res.cookie('csrf_token', token(48));
        res.render('temp_transfer')
    }else if(req.method=="POST"){
        
        console.log(req.headers["x-csrftoken"]);
        console.log(req.cookies["csrf_token"]);

        
        if(req.headers["x-csrftoken"] !== req.cookies["csrf_token"]){
            res.send("you are not real user!");
            return;
        }


        let {to_account, money} = req.body;
        console.log(to_account, money);
        
        //执行转账功能： ....此处省略
        console.log("假装执行转账操作，将当前登录用户的钱转账到指定账户");
        console.log(`已经完成转账${money}元到账户${to_account}`);
        
        res.json({to_account,money});

    }
});

app.listen(8000, () => {
    console.log('Example app listening on port 8000!')
});