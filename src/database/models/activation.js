
module.exports = (sequelize, DataTypes) => {
  const Activation = sequelize.define('Activation', {
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      unique: true
    },
    userId: {
      allowNull: false,
      field: 'user_id',
      type: DataTypes.UUID,
      references: {
        model: 'Users',
        key: 'id'
      }
    },
    token: {
      type: DataTypes.STRING(2048),
      allowNull: false
    }
  }, {
    tableName: 'Activation'
  });
  Activation.associate = (models) => {
    const { User } = models;
    Activation.belongsTo(User, { foreignKey: 'user_id' });
  };
  return Activation;
};
