'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   
     await queryInterface.bulkInsert('Orders', [
      {
      userid: 1,
      item: 'Baju, Celana, Sprei, Kaos Kaki',
      orderdate: new Date(),
      paymentmethod: 'Gopay',
      invoice: 40000,
      },
      {
      userid: 1,
      item: 'Sprei, Kaos Kaki',
      orderdate: new Date(),
      paymentmethod: 'Dana',
      invoice: 35000,
      },
      {
      userid: 1,
      item: 'Baju, Kaos Kaki',
      orderdate: new Date(),
      paymentmethod: 'BRI',
      invoice: 25000,
      },
      {
      userid: 1,
      item: 'Baju, Celana',
      orderdate: new Date(),
      paymentmethod: 'BCA',
      invoice: 27000,
      },
    ], {});

    
  },

  async down (queryInterface, Sequelize) {
    
     await queryInterface.bulkDelete('Orders', null, {});
  }
};
