import express from 'express';
import authRoute from '../modules/auth/auth.route';

const routes = express.Router();
routes.use(authRoute);

export default routes;
