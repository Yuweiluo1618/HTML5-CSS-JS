const e = require('express');
const db = require('./nodejs-orm/index');

async function handleDB(res, tableName, method, param1, param2){
    const tableModel = db.model(tableName);
    let result;
    
    try{
        result = new Promise((resolve, reject)=>{
            if(!param1){
                
                tableModel[method]((err, data)=>{
                    if(err){
                        reject(err);
                    }
                    resolve(data);
                });  
            }
            else if(!param2){
                
                tableModel[method](param1, (err, data)=>{
                    if(err){
                        reject(err);
                    }
                    resolve(data);
                });  
            }

            else{
                
                tableModel[method](param1,param2, (err, data)=>{
                    if(err){
                        reject(err);
                    }
                    resolve(data);
                });  
            }
         
        });
    }catch(err){
        console.log(err);
        res.send({errMSG: "error"});
        return;  
    }

    return result;
    
}

module.exports = handleDB;