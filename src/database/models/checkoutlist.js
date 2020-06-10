
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
      field: 'user_id',
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: 'Users',
        key: 'id'
      }
    },
    farmId: {
      type: DataTypes.UUID,
      allowNull: false,
      field: 'farm_id'
    },
    orderId: {
      field: 'order_id',
      type: DataTypes.UUID
    },
    productId: {
      type: DataTypes.UUID,
      allowNull: false,
      field: 'product_id'
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
  },
  {
    tableName: 'checkoutLists'
  });
  CheckoutList.associate = (models) => {
    const { FarmLand, User } = models;
    CheckoutList.belongsTo(User, { foreignKey: 'user_id' });
    CheckoutList.belongsTo(FarmLand, { foreignKey: 'farm_id' });
  };
  return CheckoutList;
};
