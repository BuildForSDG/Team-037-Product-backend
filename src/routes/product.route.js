import express from 'express';
import {
  createProduct, editProduct, fetchProductByFarm, fetchProductByProductName
} from '../controller/product.controller';
import Security from '../utils/security';
import { validateInput } from '../middleware/schemaValidation';
import { editProductSchema, productSchema } from '../middleware/validation/product';
import upload from '../middleware/image_upload/index';

const productRoute = express.Router();
const BASE_URL = '/product';

productRoute.post(`${BASE_URL}/:farmId/createFarmProduct`, Security.verifyTokenMiddleWare, upload, validateInput(productSchema), createProduct);


productRoute.patch(`${BASE_URL}/:productId/editProduct`, Security.verifyTokenMiddleWare, upload, validateInput(editProductSchema), editProduct);


productRoute.get(`${BASE_URL}/searchProduct`, fetchProductByProductName);


productRoute.get(`${BASE_URL}/:farmId/fetchProducts`, fetchProductByFarm);

export default productRoute;
