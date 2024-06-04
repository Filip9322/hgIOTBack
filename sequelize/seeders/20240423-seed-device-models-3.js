'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Bulk Insertion of Device Models
    await queryInterface.bulkInsert('Device_Models', [
      {
        id: 20,
        device_type_id: 1,
        model_gname: '부품교체목록',
        model_code: '0005',
        model_subcode: 1,
        model_name: '신호기 망실',
        bigo:'',
        user_mod: 1,
        is_deleted: false,
        createdAt: '2021-08-20 16:02:24',
        updatedAt: '2021-09-16 06:02:33'
      },
      {
        id: 21,
        device_type_id: 1,
        model_gname: '부품교체목록',
        model_code: '0005',
        model_subcode: 2,
        model_name: '스피커교체',
        bigo:'',
        user_mod: 1,
        is_deleted: false,
        createdAt: '2021-08-01 16:02:24',
        updatedAt: '2021-08-01 16:02:46'
      },
      {
        id: 22,
        device_type_id: 1,
        model_gname: '부품교체목록',
        model_code: '0005',
        model_subcode: 3,
        model_name: '볼륨-일체형',
        bigo:'',
        user_mod: 1,
        is_deleted: false,
        createdAt: '2021-08-01 16:02:24',
        updatedAt: '2021-08-01 16:02:22'
      },
      {
        id: 23,
        device_type_id: 1,
        model_gname: '부품교체목록',
        model_code: '0005',
        model_subcode: 4,
        model_name: '볼륨-UP',
        bigo:'',
        user_mod: 1,
        is_deleted: false,
        createdAt: '2021-08-01 16:02:24',
        updatedAt: '2021-08-01 16:02:33'
      },
      {
        id: 24,
        device_type_id: 1,
        model_gname: '부품교체목록',
        model_code: '0005',
        model_subcode: 5,
        model_name: '볼륨-DN',
        bigo:'',
        user_mod: 1,
        is_deleted: false,
        createdAt: '2021-08-01 16:02:19',
        updatedAt: '2021-08-01 16:02:19'
      },
      {
        id: 25,
        device_type_id: 1,
        model_gname: '부품교체목록',
        model_code: '0005',
        model_subcode: 6,
        model_name: '소켓 10MM',
        bigo:'',
        user_mod: 1,
        is_deleted: false,
        createdAt: '2021-08-01 16:02:19',
        updatedAt: '2021-08-01 16:02:19'
      },
      {
        id: 26,
        device_type_id: 1,
        model_gname: '부품교체목록',
        model_code: '0005',
        model_subcode: 7,
        model_name: '소켓 8MM',
        bigo:'',
        user_mod: 1,
        is_deleted: false,
        createdAt: '2021-08-01 16:02:24',
        updatedAt: '2021-08-01 16:02:33'
      },
      {
        id: 27,
        device_type_id: 1,
        model_gname: '부품교체목록',
        model_code: '0005',
        model_subcode: 8,
        model_name: '358 안테나',
        bigo:'',
        user_mod: 1,
        is_deleted: false,
        createdAt: '2021-08-27 16:07:24',
        updatedAt: '2021-08-27 16:10:33'
      },
      {
        id: 28,
        device_type_id: 1,
        model_gname: '부품교체목록',
        model_code: '0005',
        model_subcode: 9,
        model_name: '235 안테나',
        bigo:'',
        user_mod: 1,
        is_deleted: false,
        createdAt: '2021-08-01 16:02:24',
        updatedAt: '2021-08-01 16:02:46'
      },
      {
        id: 29,
        device_type_id: 1,
        model_gname: '부품교체목록',
        model_code: '0005',
        model_subcode: 10,
        model_name: 'IOT 안테나',
        bigo:'',
        user_mod: 1,
        is_deleted: false,
        createdAt: '2021-08-01 16:02:24',
        updatedAt: '2021-08-01 16:02:22'
      },
      {
        id: 30,
        device_type_id: 1,
        model_gname: '부품교체목록',
        model_code: '0005',
        model_subcode: 11,
        model_name: 'BLE 안테나',
        bigo:'',
        user_mod: 1,
        is_deleted: false,
        createdAt: '2021-08-01 16:02:24',
        updatedAt: '2021-08-01 16:02:33'
      },
      {
        id: 31,
        device_type_id: 1,
        model_gname: '부품교체목록',
        model_code: '0005',
        model_subcode: 12,
        model_name: '오링',
        bigo:'',
        user_mod: 1,
        is_deleted: false,
        createdAt: '2021-08-01 16:02:19',
        updatedAt: '2021-08-01 16:02:19'
      },
      {
        id: 32,
        device_type_id: 1,
        model_gname: '부품교체목록',
        model_code: '0005',
        model_subcode: 13,
        model_name: '전원선',
        bigo:'',
        user_mod: 1,
        is_deleted: false,
        createdAt: '2021-08-01 16:02:24',
        updatedAt: '2021-08-01 16:02:33'
      },
      {
        id: 33,
        device_type_id: 1,
        model_gname: '부품교체목록',
        model_code: '0005',
        model_subcode: 14,
        model_name: '버튼선',
        bigo:'',
        user_mod: 1,
        is_deleted: false,
        createdAt: '2021-08-27 16:07:24',
        updatedAt: '2021-08-27 16:10:33'
      },
      {
        id: 34,
        device_type_id: 1,
        model_gname: '부품교체목록',
        model_code: '0005',
        model_subcode: 15,
        model_name: '보작용 기판',
        bigo:'',
        user_mod: 1,
        is_deleted: false,
        createdAt: '2021-08-01 16:02:24',
        updatedAt: '2021-08-01 16:02:46'
      },
      {
        id: 35,
        device_type_id: 1,
        model_gname: '부품교체목록',
        model_code: '0005',
        model_subcode: 16,
        model_name: '버턴 배수구 위치 불량',
        bigo:'버턴 배수구 위치가 상부로 향하여 누수진행',
        user_mod: 1,
        is_deleted: false,
        createdAt: '2021-08-01 16:02:24',
        updatedAt: '2021-08-01 16:02:22'
      },
      {
        id: 36,
        device_type_id: 1,
        model_gname: '부품교체목록',
        model_code: '0005',
        model_subcode: 17,
        model_name: '스피커불량',
        bigo:'',
        user_mod: 1,
        is_deleted: false,
        createdAt: '2021-08-01 16:02:24',
        updatedAt: '2021-08-01 16:02:33'
      },
      {
        id: 37,
        device_type_id: 1,
        model_gname: '부품교체목록',
        model_code: '0005',
        model_subcode: 18,
        model_name: '케이스파손',
        bigo:'',
        user_mod: 1,
        is_deleted: false,
        createdAt: '2021-08-01 16:02:19',
        updatedAt: '2021-08-01 16:02:19'
      },
      {
        id: 38,
        device_type_id: 1,
        model_gname: '부품교체목록',
        model_code: '0005',
        model_subcode: 20,
        model_name: '1A1B 스위치',
        bigo:'',
        user_mod: 1,
        is_deleted: false,
        createdAt: '2021-08-01 16:02:24',
        updatedAt: '2021-08-01 16:02:33'
      },
      {
        id: 39,
        device_type_id: 1,
        model_gname: '부품교체목록',
        model_code: '0005',
        model_subcode: 21,
        model_name: '2A2B 스위치',
        bigo:'',
        user_mod: 1,
        is_deleted: false,
        createdAt: '2021-08-27 16:07:24',
        updatedAt: '2021-08-27 16:10:33'
      },
      {
        id: 40,
        device_type_id: 1,
        model_gname: '부품교체목록',
        model_code: '0005',
        model_subcode: 22,
        model_name: '일반 버튼 소켓',
        bigo:'',
        user_mod: 1,
        is_deleted: false,
        createdAt: '2021-08-01 16:02:24',
        updatedAt: '2021-08-01 16:02:46'
      },
      {
        id: 41,
        device_type_id: 1,
        model_gname: '부품교체목록',
        model_code: '0005',
        model_subcode: 23,
        model_name: 'LED 버튼 소켓',
        bigo:'',
        user_mod: 1,
        is_deleted: false,
        createdAt: '2021-08-01 16:02:24',
        updatedAt: '2021-08-01 16:02:22'
      },
      {
        id: 42,
        device_type_id: 1,
        model_gname: '부품교체목록',
        model_code: '0005',
        model_subcode: 24,
        model_name: 'LED 버튼 기판',
        bigo:'',
        user_mod: 1,
        is_deleted: false,
        createdAt: '2021-08-01 16:02:24',
        updatedAt: '2021-08-01 16:02:33'
      },
      {
        id: 43,
        device_type_id: 1,
        model_gname: '부품교체목록',
        model_code: '0005',
        model_subcode: 25,
        model_name: '버튼교체',
        bigo:'',
        user_mod: 1,
        is_deleted: false,
        createdAt: '2021-08-01 16:02:19',
        updatedAt: '2021-08-01 16:02:19'
      },
      {
        id: 44,
        device_type_id: 1,
        model_gname: '부품교체목록',
        model_code: '0005',
        model_subcode: 26,
        model_name: 'LED버튼 스위치',
        bigo:'',
        user_mod: 1,
        is_deleted: false,
        createdAt: '2021-08-01 16:02:24',
        updatedAt: '2021-08-01 16:02:33'
      },
      {
        id: 45,
        device_type_id: 1,
        model_gname: '부품교체목록',
        model_code: '0005',
        model_subcode: 27,
        model_name: 'IOT모듈 불량',
        bigo:'',
        user_mod: 1,
        is_deleted: false,
        createdAt: '2021-08-27 16:07:24',
        updatedAt: '2021-08-27 16:10:33'
      },
      {
        id: 46,
        device_type_id: 1,
        model_gname: '부품교체목록',
        model_code: '0005',
        model_subcode: 200,
        model_name: '메인기판 - 2021.07.a',
        bigo:'',
        user_mod: 1,
        is_deleted: false,
        createdAt: '2021-08-01 16:02:24',
        updatedAt: '2021-08-01 16:02:33'
      },
      {
        id: 47,
        device_type_id: 1,
        model_gname: '부품교체목록',
        model_code: '0005',
        model_subcode: 201,
        model_name: '메인기판 UP - 2021.07.a',
        bigo:'',
        user_mod: 1,
        is_deleted: false,
        createdAt: '2021-08-27 16:07:24',
        updatedAt: '2021-08-27 16:10:33'
      },
      {
        id: 48,
        device_type_id: 1,
        model_gname: '부품교체목록',
        model_code: '0005',
        model_subcode: 202,
        model_name: 'ver.2023.02E',
        bigo:'',
        user_mod: 1,
        is_deleted: false,
        createdAt: '2021-08-01 16:02:24',
        updatedAt: '2021-08-01 16:02:46'
      },
      {
        id: 49,
        device_type_id: 1,
        model_gname: '부품교체목록',
        model_code: '0005',
        model_subcode: 203,
        model_name: 'ver.2023.02F',
        bigo:'',
        user_mod: 1,
        is_deleted: false,
        createdAt: '2021-08-01 16:02:24',
        updatedAt: '2021-08-01 16:02:22'
      },
      {
        id: 50,
        device_type_id: 1,
        model_gname: '부품교체목록',
        model_code: '0005',
        model_subcode: 300,
        model_name: 'IOT모듈 - 2020.5.c',
        bigo:'',
        user_mod: 1,
        is_deleted: false,
        createdAt: '2021-08-01 16:02:24',
        updatedAt: '2021-08-01 16:02:33'
      },
      {
        id: 51,
        device_type_id: 1,
        model_gname: '부품교체목록',
        model_code: '0005',
        model_subcode: 301,
        model_name: 'IOT모듈 UP - 2020.5.c',
        bigo:'',
        user_mod: 1,
        is_deleted: false,
        createdAt: '2021-08-01 16:02:19',
        updatedAt: '2021-08-01 16:02:19'
      },
      {
        id: 52,
        device_type_id: 1,
        model_gname: '부품교체목록',
        model_code: '0005',
        model_subcode: 400,
        model_name: 'BLE모듈 - 2020.7.a',
        bigo:'',
        user_mod: 1,
        is_deleted: false,
        createdAt: '2021-08-01 16:02:24',
        updatedAt: '2021-08-01 16:02:33'
      },
      {
        id: 53,
        device_type_id: 1,
        model_gname: '부품교체목록',
        model_code: '0005',
        model_subcode: 401,
        model_name: 'BLE모듈 UP - 2020.7.a',
        bigo:'모듈교체(와이드4 핸드폰 호환문제로 보듈 교체)',
        user_mod: 1,
        is_deleted: false,
        createdAt: '2021-08-27 16:07:24',
        updatedAt: '2021-08-27 16:10:33'
      },
      {
        id: 54,
        device_type_id: 1,
        model_gname: '부품교체목록',
        model_code: '0005',
        model_subcode: 500,
        model_name: '전원OFF(공사중)',
        bigo:'',
        user_mod: 1,
        is_deleted: false,
        createdAt: '2021-09-16 16:02:24',
        updatedAt: '2021-09-16 16:02:33'
      },
      {
        id: 55,
        device_type_id: 1,
        model_gname: '부품교체목록',
        model_code: '0005',
        model_subcode: 501,
        model_name: '점멸운영',
        bigo:'',
        user_mod: 1,
        is_deleted: false,
        createdAt: '2022-02-17 16:07:24',
        updatedAt: '2022-02-17 16:10:33'
      }
    ]);
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Device_Models', null, )
  }
}