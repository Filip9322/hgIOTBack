'use strict';
const { Model, DataTypes } = require('sequelize');

module.exports = sequelize =>  {
  class Intersection_Device_Distributions extends Model {
    static associate (models) {
      // associations could be defined in here
    }
  }

  Intersection_Device_Distributions.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    controller_id: {
      type: DataTypes.INTEGER,
      references: 'Controllers',
      referencesKey: 'id'
    },
    intersection_type_id: {
      type: DataTypes.INTEGER,
      references: 'Intersection_Types',
      referencesKey: 'id'
    },
    pos_1_status: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    pos_2_status: {
      type: DataTypes.INTEGER,
       allowNull: true
    },
    pos_3_status: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    pos_4_status: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    pos_5_status: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    pos_6_status: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    pos_7_status: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    pos_8_status: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    pos_9_status: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    pos_10_status: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    pos_11_status: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    pos_12_status: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    user_mod: {
      type: DataTypes.INTEGER,
      references: 'Users',
      referencesKey: 'id'
    },
    is_deleted: DataTypes.BOOLEAN
  }, {
    sequelize, modelName: 'Intersection_Device_Distributions'
  });


  return Intersection_Device_Distributions;
}