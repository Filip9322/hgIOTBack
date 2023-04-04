'use strict';
/** @type {import ('sequelize-cli').Migration} */
module.exports = {
	async up (queryInterface, Sequelize) {
		await queryInterface.createTable('Wide_Areas', {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER
			},
			wa_name: {
				type: Sequelize.STRING(100),
				allowNull: false
			},
			wa_long_name: {
				type: Sequelize.STRING(100),
				allowNull: false
			},
			country_id: {
				type: Sequelize.INTEGER
			},
			country_wa_term: {
				type: Sequelize.STRING(100)
			},
			bigo: {
				type: Sequelize.STRING(100)
			},
			user_mod: {
				type: Sequelize.INTEGER,
				references: { model: 'Users', key: 'id'}
			},
			is_deleted: {
				type: Sequelize.BOOLEAN,
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
	},
	async down(queryInterface, Sequelize) {
		await queryInterface.dropTable('Wide_Areas')
	}
}