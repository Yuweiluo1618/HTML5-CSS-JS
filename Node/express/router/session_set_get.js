const express = require('express');
const router = require('express').Router();

router.get("/get_session", (req, res)=>{
    let name = req.session.name;
    let age = req.session.age;
    res.send(`Session Info: ${name}  ${age}`);
});

router.get('/set_session', (req, res) => {
    req.session["name"] = "Ana";
    req.session["age"] = 18;
    res.send("session has been set");
});


module.exports = router;