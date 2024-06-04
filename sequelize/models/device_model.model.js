'use strict';
const { Model, DataTypes } = require('sequelize');

module.exports = sequelize => {
  class DeviceModels extends Model {
    // associations could be defined in here -
  }

  DeviceModels.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    device_type_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: 'Device_Types',
      referencesKey: 'id'
    },
    model_gname: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    model_code: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    model_subcode: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    model_name: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    bigo: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    is_deleted: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    }
  }, {
      sequelize, modelName: 'Device_Models'
  });

  return DeviceModels;
}