'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Bulk Insertion of Device Models
    await queryInterface.bulkInsert('Device_Models', [
      {
        id: 1,
        device_type_id: 1,
        model_gname: '모델명 목록',
        model_code: '0006',
        model_name: "008A",
        bigo: '',
        user_mod: 1,
        is_deleted: false,
        createdAt: '2021-08-01 15:44:24',
        updatedAt: '2021-08-03 09:10:33'
      },
      {
        id: 2,
        device_type_id: 1,
        model_gname: '모델명 목록',
        model_code: '0006',
        model_name: "0010A",
        bigo: '',
        user_mod: 1,
        is_deleted: false,
        createdAt: '2021-08-01 15:44:24',
        updatedAt: '2021-08-01 15:44:46'
      },
      {
        id: 3,
        device_type_id: 1,
        model_gname: '모델명 목록',
        model_code: '0006',
        model_name: "9000A",
        bigo: '',
        user_mod: 1,
        is_deleted: false,
        createdAt: '2021-08-01 15:45:24',
        updatedAt: '2021-08-03 16:06:22'
      },
      {
        id: 4,
        device_type_id: 1,
        model_gname: '모델명 목록',
        model_code: '0006',
        model_name: "PD-500",
        bigo: '',
        user_mod: 1,
        is_deleted: false,
        createdAt: '2021-08-01 16:06:24',
        updatedAt: '2021-08-03 16:06:33'
      },
      {
        id: 5,
        device_type_id: 1,
        model_gname: '모델명 목록',
        model_code: '0006',
        model_name: "SDS-3000A",
        bigo: '',
        user_mod: 1,
        is_deleted: false,
        createdAt: '2021-08-01 16:07:19',
        updatedAt: '2021-08-03 16:07:19'
      },
      {
        id: 6,
        device_type_id: 1,
        model_gname: '모델명 목록',
        model_code: '0006',
        model_name: "TC-SMART2019A",
        bigo: '',
        user_mod: 1,
        is_deleted: false,
        createdAt: '2021-08-01 16:07:24',
        updatedAt: '2021-08-03 16:10:33'
      },
      {
        id: 7,
        device_type_id: 1,
        model_gname: '모델명 목록',
        model_code: '0006',
        model_name: "HG-Smart-17A",
        bigo: '',
        user_mod: 1,
        is_deleted: false,
        createdAt: '2021-08-01 16:07:24',
        updatedAt: '2021-08-03 16:10:33'
      },
      {
        id: 8,
        device_type_id: 1,
        model_gname: '모델명 목록',
        model_code: '0006',
        model_name: "HG-Smart-18A",
        bigo: '',
        user_mod: 1,
        is_deleted: false,
        createdAt: '2021-08-01 16:07:24',
        updatedAt: '2021-08-03 16:10:33'
      },
      {
        id: 9,
        device_type_id: 1,
        model_gname: '모델명 목록',
        model_code: '0006',
        model_name: "HG-Smart-18A-B",
        bigo: '',
        user_mod: 1,
        is_deleted: false,
        createdAt: '2021-08-01 16:08:24',
        updatedAt: '2021-08-03 16:10:33'
      },
      {
        id: 10,
        device_type_id: 1,
        model_gname: '모델명 목록',
        model_code: '0006',
        model_name: "HG-Smart-18B",
        bigo: '',
        user_mod: 1,
        is_deleted: false,
        createdAt: '2021-08-01 16:08:24',
        updatedAt: '2021-08-03 16:10:33'
      },
      {
        id: 11,
        device_type_id: 1,
        model_gname: '모델명 목록',
        model_code: '0006',
        model_name: "HG-Smart-19A",
        bigo: '',
        user_mod: 1,
        is_deleted: false,
        createdAt: '2021-08-01 16:08:24',
        updatedAt: '2021-08-03 16:10:33'
      }
    ]);
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Device_Models', null, )
  }
}