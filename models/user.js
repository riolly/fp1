'use strict';
module.exports = (sequelize, DataTypes) => {
  const Sequelize = sequelize.Sequelize
  const Model = Sequelize.Model

  class User extends Model{

  }

  User.init({
    name: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {msg: "Nama tidak boleh kosong"},
        len: {
          args: [5, 30],
          msg: "Panjang nama antara 5-30"
        }
      }
    },
    birth: {
      type: DataTypes.INTEGER,
      validate: {
        notEmpty: {msg: "Tahun tidak boleh kosong"},
        min: {
          args: 1940,
          msg: "Tidak mungkin anda lahir diatahun segitu"
        }
      }
    },
    email: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {msg: "Email tidak boleh kosong"}
      }
    },
    username: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {msg: "Username tidak boleh kosong"},
        len: {
          args: [5],
          msg: "Username kurang panjang. Min 5 char."
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {msg: "Password tidak boleh kosong"},
        len: {
          args: [8],
          msg: "Password kurang panjang. Min 8 char."
        }
      }
    }
  }, {sequelize});
  User.associate = function(models) {
    // associations can be defined here
    User.belongsToMany(models.Cabang,{
      through:models.Review ,foreignKey:'UserId'})
  };
  return User;
};