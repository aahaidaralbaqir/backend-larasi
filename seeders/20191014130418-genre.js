'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.bulkInsert('genres', [
        {
          name: 'Comedy',
          createdAt : new Date()
        },
        {
          name: 'Scifi',
          createdAt : new Date()
        },
        {
          name: 'Fighting',
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
