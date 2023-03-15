const dotenv = require('dotenv').config({path:__dirname+'/../../.env'});
const config = {
  development:{
    username: process.env.MYSQL_USER_DATABASE,
    password: process.env.MYSQL_USER_PASSWORD,
    database: process.env.MYSQL_DATABASE,
    host:     process.env.MYSQL_HOST,
    port:     process.env.MYSQL_DB_PORT,
    dialect:  process.env.DB_DIALECT,
    use_env_variable: ""
  },
  test: {
    username: process.env.MYSQL_USER_DATABASE,
    password: process.env.MYSQL_USER_PASSWORD,
    database: process.env.MYSQL_DATABASE,
    host:     process.env.MYSQL_HOST,
    port:     process.env.MYSQL_DB_PORT,
    dialect:  process.env.DB_DIALECT,
    use_env_variable: ""
  },
  production: {
    username: process.env.MYSQL_USER_DATABASE,
    password: process.env.MYSQL_USER_PASSWORD,
    database: process.env.MYSQL_DATABASE,
    host:     process.env.MYSQL_HOST,
    port:     process.env.MYSQL_DB_PORT,
    dialect:  process.env.DB_DIALECT,
    use_env_variable: ""
  }
};

module.exports = config;
