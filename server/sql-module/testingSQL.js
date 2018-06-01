
// //requiring the db connection from db-connection file; 
const connection = require('../config/db-connection');

// // making test data 
// //making a function() with callback function that has query in it; 
// const testData = (callback)=>{

//   connection.query("SELECT * FROM events",(error, results, fields)=>{
//     if (error) throw error;
//      const result = JSON.stringify(results,null,3)
//     console.log('The solution from database: ', result );
//     callback(result);
//   })
// };





// module.exports = testData