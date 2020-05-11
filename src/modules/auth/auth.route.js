import express from 'express';
import { createUser } from './auth.controller';
import { validateInput } from '../../middleware/schema/schemaValidation';
import { authenticationSchema } from '../../middleware/schema/authentication';
import { emailPhoneValiator } from '../../middleware/validation/index';
import imageUplaod from '../../middleware/image_upload/index';

const authRoute = express.Router();

authRoute.post('/auth/createUser', validateInput(authenticationSchema), emailPhoneValiator, imageUplaod, createUser);

export default authRoute;
