'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.bulkInsert('chapters', [
        {page:1 ,image : 'https://swebtoon-phinf.pstatic.net/20191002_110/15699851203617YErk_JPEG/1569985120329171478.jpg?type=q90',episode_id:3},
        {page:2 ,image : 'https://swebtoon-phinf.pstatic.net/20191002_150/15699851207915L6AS_JPEG/1569985120759171470.jpg?type=q90',episode_id:3},
        {page:3 ,image : 'https://swebtoon-phinf.pstatic.net/20191002_76/1569985121553MBsM5_JPEG/1569985121533171470.jpg?type=q90',episode_id : 3}
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
