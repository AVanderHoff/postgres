var Sequelize = require("sequelize"); 
var sequelize = require("../config/connection.js"); 





var burgers_table = sequelize.define("burgers_table", {
	id: {
		type: Sequelize.INTEGER,
		autoIncrement: true,
		primaryKey: true
	},
	burger_name: {
		type: Sequelize.STRING
	},
	devoured: {
		type: Sequelize.BOOLEAN
	},
	date: {
		type: Sequelize.DATE
	}


},
{
freezeTableName: true 
});


burgers_table.sync({force: true});







module.exports = burgers_table;