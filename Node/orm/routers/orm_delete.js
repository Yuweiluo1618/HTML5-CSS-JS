const express = require('express');
const db = require("../db/nodejs-orm/index");
const router = require('express').Router();



router.get('/orm_delete', (req, res) => {
    const students_tb =  db.model("students");
    students_tb.delete("id = 18", (err, result)=>{
        res.send(result);
    })    
});


module.exports = router;