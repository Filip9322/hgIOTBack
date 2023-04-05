'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Local_Areas', [
      {
      	id: 1,
      	wide_area_id: 1,
      	local_name: '',
      	local_type: '',
      	is_IOT: true,
      	local_CEO: '',
      	local_tel: '',
      	local_mob: '',
      	local_mail: '',
      	map_x: '',
      	map_y: '',
      	local_state: true,
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
