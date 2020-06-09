import { Op } from 'sequelize';
import validator from 'validator';
import models from '../database/models';

const { FarmProducts, FarmLand } = models;


export const findProductById = async (item) => {
  try {
    let where;
    if (validator.isUUID(item)) {
      where = {
        where: {
          id: item
        }
      };
    }
    return await FarmProducts.findOne(where);
  } catch (err) {
    return err;
  }
};
export const saveProduct = async (item) => {
  try {
    return await FarmProducts.create({ ...item });
  } catch (err) {
    return err;
  }
};

export const updateProduct = async (item, productId) => {
  try {
    const parameter = item;
    if (!validator.isUUID(productId)) {
      throw new Error('You have entered an invalid product name or does not exist');
    }
    const where = {
      where: {
        id: productId
      },
      returning: true
    };
    return await FarmProducts.update(parameter, where);
  } catch (error) {
    return error;
  }
};


/**  info: search product by farm id and return all the product information including the farm
 *  @param {string} farm Id of the farm product
 *
 * @return {*} returns promise if there is no error
 * @return {*} returns Error if there is an error
 *
 */

export const findProductByFarmId = async (farmId) => {
  try {
    const where = {
      where: {
        farmId
      },
      include: [
        {
          model: FarmLand
        }
      ]

    };
    return await FarmProducts.findAll(where);
  } catch (err) {
    return err;
  }
};


/**  info: search product by product name and return all the product information including;
 *  @param {string} productName of the farm product
 *
 * @return {*} returns promise if there is no error
 * @return {*} returns Error if there is an error
 *
 */

export const findProductByProductName = async (item) => {
  try {
    const where = {
      where: {
        productName: { [Op.iLike]: `%${item}%` }
      },
      order: [['createdAt', 'DESC']]
    };
    return await FarmProducts.findAll(where);
  } catch (err) {
    return err;
  }
};
