export default (sequelize, DataTypes) => {
  const User = sequelize.define(
    'User',
    {
      id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4
      },
      socialId: {
        type: DataTypes.STRING
      },
      firstName: {
        type: DataTypes.STRING
      },
      lastName: {
        type: DataTypes.STRING
      },
      email: {
        type: DataTypes.STRING
      },
      password: {
        type: DataTypes.STRING
      },
      phone: {
        type: DataTypes.INTEGER
      },
      country: {
        type: DataTypes.STRING
      },
      state: {
        type: DataTypes.STRING
      },
      userType: {
        type: DataTypes.STRING
      },
      imageUrl: {
        type: DataTypes.STRING
      },
      city: {
        type: DataTypes.STRING
      },
      verified: {
        type: DataTypes.BOOLEAN
      },
      dateOfBirth: {
        type: DataTypes.DATEONLY
      }
    },
    {}
  );
  User.associate = () => {

  };
  return User;
};
