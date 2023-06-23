'use strict';
/** @type {import ('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Intersection_Controllers', {
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
      inter_device_type_id: {
        type: Sequelize.INTEGER,
        references: {model: 'Intersection_Devices', key: 'id'},
        allowNull: false
      },
      inter_type_id: {
        type: Sequelize.INTEGER,
        references: {model: 'Intersection_Types', key: 'id'},
        allowNull: false
      },
      intersection_devices_distribution_id: {
        type: Sequelize.INTEGER,
        references: {model: 'Intersection_Device_Distributions', key: 'id'}
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Intersection_Controllers')
  }
}