import express from 'express';
import { createUser, logInUser, getLoginUrlFromGoogle } from '../controller/auth.controller';
import { validateInput } from '../middleware/schemaValidation';
import { authenticationSchema, loginSchema } from '../middleware/authentication';
import { emailPhoneValidator } from '../middleware/validation/index';
import { verifyUserTokenViaEmail } from '../controller/activation.controller';
import imageUplaod from '../middleware/image_upload/index';

const authRoute = express.Router();
const BASE_URL = '/auth';
authRoute.post(`${BASE_URL}/createUser`, validateInput(authenticationSchema), emailPhoneValidator, imageUplaod, createUser);
authRoute.post(`${BASE_URL}/signIn`, validateInput(loginSchema), logInUser);

authRoute.get(`${BASE_URL}/verify/email`, verifyUserTokenViaEmail);

authRoute.get(`${BASE_URL}/getUrl`, getLoginUrlFromGoogle);

export default authRoute;
