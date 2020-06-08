export const newSponsor = {
  firstName: 'praise',
  lastName: 'samuel',
  email: 'praisesamuel@gmail.com',
  password: 'qwertyQ123@',
  address: '23 oduwaye lagos',
  phone: '05478932109',
  confirmationType: 'EMAIL',
  userType: 'sponsor',
  country: 'Nigeria'
};
export const sponsorLogin = {
  username: 'damola@gmail.com',
  password: 'password123'
};
const farmId = 'd54d5aaa-f843-4cb1-b725-8cf6b9ea1a39';
const BASE_URL = '/api/v1';
export const signUpUrlSponsor = `${BASE_URL}/auth/createUser`;
export const loginUrlSponsor = `${BASE_URL}/auth/signIn`;
export const getOneFarmUrl = `${BASE_URL}/sponsor/${farmId}/listOneFarm`;
export const getAllFarmUrl = `${BASE_URL}/sponsor/listAllFarm`;
