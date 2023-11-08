'use strict';
/** @type {import ('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('User_Experiments', {
      id: {
        allowNull : false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      user_id: {
        type: Sequelize.INTEGER,
        references: {model: 'EUsers', key: 'id'},
        allowNull: false
      },
      experiment_date: {
        type: Sequelize.DATE,
        allowNull: false
      },
      technique_name: {
        type: Sequelize.STRING(100),
        allowNull: false
      },
      number_rounds: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      start_time: {
        type: Sequelize.TIME,
        allowNull: false
      },
      finish_time: {
        type: Sequelize.TIME,
        allowNull: false
      },
      start_experiment_1: {
        type: Sequelize.TIME,
        allowNull: true
      },
      start_experiment_2: {
        type: Sequelize.TIME,
        allowNull: true
      },
      start_experiment_3: {
        type: Sequelize.TIME,
        allowNull: true
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('User_Experiments');
  }
}