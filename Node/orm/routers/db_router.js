const express = require('express');
const db = require('../db/db');
const router = require('express').Router();

router.get('/', (req, res) => {
    db.query("select * from students", (err, data)=>{
      res.send(data);
        
    })
});

module.exports = router;