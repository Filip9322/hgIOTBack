'use strict';
const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {

  class Districts extends Model {
    // asssociations could be defined here
  }

  Districts.init({
    id:{
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    wide_area_id: {
      type: DataTypes.INTEGER,
      references: 'Wide_Areas',
      referencesKey: 'id',
      allowNull: false
    },
    district_name: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    district_longname: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    district_type: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    district_address: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    district_logo: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    district_admin: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    is_IOT:{
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    map_x: {
      type: DataTypes.STRING(255)
    },
    map_y: {
      type: DataTypes.STRING(255)
    },
    bigo: {
      type: DataTypes.STRING(255)
    },
    user_mod: {
      type: DataTypes.INTEGER,
      references: 'Users',
      referencesKey: 'id'
    },
    is_deleted: {
      type: DataTypes.BOOLEAN
    }
  },{
    sequelize, modelName: 'Districts'
  });
}