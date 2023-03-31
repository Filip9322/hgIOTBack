'use strict';
const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
	class UserRoles extends Model {
		/** 
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		*/
		static associate(models) {
			// associations could be defined here
		}
	}

	UserRoles.init({
		id: {
			allowNull: false,
			autoIncrement: true,
			primaryKey: true,
			type: DataTypes.INTEGER
		},
		user_id:  DataTypes.INTEGER,
		role_id:  DataTypes.INTEGER,
		user_mod:   DataTypes.INTEGER,
		is_deleted: DataTypes.BOOLEAN,
	},{
		sequelize, modelName: 'User_Roles'
	});

	return UserRoles;
}
