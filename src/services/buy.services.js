import models from '../database/models';


const { orderHistory, CheckoutList } = models;


export const orderProduct = async (items) => {
  try {
    return await orderHistory.create(items);
  } catch (err) {
    return err;
  }
};

export const updateOrder = async (data, transactionId) => {
  try {
    return await orderHistory.update(data, {
      where: { transactionId },
      returning: true
    });
  } catch (err) {
    return err;
  }
};


export const newCheckoutList = async (data, transactionId) => {
  try {
    return await CheckoutList.update(data, {
      where: { transactionId },
      returning: true
    });
  } catch (err) {
    return err;
  }
};
