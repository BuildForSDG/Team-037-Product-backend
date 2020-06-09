
module.exports = (sequelize, DataTypes) => {
  const FarmProducts = sequelize.define('FarmProducts', {
    id: {
      allowNull: false,
      primaryKey: true,
      unique: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4
    },
    farmId: {
      field: 'farm_id',
      references: {
        model: 'farmLands',
        key: 'id'
      },
      type: DataTypes.UUID,
      allowNull: false
    },
    productName: {
      type: DataTypes.UUID,
      allowNull: false
    },
    features: {
      type: DataTypes.UUID,
      allowNull: false
    },
    category: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    imageUrl: {
      type: DataTypes.STRING,
      allowNull: false
    },
    price: {
      type: DataTypes.UUID,
      allowNull: false
    },
    quantity: {
      type: DataTypes.UUID,
      allowNull: false
    }
  }, {
    tableName: 'farmProducts'
  });
  FarmProducts.associate = (models) => {
    const { FarmLand, CheckoutList, OrderHistory } = models;
    FarmProducts.belongsTo(FarmLand, { foreignKey: 'farm_id' });
    FarmProducts.hasMany(CheckoutList, { foreignKey: 'id' });
    FarmProducts.belongsTo(OrderHistory, { foreignKey: 'order_id' });
  };
  return FarmProducts;
};
