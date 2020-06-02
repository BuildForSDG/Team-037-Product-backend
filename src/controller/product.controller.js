import { saveProduct } from '../services/product';
import {
  SERVER_ERROR_MESSAGE, NO_FARM, ONLY_FARMER, NOT_ACTIVATED, PRODUCT_SUCCESS
} from '../utils/constant';
import { findUser } from '../services/users.services';
import { findFarm } from '../services/farmer_land.services';

export const createProduct = async (req, res) => {
  try {
    const { id: farmerId } = req.token.payload;
    const { farmId } = req.params;
    const farmer = await findUser(farmerId);
    if (farmer.userType !== 'farmer') {
      return res.status(401).json({ status: 401, message: ONLY_FARMER });
    }

    if (farmer.verified === false) {
      return res.status(401).json({ status: 401, message: NOT_ACTIVATED });
    }
    const find = await findFarm(farmId);
    if (!find && find === undefined) {
      return res.status(404).json({ status: 404, message: NO_FARM });
    }
    const product = await saveProduct({ ...req.body, farmerId });

    return res.status(201).json({ status: 201, message: PRODUCT_SUCCESS, data: product });
  } catch (error) {
    return res.status(500).json({ status: 500, message: SERVER_ERROR_MESSAGE });
  }
};
export const editProduct = async () => { };
