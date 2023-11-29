'use strict';
/** @type {import ('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Equipments',{
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      local_area_id: {
        type: Sequelize.INTEGER,
        references: {model: 'Local_Areas', key: 'id'},
        allowNull: false
      },
      controller_number: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      equi_state_id: {
        type: Sequelize.INTEGER,
        references: { model: 'Equi_States', key: 'id'},
        allowNull: false
      },
      lora_id: {
        type: Sequelize.STRING(50),
        allowNull: true
      },
      prod_comp: {
        type: Sequelize.STRING(50),
        allowNull: true
      },
      model_no: {
        type: Sequelize.STRING(50),
        allowNull: true
      },
      prod_no: {
        type: Sequelize.STRING(50),
        allowNull: true
      },
      cpu_version: {
        type: Sequelize.STRING(20),
        allowNull: true
      },
      prod_date: {
        type: Sequelize.DATE,
        allowNull: true
      },
      install_date: {
        type: Sequelize.DATE,
        allowNull: true
      },
      install_man: {
        type: Sequelize.STRING(10),
        allowNull: true
      },
      check_man: {
        type: Sequelize.STRING(20),
        allowNull: true
      },
      support_type: {
        type: Sequelize.STRING(20),
        allowNull: true
      },
      support_size: {
        type: Sequelize.STRING(20),
        allowNull: true
      },
      prod_type: {
        type: Sequelize.STRING(20),
        allowNull: true
      },
      button_type: {
        type: Sequelize.STRING(20),
        allowNull: true
      },
      sound_text: {
        type: Sequelize.STRING(300),
        allowNull: true
      },
      map_x: {
        type: Sequelize.FLOAT(14, 10),
        allowNull: false
      },
      map_y: {
        type: Sequelize.FLOAT(14, 10),
        allowNull: false
      },
      neoiotnum: {
        type: Sequelize.STRING(20),
        allowNull: true
      },
      neoblenum: {
        type: Sequelize.STRING(20),
        allowNull: true
      },
      bigo: {
        type: Sequelize.STRING(255),
        allowNull: true
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
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Equipments')
  }
}