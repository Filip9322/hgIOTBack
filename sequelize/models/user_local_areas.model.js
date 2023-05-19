'use strict';
const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {

	class UserAreas extends Model {

		static associate(models) {
			// associations could be defined here
		}
	}

	UserAreas.init({
		id: {
			allowNull: false,
			autoIncrement: true,
			primaryKey: true,
			type: DataTypes.INTEGER
		},
		user_id: {
			type: DataTypes.INTEGER,
			references: 'Users',
			referencesKey: 'id'
		},
		local_area_id: {
      type: DataTypes.INTEGER,
      references: 'Local_Areas',
      referencesKey: 'id'
    },
		user_mod:   {
			type: DataTypes.INTEGER,
			references: 'Users',
			referencesKey: 'id'
		},
		is_deleted: DataTypes.BOOLEAN
	},{
		sequelize, modelName: 'User_Local_Areas'
	});

	return UserAreas;
}
