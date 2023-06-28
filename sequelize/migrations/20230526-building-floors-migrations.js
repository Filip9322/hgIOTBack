'use strict';
/** @type {import ('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Building_Floors', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      building_controller_id: {
        type: Sequelize.INTEGER,
        references: {model: 'Building_Controllers', key: 'id'},
        allowNull: false
      },
      floor_number: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      floor_name: {
        type: Sequelize.STRING(50),
        allowNull: false
      },
      floor_blueprint: {
        type: Sequelize.STRING(255),
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
    await queryInterface.dropTable('Building_Floors')
  }
}