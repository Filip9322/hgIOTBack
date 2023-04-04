'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Companies', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      country_id: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      company_name: {
        type: Sequelize.STRING(100),
        allowNull: false
      },
      company_type: {
        type: Sequelize.STRING(100),
        allowNull: true
      },
      company_CEO: {
        type: Sequelize.STRING(50),
        allowNull: true
      },
      company_tel: {
        type: Sequelize.STRING(20),
        allowNull: false
      },
      company_mob: {
        type: Sequelize.STRING(20),
        allowNull: true
      },
      company_email: {
        type: Sequelize.STRING(50),
        allowNull: true
      },
      company_address: {
        type: Sequelize.STRING(100),
        allowNull: true
      },
      company_business_number: {
        type: Sequelize.STRING(20),
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
    await queryInterface.dropTable('Companies');
  }
};