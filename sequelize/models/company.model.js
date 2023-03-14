const {Sequelize, Database} = require("sequelize");

const Company = sequelize.define("companies", {
    company_id: {
	type: DataTypes.INTEGER,
	autoIncrement: true,
	allowNull: false,
	primaryKey: true
    },
    company_name: {
	type: DataTypes.VARCHAR(100),
	allowNull: false
    }
},{
    comment: 'Companies that user could belong to'
});
