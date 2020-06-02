import express from 'express';
import { createFarmLand, updateFarmInformation, getFarm } from '../controller/farmer.controller';
import Security from '../utils/security';
import { validateInput } from '../middleware/schemaValidation';
import upload from '../middleware/image_upload/index';

import { createFarmSchema, editFarmSchema } from '../middleware/validation/farm';

const BASE_URL = '/farm';
const farmerRoute = express.Router();

// CREATE FARM
farmerRoute.post(`${BASE_URL}/createFarm`, Security.verifyTokenMiddleWare, validateInput(createFarmSchema), upload, createFarmLand);

// UPDATE FARM
farmerRoute.patch(`${BASE_URL}/:farmId/editFarm`, Security.verifyTokenMiddleWare, upload, validateInput(editFarmSchema), updateFarmInformation);

// RETRIEVE A SINGLE FARM
farmerRoute.get(`${BASE_URL}/:farmId/getOneFarm`, getFarm);
export default farmerRoute;
