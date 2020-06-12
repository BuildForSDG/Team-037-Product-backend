// 'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('Donations', {
    id: {
      allowNull: false,
      primaryKey: true,
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
      unique: true
    },
    transactionId: {
      type: Sequelize.STRING,
      allowNull: false
    },
    firstName: {
      type: Sequelize.STRING
    },
    lastName: {
      type: Sequelize.STRING
    },
    amount: {
      type: Sequelize.DOUBLE
    },
    description: {
      type: Sequelize.TEXT,
      allowNull: false,
    },
    email: {
      type: Sequelize.STRING
    },
    phone: {
      type: Sequelize.STRING
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE
    }
  }),
  down: (queryInterface) => queryInterface.dropTable('Donations')
};
