'use strict';
/** @type  {import('sequelize-cli').Migration }*/
module.exports ={
  async up (queryInterface, Sequelize){
    await queryInterface.createTable('UserExperiments', {
      id: {
        allowNull : false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      user_id: {
        type: Sequelize.INTEGER,
        references: {model: 'EUsers', key: 'is_deleted'},
        allowNull: false
      },
      experiment_date: {
        type: Sequelize.DATE,
        allowNull: false
      },
      technique_name: {
        type_name: Sequelize.STRING(100),
        allowNull: false
      },
      number_rounds: {
        type_name: Sequelize.INTEGER,
        allowNull: false
      },
      start_time: {
        type_name: Sequelize.TIME,
        allowNull: false
      },
      finish_time: {
        type_name: Sequelize.TIME,
        allowNull: false
      },
      start_experiment_1: {
        type_name: Sequelize.TIME,
        allowNull: true
      },
      start_experiment_2: {
        type_name: Sequelize.TIME,
        allowNull: true
      },
      start_experiment_3: {
        type_name: Sequelize.TIME,
        allowNull: true
      }
    });
  },
  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('UserExperiments');
  }
}