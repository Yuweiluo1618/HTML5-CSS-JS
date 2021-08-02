const router = require('express').Router();

router.all('/', (req, res) => {
    if(req.method=="GET"){
        res.render('temp_login')
    }else if(req.method=="POST"){

        let {username, password} = req.body;
        if(username=="laozhuang"&&password=="123456"){
            console.log("账号密码正确------------------");
            
            // 状态保持，在session中保存登录用户名代表用户登录
            req.session["username"] = username;
            // 跳转到转账页面
            res.redirect("/transfer");
        }else{
            console.log("密码错误");
        }

    }
});

router.all('/transfer', (req, res) => {
    // 看看能不能获取到这个username，
    let username = req.session["username"];
    console.log(username);
    
    if(!username){ //获取不到表示没有登录, 要跳转到首页
        res.redirect("/");
        return;
    }

    if(req.method=="GET"){
        console.log('hi');
        
        res.render('temp_transfer');

    }else if(req.method=="POST"){
        

        let {to_account, money} = req.body;
        console.log(to_account, money);
        
        //执行转账功能： ....此处省略
        console.log("假装执行转账操作，将当前登录用户的钱转账到指定账户");
        console.log(`已经完成转账${money}元到账户${to_account}`);
        
        res.json({to_account,money});

    }
});

module.exports = router