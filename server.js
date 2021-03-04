const mysql = require('mysql');
const express = require('express')

const connection = mysql.createConnection({
  host: 'localhost',

  // Your port, if not 3306
  port: 3306,

  // Your username
  user: 'root',

  password: 'yourRootPassword',
  database: 'employee_database',
});

connection.connect((err) => {
  if (err) throw err;
  console.log(`connected as id ${connection.threadId}`);
  employeeData();
});