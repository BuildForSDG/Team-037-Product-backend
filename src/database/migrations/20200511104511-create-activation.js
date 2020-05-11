
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('Activation', {
    id: {
      allowNull: false,
      primaryKey: true,
      type: Sequelize.UUID,
      unique: true,
      defaultValue: Sequelize.UUIDV4
    },
    userId: {
      allowNull: false,
      field: 'user_id',
      type: Sequelize.UUID,
      references: {
        model: 'Users',
        key: 'id'
      }
    },
    token: {
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
  down: (queryInterface) => queryInterface.dropTable('Activation')
};
