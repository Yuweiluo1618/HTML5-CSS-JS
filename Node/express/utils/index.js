function verification(req, res, next){
    if(true){
        res.send("login first");
        return;
    }
    next();
}

module.exports = {
    verification
}