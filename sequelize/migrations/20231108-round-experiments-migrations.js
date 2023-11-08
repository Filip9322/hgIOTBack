'use strict';
/** @type {import ('sequelize-clil').Migration } */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('RoundsExperiment', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      user_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {model: 'EUsers', key: 'is_deleted'}
      },
      experiment_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { mode: 'UserExperiments', key: 'id'}
      },
      round_number: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      target_name: {
        allowNull: false,
        type: Sequelize.STRING(100)
      },
      selected_nameL: {
        allowNull: false,
        type: Sequelize.STRING(100)
      },
      result: {
        allowNull: false,
        type: Sequelize.BOOLEAN
      },
      time_expended: {
        allowNull: false,
        type: Sequelize.TIME
      }
    });
  },
  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('RoundsExperiment');
  }
}