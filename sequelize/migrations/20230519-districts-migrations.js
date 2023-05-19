'use strict';
/** @type {import ('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Districts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      wide_area_id: {
        type: Sequelize.INTEGER,
        references: { model: 'Wide_Areas', key: 'id'},
        allowNull: false
      },
      district_name : {
        type: Sequelize.STRING(50),
        allowNull: false
      },
      district_longname: {
        type: Sequelize.STRING(100),
        allowNull: true
      },
      district_type: {
        type: Sequelize.STRING(50),
        allowNull: false
      },
      district_address: {
        type: Sequelize.STRING(255),
        allowNull: true
      },
      district_logo: {
        type: Sequelize.STRING(255),
        allowNull: true
      },
      district_admin: {
        type: Sequelize.STRING(100),
        allowNull: true
      },
      is_IOT: {
        type: Sequelize.BOOLEAN,
        allowNull: false
      },
      map_x: {
        type: Sequelize.STRING(255)
      },
      map_y: {
        type: Sequelize.STRING(255)
      },
      bigo: {
        type: Sequelize.STRING(255)
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
  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('Districts')
  }
}