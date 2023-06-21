'use strict';
const { Model, DataTypes } = require('sequelize');

module.exports = sequelize => {
  class Building_Floors extends Model {
    static associate (models) {
      // associations could be defined in here
    }
  }

  Building_Floors.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    building_controller_id: {
      type: DataTypes.INTEGER,
      references: 'Building_Controllers',
      referencesKey: 'id',
      allowNull: false
    },
    floor_number: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    floor_name: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    floor_blueprint: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    user_mod: {
      type: DataTypes.INTEGER,
      references: 'Users',
      referencesKey: 'id'
    },
    is_deleted: DataTypes.BOOLEAN
  },{
    sequelize, modelName: 'Building_Floors'
  });

  return Building_Floors;
}