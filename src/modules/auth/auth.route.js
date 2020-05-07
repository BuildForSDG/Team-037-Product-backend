import express from 'express';
import { createUser } from './auth.controller';
import { validateInput } from '../../middleware/schema/schemaValidation';
import { authenticationSchema } from '../../middleware/schema/authentication';
import { emailPhoneValiator } from '../../middleware/validation/index';

const authRoute = express.Router();

authRoute.post('/auth/createUser', validateInput(authenticationSchema), emailPhoneValiator, createUser);

export default authRoute;
