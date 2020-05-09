
module.exports = (sequelize, DataTypes) => {
  const passwordManager = sequelize.define('passwordManager', {
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      unique: true
    },
    userId: {
      type: DataTypes.UUID,
      allowNull: false,
      field: 'user_id',
      reference: {
        model: 'Users',
        key: 'id'
      }
    },
    current_password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    old_password: {
      type: DataTypes.STRING,
      allowNull: true
    }
  },
  {
    tableName: 'password_managers'

  });
  passwordManager.associate = (models) => {
    const { User } = models;
    passwordManager.belongsTo(User, { foreignkey: 'user_id' });
  };
  return passwordManager;
};
