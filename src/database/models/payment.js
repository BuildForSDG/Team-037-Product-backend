
module.exports = (sequelize, DataTypes) => {
  const Payment = sequelize.define('Payment', {
    id: {
      allowNull: false,
      primaryKey: true,
      unique: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4
    },
    amount: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    recipient: {
      type: DataTypes.UUID,
      allowNull: false
    },
    transferCode: {
      type: DataTypes.STRING,
      allowNull: false
    },
    status: {
      type: DataTypes.DECIMAL,
      allowNull: false
    }
  },
  {
    tableName: 'Payment'
  });
  // payment.associate = (models) => {
  //     const{ }= models
  // };
  return Payment;
};
