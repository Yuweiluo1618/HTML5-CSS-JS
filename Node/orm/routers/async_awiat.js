const router = require('express').Router();
const db = require('../db/nodejs-orm/index');
const handleDB = require("../db/handleDB");


router.get('/async', (req, res) => {
    const students_tb = db.model('students');
    let result;
    (async function(){
        try{
            result = await new Promise((resolve, reject)=>{
                students_tb.find("id = 1", (err, data)=>{
                    if(err){
                        reject(err);
                    }
                    resolve(data);
                });
            });
        }
        catch(err){
            console.log(err);
            res.send({error: "MySQL serrch error"});
            return; 
        }
      
        res.send(result);
    })();
});

router.get('/async1', (req, res) => {
    (async ()=>{
        try{
            let result = await handleDB(res, "students", "update", "id = 1", {age:1});
            res.send(result);
        }
        catch(err){
            console.log(err);
            
        }    
          
    })();
});

module.exports = router;