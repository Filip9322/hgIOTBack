'use strict';
const { Model, DataTypes } = require('sequelize');

module.exports = sequelize => {
  class Equi_State extends Model {
    static associate (models){
      // associations could be defined in here
    }
  }

  Equi_State.init({
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
    controller_local_area_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    equi_num: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    occur_time: {
      type: DataTypes.DATE,
      allowNull: false
    },
    lora_id: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    state_code: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        min: 0,
        max: 99
      }
    },
    period_gubn: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    button_cnt: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      validate: {
        min: 0
      }
    },
    m358_cnt: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      validate: {
        min: 0
      }
    },
    m235_cnt: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      validate: {
        min: 0
      }
    },
    power_state: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    ligth_state: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      validate: {
        min: 0,
        max: 6
      }
    },
    speaker_state: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      validate: {
        min: 0,
        max: 2
      }
    },
    time1: {
      type: DataTypes.TIME,
      allowNull: false,
      defaultValue: '22:00:00'
    },
    time2: {
      type: DataTypes.TIME,
      allowNull: false,
      defaultValue: '07:30:00'
    },
    volume: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        min: 1,
        max: 255
      }
    },
    induce: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    signal0: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    m358i_cnt: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    cover_cnt: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    button_state: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      validate: {
        min: 0,
        max: 2
      }
    },
    ftime1: {
      type: DataTypes.TIME,
      allowNull: false
    },
    ftime2: {
      type: DataTypes.TIME,
      allowNull: false
    },
    period: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    address: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    ftime21: {
      type: DataTypes.TIME,
      allowNull: false,
      defaultValue: '00:00:00'
    },
    ftime22: {
      type: DataTypes.TIME,
      allowNull: false,
      defaultValue: '00:00:00'
    },
    stime11: {
      type: DataTypes.TIME,
      allowNull: false,
      defaultValue: '00:00:00'
    },
    stime12: {
      type: DataTypes.TIME,
      allowNull: false,
      defaultValue: '00:00:00'
    },
    stime21: {
      type: DataTypes.TIME,
      allowNull: false,
      defaultValue: '00:00:00'
    },
    stime22: {
      type: DataTypes.TIME,
      allowNull: false,
      defaultValue: '00:00:00'
    },
    stime31: {
      type: DataTypes.TIME,
      allowNull: false,
      defaultValue: '00:00:00'
    },
    stime32: {
      type: DataTypes.TIME,
      allowNull: false,
      defaultValue: '00:00:00'
    },
    redsoundcnt: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      validate: {
        min: 0,
        max: 10
      }
    },
    bvolume: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      validate: {
        min: 0,
        max: 255
      }
    },
    mvolume: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      validate: {
        min: 0,
        max: 255
      }
    },
    nvolume: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      validate: {
        min: 0,
        max: 255
      }
    },
    svolume: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      validate: {
        min: 0,
        max: 255
      }
    },
    loraversion: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    bleversion: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    equiversion: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    rlstate: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1
    },
    glstate: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1
    },
    ulstate: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1
    },
    susetype: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1
    },
    statewarning: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    termofwarning: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 15,
      validate: {
        min: 3,
        max: 200
      }
    },
    warnsetvalue: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    gwl: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    rlterm: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    grid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      validate: {
        min: 0,
        max: 255
      }
    },
    guidecnt: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    alertcnt: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    user_mod: {
      type: DataTypes.INTEGER,
      references: 'Users',
      referencesKey: 'id'
    },
    is_deleted: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    }
  },{
    sequelize, modelName: 'Equi_State'
  });

  return Equi_State;

}