// module.exports = {
//   mysql : require('mysql2'),
//   connection : mysql.createConnection({
//     host: 'localhost',
//     user : 'root',
//     password : 'root',
//     database : 'test_youn'
//   })
// }

const mysql = require('mysql2');

const connection = mysql.createConnection({
  host : 'localhost',
  user : 'root',
  password : 'root',
  database : 'test_youn'
});

connection.connect();

connection.query(
  command,
  (err,result,fields) => {
    if (err) throw err;
    console.log(result);
    // console.log(fields);
  }
);

connection.end();