
export const newUser = {
  firstName: 'bola',
  lastName: 'segun',
  email: 'abteezy@gmail.com',
  password: 'qwertyQ123@',
  address: '23 oduwaye lagos',
  phone: '0344652114',
  confirmationType: 'EMAIL',
  country: 'Nigeria'

};

export const emptyName = {
  firstName: '',
  lastName: 'segun',
  email: 'trwuup8383ed14@gmil.com',
  password: 'qwertyQ123@',
  address: '23 oduwaye lagos',
  phone: '0903456789'
};


export const emptyPhone = {
  firstName: 'taiye',
  lastName: 'segun',
  email: 'trwuup8383ed14@gmil.com',
  password: 'qwertyQ123@',
  address: '23 oduwaye lagos',
  phone: ''
};

export const conflict = {
  firstName: 'bola',
  lastName: 'segun',
  email: 'trwuup8383ed14@gmil.com',
  password: 'qwertyQ123@',
  address: '23 oduwaye lagos',
  phone: '0344652114'
};

export const loginUser = {
  username: 'abteezy@gmail.com',
  password: 'qwertyQ123@'
};

export const wrongLoginUser = {
  username: 'gabteezy@gmail.com',
  password: 'qwertyQ123'
};
export const baseUrl = '/api/v1/auth/createUser';
export const baseUrlLogin = '/api/v1/auth/signIn';
