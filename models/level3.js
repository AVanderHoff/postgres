var Sequelize = require("sequelize"); 
var sequelize = require("../config/connection.js"); 





var Level3 = sequelize.define("level3", {
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
	threeFromtwo:{
		type:Sequelize.INTEGER
	},
	threeTofour:{
		type:Sequelize.INTEGER
	}


},
{
freezeTableName: true 
});


Level3.sync();







module.exports = Level3;