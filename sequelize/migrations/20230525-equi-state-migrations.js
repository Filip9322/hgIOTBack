'use strict';
/** @type {import ('sequelize-cli').Migrgation} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Equi_States',{
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
      controller_local_area_id: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      equi_num: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      occur_time: {
        type: Sequelize.DATE,
        allowNull: false
      },
      lora_id: {
        type: Sequelize.STRING(255),
        allowNull: false
      },
      state_code: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      period_gubn: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      button_cnt: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0
      },
      m358_cnt: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0
      },
      m235_cnt: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0
      },
      power_state: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0
      },
      light_state: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0
      },
      speaker_state: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0
      },
      time1: {
        type: Sequelize.TIME,
        allowNull: false,
        defaultValue: '22:00:00'
      },
      time2: {
        type: Sequelize.TIME,
        allowNull: false,
        defaultValue: '07:30:00'
      },
      volume: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      induce: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0
      },
      signal0: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0
      },
      m358i_cnt: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0      
      },
      cover_cnt: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      button_state: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      ftime1: {
        type: Sequelize.TIME,
        allowNull: false,
        defaultValue: '00:00:00'
      },
      ftime2: {
        type: Sequelize.TIME,
        allowNull: false,
        defaultValue: '00:00:00'
      },
      period: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      address: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      ftime21: {
        type: Sequelize.TIME,
        allowNull: false,
        defaultValue: '00:00:00'
      },
      ftime22: {
        type: Sequelize.TIME,
        allowNull: false,
        defaultValue: '00:00:00'
      },
      stime11: {
        type: Sequelize.TIME,
        allowNull: false,
        defaultValue: '00:00:00'
      },
      stime12: {
        type: Sequelize.TIME,
        allowNull: false,
        defaultValue: '00:00:00'
      },
      stime21: {
        type: Sequelize.TIME,
        allowNull: false,
        defaultValue: '00:00:00'
      },
      stime22: {
        type: Sequelize.TIME,
        allowNull: false,
        defaultValue: '00:00:00'
      },
      stime31: {
        type: Sequelize.TIME,
        allowNull: false,
        defaultValue: '00:00:00'
      },
      stime32: {
        type: Sequelize.TIME,
        allowNull: false,
        defaultValue: '00:00:00'
      },
      redsoundcnt: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0
      },
      bvolume: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0
      },
      mvolume: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0
      },
      nvolume: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0
      },
      svolume: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0
      },
      loraversion: {
        type: Sequelize.STRING(100),
        allowNull: true,
      },
      bleversion: {
        type: Sequelize.STRING(100),
        allowNull: true,
      },
      equiversion: {
        type: Sequelize.STRING(100),
        allowNull: true,
      },
      rlstate: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 1
      },
      glstate: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 1
      },
      ulstate: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 1
      },
      susetype: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 1
      },
      statewarning: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0
      },
      termofwarning: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 15
      },
      warnsetValue: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0
      },
      gwl: {
        type: Sequelize.STRING(100),
        allowNull: false
      },
      rlterm: {
        type: Sequelize.STRING(100),
        allowNull: true
      },
      grid: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0
      },
      guidecnt: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0
      },
      alertcnt: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0
      },
      user_mod: {
        type: Sequelize.INTEGER,
        references: {model: 'Users', key: 'id'},
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
    await queryInterface.dropTable('Equi_States')
  }
}