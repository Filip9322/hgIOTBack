'use strict';
/** @type {import ('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
     await queryInterface.createTable('Building_Controllers',{
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      controller_id: {
        type: Sequelize.INTEGER,
        references: {model: 'Controllers', key: 'id'},
        allowNull: false
      },
      bd_device_type_id: {
        type: Sequelize.INTEGER,
        references: {model: 'Device_Types', key: 'id'}
      },
      bd_type: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      bd_type_name: {
        type: Sequelize.STRING(100),
        allowNull: false
      },
      bd_number_floors: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      user_mod: {
        type: Sequelize.INTEGER,
        references: {model: 'Users', key: 'id'},
        allowNull: false
      },
      is_deleted: {
        type: Sequelize.BOOLEAN,
        allowNull: false
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false
      }
     }); 
  }, 
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Building_Controllers')
  }
}