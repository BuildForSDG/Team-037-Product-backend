import express from 'express';
import { createUser } from './auth.controller';
import { logInUser, getLoginUrlFromGoogle } from './signin_user';

import { validateInput } from '../../middleware/schema/schemaValidation';
import { authenticationSchema, loginSchema } from '../../middleware/schema/authentication';
import { emailPhoneValiator } from '../../middleware/validation/index';

const authRoute = express.Router();

authRoute.post('/auth/createUser', validateInput(authenticationSchema), emailPhoneValiator, createUser);
authRoute.post('/auth/signIn', validateInput(loginSchema), logInUser);
authRoute.get('/auth/getUrl', getLoginUrlFromGoogle);


export default authRoute;
