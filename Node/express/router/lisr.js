const express = require('express');
const router = require('express').Router();

router.get('/list', (req, res) => {
    res.render('list');
});

router.get('/detail/:id/:type', (req, res) => {
 	console.log(req.params);
    res.send(req.params.id);
     
});

router.get('/showinfo', (req, res) => {
    
    let data = {
        num: 20
    };

    res.render("showInfo", data);
});


module.exports = router;