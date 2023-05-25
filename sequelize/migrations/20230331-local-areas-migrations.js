'use strict';
/** @type {import ('sequelize-cli').Migration} */
module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.createTable('Local_Areas', {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER
			},
			wide_area_id: {
				type: Sequelize.INTEGER,
				references: { model: 'Wide_Areas', key: 'id'},
				allowNull: false
			},
			local_name: {
				type: Sequelize.STRING(100),
				allowNull: false
			},
			local_type: {
				type: Sequelize.STRING(100),
				allowNull: false
			},
			is_IOT: {
				type: Sequelize.BOOLEAN,
				allowNull: false
			},
			local_company: {
				type: Sequelize.INTEGER,
				references: {model: 'Companies', key: 'id'},
				allowNull: false
			},
			local_address: {
				type: Sequelize.STRING(255)
			},
			local_admin: {
				type: Sequelize.STRING(100)
			},
			local_state: {
				type: Sequelize.BOOLEAN
			},
			local_logo: {
				type: Sequelize.STRING(255)
			},
			map_x: {
				type: Sequelize.STRING(255)
			},
			map_y: {
				type: Sequelize.STRING(255)
			},
			bigo: {
				type: Sequelize.STRING(255)
			},
			user_mod: {
				type: Sequelize.INTEGER,
				references: { model: 'Users', key: 'id'},
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
		await queryInterface.dropTable('Local_Areas')
	}
}