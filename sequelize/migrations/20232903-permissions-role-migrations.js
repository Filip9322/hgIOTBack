'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable('permission_by_rol', {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER
			},
			module_id: {
				type: Sequelize.INTEGER,
				allowNull: false
			},
			role_id: {
				type: Sequelize.INTEGER,
				allowNull: false
			},
			allow_create: {
				type: Sequelize.BOOLEAN,
				allowNull: false
			},
			allow_select: {
				type: Sequelize.BOOLEAN,
				allowNull: false
			},
			allow_update: {
				type: Sequelize.BOOLEAN,
				allowNull: false
			},
			allow_delete: {
				type: Sequelize.BOOLEAN,
				allowNull: false
			},
			user_mod: {
				type: Sequelize.INTEGER,
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
	async down (queryInterface, Sequelize) {
		await queryInterface.dropTable('permission_by_rol');
	}
}