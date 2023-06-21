'use strict';
const { Model, DataTypes } = require('sequelize');

module.exports = sequelize => {
  class Intersection_Devices extends Model {
    static associate (models) {
      // asssociations could be defined in here
    }
  }

  Intersection_Devices.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    intersection_controller_id: {
      type: DataTypes.INTEGER,
      references: 'Intersection_Controllers',
      referencesKey: 'id',
      allowNull: false
    },
    device_id: DataTypes.INTEGER,
    pos_number: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    dv_pos_x: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    dv_pos_y: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    user_mod: {
      type: DataTypes.INTEGER,
      references: 'Users',
      referencesKey: 'id'
    },
    is_deleted: DataTypes.BOOLEAN
  },{
    sequelize, modelName: 'Intersection_Devices'
  });

  return Intersection_Devices;
}