'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('webtoons', [
        {
              id : 1,
              title: 'The Secret',
              image: 'https://swebtoon-phinf.pstatic.net/20180802_193/1533172803197glE0c_JPEG/fffbc7c0-3cc8-4d07-ae97-677da0b7b5f4.jpg',
              isFavorite : false,
              genre_id : 1,
              created_by : 2
        }, {
              id : 2,
              title: 'Story Love',
              genre_id : 1,
              image: 'https://swebtoon-phinf.pstatic.net/20190109_23/1546992005638uqesb_JPEG/6712c84f-a436-450e-a25e-d47d7ef391ee.jpg',
              isFavorite : false,
              created_by : 1
        }, {
              id  : 3,
              title: 'Young Mom',
              genre_id : 1,
              image: 'https://swebtoon-phinf.pstatic.net/20190605_77/1559710021360PbGh3_JPEG/a7830607-6e12-44e5-b5f5-bd3742396000.jpg',
              isFavorite : true,
              created_by : 1
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
