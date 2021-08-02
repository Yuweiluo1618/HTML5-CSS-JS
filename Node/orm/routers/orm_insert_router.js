const express = require('express');
const db =  require("../db/nodejs-orm/index");
const router = require('express').Router();

router.get('/orm_insert1', (req, res) => {
    const students_tb =  db.model('students');
    students_tb.insert({name: "zy", age: 27}, (err, result)=>{
        console.log(result);
        res.send("insert successful");
        
    })
});

router.get('/orm_insert2', (req, res) => {
    const students_tb = db.model('students');
    let add_arr = [{name: "lb"}, {name: "gy"}, {name: "zf"}];
    students_tb.insert(add_arr, (err, result)=>{
        console.log(result);
        res.send("insert successful");
    })
})

module.exports = router;