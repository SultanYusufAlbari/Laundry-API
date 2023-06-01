'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    address: DataTypes.STRING,
    contact: DataTypes.STRING
  }, 
  {
    sequelize,
    modelName: 'User',
  }
  );
  // Hook sebelum penyimpanan
User.beforeCreate((user, options) => {
  // Proses audit log sebelum penyimpanan user
  console.log(`User with email ${user.email} is being created.`);
});
  return User;
};
