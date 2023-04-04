'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      user_ID: {
        type: Sequelize.STRING(20),
        allowNull: false
      },
      user_company: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      user_name: {
        type: Sequelize.STRING(20),
        allowNull: false
      },
      user_pw: {
        type: Sequelize.STRING(255),
        allowNull: false
      },
      user_mob: {
        type: Sequelize.STRING(20),
        allowNull: true
      },
      user_tel: {
        type: Sequelize.STRING(20),
        allowNull: false
      },
      user_email: {
        type: Sequelize.STRING(50),
        allowNull: false
      },
      user_active: {
        type: Sequelize.BOOLEAN,
        allowNull: false
      },
      access_token: {
        type: Sequelize.STRING(255),
        allowNull: true
      },
      bigo: {
        type: Sequelize.STRING(255),
        allowNull: true
      },
      user_mod: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      is_deleted: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Users');
  }
};