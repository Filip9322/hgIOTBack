'use strict';
/** @type {import ('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Intersection_Devices', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      intersection_controller_id: {
        type: Sequelize.INTEGER,
        references: {model: 'Intersection_Controllers', key: 'id'},
        allowNull: false
      },
      device_id: {
        type: Sequelize.INTEGER
      },
      pos_number: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      dv_pos_x: {
        type: Sequelize.DOUBLE,
        allowNull: true
      },
      dv_pos_y: {
        type: Sequelize.DOUBLE,
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
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Intersection_Devices')
  }
}