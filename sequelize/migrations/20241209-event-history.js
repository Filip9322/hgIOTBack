'use strict';
/** @type {import ('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Event_History',{
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      local_num: {
        type: Sequelize.INTEGER,
        references: {model: 'Local_Areas', key: 'id'},
        allowNull: false
      },
      occur_time: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: '2024-12-01 00:00:00'
      },
      controller_local_area_id: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      equi_num: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      lora_id: {
        type: Sequelize.STRING(255),
        allowNull: false
      },
      event_time: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: '2024-12-01 00:00:00'
      },
      event_gubn: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      button_cnt: {
        type: Sequelize.INTEGER,
        allowNull: true,
        defaultValue: 0
      },
      m358_cnt: {
        type: Sequelize.INTEGER,
        allowNull: true,
        defaultValue: 0
      },
      m235_cnt: {
        type: Sequelize.INTEGER,
        allowNull: true,
        defaultValue: 0
      },
      power_state: {
        type: Sequelize.INTEGER,
        allowNull: true,
        defaultValue: 0
      },
      light_state: {
        type: Sequelize.INTEGER,
        allowNull: true,
        defaultValue: 0
      },
      speaker_state: {
        type: Sequelize.INTEGER,
        allowNull: true,
        defaultValue: 0
      },
      button_state: {
        type: Sequelize.INTEGER,
        allowNull: true,
        defaultValue: 0
      },
      time1: {
        type: Sequelize.TIME,
        allowNull: true,
        defaultValue: '00:00:00'
      },
      time2: {
        type: Sequelize.TIME,
        allowNull: true,
        defaultValue: '00:00:00'
      },
      volume: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      induce: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      signal0: {
        type: Sequelize.INTEGER,
        allowNull: true,
        defaultValue: 0
      },
      division: {
        type: Sequelize.STRING(10),
        allowNull: true
      },
      content: {
        type: Sequelize.STRING(25),
        allowNull: true
      },
      contact: {
        type: Sequelize.STRING(30),
        allowNull: true
      },
      action_content: {
        type: Sequelize.STRING(30),
        allowNull: true
      },
      action_time: {
        type: Sequelize.DATE,
        allowNull: true
      },
      action_name: {
        type: Sequelize.STRING(30),
        allowNull: true
      },
      picture: {
        type: Sequelize.STRING(255),
        allowNull: true
      },
      result: {
        type: Sequelize.STRING(30),
        allowNull: false,
        defaultValue: "미완료"
      },
      bigo: {
        type: Sequelize.STRING(255),
        allowNull: true
      },
      user_mod: {
        type: Sequelize.INTEGER,
        references: {model:'Users', key:'id'},
        allowNull: false
      },
      is_deleted: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false
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
    await queryInterface.dropTable('Event_History')
  }
}