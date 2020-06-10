
module.exports = {
  up: (queryInterface, Sequelize) => Promise.all([queryInterface.addColumn('Donations', 'PaymentStatus', {
    type: Sequelize.STRING,
    allowNull: false,
    defaultValue: 'awaiting-payment'
  }),
  queryInterface.addColumn('Donations', 'paymentType', {
    type: Sequelize.ENUM(['cardpayment', 'transfer']),
    allowNull: false
  })
  ]),

  down: (queryInterface) => Promise.all([queryInterface.removeColumn('Donations', 'PaymentStatus', {

  }),
  queryInterface.removeColumn('Donations', 'paymentType', {
  })

  ])
};
