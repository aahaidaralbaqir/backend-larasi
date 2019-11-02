'use strict';
module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define('user', {
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    name: DataTypes.STRING
  }, {});
  user.associate = function(models) {
      user.belongsToMany(models.webtoon,{
        through : 'favorites',
        as : 'webtoons',
        foreignKey : 'user_id'
      })
  };
  return user;
};
