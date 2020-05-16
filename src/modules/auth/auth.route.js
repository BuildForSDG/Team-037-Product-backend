import express from 'express';
import { createUser, updateProfile } from './auth.controller';
import { validateInput } from '../../middleware/schemaValidation';
import { authenticationSchema } from '../../middleware/authentication';
import { emailPhoneValidator } from '../../middleware/validation/index';

const authRoute = express.Router();

authRoute.post('/auth/createUser', validateInput(authenticationSchema), emailPhoneValidator, createUser);
authRoute.post('/auth/:id/updateUser', validateInput(authenticationSchema), updateProfile);

export default authRoute;
