import models from '../database/models';


const { farmProducts } = models;
export const saveProduct = async (item) => {
  try {
    return await farmProducts.create({ ...item });
  } catch (err) {
    return err;
  }
};

export const updateProduct = async () => {};
