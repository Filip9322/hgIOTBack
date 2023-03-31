'use strict';
/** @type {import ('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable('User_Areas', {
			id: {
			 	allowNull: false,
			 	autoIncrement: true,
			 	primaryKey: true,
			 	type: Sequelize.INTEGER
			},
			user_id: {
			 	type: Sequelize.INTEGER,
			 	allowNull: false
			},
			area_id: {
			 	type: Sequelize.INTEGER,
			 	allowNull: false
			},
			user_mod: {
				type: Sequelize.INTEGER,
				allowNull: false
			},
			is_deleted: {
				type: Sequelize.INTEGER,
				allowNull: false
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
	},{
		async down(queryInterface, Sequelize) {
			await queryInterface.dropTable('User_Areas')
		}
	}
}