import express from 'express';
import authRoute from './auth.route';
import donationRoute from './donation.route';

const routes = express.Router();
routes.use('/', authRoute, donationRoute);

export default routes;
