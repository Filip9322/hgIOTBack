'use strict';
const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {

	class RoleModules extends Model {

		static associate(models) {
			// associations could be defined here
		}
	}

	RoleModules.init({
		id: {
			allowNull: false,
			autoIncrement: true,
			primaryKey: true,
			type:   DataTypes.INTEGER
		},
		role_id:    DataTypes.INTEGER,
		module_id:  DataTypes.INTEGER,
		user_mod:   DataTypes.INTEGER,
		is_deleted: DataTypes.BOOLEAN
	},{
		sequelize, modelName: 'Role_Modules'
	});

	return RoleModules;
}