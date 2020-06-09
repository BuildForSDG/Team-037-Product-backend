import shortId from 'shortid';
import validator from 'validator';
import { initializePayment, verifyTransaction } from '../services/payment';
import {
  orderProduct, updateOrder, newCheckoutList
} from '../services/buy.services';
import { findProductById } from '../services/product';
import { findFarm } from '../services/farmer_land.services';
import {
  NO_FARM, NO_PRODUCT, SERVER_ERROR_MESSAGE, PAID, CHECKLIST
} from '../utils/constant';
import 'dotenv/config';


export const checkoutOrder = async (req, res) => {
  try {
    const transactionId = shortId.generate();
    const { id: userId, email } = req.token;
    const {
      products: items,
      amount,
      deliveryFee,
      location,
      deliveryInstruction,
      street,
      apartment
    } = req.body;

    const totalPayment = parseFloat(amount) + parseFloat(deliveryFee);
    let orderId;
    let orderData;
    for (let i = 0; i < items.length; i += 1) {
      const {
        farmId, productId, farmerId, quantity
      } = items[i];

      // eslint-disable-next-line no-await-in-loop
      orderData = await orderProduct({
        userId, transactionId, paymentType: 'cardpayment', amount, deliveryFee, location, deliveryInstruction, street, apartment, totalPayment, productId, farmerId, quantity, farmId
      });
      orderId = orderData.id;
    }

    for (let i = 0; i < items.length; i += 1) {
      const { productId, farmId } = items[i];
      if (!validator.isUUID(productId)) {
        res.status(400).json({ status: 404, message: `productId of index ${i} must be a valid uuid ` });
      }
      if (!validator.isUUID(farmId)) {
        res.status(400).json({ status: 404, message: `farmId of index ${i} must be a valid uuid ` });
      }

      // eslint-disable-next-line no-await-in-loop
      const product = await findProductById(productId);
      if (!product || product === undefined) {
        return res.status(404).json({ status: 404, message: NO_PRODUCT });
      }
      // eslint-disable-next-line no-await-in-loop
      const farm = await findFarm(farmId);
      if (!farm || farm === undefined) {
        return res.status(404).json({ status: 404, message: NO_FARM });
      }
    }

    const products = { ...items, orderId, userId };

    const { 0: output } = products;
    const item = { ...output, orderId, userId };
    await newCheckoutList(item);

    const data = {
      email,
      amount: totalPayment * 100,
      reference: transactionId,
      currency: 'NGN'
    };

    const result = await initializePayment(data);

    return res.status(201).json({ status: 201, message: CHECKLIST, data: result });
  } catch (err) {
    return res.status(500).json({ status: 500, message: SERVER_ERROR_MESSAGE });
  }
};


const getEnv = process.env;
export const updateProductOrder = async (req, res) => {
  try {
    const [, , transactionId] = req.originalUrl.split('=');
    // get orders with that transactionID from order history
    // const orders = await usersGetAllOrderInformation(transactionId, 'updatePaymentStatus');

    if (transactionId) {
      const transaction = await verifyTransaction(transactionId);

      if (transaction.status) {
        const update = await updateOrder({ paymentStatus: PAID }, transactionId);
        res.status(200).send(update);
        return res.redirect(301, getEnv.PAYMENT_SUCCESS_URL);
      }
    }
    return res.redirect(301, getEnv.PAYMENT_FAILURE_URL);
  } catch (err) {
    return res.redirect(301, getEnv.PAYMENT_FAILURE_URL);
  }
};
