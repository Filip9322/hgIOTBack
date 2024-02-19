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
        references: {model: 'Controllers', key: 'id'},
        allowNull: false
      },
      intersection_type_id: {
        type: Sequelize.INTEGER,
        references: {model: 'Intersection_Types', key: 'id'},
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
    await queryInterface.dropTable('Intersection_Controllers')
  }
}