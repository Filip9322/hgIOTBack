'use strict';
/** @type {import ('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Controllers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      device_type_id: {
        type: Sequelize.INTEGER,
        references: {model: 'Device_Types', key: 'id'},
        allowNull: false
      },
      local_area_id: {
        type: Sequelize.INTEGER,
        references: {model: 'Local_Areas', key: 'id'},
        allowNull: false
      },
      controller_name: {
        type: Sequelize.STRING(100),
        allowNull: false
      },
      controller_type_id: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      controller_type_name: {
        type: Sequelize.STRING(100),
        allowNull: false
      },
      local_area_controller_number: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      local_goverment_controller_number: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      controller_management_departnment: {
        type: Sequelize.STRING(100),
        allowNull: true
      },
      controller_address: {
        type: Sequelize.STRING(255),
        allowNull: false
      },
      controller_address_district: {
        type: Sequelize.STRING(100),
        allowNull: false
      },
      controller_map_screen_save: {
        type: Sequelize.STRING(255),
        allowNull: true
      },
      map_x: {
        type: Sequelize.DOUBLE,
        allowNull: false
      },
      map_y: {
        type: Sequelize.DOUBLE,
        allowNull: false
      },
      is_active: {
        type: Sequelize.BOOLEAN,
        allowNull: false
      },
      is_school_zone: {
        type: Sequelize.BOOLEAN,
        allowNull: false
      },
      is_IOT: {
        type: Sequelize.BOOLEAN,
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
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Controllers')
  }
}