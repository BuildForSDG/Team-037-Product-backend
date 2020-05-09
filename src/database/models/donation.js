// 'use strict';
module.exports = (sequelize, DataTypes) => {
  const Donation = sequelize.define('Donation', {
    userId: {
      type: DataTypes.UUID,
      allowNull: false,
      field: 'user_id',
      reference: {
        model: 'Users',
        key: 'id'
      }
    },
    amount: {
      type: DataTypes.DECIMAL
    },
    description: {
      type: DataTypes.TEXT
    }
  }, {});
  Donation.associate = (models) => {
    // associations can be defined here
    Donation.belongsTo(models.User, {
      targetKey: 'id',
      foreignKey: 'donationId',
      onDelete: 'CASCADE'
    });
  };
  return Donation;
};
