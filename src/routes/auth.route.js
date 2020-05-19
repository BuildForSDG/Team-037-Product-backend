import express from 'express';
import {
  createUser, logInUser, getLoginUrlFromGoogle, getASpecificUser
} from '../controller/auth.controller';
import { validateInput } from '../middleware/schemaValidation';
import { authenticationSchema, loginSchema } from '../middleware/authentication';
import { emailPhoneValidator } from '../middleware/validation/index';
import Security from '../utils/security';

const authRoute = express.Router();
const BASE_URL = '/auth';
authRoute.post(`${BASE_URL}/createUser`, validateInput(authenticationSchema), emailPhoneValidator, createUser);
authRoute.post(`${BASE_URL}/signIn`, validateInput(loginSchema), logInUser);
authRoute.get(`${BASE_URL}/user`, Security.verifyTokenMiddleWare, getASpecificUser);

authRoute.get(`${BASE_URL}/getUrl`, getLoginUrlFromGoogle);

export default authRoute;
