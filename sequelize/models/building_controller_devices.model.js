'use strict';
const { Model, DataTypes } = require('sequelize');

module.exports = sequelize => {
  class Building_Controller_Devices extends Model{
    static associate (models) {
      // association could be defined in here
    }
  }

  Building_Controller_Devices.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    building_floor_id: {
      type: DataTypes.INTEGER,
      references: 'Building_Floors',
      referencesKey: 'id'
    },
    controller_id: {
      type: DataTypes.INTEGER,
      references: 'Controllers',
      referencesKey: 'id'
    },
    device_id: {
      type: DataTypes.INTEGER
    },
    device_status: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    pos_x: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    pos_y: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    user_mod: {
      type: DataTypes.INTEGER,
      references: 'Users',
      referencesKey: 'id'
    },
    is_deleted: DataTypes.BOOLEAN
  },{
    sequelize, modelName: 'Building_Controller_Devices'
  });

  return Building_Controller_Devices;
}