
module.exports = (sequelize, DataTypes) => {
  const OrderHistory = sequelize.define('OrderHistory', {
    id: {
      allowNull: false,
      primaryKey: true,
      unique: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4
    },
    userId: {
      field: 'user_id',
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: 'Users',
        key: 'id'
      }
    },
    paymentType: {
      field: 'payment_type',
      type: DataTypes.ENUM(['cardpayment', 'ondelivery', '1done1']),
      allowNull: false
    },
    transactionId: {
      type: DataTypes.STRING,
      allowNull: false
    },
    amount: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    productId: {
      field: 'product_id',
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: 'farmProducts',
        key: 'id'
      }
    },
    totalPayment: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    status: {
      type: DataTypes.STRING,
      defaultValue: 'pending',
      allowNull: false
    },
    deliveryFee: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    farmerId: {
      type: DataTypes.UUID,
      allowNull: false,
      defaultValue: 0
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    farmId: {
      type: DataTypes.UUID,
      allowNull: false,
      defaultValue: 0
    },
    location: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 0
    },
    deliveryInstruction: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    street: {
      type: DataTypes.STRING,
      allowNull: false
    },
    paymentStatus: {
      type: DataTypes.STRING,
      defaultValue: 'awaiting-payment',
      allowNull: false
    }
  },
  { tableName: 'order_histories' });
  OrderHistory.associate = (models) => {
    const {
      FarmProducts, FarmLand, User, CheckoutList
    } = models;
    OrderHistory.belongsTo(FarmProducts, { foreignKey: 'product_id' });
    OrderHistory.belongsTo(FarmLand, { foreignKey: 'farm_id' });
    OrderHistory.belongsTo(User, { foreignKey: 'user_id' });
    OrderHistory.hasMany(CheckoutList, { foreignKey: 'id' });
  };
  return OrderHistory;
};
