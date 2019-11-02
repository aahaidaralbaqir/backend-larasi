'use strict';
module.exports = (sequelize, DataTypes) => {
  const episode = sequelize.define('episode', {
    title: DataTypes.STRING,
    image: DataTypes.STRING,
  }, {});
  episode.associate = function(models) {
    episode.hasMany(models.chapter,{
       foreignKey : 'episode_id',
       as : 'chapter',
    })
  };
  return episode;
};
