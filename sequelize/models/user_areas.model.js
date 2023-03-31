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
		user_id: DataTypes.INTEGER,
		area_id: DataTypes.INTEGER,
		user_mod:   DataTypes.INTEGER,
		is_deleted: DataTypes.BOOLEAN
	},{
		sequelize, modelName: 'User_Areas'
	});

	return UserAreas;
}
