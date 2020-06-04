
module.exports = (sequelize, DataTypes) => {
  const farmProducts = sequelize.define('farmProducts', {
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
  farmProducts.associate = (models) => {
    const { farmLand } = models;
    farmProducts.belongsTo(farmLand, { foreignKey: 'farm_id' });
  };
  return farmProducts;
};
