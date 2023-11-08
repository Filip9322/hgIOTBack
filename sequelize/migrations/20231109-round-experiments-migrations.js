'use strict';
/** @type {import ('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Rounds_Experiment', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      user_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'EUsers', key: 'id'}
      },
      experiment_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'User_Experiments', key: 'id'}
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
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Rounds_Experiment');
  }
}