import express from 'express';
import { checkoutOrder, updateProductOrder } from '../controller/buy.controller';
import Security from '../utils/security';
import { validateInput } from '../middleware/schemaValidation';
import { checkoutList } from '../middleware/validation/product';

const BASE_URL = '/buy';
const orderRouter = express.Router();
orderRouter.post(`${BASE_URL}/checkout`, Security.verifyTokenMiddleWare, validateInput(checkoutList), checkoutOrder);

// This endpoint is called automatically if payment to confirm payment;
orderRouter.get(`${BASE_URL}/confirm`, updateProductOrder);

export default orderRouter;
