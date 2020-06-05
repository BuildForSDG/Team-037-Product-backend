export const up = (queryInterface) => queryInterface.bulkInsert(
  'Users',
  [
    {
      id: '122a0d86-8b78-4bb8-b28f-8e5f7811c456',
      firstName: 'eden',
      lastName: 'favour',
      email: 'kingsley@gmail.com',
      verified: true,
      address: '23 mango lagos',
      phone: '06063211323',
      userType: 'farmer',
      country: 'Nigeria',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: '11fb0350-5b46-4ace-9a5b-e3b788167915',
      firstName: 'daniel',
      lastName: 'matthew',
      email: 'victor@gmail.com',
      verified: true,
      address: '23 divine lagos',
      phone: '010635116454',
      userType: 'farmer',
      country: 'Nigeria',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: '7f45df6d-7003-424f-86ec-1e2b36e2fd14',
      firstName: 'damola',
      lastName: 'matthew',
      email: 'damola@gmail.com',
      verified: true,
      address: '23 divine lagos',
      phone: '01020143778',
      userType: 'sponsor',
      country: 'Nigeria',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: '72f11544-a524-11ea-bb37-0242ac130002',
      firstName: 'bola',
      lastName: 'segun',
      email: 'dreezyy@hotmail.com',
      address: '23 oduwaye lagos',
      phone: '0344652114',
      verified: true,
      country: 'Nigeria',
      userType: 'farmer',
      createdAt: new Date(),
      updatedAt: new Date()

    },
    {
      id: '184d7bb0-a505-11ea-bb37-0242ac130002',
      firstName: 'john',
      lastName: 'Doe',
      email: 'brymezyy@hotmail.com',
      address: 'benson 23 street',
      phone: '07064054254',
      verified: true,
      country: 'Nigeria',
      userType: 'sponsor',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: '72f11742-a524-11ea-bb37-0242ac130002',
      firstName: 'Ben',
      lastName: 'Doe',
      email: 'bencarsonyy@gmail.com',
      address: 'benson 23 street',
      phone: '070647054254',
      country: 'Nigeria',
      userType: 'buyer',
      verified: 'false',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: '184d7200-a505-11ea-bb37-0242ac130002',
      firstName: 'george',
      lastName: 'Doe',
      email: 'livingstone@gmail.com',
      address: 'benson 23 street',
      phone: '0706408054254',
      verified: false,
      country: 'Nigeria',
      userType: 'admin',
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ],
  {}
);

export const down = (queryInterface) => queryInterface.bulkDelete('Users', null, {});
