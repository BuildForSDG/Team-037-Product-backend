/* eslint-disable no-tabs */
import express from 'express';
import passport from 'passport';
import socialController from '../controller/google.auth.controller';
import {
  createUser, logInUser, getASpecificUser
} from '../controller/auth.controller';
import { validateInput } from '../middleware/schemaValidation';
import { authenticationSchema, loginSchema } from '../middleware/authentication';
import { emailPhoneValidator } from '../middleware/validation/index';
import Security from '../utils/security';

const authRoute = express.Router();
const BASE_URL = '/auth';

// /**
//  * @swagger
//  *
//  * /auth/creatUser:
//  *   post:
//  *     tags:
//  *       - User Register
//  *     description: User can create account.
//  *     produces:
//  *       - application/json
//  *     parameters:
//  *       - name: firstName
//  *         in: formData
//  *         required: true
//  *         type: string
//  *       - name: lastName
//  *         in: formData
//  *         required: true
//  *         type: string
//  *       - name: email
//  *         in: formData
//  *         required: true
//  *         type: string
//  *       - name: phone
//  *         in: formData
//  *         required: true
//  *         type: string
//  *       - name: password
//  *         description: User's password.
//  *         in: formData
//  *         required: true
//  *         type: string
//  *       - name: imageUrl
//  *         description: user profile image
//  *         in: formData
//  *         required: false
//  *         type: string
//  *       - name: state
//  *         description: State where the users is from.
//  *         in: formData
//  *         required: true
//  *         type: string
//  *       - name: confirmationType
//  *         in: formData
//  *         required: true
//  *         type: string
//  *       - name: address
//  *         in: formData
//  *         required: true
//  *         type: string
//  *     responses:
//  *       201:
//  *         description: Account created successfully
//  *       409:
//  *         description: User already exists
//  *       422:
//  *         description: Validation Error
//  *       500:
//  *         description: Server error
//  */
authRoute.post(`${BASE_URL}/createUser`, validateInput(authenticationSchema), emailPhoneValidator, createUser);


// /**
//  * @swagger
//  *
//  * /auth/signIn:
//  *   post:
//  *     tags:
//  *       - All Users Login
//  *     description: Login to account, for customer, vendor, and pro
//  *     produces:
//  *       - application/json
//  *     parameters:
//  *       - name: username
//  *         description: Email .
//  *         in: formData
//  *         required: true
//  *         type: string
//  *       - name: password
//  *         description: User's password.
//  *         in: formData
//  *         required: true
//  *         type: string
//  *     responses:
//  *       200:
//  *         description: Logged in successfully
//  *       404:
//  *         description: User does not exists
//  *       422:
//  *         description: Validation Error
//  *       500:
//  *         description: Server error
//  */
authRoute.post(`${BASE_URL}/signIn`, validateInput(loginSchema), logInUser);

authRoute.get(`${BASE_URL}/user`, Security.verifyTokenMiddleWare, getASpecificUser);

// authRoute.get(`${BASE_URL}/getUrl`, getLoginUrlFromGoogle);

authRoute.get('/auth/google', passport.authenticate('google', { session: false, scope: ['profile', 'email'] }));
authRoute.get('/auth/google/callback', passport.authenticate('google', { session: false }), socialController);

export default authRoute;
