'use strict';
const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {

	class WideAreas extends Model {

		static associate(models) {
			// associations could be defined here
		}
	}

	WideAreas.init({
		id: {
			allowNull: false,
			autoIncrement: true,
			primaryKey: true,
			type: DataTypes.INTEGER
		},
		wa_name: {
			type: DataTypes.STRING(100),
			allowNull: false
		},
		wa_long_name: {
			type: DataTypes.STRING(100),
			allowNull: true
		},
		country_id: {
			type: DataTypes.INTEGER,
		},
		country_wa_term: {
			type: DataTypes.STRING(100)
		},
		wa_logo: {
			type: DataTypes.STRING(255)
		}
		bigo : {
			type: DataTypes.STRING(255)
		},
		user_mod: {
			type: DataTypes.INTEGER,
			references: 'Users',
			referencesKey: 'id'
		},
		is_deleted: {
			type: DataTypes.BOOLEAN
		}
	},{
		sequelize, modelName: 'Wide_Areas'
	});
}