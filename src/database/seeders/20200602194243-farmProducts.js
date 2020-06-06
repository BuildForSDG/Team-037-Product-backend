const farmId1 = 'd54d5aaa-f843-4cb1-b725-8cf6b9ea1a39';
const farmId2 = '8bd8c0ec-3b50-4228-bb71-e617c7b8d3b5';

module.exports = {
  up: (queryInterface) => queryInterface.bulkInsert('farmProducts', [{
    id: '3740fba0-a51e-11ea-bb37-0242ac130002',
    farm_id: farmId1,
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
    farm_id: farmId2,
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
