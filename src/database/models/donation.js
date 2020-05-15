// 'use strict';
module.exports = (sequelize, DataTypes) => {
  const Donation = sequelize.define('Donation', {
    amount: DataTypes.DOUBLE,
    description: DataTypes.STRING,
    email: DataTypes.STRING,
    phone: DataTypes.STRING,
    firstname: DataTypes.STRING,
    lastname: DataTypes.STRING
  }, {});
  return Donation;
};
