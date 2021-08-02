const router = require('express').Router();
const db = require('../db/nodejs-orm/index');

router.get('/orm_sql', (req, res) => {
    const students_tb =  db.model('students');
    students_tb.sql("select * from students limit 10", (err, data)=>{
        res.send(data);
    })
});

module.exports = router;