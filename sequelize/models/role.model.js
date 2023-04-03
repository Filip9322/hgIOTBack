'use strict';
const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
	class Role extends Model {
		static associate(models){
			// associations could be defined in here
		}
	}

	Role.init({
		id : {
			allowNull: false,
			autoIncrement: true,
			primaryKey: true,
			type:   DataTypes.INTEGER
		},
		role_name:  DataTypes.STRING(20),
		bigo:       DataTypes.STRING(255),
		user_mod:   {
			type: DataTypes.INTEGER,
			references: 'Users',
			referencesKey: 'id'
		},
		is_deleted: DataTypes.BOOLEAN
	},{
		sequelize, modelName: 'Roles'
	});

	return Role;
}