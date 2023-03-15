'use strict';

const dotenv = require('dotenv').config({path:__dirname+'/../../.env'});
const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const process = require('process');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const DBconfig = require(__dirname + '/../config/config.js');
const db = {};

const config = DBconfig.development;

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], {
    logging: console.log,
    host: config.host, 
    port: config.port, 
    dialect: config.dialect });
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, {
    logging: console.log,
    host: config.host,
    port: config.port, 
    dialect: config.dialect });
}



db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
