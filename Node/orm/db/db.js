const mysql = require('mysql');

const pool = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "333",
    database: "qianduan_test"
});

function query(sql, callback){
    pool.getConnection(function(err, connection){
        connection.query(sql, function(err, rows){
            callback(err, rows);
            connection.release();
        })
    })
}

exports.query = query;