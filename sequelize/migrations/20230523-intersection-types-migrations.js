'use strict';
/** @type {import ('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Intersection_Types',{
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      inter_type_draw: {
        type: Sequelize.STRING(255)
      },
      inter_type_name: {
        type: Sequelize.STRING(100),
        allowNull: false
      },
      inter_type_number_devices: {
        type: Sequelize.INTEGER,
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
    })
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Intersection_Types')
  }
}