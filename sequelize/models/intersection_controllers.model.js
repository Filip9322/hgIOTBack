'use strict';
const { Model, DataTypes } = require('sequelize');

module.exports = sequelize => {
  class Intersection_Controllers extends Model {
    static associate (models){
      // associations could be defined in here
    }
  }

  Intersection_Controllers.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    inter_device_type_id: {
      type: DataTypes.INTEGER,
      references: 'Intersection_Devices',
      referencesKey: 'id',
      allowNull: false
    },
    inter_type_id: {
      type: DataTypes.INTEGER,
      references: 'Intersection_Types',
      referencesKey: 'id'
    },
    intersection_devices_distribution_id: {
      type: DataTypes.INTEGER,
      references: 'Intersection_Device_Distributions',
      referencesKey: 'id'
    },
    inter_road_name: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    user_mod: {
      type: DataTypes.INTEGER,
      references: 'Users',
      referencesKey: 'id'
    },
    is_deleted: DataTypes.BOOLEAN
  },{
    sequelize, modelName: 'Intersection_Controllers'
  });

  return Intersection_Controllers;
}