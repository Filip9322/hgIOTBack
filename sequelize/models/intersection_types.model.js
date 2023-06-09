'use strict';
const { Model, DataTypes } = require('sequelize');

module.exports = sequelize => {
  class Intersection_Types extends Model {

    static associate (models) {
      // associations could be defined in here
    }
  }

  Intersection_Types.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    inter_type_draw: {
      type: DataTypes.STRING(255)
    },
    inter_type_name: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    inter_type_number_devices: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    user_mod: {
      type: DataTypes.INTEGER,
      references: 'Users',
      referencesKey: 'id'
    },
    is_deleted: DataTypes.BOOLEAN
  }, {
    sequelize, modelName: 'Intersection_Types'
  });

  return Intersection_Types;
}