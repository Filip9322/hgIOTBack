'use strict';
const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) =>  {

	class UserProvincies extends Model {

		static associate(models) {
			// associations could be defined here
		}
	}

	UserProvincies.init({
		id: {
			allowNull: false,
			autoIncrement: true,
			primaryKey: true,
			type:     DataTypes.INTEGER
		},
		user_id: {
			type: DataTypes.INTEGER,
			references: 'Users',
			referencesKey: 'id'
		},
		wide_area_id: {
			type: DataTypes.INTEGER
			references: 'Wide_Areas',
			referencesKey: 'id'
		},
		user_mod:     {
			type: DataTypes.INTEGER,
			references: 'Users',
			referencesKey: 'id'
		},
		is_deleted:   DataTypes.BOOLEAN
	},{
		sequelize, modelName: 'User_Wide_Areas'
	});

	return UserProvincies;
}