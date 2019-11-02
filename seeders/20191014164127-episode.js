'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('episodes', [
        {title : '[Season 1] Ep.04',image : 'https://swebtoon-phinf.pstatic.net/20191008_258/1570511686428FSeFJ_PNG/thumb_1570511653263174546.png?type=q90'},
        {title : '[Season 1] Ep.03',image : 'https://swebtoon-phinf.pstatic.net/20190918_285/1568795186298Pvkj3_JPEG/1568795186270174535.jpg?type=q90'},
        {title : '[Season 1] Ep.05',image : 'https://swebtoon-phinf.pstatic.net/20190918_134/15687950605730w5xh_JPEG/1568795060541174527.jpg?type=q90'},
        {title : '[Season 1] Ep.06',image : 'https://swebtoon-phinf.pstatic.net/20190918_222/15687949197163IWYx_JPEG/1568794919667174519.jpg?type=q90'}
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
