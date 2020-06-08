import shortId from 'shortid';
import validator from 'validator';
import { initializePayment } from '../services/payment';
import { orderProduct, updateOrder } from '../services/buy.services';
import { findP } from '../services/product';
import { } from '../services/farmer_land.services';

export const checkoutOrder = async (req, res) => {
  try {
    const transactionId = shortId.generate();
    console.log('>>>>id', transactionId);
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
    for (let i = 0; i <= items.length; i += 1) {
      const {
        productId, farmerId, quantity, farmId
      } = items[i];

      orderData = orderProduct({
        userId, transactionId, amount, deliveryFee, location, deliveryInstruction, street, apartment, totalPayment, productId, farmerId, quantity, farmId
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
			
			const 
    }
  } catch (err) {
    return err;
  }
};

export const updateProductOrder = async () => {

};
