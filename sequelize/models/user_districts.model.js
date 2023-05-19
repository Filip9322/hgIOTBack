'use strict';
const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {

  class User_Districts extends Model {
    static associate(models) {
      // associations could be defined in here
    }
  }
  User_Districts.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: 'Users',
      referencesKey: 'id'
    },
    district_id: {
      type: DataTypes.INTEGER,
      references: 'Districts',
      referencesKey: 'id'
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
    sequelize, modelName : 'User_Districts'
  });

  return User_Districts;
}