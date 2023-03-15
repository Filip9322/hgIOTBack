const dotenv = require('dotenv');
const Sequelize = require("sequelize");

dotenv.config();

const sequelize = new Sequelize(
    `${process.env.MYSQL_DATABASE}`,
    `${process.env.MYSQL_USER_DATABASE}`,
    `${process.env.MYSQL_USER_PASSWORD}`,
  {
      host: `${process.env.MYSQL_HOST}`,
      port: `${process.env.MYSQL_DB_PORT}`,
      dialect: 'mysql'
  }
);

console.log(sequelize, "hi");

const modelDefiners = [
    require('./models/company.model')
    // All models could be listed here
];


// Models defined according to their files
for (const modelDefiner of modelDefiners){
    modelDefiner(sequelize);
}


module.exports = sequelize;
