'use strict';
const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {

	class RolePolicies extends Model {
		static associate(models) {
			// associations could be defined in here
		}
	}

	RolePolicies.init({
		id: {
			allowNull: false,
			autoIncrement: true,
			primaryKey: true,
			type: DataTypes.INTEGER
		},
		role_id: {
			type: DataTypes.INTEGER,
			references: 'Roles',
			referencesKey: 'id'
		},
		allow_create: DataTypes.BOOLEAN,
		allow_select: DataTypes.BOOLEAN,
		allow_update: DataTypes.BOOLEAN,
		allow_delete: DataTypes.BOOLEAN,
		user_mod: {
			type: DataTypes.INTEGER,
			references: 'Users',
			referencesKey: 'id'
		},
		is_deleted: DataTypes.BOOLEAN
	},{
		sequelize, modelName: 'Role_Policies'
	});
}