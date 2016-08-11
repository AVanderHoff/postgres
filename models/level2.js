var Sequelize = require("sequelize"); 
var sequelize = require("../config/connection.js"); 





var Level2 = sequelize.define("level2", {
	id: {
		type: Sequelize.INTEGER,
		autoIncrement: true,
		primaryKey: true
	},
	partName: {
		type: Sequelize.STRING
	},
	partDescription: {
		type: Sequelize.BOOLEAN
	},
	twoFromone:{
		type:Sequelize.INTEGER
	},
	twoTothree:{
		type:Sequelize.INTEGER
	}


},
{
freezeTableName: true 
});


Level2.sync();







module.exports = Level2;