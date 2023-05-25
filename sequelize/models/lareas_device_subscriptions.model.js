'use strict';
const { Model, DataTypes } = require('sequelize');

module.exports = sequelize => {
  class LAreas_Device_Subscriptions extends Model {
    static associate (models) {
      // associations could be defined in here
    }
  }

  LAreas_Device_Subscriptions.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    larea_id: {
      type: DataTypes.INTEGER,
      references: 'Local_Areas',
      referencesKey: 'id'
    },
    device_type_id: {
      type: DataTypes.INTEGER,
      references: 'Device_Types',
      referencesKey: 'id'
    },
    user_mod: {
      type: DataTypes.INTEGER,
      references: 'Users',
      referencesKey: 'id'
    },
    is_deleted: DataTypes.BOOLEAN,
  },{
    sequelize, modelName: 'LAreas_Device_Subscriptions'
  });

  return LAreas_Device_Subscriptions;
}