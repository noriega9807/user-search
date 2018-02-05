var mysql      = require('mysql');

var connection = mysql.createConnection({
  host     :  process.env.MYSQL_URI,
  user     :  process.env.USER,
  password :  process.env.PASSWORD,
  database :  process.env.DATABASE,
  port     :  process.env.MYSQLPORT
});

connection.connect((err) => {
    if (err) {
      console.error('error connecting: ' + err.stack);
      return;
    }
   
    console.log('connected as id ' + connection.threadId);
  });

module.exports = {
    mysqlconnect: connection
};