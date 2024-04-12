'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async(queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Intersection_Types', [
    {
      id: 1,
      inter_type_draw: 'device-maps/8-devices.png',
      inter_type_name: '사거리 8',
      inter_type_number_devices: 8,
      user_mod: 1,
      is_deleted: false,
      createdAt: '2023-05-23 00:00:00',
      updatedAt: '2023-05-23 00:00:00'
    },
    {
      id: 2,
      inter_type_draw: 'device-maps/6-devices.png',
      inter_type_name: '삼거리 6',
      inter_type_number_devices: 6,
      user_mod: 1,
      is_deleted: false,
      createdAt: '2023-05-23 00:00:00',
      updatedAt: '2023-05-23 00:00:00'
    },
    {
      id: 3,
      inter_type_draw: 'device-maps/4-devices.png',
      inter_type_name: '사거리 4',
      inter_type_number_devices: 4,
      user_mod: 1,
      is_deleted: false,
      createdAt: '2023-05-23 00:00:00',
      updatedAt: '2023-05-23 00:00:00'
    },
    {
      id: 4,
      inter_type_draw: 'device-maps/8-devices-1.png',
      inter_type_name: '사거리 8 - 1',
      inter_type_number_devices: 8,
      user_mod: 1,
      is_deleted: false,
      createdAt: '2023-05-23 00:00:00',
      updatedAt: '2023-05-23 00:00:00'
    },
    {
      id: 5,
      inter_type_draw: 'device-maps/10-devices.png',
      inter_type_name: '사거리 10',
      inter_type_number_devices: 10,
      user_mod: 1,
      is_deleted: false,
      createdAt: '2023-05-23 00:00:00',
      updatedAt: '2023-05-23 00:00:00'
    },
    {
      id: 6,
      inter_type_draw: 'device-maps/10-devices-1.png',
      inter_type_name: '오거리 10 - 1',
      inter_type_number_devices: 10,
      user_mod: 1,
      is_deleted: false,
      createdAt: '2023-05-23 00:00:00',
      updatedAt: '2023-05-23 00:00:00'
    },
    {
      id: 7,
      inter_type_draw: 'device-maps/12-devices.png',
      inter_type_name: '육거리 12',
      inter_type_number_devices: 12,
      user_mod: 1,
      is_deleted: false,
      createdAt: '2023-05-23 00:00:00',
      updatedAt: '2023-05-23 00:00:00'
    }
    ]);
  },
  down: async(queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Intersection_Types', null, {})
  }
}