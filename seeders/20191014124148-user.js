'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('users', [
        {
        email : 'ahmadhdr.22@gmail.com',
        password : 'haidar220401',
        name : 'ahmad haidar albaqir',
        createdAt : new Date()
      },
      {
        email : 'teukurijak.22@gmail.com',
        password : 'teukurijal',
        name : 'teuku rijal',
        createdAt : new Date()

      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
