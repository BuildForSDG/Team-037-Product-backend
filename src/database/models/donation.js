export default (sequelize, DataTypes) => {
  const Donation = sequelize.define(
    'Donation',
    {
      amount: {
        type: DataTypes.DOUBLE
      },
      description: {
        type: DataTypes.STRING
      },
      email: {
        type: DataTypes.STRING
      },
      phone: {
        type: DataTypes.STRING
      },
      firstName: {
        type: DataTypes.STRING
      },
      lastName: {
        type: DataTypes.STRING
      }
    },
    {}
  );
  return Donation;
};
