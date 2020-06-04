export const newFarmer = {
  firstName: 'bola',
  lastName: 'segun',
  email: 'gabtee@gmail.com',
  password: 'qwertyQ123@',
  address: '23 oduwaye lagos',
  phone: '014010401',
  confirmationType: 'EMAIL',
	userType: 'farmer',
	country: 'Nigeria'
};

export const createFarm = {
  farmName: 'CPlantation',
  farmSize: '2 hecter',
  description: 'We deal with cassava plantation and our end products are garri, pupuru, starch, etc',
  imageUrl: 'https://image.get.com',
  farmType: 'cassava',
	farmingExperience: '2 years',
  address: '23 weieie',
  country: 'Nigeria'
};


export const updateFarm = {
  farmName: 'IyaElewedu',
  farmSize: '1 hecter',
  description: 'We deal with cassava plantation and our end products are garri, pupuru, starch, etc',
  imageUrl: 'https://image.get.com',
  farmType: 'cassava',
  farmingExperience: '5 years',
  address: '25 weieie',
  country: 'Nigeria'
};

export const farmerLogin = {
  username: 'dreezyy@hotmail.com',
  password: 'qwerte@123wwd'
};
const BASE_URL = '/api/v1';
export const signUpURl = `${BASE_URL}/auth/createUser`;

export const farmURL = `${BASE_URL}/farm/createFarm`;

export const loginURL = `${BASE_URL}/auth/signIn`;

export const getUrl = `${BASE_URL}/farm/getOneFarm`;
