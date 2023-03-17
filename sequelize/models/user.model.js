'use strict';
const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {

  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models){
        // associations could be defined here
      }
  }

  User.init({
    id  :  {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
      },
    user_ID: DataTypes.STRING(20),
    user_company: DataTypes.INTEGER(20),
    user_name: DataTypes.STRING(20),
    user_pw: DataTypes.STRING(255),
    user_mob: DataTypes.STRING(20),
    user_tel: DataTypes.STRING(20),
    user_email: DataTypes.STRING(50),
    user_active: DataTypes.BOOLEAN,
    access_token: DataTypes.STRING(255),
    bigo:       DataTypes.STRING(255),
    user_mod:   DataTypes.INTEGER,
    is_deleted: DataTypes.BOOLEAN,
  },{
    sequelize, modelName: 'Users'
  });
  
  return User;
}