import express from 'express';
import { createProduct } from '../controller/product.controller';
import Security from '../utils/security';
import { validateInput } from '../middleware/schemaValidation';
import { productSchema } from '../middleware/validation/product';
import upload from '../middleware/image_upload/index';

const productRoute = express.Router();
const BASE_URL = '/product';

productRoute.post(`${BASE_URL}/:farmId/createFarmProduct`, Security.verifyTokenMiddleWare, upload, validateInput(productSchema), createProduct);

export default productRoute;
