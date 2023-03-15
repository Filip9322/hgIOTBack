'use strict';
const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {

  class Company extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models){
        // associations could be defined here
      }
  }

  Company.init({
    company_id  :  DataTypes.INTEGER,
    company_name:  DataTypes.STRING(100)
  },{
    sequelize, modelName: 'companies'
  });
  
  return Company;
}