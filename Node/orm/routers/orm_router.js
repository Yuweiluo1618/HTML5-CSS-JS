const express = require('express');
const db =  require('../db/nodejs-orm/index')
const router = require('express').Router();

router.get('/orm_1', (req, res) => {
    let students_tbl = db.model("students");
    students_tbl.find(['name', "age"], (err, data)=>{
        res.send(data);
    })
});

router.get('/orm_2', (req, res) => {
 let cls_tb = db.model('classes');
 cls_tb.find('id = 1', (err, data)=>{
    res.send(data);
 }) 	
});

router.get('/orm_3', (req, res) => {
    let student_tb = db.model("students");
    student_tb.limit({number: 2, count: 2}, (err, data)=>{
        res.send(data);
    })
});

router.get('/orm_4', (req, res) => {
    let student_tb = db.model('students');
    student_tb.find({where: "age > 18", arr:["name", "age"]}, (err, data)=>{
        console.log(data);
        
        res.send(data);
    });

});

module.exports = router;