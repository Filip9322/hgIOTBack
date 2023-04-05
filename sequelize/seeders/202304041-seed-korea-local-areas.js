'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Local_Areas', [
      {
      	id: 1,
      	wide_area_id: 2,
      	local_name: '부산광역시(IOT개통)',
      	local_type: '부산시청',
      	is_IOT: true,
      	local_company: 1,
        local_address: '',
      	local_admin: '',
      	local_state: true,
      	map_x: '129.075089315',
      	map_y: '35.1797190915',
      	bigo: '',
      	user_mod: 1,
      	is_deleted: false,
        createdAt: '2023-04-04 00:00:00',
        updatedAt: '2023-04-04 00:00:00'
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Local_Areas', null, {})
  }
};
