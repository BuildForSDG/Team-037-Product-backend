import Joi from '@hapi/joi';

export const password = Joi.string()
  .regex(/^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})/)
  .required()
  .messages({
    'string.pattern.base':
'Password must contain be eight character longer and must contain lower case, uppercase and numbers'
  });

export const name = (fieldName) => Joi.string()
  .regex(/^[A-Za-z]+$/)
  .messages({
    'string.pattern.base': `${fieldName} can not contain a numnber`,
    'string.empty': `${fieldName} can not be empty field`,
    'any.required': `${fieldName} can not be empty`

  });

export const phone = Joi.number()
  .messages({
    'string.patterns.base': 'Your phone number is incorrect',
    'string.empty': 'Phone is not allowed to be empty'
  });

export const list = (fields, fieldType) => Joi.string()
  .valid(...fields)
  .error(new Error(`specify a valid ${fieldType}`));

export const email = Joi.string()
  .email()
  .messages({
    'string.pattern.base': 'email can not be empty'
  });

export const dateOfBirth = Joi.string()
  .messages({
    'string.pattern.base': ' dateOfBirth must be in in date format',
    'string.empty': 'dateOfBirth is not allowed to be empty'

  });
