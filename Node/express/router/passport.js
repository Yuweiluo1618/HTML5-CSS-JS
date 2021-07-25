const express = require('express');
const router = express.Router();



router.all('/register', (req, res) => {
    if(req.method === "GET"){
        res.render("registration");
    }
    else if(req.method === "POST"){
        res.redirect("login")
    }  
 	
});

router.get('/login', (req, res) => {
    res.render('login');
});

module.exports = router;

