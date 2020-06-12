import Joi from '@hapi/joi';
import { name, email, phone } from '../index';

const donationSchema = Joi.object({
  firstName: name('firstName').required(),
  lastName: name('lastName').required(),
  email: email.required(),
  phone,
  amount: Joi.number().required(),
  description: Joi.string().required()
});


export default donationSchema;
