'use strict';
module.exports = (sequelize, DataTypes) => {
  const Sequelize = sequelize.Sequelize
  const Model = Sequelize.Model

  class Cabang extends Model{

  }

  Cabang.init({
    RestaurantId: DataTypes.INTEGER,
    cabang: DataTypes.INTEGER,
    no_telp: DataTypes.INTEGER,
    alamat: DataTypes.STRING
  }, {sequelize});
  Cabang.associate = function(models) {
    // associations can be defined here
    Cabang.belongsTo(models.Restaurant, {foreignKey:'RestaurantId'})
    Cabang.belongsToMany(models.User,{
      through:models.Review ,foreignKey:'CabangId'})

  };
  return Cabang;
};