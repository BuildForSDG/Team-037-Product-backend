
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('checkoutLists', {
    id: {
      allowNull: false,
      primaryKey: true,
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
      unique: true
    },
    userId: {
      field: 'user_id',
      type: Sequelize.UUID,
      allowNull: false,
      references: {
        model: 'Users',
        key: 'id'
      }
    },
    farmId: {
      field: 'farm_id',
      type: Sequelize.UUID,
      allowNull: false,
      references: {
        model: 'farmLands',
        key: 'id'
      }
    },
    orderId: {
      field: 'order_id',
      type: Sequelize.UUID,
      allowNull: false
    },
    productId: {
      field: 'product_id',
      type: Sequelize.UUID,
      allowNull: false,
      references: {
        model: 'farmProducts',
        key: 'id'
      }
    },
    quantity: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    status: {
      type: Sequelize.ENUM(['pending', 'delivered']),
      defaultValue: 'pending',
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
  down: (queryInterface) => queryInterface.dropTable('checkoutLists')
};
