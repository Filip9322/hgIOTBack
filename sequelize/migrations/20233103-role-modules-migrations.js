'use strict';
/** @type {import ('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable('Role_Modules', {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER
			},
			role_id: {
				type: Sequelize.INTEGER,
				references: {model: 'Roles', key: 'id'},
				allowNull: false
			},
			module_id: {
				type: Sequelize.INTEGER,
				allowNull: true
			},
			user_mod: {
				type: Sequelize.INTEGER,
				references: {model: 'Users', key: 'id'},
				allowNull: false
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
		await queryInterface.dropTable('Role_Modules')
	}
}