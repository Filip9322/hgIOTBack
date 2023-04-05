'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    // User id: 1 should be created previously
    await queryInterface.bulkInsert('User_Roles', [
    {
      id: 1,
      user_id: 1,
      role_id: 1,
      user_mod: 1,
      is_deleted: false,
      createdAt: '2023-04-03 00:00:00',
      updatedAt: '2023-04-03 00:00:00'
      }
    ], {});

    await queryInterface.bulkInsert('Role_Policy', [
    {
      id: 1,
      role_id: 1,
      allow_create: true,
      allow_select: true,
      allow_update: true,
      allow_delete: true,
      user_mod: 1,
      is_deleted: false,
      createdAt: '2023-04-03 00:00:00',
      updatedAt: '2023-04-03 00:00:00'
      }
    ], {});

    await queryInterface.bulkInsert('Role_Modules', [
    {
      id: 1,
      role_id: 1,
      module_id: 1,
      user_mod: 1,
      is_deleted: false,
      createdAt: '2023-04-03 00:00:00',
      updatedAt: '2023-04-03 00:00:00'
      }
    ], {});

    await queryInterface.bulkInsert('User_Wide_Areas', [
    {
      id: 1,
      user_id: 1,
      wide_area_id: 1,
      user_mod: 1,
      is_deleted: false,
      createdAt: '2023-04-03 00:00:00',
      updatedAt: '2023-04-03 00:00:00'
      }
    ], {});

    await queryInterface.bulkInsert('User_Local_Areas', [
    {
      id: 1,
      user_id: 1,
      local_area_id: 1,
      user_mod: 1,
      is_deleted: false,
      createdAt: '2023-04-03 00:00:00',
      updatedAt: '2023-04-03 00:00:00'
      }
    ], {});
    
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('User_Roles', null, {});
    await queryInterface.bulkDelete('Role_Policy', null, {});
    await queryInterface.bulkDelete('Role_Modules', null, {});
    await queryInterface.bulkDelete('User_Wide_Areas', null, {});
    await queryInterface.bulkDelete('User_Local_Areas', null, {});
  }
};
