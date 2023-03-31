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
		user_id:      DataTypes.INTEGER,
		province_id: DataTypes.INTEGER,
		user_mod:     DataTypes.INTEGER,
		is_deleted:   DataTypes.BOOLEAN
	},{
		sequelize, modelName: 'User_Provincies'
	});

	return UserProvincies;
}