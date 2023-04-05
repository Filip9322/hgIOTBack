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
    id  :  {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
    },
    country_id:    DataTypes.INTEGER,
    company_name:  DataTypes.STRING(100),
    company_type:  DataTypes.STRING(100),
    company_CEO:   DataTypes.STRING(50),
    company_tel:   DataTypes.STRING(20),
    company_mob:   DataTypes.STRING(20),
    company_email:   DataTypes.STRING(50),
    company_address: DataTypes.STRING(100),
    company_business_number: DataTypes.STRING(20),
    bigo:       DataTypes.STRING(255),
    user_mod:   DataTypes.INTEGER,
    is_deleted: DataTypes.BOOLEAN,
  },{
    sequelize, modelName: 'Companies'
  });
  
  return Company;
}