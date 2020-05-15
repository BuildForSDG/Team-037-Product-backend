import Joi from '@hapi/joi';
import {
  password, name, list, email, phone, dateOfBirth
} from './index';

export const authenticationSchema = Joi.object({
  firstName: name('firstName').required(),
  lastName: name('lastName').required(),
  email: email.required(),
  password,
  phone: phone.required(),
  type: list(['farmer', 'sponsor', 'user', 'admin', 'super_admin']),
  country: Joi.string(),
  imageUrl: Joi.string().uri(),
  state: Joi.string(),
  address: Joi.string().required(),
  city: Joi.string(),
  dateOfBirth
});

export const editUserProfile = Joi.object({});

export const loginSchema = Joi.object({
  username: email.required(),
  password
});
