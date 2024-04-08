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
    controller_id: {
      type: DataTypes.INTEGER,
      references: 'Controllers',
      referencesKey: 'id',
      allowNull: false
    },
    inter_device_type_id: {
      type: DataTypes.INTEGER,
      references: 'Intersection_Devices',
      referencesKey: 'id',
      allowNull: false
    },
    intersection_type_id: {
      type: DataTypes.INTEGER,
      references: 'Intersection_Types',
      referencesKey: 'id'
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

  sequelize.models.Controllers.hasOne(sequelize.models.Intersection_Controllers, { foreignKey: 'controller_id' });
  Intersection_Controllers.belongsTo( sequelize.models.Controllers, { foreignKey: 'id'});

  return Intersection_Controllers;
}