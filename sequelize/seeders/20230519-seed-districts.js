'use strict';
/** @type  {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    // Bulk Insertion of districts in Korea
    await queryInterface.bulkInsert('Districts', [
      {
        id: 1,
        wide_area_id: 1,
        district_name: '북부도로사업소(일반)',
        district_longname: '북부도로사업소(일반)' ,
        district_type: ,
        district_address: ,
        district_logo: ,
        district_admin: ,
        is_IOT: ,
        map_x: ,
        map_y: ,
        bigo: ,
        user_mod: ,
        is_deleted: false,
        createdAt: '2023-05-18 00:00:00',
        updatedAt: '2023-05-018 00:00:00'
      }
    ])
  }
}