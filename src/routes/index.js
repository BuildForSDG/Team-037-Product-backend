import express from 'express';
import authRoute from './auth.route';
import donationRoute from './donation.route';
import farmerRoute from './farmer.route';
import productRoute from './product.route';
import sponsorRoute from './sponsor.route';
import orderRoute from './buy.route';

const routes = express.Router();
routes.use(authRoute);
routes.use(farmerRoute);
routes.use(donationRoute);
routes.use(farmerRoute);
routes.use(productRoute);
routes.use(sponsorRoute, orderRoute);
routes.use(orderRoute);

export default routes;
