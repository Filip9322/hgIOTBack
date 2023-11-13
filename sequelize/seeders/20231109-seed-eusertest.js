'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up : async(queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('EUsers', [
      {
        id: 1,
        user_name: 'Test',
        user_age: 24
      }
    ]);
  },
  down: async(queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('EUsers');
  }
}