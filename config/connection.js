
var Sequelize = require('sequelize');

var source = {

	    localhost: {
        port: 3306,
        host: 'localhost',
        user: 'root',
        password: "Deanie313581",
        database: "burgers_db"
    },

        jawsDB: {
        port: 3306,
        host: 'bqmayq5x95g1sgr9.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
        user: 'r9fyxpy3qgbv7h3q',
        password: "g5i0cu8wx827zkzh",
        database: "cn6jr7jz6yo7p6ai" 
 
    }
}


var selectedSource = source.jawsDB;



var sequelize = new Sequelize("andrew", 'postgres', 'Deanie313581', {
  host: 'localhost',
  dialect: 'postgres',

  pool: {
    max: 5,
    min: 0,
    idle: 10000
  },

});

// Exports the connection for other files to use
module.exports = sequelize;