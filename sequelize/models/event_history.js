'use strict';
const { Model, DataTypes } = require('sequelize');

module.exports = sequelize => {
  class Event_History extends Model {
    // associations could be defined in here
  }

  Event_History.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    local_num: {
      type: DataTypes.INTEGER,
      references: 'Local_Areas',
      referencesKey: 'id',
      allowNull: false
    },
    occur_time: {
      type: DataTypes.DATE,
      allowNull: false
    },
    controller_local_area_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    equi_num: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    lora_id: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    event_time: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: '2024-12-01 00:00:00'
    },
    event_gubn: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    button_cnt: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      validate: {
        min: 0
      }
    },
    m358_cnt: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      validate: {
        min: 0
      }
    },
    m235_cnt: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      validate: {
        min: 0
      }
    },
    power_state: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    light_state: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      validate: {
        min: 0,
        max: 6
      }
    },
    speaker_state: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      validate: {
        min: 0,
        max: 2
      }
    },
    button_state: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      validate: {
        min: 0,
        max: 2
      }
    },
    time1: {
      type: DataTypes.TIME,
      allowNull: true,
      defaultValue: '22:00:00'
    },
    time2: {
      type: DataTypes.TIME,
      allowNull: true,
      defaultValue: '07:30:00'
    },
    volume: {
      type: DataTypes.INTEGER,
      allowNull: true,
      validate: {
        min: 1,
        max: 255
      }
    },
    induce: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    signal0: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    division: {
      type: DataTypes.STRING(10),
      allowNull: true,
    },
    content: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    contact: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    action_content: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    action_time: {
      type: DataTypes.TIME,
      allowNull: true
      defaultValue: '00:30:00'
    },
    action_name: {
      type: DataTypes.STRING(30),
      allowNull: true,
    },
    picture: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    result: {
      type: DataTypes.STRING(30),
      allowNull: false,
      defaultValue: '미완료'
    },
    bigo: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    user_mod: {
      type: DataTypes.BOOLEAN,
      allowNull: false, 
      defaultValue: false
    },
    is_deleted: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    }
  })
}