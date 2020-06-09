import axios from 'axios';

const getEnv = process.env;
const headers = {
  Authorization: `Bearer ${getEnv.PAYSTACK_SECRET}`,
  'Content-Type': 'application/json'
};

const url = 'https://api.paystack.co/';

export const initializePayment = async (data) => {
  try {
    const { data: response } = await axios({
      method: 'post',
      url: `${url}transaction/initialize`,
      data: {
        ...data,
        callback_url: `${getEnv.SERVER_URL}/api/v1/buy/confirm`,
        metadata: {
          cancel_action: `${getEnv.PAYMENT_CLOSE_URL}`
        }
      },
      headers
    });
    const { data: result } = response;
    return result;
  } catch (error) {
    return error;
  }
};

export const verifyTransaction = async (id) => {
  try {
    const { data } = await axios({
      method: 'get',
      url: `${url}/transaction/verify/${id}`,
      headers
    });
    return data;
  } catch (err) {
    return err;
  }
};
