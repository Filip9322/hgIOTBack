'use strict';
/** @type {import ('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Intersection_Device_Distributions', {
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
      intersection_type_id: {
        type: Sequelize.INTEGER,
        references: {model: 'Intersection_Types', key: 'id'},
      },
      pos_1_status: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      pos_2_status: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      pos_3_status: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      pos_4_status: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      pos_5_status: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      pos_6_status: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      pos_7_status: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      pos_8_status: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      pos_9_status: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      pos_10_status: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      pos_11_status: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      pos_12_status: {
        type: Sequelize.INTEGER,
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
    await queryInterface.dropTable('Intersection_Device_Distributions')
  }
}