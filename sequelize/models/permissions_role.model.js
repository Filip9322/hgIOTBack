'use strict';
const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {

	class PermissionsRol extends Model {
		static associate(models) {
			// associations could be defined in here
		}
	}

	PermissionsRol.init({
		id: {
			allowNull: false,
			autoIncrement: true,
			primaryKey: true,
			type: DataTypes.INTEGER
		},
		module_id: DataTypes.INTEGER,
		role_id: DataTypes.INTEGER,
		allow_create: DataTypes.BOOLEAN,
		allow_select: DataTypes.BOOLEAN,
		allow_update: DataTypes.BOOLEAN,
		allow_delete: DataTypes.BOOLEAN,
		user_mod: DataTypes.INTEGER,
		is_deleted: DataTypes.BOOLEAN
	},{
		sequelize, modelName: 'Permission_by_rol'
	});
}