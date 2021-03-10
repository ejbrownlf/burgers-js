// Set up MySQL connection.
const mysql = require('mysql');

const JAWSDB_URL = 'mysql://vf0pg47r1xtek3ei:g43faq4gj8bjevhy@pxukqohrckdfo4ty.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/nd4zgth1wzo7aj71';

let connection;

if(process.env.JAWSDB_URL){
  connection = mysql.createConnection(process.env.JAWSDB_URL)
}else {
  connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    // NOTE: Be sure to add your MySQL password here!
    password: '',
    database: 'burgers_db',
  });
}

// Make connection.
connection.connect((err) => {
  if (err) {
    console.error(`error connecting: ${err.stack}`);
    return;
  }
  console.log(`connected as id ${connection.threadId}`);
});

// Export connection for our ORM to use.
module.exports = connection;
