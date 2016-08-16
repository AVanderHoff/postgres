var Sequelize = require("sequelize"); 
var sequelize = require("../config/connection.js"); 





var Level1 = sequelize.define("level1", {
	id: {
		type: Sequelize.INTEGER,
		autoIncrement: true,
		primaryKey: true
	},
	partName: {
		type: Sequelize.STRING
	},
	partDescription: {
		type: Sequelize.STRING
	},
	oneTotwo:{
		type:Sequelize.INTEGER
	}


},
{
freezeTableName: true 
});


Level1.sync();







module.exports = Level1;