const express = require('express');
const db =  require('../db/nodejs-orm/index')
const router = require('express').Router();

router.get('/orm_1', (req, res) => {
    let students_tbl = db.model("students");
    students_tbl.find(['name', "age"], (err, data)=>{
        res.send(data);
    })
});

module.exports = router;