
module.exports = {
  up: (queryInterface) => {
    const user = queryInterface.bulkInsert('Users',
      [{
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
      {});
    const password = queryInterface.bulkInsert('password_managers', [
      {
        id: '184d7a3e-a505-11ea-bb37-0242ac130002',
        user_id: '184d7200-a505-11ea-bb37-0242ac130002',
        current_password: '$2y$12$cbrjAf2ZAwfO3UKAd56dqyoacqgjH2ICYuzeujqfeGgNyHNj0r3G',
        old_password: '$2y$12$gMNKWq1MlYrLK1QdsHvF0eTmJaaaa473BOY4t8UiriOPWPH80lgdS',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: '184d7692-a505-11ea-bb37-0242ac130002',
        user_id: '72f11742-a524-11ea-bb37-0242ac130002',
        current_password: '$2y$12$cbrjAf2ZAwfO3UKAd56dqyoacqgjH2ICYuzeujqfeGgNyHNj0r',
        old_password: '$2y$12$gMNKWq1MlYrLK1QdsHvF0eTmJaaaa473BOY4t8UiriOPWPH80lgdS',
        createdAt: new Date(),
        updatedAt: new Date()

      },
      {
        id: '184d7318-a505-11ea-bb37-0242ac130002',
        user_id: '184d7bb0-a505-11ea-bb37-0242ac130002',
        current_password: '$2y$12$cbrjAf2ZAwfO3UKAd56dqyoacqgjH2ICYuzeujqfeGgNyHNj0r3G',
        old_password: '$2y$12$gMNKWq1MlYrLK1QdsHvF0eTmJaaaa473BOY4t8UiriOPWPH80lgdS',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 'a0c8cfbe-a526-11ea-bb37-0242ac130002',
        user_id: '72f11544-a524-11ea-bb37-0242ac130002',
        current_password: '$2y$12$cbrjAf2ZAwfO3UKAd56dqyoacqgjH2ICYuzeujqfeGgNyHNj0r',
        old_password: '$2y$12$gMNKWq1MlYrLK1QdsHvF0eTmJaaaa473BOY4t8UiriOPWPH80lgdS',
        createdAt: new Date(),
        updatedAt: new Date()

      }
    ]);
    return Promise.all([user, password]);
  },
  down: (queryInterface) => Promise.all([queryInterface.bulkDelete('Users', null, {}), queryInterface.bulkDelete('password_managers', null, {})
  ])
};
