
module.exports = (sequelize, DataTypes) => {
  const farmLand = sequelize.define('farmLand', {
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
  farmLand.associate = (models) => {
    const { User, farmProducts } = models;
    farmLand.belongsTo(User, { foreignKey: 'user_id' });
    farmLand.hasMany(farmProducts, { foreignKey: 'id' });
  };
  return farmLand;
};
