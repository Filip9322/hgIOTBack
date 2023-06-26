'use strict';
/** @type {import ('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Building_Controller_Devices', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      building_floor_id: {
        type: Sequelize.INTEGER,
        references: {model: 'Building_Floors', key: 'id'},
        allowNull: false
      },
      controller_id: {
        type: Sequelize.INTEGER,
        references: {model:'Controllers', key: 'id'},
        allowNull: false
      },
      device_id: {
        type: Sequelize.INTEGER
      },
      device_status: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      pos_x: {
        type: Sequelize.DOUBLE,
        allowNull: false
      },
      pos_y: {
        type: Sequelize.DOUBLE,
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
    await queryInterface.dropTable('Building_Controller_Devices')
  }
}