'use strict';
const { Model, DataTypes } = require('sequelize');

module.exports = sequelize => {
  class Building_Controllers extends Model {
    static associate (models) {
      // asssociations could be defined in here
    }
  }

  Building_Controllers.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    controller_id: {
      type: DataTypes.INTEGER,
      references: 'Controllers',
      referencesKey: 'id',
      allowNull: false
    },
    bd_type: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    bd_type_name: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    bd_device_type_id: {
      type: DataTypes.INTEGER,
      references: 'Device_Types',
      referencesKey: 'id',
      allowNull: false
    },
    bd_number_floors: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    user_mod: {
      type: DataTypes.INTEGER,
      references: 'Users',
      referencesKey: 'id'
    },
    is_deleted: DataTypes.BOOLEAN
  },{
    sequelize, modelName: 'Building_Controllers'
  });

  return Building_Controllers;
}