'use strict';
/** @type {import('sequelize-cli').Migration} */

// Create bulk Insert Array play with the Array properties to create Identical Objects, but
// changing the id and local area id (NOT ALL to prove only is called if registered)
let bulkInsertArray = Array.apply(null, Array(35)).map((row,i)=>{
  let rowObj = {};
  if(i < 21) {
    rowObj = {
      id: i+1,
      larea_id: i+1,
      device_type_id: 1,
      user_mod: 1,
      is_deleted: false,
      createdAt: '2023-05-24 00:00:00',
      updatedAt: '2023-05-24 00:00:00'
    }
  } else {
    rowObj = {
      id: i+1,
      larea_id: i-20,
      device_type_id: 2,
      user_mod: 1,
      is_deleted: false,
      createdAt: '2023-05-24 00:00:00',
      updatedAt: '2023-05-24 00:00:00'
    }
  }
  return rowObj;
});

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('LAreas_Device_Subscriptions',bulkInsertArray, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('LAreas_Device_Subscriptions', null, {})
  }
}