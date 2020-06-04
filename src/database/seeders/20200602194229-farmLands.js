module.exports = {
  up: (queryInterface) => queryInterface.bulkInsert('farmLands', [{
    id: '3741010e-a51e-11ea-bb37-0242ac130002',
    user_id: '72f11544-a524-11ea-bb37-0242ac130002',
    farmName: 'IyaElewedu',
    farm_size: '1 hecter',
    description: 'We deal with cassava plantation and our end products are garri, pupuru, starch, etc',
    imageUrl: 'https://image.get.com',
    farmType: 'cassava',
    farmingExperience: '5 years',
    address: '25 weieie',
    country: 'Nigeria',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: '3740fefc-a51e-11ea-bb37-0242ac130002',
    user_id: '72f11544-a524-11ea-bb37-0242ac130002',
    farmName: 'Oko ege',
    farm_size: '2 hecter',
    description: 'We deal with cassava plantation and our end products are garri, pupuru, starch, etc',
    imageUrl: 'https://image.get.com',
    farmType: 'cassava',
    farmingExperience: '3 years',
    address: '25 weieie',
    country: 'Nigeria',
    createdAt: new Date(),
    updatedAt: new Date()
  }
  ]),
  down: (queryInterface) => queryInterface.bulkDelete('farmLands', null, {})
};
