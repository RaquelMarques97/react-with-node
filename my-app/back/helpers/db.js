const mysql      = require('mysql');
const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'testosterona',
  database : 'questreactnode'
});
module.exports  =  connection;