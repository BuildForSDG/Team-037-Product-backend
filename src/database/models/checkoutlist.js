
module.exports = (sequelize, DataTypes) => {
  const CheckoutList = sequelize.define('CheckoutList', {
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
    farmId: {
      type: DataTypes.UUID,
      allowNull: false
    },
    orderId: {
      type: DataTypes.UUID,
      allowNull: false
    },
    productId: {
      type: DataTypes.UUID,
      allowNull: false
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    status: {
      type: DataTypes.ENUM(['pending', 'delivered']),
      defaultValue: 'pending',
      allowNull: false
    }
  }, {});
  CheckoutList.associate = (models) => {
    const { farmLand, User } = models;
    CheckoutList.belongsTo(User, { foreignKey: 'user_id' });
    CheckoutList.belongsTo(farmLand, { foreignKey: 'farm_id' });
  };
  return CheckoutList;
};
