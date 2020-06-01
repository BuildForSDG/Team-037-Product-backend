import express from 'express';
import authRoute from './auth.route';
import donationRoute from './donation.route';
import farmerRoute from './farmer.route';

const routes = express.Router();
routes.use('/', authRoute, donationRoute, farmerRoute);

export default routes;
