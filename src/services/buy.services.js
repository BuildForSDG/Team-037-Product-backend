import { Op } from 'sequelize';
import models from '../database/models';

const {
  OrderHistory, CheckoutList, FarmLand, User, FarmProducts
} = models;


/** User can checkout after they have ordered for farm product;
 *  It takes in order detail
 * @param {product details}
 * @return {promise} if successful,
 * it returns promise object ans save product order details in to the database
 *
 *
 *
 * @param {authorization_url, access_code, reference} res: object{}
 */
export const orderProduct = async (items) => {
  try {
    return await OrderHistory.create(items);
  } catch (err) {
    return err;
  }
};


/** Updates payment status id transaction is successful
 * @param {id} transactionId of the order made
 *
 * @return {promise} if transaction status is true and update payment status to paid
 *
 * @
 */
export const updateOrder = async (data, transactionId) => {
  try {
    const updatedData = await OrderHistory.update(data, {
      where: { transactionId },
      returning: true
    });
    return updatedData;
  } catch (err) {
    return err;
  }
};

export const newCheckoutList = async (data, orderId, userId) => {
  try {
    return await CheckoutList.create({ ...data, user_id: userId, order_id: orderId });
  } catch (err) {
    return err;
  }
};

export const usersGetAllOrderInformation = async (userId, type) => {
  try {
    let where;
    where = {
      where: {
        [Op.or]: [{ user_id: userId }, { vendor_id: userId }, { transactionId: userId }]
      },
      order: [['createdAt', 'DESC']],
      include: [
        {
          model: FarmLand
        },
        {
          model: User
        },
        {
          model: FarmProducts
        }
      ]
    };

    if (type === 'farmer') {
      where = {
        where: {
          [Op.or]: [{ user_id: userId }, { vendor_id: userId }, { transactionId: userId }],
          [Op.not]: [{ paymentStatus: 'awaiting-payment' }]
        },
        order: [['createdAt', 'DESC']],
        include: [
          {
            model: FarmLand
          },
          {
            model: User
          },
          {
            model: FarmProducts
          }
        ]
      };
    }

    if (type === 'user') {
      where = {
        order: [['createdAt', 'DESC']],
        include: [
          {
            model: FarmLand
          },
          {
            model: User,
            where: {
              userType: 'user'
            }
          },
          {
            model: FarmProducts
          }
        ]
      };
    }

    if (type === 'updatePaymentStatus') {
      where = {
        where: {
          transactionId: userId
        },
        // order: [['createdAt', 'DESC']],
        include: [
          {
            model: FarmLand
          },
          {
            model: User
          },
          {
            model: FarmProducts
          }
        ]
      };
    }

    return await OrderHistory.findAll(where);
  } catch (error) {
    return error;
  }
};
