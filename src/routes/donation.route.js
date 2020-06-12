import express from 'express';
import { makeDonation, updateDonation, getSpecificDonation, fetchAllDonations } from '../controller/donation.controller';
import donationSchema from '../middleware/validation/donation';
import { validateInput } from '../middleware/schemaValidation';

const donationRoute = express.Router();

const BASE_URL = '/donation';
donationRoute.post(`${BASE_URL}/donate`, validateInput(donationSchema), makeDonation);

// This route is called automatically to update payment status
donationRoute.get(`${BASE_URL}/confirm`, updateDonation);

donationRoute.get(`${BASE_URL}/:donationId/find-donation`, getSpecificDonation);

donationRoute.get(`${BASE_URL}/findAll`, fetchAllDonations);

export default donationRoute;
