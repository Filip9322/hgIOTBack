'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    // User id: 1 should be created previously
    await queryInterface.bulkInsert('Roles', [
    {
      id: 1,
      role_name: 'Admin',
      bigo: '',
      user_mod: 1,
      is_deleted: false,
      createdAt: '2023-04-03 00:00:00',
      updatedAt: '2023-04-03 00:00:00'
      }
    ], {});
    
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Roles', null, {});
  }
};
