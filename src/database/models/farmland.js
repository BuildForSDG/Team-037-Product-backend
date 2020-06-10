
module.exports = (sequelize, DataTypes) => {
  const FarmLand = sequelize.define('FarmLand', {
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      unique: true
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
    farmName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false
    },
    country: {
      type: DataTypes.STRING,
      allowNull: false
    },
    farmSize: {
      field: 'farm_size',
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
    farmType: {
      type: DataTypes.STRING
    },
    farmingExperience: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    tableName: 'farmLands'
  });
  FarmLand.associate = (models) => {
    const { User, FarmProducts, OrderHistory } = models;
    FarmLand.belongsTo(User, { foreignKey: 'user_id', onDelete: 'CASCADE' });
    FarmLand.hasMany(FarmProducts, { foreignKey: 'id', onDelete: 'CASCADE' });
    FarmLand.hasMany(OrderHistory, { foreignKey: 'id', onDelete: 'CASCADE' });
  };
  return FarmLand;
};
