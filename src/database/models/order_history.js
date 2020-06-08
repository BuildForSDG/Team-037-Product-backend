
module.exports = (sequelize, DataTypes) => {
  const orderHistory = sequelize.define('orderHistory', {
    id: {
      allowNull: false,
      primaryKey: true,
      unique: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4
    },
    userId: {
      type: DataTypes.UUID,
      allowNull: false
    },
    paymentType: {
      type: DataTypes.STRING,
      defaultValue: 'awaiting_payment',
      allowNull: false
    },
    transactionId: {
      type: DataTypes.UUID,
      allowNull: false
    },
    amount: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
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
    productId: {
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
  },
  { tableName: 'order_histories' });
  orderHistory.associate = (models) => {
    const { farmProducts, farmLand, User } = models;
    orderHistory.belongsTo(farmProducts, { foreignKey: 'product_id' });
    orderHistory.belongsTo(farmLand, { foreignKey: 'farm_id' });
    orderHistory.belongsTo(User, { foreignKey: 'user_id' });
  };
  return orderHistory;
};
