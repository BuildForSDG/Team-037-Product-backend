
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('password_managers', {
    id: {
      allowNull: false,
      primaryKey: true,
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
      unique: true
    },
    userId: {
      type: Sequelize.UUID,
      allowNull: false,
      field: 'user_id',
      reference: {
        model: 'Users',
        key: 'id'
      }
    },
    current_password: {
      type: Sequelize.STRING,
      allowNull: false
    },
    old_password: {
      type: Sequelize.STRING,
      allowNull: true
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
  down: (queryInterface) => queryInterface.dropTable('password_managers')
};
