import express from 'express';
import passport from 'passport';
import socialController from '../controller/google.auth.controller';
import { verifyUserTokenViaEmail } from '../controller/activation.controller';
import {
  createUser,
  logInUser,
  getASpecificUser,
  updateProfile,
  listAllFarmProduct,
  logOut
} from '../controller/auth.controller';
import { validateInput } from '../middleware/schemaValidation';
import { authenticationSchema, loginSchema, editUserProfileSchema } from '../middleware/authentication';
import { emailPhoneValidator } from '../middleware/validation/index';
import Security from '../utils/security';
import upload from '../middleware/image_upload/index';

const authRoute = express.Router();
const BASE_URL = '/auth';

authRoute.get('/user/listAllFarmProduct', listAllFarmProduct);

authRoute.post(`${BASE_URL}/createUser`, upload, validateInput(authenticationSchema), emailPhoneValidator, createUser);

authRoute.post(`${BASE_URL}/signIn`, validateInput(loginSchema), logInUser);

authRoute.get(`${BASE_URL}/verify/email`, verifyUserTokenViaEmail);

authRoute.get(`${BASE_URL}/user`, Security.verifyTokenMiddleWare, getASpecificUser);

authRoute.get('/auth/google', passport.authenticate('google', { session: false, scope: ['profile', 'email'] }));

authRoute.get('/auth/google/callback', passport.authenticate('google', { session: false }), socialController);

authRoute.patch(`${BASE_URL}/updateUser`, Security.verifyTokenMiddleWare, upload, validateInput(editUserProfileSchema), updateProfile);

authRoute.get(`${BASE_URL}/logout`, logOut);


export default authRoute;
