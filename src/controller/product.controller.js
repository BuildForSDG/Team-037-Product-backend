import {
  saveProduct, updateProduct, findProductById, findProductByFarmId, findProductByProductName
} from '../services/product';
import {
  SERVER_ERROR_MESSAGE, NO_FARM,
  ONLY_FARMER, NOT_ACTIVATED,
  PRODUCT_SUCCESS, UPDATE_PRODUCT,
  NO_PRODUCT, FIND_PRODUCT, NO_FARM_PRODUCT
} from '../utils/constant';
import { findUser } from '../services/users.services';
import { findFarm } from '../services/farmer_land.services';

export const createProduct = async (req, res) => {
  try {
    const { id: farmerId } = req.token;
    const { farmId } = req.params;
    const farmer = await findUser(farmerId);
    if (farmer.userType !== 'farmer') {
      return res.status(401).json({
        status: 401,
        message: ONLY_FARMER
      });
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
export const editProduct = async (req, res) => {
  try {
    const { id: farmerId } = req.token;
    const { productId } = req.params;

    const farmer = await findUser(farmerId);

    if (farmer.userType !== 'farmer') {
      return res.status(401).json({
        status: 401,
        message: ONLY_FARMER
      });
    }

    const product = await findProductById(productId);
    const farm = await findFarm(product.farmId);

    if (!farm || farm === undefined) {
      return res.status(404).json({
        status: 404,
        message: NO_FARM
      });
    }

    if (!product || product === undefined) {
      return res.status(404).json({
        status: 404,
        message: NO_PRODUCT
      });
    }
    const update = await updateProduct(req.body, productId);
    return res.status(200).json({ status: 200, message: UPDATE_PRODUCT, data: update });
  } catch (err) {
    return res.status(500).json({ status: 500, message: SERVER_ERROR_MESSAGE });
  }
};


export const getSingleProduct = async (req, res) => {
  try {
    const { productId } = req.params;
    const find = await findProductById(productId);
    if (!find || find === undefined) {
      return res.status(404).json({
        status: 404,
        message: NO_PRODUCT
      });
    } return res.status(200).json({
      status: 200,
      message: FIND_PRODUCT,
      data: find
    });
  } catch (err) {
    return res.status(500).json({
      status: 500,
      message: SERVER_ERROR_MESSAGE
    });
  }
};

export const fetchProductByFarm = async (req, res) => {
  try {
    const { farmId } = req.params;
    const products = await findProductByFarmId(farmId);

    if (!products || products === undefined) {
      return res.status(404).json({
        status: 404,
        message: NO_FARM
      });
    }
    if (products.length === 0) {
      return res.status(404).json({
        status: 404,
        message: NO_FARM_PRODUCT
      });
    }
    return res.status(200).json({
      status: 200,
      message: FIND_PRODUCT,
      data: products
    });
  } catch (err) {
    return res.status(500).json({ status: 500, message: SERVER_ERROR_MESSAGE });
  }
};


export const fetchProductByProductName = async (req, res) => {
  try {
    const { productName } = req.body;
    const products = await findProductByProductName(productName);

    if (products.length === 0) {
      return res.status(404).json({ status: 404, message: NO_FARM_PRODUCT });
    }

    return res.status(200).json({
      status: 200,
      message: FIND_PRODUCT,
      data: products
    });
  } catch (err) {
    return res.status(500).json({
      status: 500,
      message: SERVER_ERROR_MESSAGE
    });
  }
};
