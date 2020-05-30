import Joi from '@hapi/joi';
import { name } from '../index';

export const createFarmSchema = Joi.object({
  userId: Joi.string(),
  farmName: name('farmName').required(),
  address: Joi.string().required(),
  country: Joi.string().required(),
  farmSize: Joi.string().required(),
  description: Joi.string().required(),
  imageUrl: Joi.string().uri().required(),
  farmType: Joi.string().required(),
  farmingExperience: Joi.string().required()
});

export const editFarmSchema = Joi.object({
  farmId: Joi.string(),
  farmName: name('farmName'),
  address: Joi.string(),
  country: Joi.string(),
  farmSize: Joi.string(),
  description: Joi.string(),
  imageUrl: Joi.string().uri(),
  farmType: Joi.string(),
  farmingExperience: Joi.string()
});
