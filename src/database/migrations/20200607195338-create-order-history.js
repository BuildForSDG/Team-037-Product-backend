
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('order_histories', {
    id: {
      allowNull: false,
      primaryKey: true,
      unique: true,
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4
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
    paymentType: {
      field: 'payment_type',
      type: Sequelize.ENUM(['cardpayment', 'onDelivery', '1done1']),
      allowNull: false
    },
    transactionId: {
      type: Sequelize.STRING,
      allowNull: false
    },
    amount: {
      type: Sequelize.DECIMAL,
      allowNull: false
    },
    totalPayment: {
      type: Sequelize.DECIMAL,
      allowNull: false
    },
    deliveryFee: {
      type: Sequelize.DECIMAL,
      allowNull: false
    },
    farmerId: {
      type: Sequelize.UUID,
      allowNull: false,
      references: {
        model: 'Users',
        key: 'id'
      }
    },
    quantity: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    farmId: {
      type: Sequelize.UUID,
      allowNull: false,
      references: {
        model: 'farmLands',
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
    location: {
      type: Sequelize.STRING,
      allowNull: false
    },
    deliveryInstruction: {
      type: Sequelize.STRING,
      allowNull: false
    },
    street: {
      type: Sequelize.STRING,
      allowNull: false
    },
    status: {
      type: Sequelize.STRING,
      defaultValue: 'pending',
      allowNull: false
    },
    paymentStatus: {
      type: Sequelize.STRING,
      defaultValue: 'awaiting-payment',
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
  down: (queryInterface) => queryInterface.dropTable('order_histories')
};
