'use strict';
const { Model, DataTypes } = require('sequelize');

module.exports = sequelize => {
  class DeviceTypes extends Model {
    static associate(models){
    // associations could be defined in here
    }
  }

  DeviceTypes.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    type_name: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    type_name_kr: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    dv_type_icon: {
      type: DataTypes.STRING(255)
    },
    user_mod: {
      type: DataTypes.INTEGER,
      references: 'Users',
      referencesKey: 'id'
    },
    is_deleted: DataTypes.BOOLEAN
  },{
    sequelize, modelName: 'Device_Types'
  });
}