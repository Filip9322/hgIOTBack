'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Device_Models', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      device_type_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {model: 'Device_Types', key: 'id'}
      },
      model_gname: {
        type: Sequelize.STRING(100),
        allowNull: false
      },
      model_code: {
        type: Sequelize.STRING(20),
        allowNull: true
      },
      model_name: {
        type: Sequelize.STRING(50),
        allowNull: false
      },
      bigo: {
        type: Sequelize.STRING(255),
        allowNull: true
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
  down: async(queryInterface, Sequelize) => {
    await queryInterface.dropTable('Device_Models')
  }
}