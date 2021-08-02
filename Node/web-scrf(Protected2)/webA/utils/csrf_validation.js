const getRandomString = require("./csrf_token");

function csfr_validation(req, res, next){
    if(req.method == "GET"){
        let csrf_token = getRandomString(48);
        res.cookie('csrf_token', csrf_token);
    }
    else if(req.method == "POST"){
        console.log(req.headers["x-csrftoken"]);
        console.log(req.cookies["csrf_token"]);
        
        if((req.headers["x-csrftoken"] === req.cookies["csrf_token"])){
            console.log("csrf验证通过！");
           
        }else{
            res.send("csrf验证不通过！");
            return
        }
    }

    next();
}

module.exports = csfr_validation