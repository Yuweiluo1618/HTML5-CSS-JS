const router = require('express').Router();
const db = require('../db/nodejs-orm/index');

router.get('/orm_update', (req, res) => {
    const students_tb =  db.model('students');
    students_tb.update("id = 1", {age:99}, (err, result)=>{
        res.send(result);
    })
    
});

module.exports = router;