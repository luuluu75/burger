const mysql = require('mysql');

// * Inside the `connection.js` file, setup the code to connect Node to MySQL.
const connection = mysql.createConnection({
    host: 'localhost',
  
    // Your port, if not 3306
    port: 3306,
  
    // Your username
    user: 'root',
  
    password: 'yourRootPassword',
    database: 'burgers_db',
  });
  
  connection.connect((err) => {
    if (err) {
      console.error(`error connecting: ${err.stack}`);
      return;
    }
    console.log(`connected as id ${connection.threadId}`);
  });

// * Export the connection.
module.exports = connection;
