const userId1 = '122a0d86-8b78-4bb8-b28f-8e5f7811c456';
const userId2 = '11fb0350-5b46-4ace-9a5b-e3b788167915';
const userId3 = '7f45df6d-7003-424f-86ec-1e2b36e2fd14';
const userId4 = '184d7200-a505-11ea-bb37-0242ac130002';
const userId5 = '72f11742-a524-11ea-bb37-0242ac130002';
const userId6 = '184d7bb0-a505-11ea-bb37-0242ac130002';
const userId7 = '72f11544-a524-11ea-bb37-0242ac130002';

export const up = (queryInterface) => queryInterface.bulkInsert(
  'password_managers',
  [
    {
      id: 'd54d5aaa-f843-4cb1-b725-8cf6b9ea1a39',
      user_id: userId1,
      current_password: 'password123',
      old_password: 'password123',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: 'bd450c18-8484-4c1a-b124-384c097c2297',
      user_id: userId2,
      current_password: 'password123',
      old_password: 'password123',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: '7f45df6d-7003-424f-86ec-1e2b36e2fd14',
      user_id: userId3,
      current_password: 'password123',
      old_password: 'password123',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: '184d7a3e-a505-11ea-bb37-0242ac130002',
      user_id: userId4,
      current_password: '$2y$12$cbrjAf2ZAwfO3UKAd56dqyoacqgjH2ICYuzeujqfeGgNyHNj0r3G',
      old_password: '$2y$12$gMNKWq1MlYrLK1QdsHvF0eTmJaaaa473BOY4t8UiriOPWPH80lgdS',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: '184d7692-a505-11ea-bb37-0242ac130002',
      user_id: userId5,
      current_password: '$2y$12$cbrjAf2ZAwfO3UKAd56dqyoacqgjH2ICYuzeujqfeGgNyHNj0r',
      old_password: '$2y$12$gMNKWq1MlYrLK1QdsHvF0eTmJaaaa473BOY4t8UiriOPWPH80lgdS',
      createdAt: new Date(),
      updatedAt: new Date()

    },
    {
      id: '184d7318-a505-11ea-bb37-0242ac130002',
      user_id: userId6,
      current_password: '$2y$12$cbrjAf2ZAwfO3UKAd56dqyoacqgjH2ICYuzeujqfeGgNyHNj0r3G',
      old_password: '$2y$12$gMNKWq1MlYrLK1QdsHvF0eTmJaaaa473BOY4t8UiriOPWPH80lgdS',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: 'a0c8cfbe-a526-11ea-bb37-0242ac130002',
      user_id: userId7,
      current_password: '$2y$12$cbrjAf2ZAwfO3UKAd56dqyoacqgjH2ICYuzeujqfeGgNyHNj0r',
      old_password: '$2y$12$gMNKWq1MlYrLK1QdsHvF0eTmJaaaa473BOY4t8UiriOPWPH80lgdS',
      createdAt: new Date(),
      updatedAt: new Date()

    }
  ],
  {}
);

export const down = (queryInterface) => queryInterface.bulkDelete('password_managers', null, {});
