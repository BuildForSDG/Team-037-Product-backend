import Joi from '@hapi/joi';

export const productSchema = Joi.object({
  farmId: Joi.string(),
  productName: Joi.string()
    .required(),
  features: Joi.string().required(),
  category: Joi.string().required(),
  price: Joi.string().required(),
  quantity: Joi.string().required(),
  description: Joi.string().required(),
  imageUrl: Joi.string().uri().required()
});

export const editProductSchema = Joi.object({

});
