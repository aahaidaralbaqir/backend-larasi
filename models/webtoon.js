'use strict';
module.exports = (sequelize, DataTypes) => {
  const webtoon = sequelize.define('webtoon', {
    title: DataTypes.STRING,
    image: DataTypes.STRING,
    genre : DataTypes.STRING,
  }, {});
  webtoon.associate = function(models) {
    webtoon.belongsTo(models.user,{
      as : 'user',
      foreignKey : 'created_by'
    })
    
    webtoon.hasMany(models.episode, {
      as : 'episodes',
      foreignKey : 'webtoon_id'
    })

    webtoon.belongsToMany(models.user,{
      through : 'favorites',
      as : 'isFavorite',
      foreignKey : 'webtoon_id'
    })
  };
  return webtoon;
};
