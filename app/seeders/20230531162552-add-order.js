'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   
     await queryInterface.bulkInsert('Order', [
      {
      userid: 1,
      items: 'Baju, Celana, Sprei, Kaos Kaki',
      orderdate: new Date(),
      paymentmethod: 'Gopay',
      invoice: 40000,
      },
      {
      userid: 1,
      items: 'Sprei, Kaos Kaki',
      orderdate: new Date(),
      paymentmethod: 'Dana',
      invoice: 35000,
      },
      {
      userid: 1,
      items: 'Baju, Kaos Kaki',
      orderdate: new Date(),
      paymentmethod: 'BRI',
      invoice: 25000,
      },
      {
      userid: 1,
      items: 'Baju, Celana',
      orderdate: new Date(),
      paymentmethod: 'BCA',
      invoice: 27000,
      },
    ], {});

    
  },

  async down (queryInterface, Sequelize) {
    
     await queryInterface.bulkDelete('Order', null, {});
  }
};
