'use strict';
const { Model, DataTypes } = require('sequelize');


module.exports = sequelize => {
  class Controllers extends Model {
    static associate (models){
      // associations could be defined in here
    }
  }

  Controllers.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    device_type_id: {
      type: DataTypes.INTEGER,
      references: 'Device_Types',
      referencesKey: 'id'
    },
    local_area_id: {
      type: DataTypes.INTEGER,
      references: 'Local_Areas',
      referencesKey: 'id'
    },
    controller_name: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    controller_type_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    controller_type_name: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    local_area_controller_number: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    local_goverment_controller_number: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    controller_management_department: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    controller_address: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    controller_address_district: {
      type: DataTypes.STRING(100),
      allowNull: true,
      defaultValue: ''
    },
    controller_map_screen_save: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: ''
    },
    map_x: {
      type: DataTypes.FLOAT(14, 10),
      allowNull: false
    },
    map_y: {
      type: DataTypes.FLOAT(14, 10),
      allowNull: false
    },
    is_active: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    is_school_zone: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    is_IOT: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    is_installed:{
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    has_abnormalities: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    bigo: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    user_mod: {
      type: DataTypes.INTEGER,
      references: 'Users',
      referencesKey: 'id',
      defaultValue: 1
    },
    is_deleted: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  },{
    sequelize, modelName: 'Controllers'
  });

  return Controllers;
}