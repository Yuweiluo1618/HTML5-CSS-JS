const express = require('express');
const router = require('express').Router();


router.get('/set_cookie', (req, res) => {
    res.cookie("name", "alpha", {maxAge: 60*60*1000});
    res.cookie("age", 27);
    res.send("cookie has been set")
});


router.get('/get_cookie', (req, res) => {
    let name = req.cookies["name"];
    let age = req.cookies["age"];

    res.send(`cookie is name:${name}, age:${age}`)
});

module.exports = router;