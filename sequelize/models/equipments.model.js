'use strict';
const { Model, DataTypes} = require("sequelize");

module.exports = sequelize => {
  class Equipments extends Model {
    static associate (models) {
      // associations could be defined in here -
      Equipments.belongsTo(models.Equi_states, {
        foreignKey: 'id',
        as:'equipments'
      })
    }
  }

  Equipments.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    local_area_id: {
      type: DataTypes.INTEGER,
      references: 'Local_Areas',
      referencesKey: 'id',
      allowNull: false
    },
    controller_number: {
      type: DataTypes.INTEGER,
      references: 'Controllers',
      referencesKey: 'local_area_controller_number',
      allowNull: false
    },
    equi_state_id: {
      type: DataTypes.INTEGER,
      references: 'Equi_States',
      referencesKey: 'id',
      allowNull: false
    },
    lora_id: {
      allowNull: true,
      type: DataTypes.STRING(50)
    },
    prod_comp: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    model_no: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    prod_no: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    cpu_version: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    prod_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    install_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    install_man: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    check_man: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    support_type: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    support_size: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    prod_type: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    button_type: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    sound_text: {
      type: DataTypes.STRING(300),
      allowNull: true
    },
    map_x: {
      type: DataTypes.FLOAT(14, 10),
      allowNull: false
    },
    map_y: {
      type: DataTypes.FLOAT(14, 10),
      allowNull: false
    },
    neoiotnum: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    neoblenum: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    bigo: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    user_mod: {
      type: DataTypes.INTEGER,
      references: 'Users',
      referencesKey: 'id'
    },
    is_deleted: DataTypes.BOOLEAN    
  }, {
    sequelize, modelName: 'Equipments'
  });

  return Equipments;
}