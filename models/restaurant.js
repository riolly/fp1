'use strict';
module.exports = (sequelize, DataTypes) => {
  const Sequelize = sequelize.Sequelize
  const Model = Sequelize.Model

  class Restaurant extends Model{

  }

  Restaurant.init({
    name: DataTypes.STRING,
    owner: DataTypes.STRING,
    email: DataTypes.STRING,
    username: DataTypes.STRING,
    password: DataTypes.STRING
  }, {sequelize});

  Restaurant.associate = function(models) {
    // associations can be defined here
    Restaurant.hasMany(models.Cabang,{foreignKey:'RestaurantId'})
    
  };
  return Restaurant;
};