module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('Users', {
    id: {
      allowNull: false,
      primaryKey: true,
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
      unique: true
    },
    firstName: {
      allowNull: false,
      type: Sequelize.STRING
    },
    lastName: {
      allowNull: false,
      type: Sequelize.STRING
    },
    email: {
      allowNull: false,
      unique: true,
      type: Sequelize.STRING
    },
    phone: {
      type: Sequelize.STRING,
      allowNull: true
    },
    country: {
      type: Sequelize.STRING
    },
    socialId: {
      type: Sequelize.STRING
    },
    state: {
      type: Sequelize.STRING
    },
    address: {
      type: Sequelize.STRING
    },
    userType: {
      type: Sequelize.ENUM(['sponsor', 'buyer', 'farmer', 'admin', 'super_admin']),
      defaultValue: 'sponsor'
    },
    verified: {
      allowNull: false,
      type: Sequelize.BOOLEAN,
      defaultValue: false
    },
    dateOfBirth: {
      type: Sequelize.STRING
    },
    imageUrl: {
      type: Sequelize.STRING
    },
    city: {
      type: Sequelize.STRING
    },
    accountName: {
      type: Sequelize.STRING
    },
    accountNumber: {
      type: Sequelize.STRING
    },
    bankName: {
      type: Sequelize.STRING
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE
    }
  }),
  down: (queryInterface) => queryInterface.dropTable('Users')
};
