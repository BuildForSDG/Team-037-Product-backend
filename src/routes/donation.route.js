import express from 'express';
import { makeDonation } from '../controller/donation.controller';

const donationRoute = express.Router();

donationRoute.post('/webhook/MakeDonation', makeDonation);

export default donationRoute;
