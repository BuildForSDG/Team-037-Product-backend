
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('payments', {
    id: {
      allowNull: false,
      primaryKey: true,
      unique: true,
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4
    },
    amount: {
      type: Sequelize.DECIMAL,
      allowNull: false
    },
    recipient: {
      type: Sequelize.UUID,
      allowNull: false
    },
    transferCode: {
      type: Sequelize.STRING,
      allowNull: false
    },
    status: {
      type: Sequelize.STRING,
      allowNull: false
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
  down: (queryInterface) => queryInterface.dropTable('Payments')
};
