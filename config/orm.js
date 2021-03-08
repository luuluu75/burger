// * Import (require) `connection.js` into `orm.js`
const connection = require('./connection');

//    * In the `orm.js` file, create the methods that will execute the necessary MySQL commands in the controllers. These are the methods you will need to use in order to retrieve and store data in your database.


//      * `selectAll()`
const orm = {
  all(tableInput, cb) {
    const queryString = `SELECT * FROM ${tableInput};`;
    connection.query(queryString, (err, result) => {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },


  //      * `insertOne()`
  create(table, cols, vals, cb) {
    let queryString = `INSERT INTO ${table}`;


    console.log(queryString);

    connection.query(queryString, vals, (err, result) => {
      if (err) {
        throw err;
      }

      cb(result);
    });
  },
  
  //      * `updateOne()`
  update(table, objColVals, condition, cb) {
    let queryString = `UPDATE ${table}`;

    queryString += ' SET ';
    queryString += objToSql(objColVals);
    queryString += ' WHERE ';
    queryString += condition;

    console.log(queryString);
    connection.query(queryString, (err, result) => {
      if (err) {
        throw err;
      }

      cb(result);
    });
  }
};


//   delete(table, condition, cb) {
//     let queryString = `DELETE FROM ${table}`;
//     queryString += ' WHERE ';
//     queryString += condition;

//     connection.query(queryString, (err, result) => {
//       if (err) {
//         throw err;
//       }

//       cb(result);
//     });
//   },
// };


//    * Export the ORM object in `module.exports`.
module.exports = orm;
