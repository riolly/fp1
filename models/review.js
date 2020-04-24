'use strict';
module.exports = (sequelize, DataTypes) => {
  const Sequelize = sequelize.Sequelize
  const Model = Sequelize.Model

  class Review extends Model{
    getFullInfo(){
      return `${this.User.name} (${this.User.username})`
    }

  }

  Review.init({
    CabangId: DataTypes.INTEGER,
    UserId: DataTypes.INTEGER,
    review: DataTypes.STRING,
    rating: DataTypes.INTEGER
  }, {sequelize});
  Review.associate = function(models) {
    // associations can be defined here
    Review.belongsTo(models.Cabang, {foreignKey:'CabangId'})
    Review.belongsTo(models.User, {foreignKey:'UserId'})
  };
  return Review;
};