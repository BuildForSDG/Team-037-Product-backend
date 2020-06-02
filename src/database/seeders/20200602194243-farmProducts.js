
module.exports = {
  up: (queryInterface) => queryInterface.bulkInsert('farmProducts', [{
    id: '3740fba0-a51e-11ea-bb37-0242ac130002',
    farm_id: '3741010e-a51e-11ea-bb37-0242ac130002',
    productName: 'CPlantation',
    features: 'ddddhdhd',
    description: 'We deal with cassava plantation and our end products are garri, pupuru, starch, etc',
    category: 'hshssshsbhs',
    price: 'cassava',
    quantity: '2 years',
    imageUrl: 'https://image.web.png',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: '3740fe02-a51e-11ea-bb37-0242ac130002',
    farm_id: '3740fefc-a51e-11ea-bb37-0242ac130002',
    productName: 'Beans',
    features: 'ddddhdhd',
    description: 'We deal with cassava plantation and our end products are garri, pupuru, starch, etc',
    category: 'protein',
    price: 'cassava',
    quantity: '2 years',
    imageUrl: 'https://image.web.png',
    createdAt: new Date(),
    updatedAt: new Date()
  }

  ]),

  down: (queryInterface) => queryInterface.bulkDelete('farmProducts', null, {})
};
