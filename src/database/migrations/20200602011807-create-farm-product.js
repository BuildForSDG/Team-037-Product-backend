
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('farmProducts', {
    id: {
      allowNull: false,
      primaryKey: true,
      unique: true,
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4
    },
    farmId: {
      type: Sequelize.UUID,
      allowNull: false,
      field: 'farm_id',
      references: {
        model: 'farmLands',
        key: 'id'
      }
    },
    productName: {
      type: Sequelize.STRING,
      allowNull: false
    },
    features: {
      type: Sequelize.STRING,
      allowNull: false
    },
    category: {
      type: Sequelize.STRING,
      allowNull: false
    },
    description: {
      type: Sequelize.TEXT,
      allowNull: false
    },
    imageUrl: {
      type: Sequelize.STRING,
      allowNull: false
    },
    price: {
      type: Sequelize.STRING,
      allowNull: false
    },
    quantity: {
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
  down: (queryInterface) => queryInterface.dropTable('farmProducts')
};
