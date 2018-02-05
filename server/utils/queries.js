const mysql = require('mysql');
const _ = require('lodash');

var {
    mysqlconnect
} = require('../db/dbconnection');

var userModel = {};

userModel.getUsers = (field, text, callback) => {
    if (mysqlconnect) 
    {
        mysqlconnect.query(`SELECT * FROM ${process.env.USERTABLE} WHERE ${field} LIKE "%${text}%"`, function(error, rows) {
            if(error) throw error;
            else callback(null, rows);
        });

    }
};
    
module.exports = userModel;