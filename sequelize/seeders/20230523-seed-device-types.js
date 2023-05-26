'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
  // Bulk Insertion of Device Types
    await queryInterface.bulkInsert('Device_Types', [
      {
       id: 1,
       type_name:'Smart Acoustic Signal',
       type_name_kr:'음향신호기',
       dv_type_icon:'/images/misc/hangil-signal-border.svg',
       user_mod: 1,
       is_deleted: false,
       createdAt: '2023-05-23 00:00:00',
       updatedAt: '2023-05-23 00:00:00'
      },
      {
       id: 2,
       type_name: 'Voice Inductor Asssistant',
       type_name_kr: '음성유도기',
       dv_type_icon: '/images/misc/hangil-voice-guidance.svg',
       user_mod: 1,
       is_deleted: false,
       createdAt: '2023-05-23 00:00:00',
       updatedAt: '2023-05-23 00:00:00'
      }
    ]);
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Device_Types', null, {})
  }
}