import Joi from '@hapi/joi';
import {
  password, name, list, email, phone, dateOfBirth
} from './index';

export const authenticationSchema = Joi.object({
  firstName: name('firstName').required(),
  lastName: name('lastName').required(),
  email: email.required(),
  password,
  phone,
  userType: list(['farmer', 'sponsor', 'buyer', 'admin', 'super_admin'], 'userType'),
  country: Joi.string(),
  imageUrl: Joi.string().uri(),
  state: Joi.string(),
  address: Joi.string(),
  city: Joi.string(),
  dateOfBirth,
  confirmationType: list(['SMS', 'EMAIL'], 'confirmationType').required(),
  accountName: Joi.string(),
  accountNumber: Joi.string(),
  bankName: Joi.string()

});

export const editUserProfileSchema = Joi.object({
  firstName: name('firstName'),
  lastName: name('lastName'),
  phone,
  country: Joi.string(),
  imageUrl: Joi.string(),
  state: Joi.string(),
  address: Joi.string(),
  city: Joi.string(),
  dateOfBirth: Joi.string(),
  accountName: Joi.string(),
  accountNumber: Joi.string(),
  bankName: Joi.string(),
  userType: list(['farmer', 'sponsor', 'buyer', 'admin', 'super_admin'], 'userType')
});

export const loginSchema = Joi.object({
  username: email.required(),
  password
});
