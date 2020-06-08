
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('checkoutLists', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
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
      allowNull: false,
      references: {
        model: 'order_history',
        key: 'id'
      }
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
    }
  }),
  down: (queryInterface) => queryInterface.dropTable('checkoutLists')
};
