const express = require('express');
const router = require('express').Router();


router.get('/child', (req, res) => {
    res.render("child");
});


module.exports = router;