'use strict';
/** @type {import ('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('User_Districts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      user_id: {
        type: Sequelize.INTEGER,
        references: { model: 'Users', key: 'id'},
        allowNull: false
      },
      district_id: {
        type: Sequelize.INTEGER,
        references: { model: 'Districts', key: 'id'},
        allowNull: false
      },
      user_mod: {
        type: Sequelize.INTEGER,
        references: { model: 'Users', key: 'id'}
      },
      is_deleted: {
        type: DataTypes.BOOLEAN,
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
  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('User_Districts');
  }
}