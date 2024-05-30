'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Bulk Insertion of Device Models
    await queryInterface.bulkInsert('Device_Models', [
      {
        id: 12,
        device_type_id: 1,
        model_gname: '파워기판 모델명',
        model_code: '0007',
        model_name: 'HG -17A',
        bigo: 'IOT모둘만 부착된 모델(모듈개통안한모델)',
        user_mod: 1,
        is_deleted: false,
        createdAt: '2021-08-23 15:44:24',
        updatedAt: '2021-08-23 09:10:33'
      },
      {
        id: 13,
        device_type_id: 1,
        model_gname: '파워기판 모델명',
        model_code: '0007',
        model_name: 'HG Smart--17A',
        bigo: 'IOT모둘만 부착된 모델(제주특별자치도, 광주광역시, 전주시',
        user_mod: 1,
        is_deleted: false,
        createdAt: '2021-08-23 15:44:24',
        updatedAt: '2021-08-23 15:44:46'
      },
      {
        id: 14,
        device_type_id: 1,
        model_gname: '파워기판 모델명',
        model_code: '0007',
        model_name: 'HG -18A',
        bigo: 'IOT, BLE 모둘 부착가능 모델 (개통안한제품)',
        user_mod: 1,
        is_deleted: false,
        createdAt: '2021-08-23 15:45:24',
        updatedAt: '2021-08-23 16:06:22'
      },
      {
        id: 15,
        device_type_id: 1,
        model_gname: '파워기판 모델명',
        model_code: '0007',
        model_name: 'HG Smart--18A-01',
        bigo: 'IOT, BLE 모둘 부착가능 모델 (개통제품) 1. 0018A-01 : 68uF =2019년 7월~2020년 12월',
        user_mod: 1,
        is_deleted: false,
        createdAt: '2021-08-23 16:06:24',
        updatedAt: '2021-08-23 16:06:33'
      },
      {
        id: 16,
        device_type_id: 1,
        model_gname: '파워기판 모델명',
        model_code: '0007',
        model_name: 'HG Smart--18B',
        bigo: 'IOT, BLE 모둘 부착가능 모델 (개통제품) 1. 0018B  : 68uF =2021년 1월~2021년  07월',
        user_mod: 1,
        is_deleted: false,
        createdAt: '2021-08-23 16:07:19',
        updatedAt: '2021-08-23 16:07:19'
      },
      {
        id: 17,
        device_type_id: 1,
        model_gname: '파워기판 모델명',
        model_code: '0007',
        model_name: 'HG Smart--18B-01',
        bigo: 'IOT, BLE 모둘 부착가능 모델 (개통제품) 1. 0018B-01 : 써미스터 추가 =2021년 7월~현재진행중',
        user_mod: 1,
        is_deleted: false,
        createdAt: '2021-08-23 16:07:24',
        updatedAt: '2021-08-23 16:10:33'
      },
      {
        id: 18,
        device_type_id: 1,
        model_gname: '파워기판 모델명',
        model_code: '0007',
        model_name: 'HG Smart--18B-02',
        bigo: 'IOT, BLE 모둘 부착가능 모델 (개통제품) 1. 0018B-02 : 바리스타, 접지 단자 추가',
        user_mod: 1,
        is_deleted: false,
        createdAt: '2021-08-27 16:07:24',
        updatedAt: '2021-08-27 16:10:33'
      }
    ]);
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Device_Models', null, )
  }
}