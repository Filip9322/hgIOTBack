'use strict';
const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {

	class LocalAreas extends Model {

		static associate(models) {
			// associations could be defined in here
		}
	}

	LocalAreas.init({
		id: {
			allowNull: false,
			autoIncrement: true,
			primaryKey: true,
			type: DataTypes.INTEGER
		},
		wide_area_id: {
			type: DataTypes.INTEGER,
			references: 'Wide_Areas',
			referencesKey: 'id'
		},
		local_name: {
			type: DataTypes.STRING(100),
			allowNull: false
		},
		local_type: {
			type: DataTypes.STRING(100),
			allowNull: false
		},
		is_IOT: {
			type: DataTypes.BOOLEAN,
			allowNull: false
		},
		local_CEO: {
			type: DataTypes.STRING(100)
		},
		local_tel: {
			type: DataTypes.STRING(100)
		},
		local_mob: {
			type: DataTypes.STRING(100)
		},
		local_mail: {
			type: DataTypes.STRING(100)
		},
		local_admin: {
			type: DataTypes.STRING(100)
		},
		local_state: {
			type: DataTypes.BOOLEAN
		},
		local_logo: {
			type: DataTypes.STRING(255)
		},
		map_x: {
			type: DataTypes.STRING(255)
		},
		map_y: {
			type: DataTypes.STRING(255)
		},
		bigo: {
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
		sequelize, modelName: 'Local_Areas'
	});
}