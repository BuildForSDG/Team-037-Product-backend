import express from 'express';
import { createUser } from './auth.controller';
import { makeDonation } from './donation.controller';
import { validateInput } from '../../middleware/schema/schemaValidation';
import { authenticationSchema } from '../../middleware/schema/authentication';
import { emailPhoneValiator } from '../../middleware/validation/index';

const authRoute = express.Router();

authRoute.post('/auth/createUser', validateInput(authenticationSchema), emailPhoneValiator, createUser);
// supplied as WEBHOOK URL on paystack dashboard
authRoute.post('/webhook/makeDonation', makeDonation);

export default authRoute;
