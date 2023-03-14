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

sequelize.authenticate().then(() => {
    console.log('Connection has been established sucessfully');
}).catch((error) => {
    console.log('Unable to connect to the database: ', error);
});
