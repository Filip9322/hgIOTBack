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
      dialect: 'mysql',
      define: { charset: 'utf8', dialectOptions: { collate: 'utf8_general_ci' }}
  }
);

const modelDefiners = [
    require('./models/company.model'),
    require('./models/user.model'),
    require('./models/role.model'),
    require('./models/permissions_role.model')
    // All models could be listed here
];


// Models defined according to their files
for (const modelDefiner of modelDefiners){
    modelDefiner(sequelize);
}


module.exports = sequelize;
