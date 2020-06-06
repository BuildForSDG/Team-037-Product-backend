const userId1 = '122a0d86-8b78-4bb8-b28f-8e5f7811c456';
const userId2 = '11fb0350-5b46-4ace-9a5b-e3b788167915';
const userId5 = '72f11544-a524-11ea-bb37-0242ac130002';
const userId7 = '72f11742-a524-11ea-bb37-0242ac130002';

export const up = (queryInterface) => queryInterface.bulkInsert(
  'farmLands',
  [
    {
      id: 'd54d5aaa-f843-4cb1-b725-8cf6b9ea1a39',
      user_id: userId1,
      farmName: 'seeFarm',
      farm_size: '2 hectare',
      description: 'We deal with cassava plantation and our end products are garri, pupuru, starch, etc',
      imageUrl: 'https://image.get.com',
      farmType: 'cassava',
      farmingExperience: '4 years',
      address: '25 love street',
      country: 'Nigeria',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: '8bd8c0ec-3b50-4228-bb71-e617c7b8d3b5',
      user_id: userId1,
      farmName: 'seeFarm',
      farm_size: '2 hectare',
      description: 'We deal with cassava plantation and our end products are garri, pupuru, starch, etc',
      imageUrl: 'https://image.get.com',
      farmType: 'cassava',
      farmingExperience: '4 years',
      address: '25 love street',
      country: 'Nigeria',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: '8487ef08-2ac2-4387-8bd6-738b12c75dff',
      user_id: userId2,
      farmName: 'seeFarm',
      farm_size: '2 hectare',
      description: 'We deal with cassava plantation and our end products are garri, pupuru, starch, etc',
      imageUrl: 'https://image.get.com',
      farmType: 'cassava',
      farmingExperience: '4 years',
      address: '25 love street',
      country: 'Nigeria',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: '3741010e-a51e-11ea-bb37-0242ac130002',
      user_id: userId5,
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
      user_id: userId7,
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
  ],
  {}
);

export const down = (queryInterface) => queryInterface.bulkDelete('farmLands', null, {});
