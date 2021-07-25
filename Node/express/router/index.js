const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    // res.redirect('/register');
    res.render("index");
});

module.exports = router;