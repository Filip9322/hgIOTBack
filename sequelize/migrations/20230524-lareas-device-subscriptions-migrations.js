'use_strict';
/** @type {import ('sequelize-cli).Migration')} */

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('LAreas_Device_Subscriptions',{
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      larea_id: {
        type: Sequelize.INTEGER,
        references: {model: 'Local_Areas', key: 'id'},
        allowNull: false
      },
      device_type_id: {
        type: Sequelize.INTEGER,
        references: {model: 'Device_Types', key: 'id'},
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
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('LAreas_Device_Subscriptions')
  }
}