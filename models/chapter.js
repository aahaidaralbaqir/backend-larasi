'use strict';
module.exports = (sequelize, DataTypes) => {
  const chapter = sequelize.define('chapter', {
    page: DataTypes.INTEGER,
    image: DataTypes.STRING,
    episode_id: DataTypes.INTEGER
  }, {});
  chapter.associate = function(models) {
    // associations can be defined here
  };
  return chapter;
};
