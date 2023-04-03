'use strict';
const bcrypt  = require('bcrypt');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
    const passToken = await bcrypt.hash(process.env.SEQUELIZE_ADMIN_PASS,10);

    // User id: 1 should be created previously
    await queryInterface.bulkInsert('Users', [
    {
      id: 1,
      user_ID: process.env.SEQUELIZE_ADMIN_USER,
      user_company:1,
      user_name:'펠리페',
      user_pw: passToken,
      user_mob:'012255588996',
      user_tel:'002255666332',
      user_email:process.env.SEQUELIZE_ADMIN_EMAIL,
      user_active:true,
      access_token:'',
      bigo:'super admin',
      user_mod:1,
      bigo: '',
      user_mod: 1,
      is_deleted: false,
      createdAt: '2023-04-03 00:00:00',
      updatedAt: '2023-04-03 00:00:00'
      }
    ], {});
    
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  }

  
};
