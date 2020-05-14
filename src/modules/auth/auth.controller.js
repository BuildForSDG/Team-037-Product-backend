import { saveUser, savePassword } from '../../services/users/users.services';
import { addDonation } from '../../services/donations/donations.services';
import Security from '../../utils/security';
import { SERVER_ERROR_MESSAGE, SUCCESS } from '../../utils/constant';

const crypto = require('crypto');

export const createUser = async (req, res) => {
  try {
    const { password } = req.body;
    const user = await saveUser(req.body);
    const { id, email, userType } = user;
    await savePassword(password, id);

    const jwtToken = await Security.generateNewToken({ id, email, userType });

    return res.status(201).json({
      status: 200, message: SUCCESS, data: { user, jwtToken }
    });
  } catch (error) {
    return res.status(500).json({ status: 500, message: SERVER_ERROR_MESSAGE });
  }
};

export const makeDonation = async (req, res) => {
  // this will be where webhook call will hit
  // testing this is hwoever subject to if this project on a server serving on HTTPS
  const secret = process.env.TEST_SECRET_KEY;
  const hash = crypto.createHmac('sha512', secret)
    .update(JSON.stringify(req.body)).digest('hex');
  // checing if its paystack that made the request
  if (hash === req.headers['x-paystack-signature']) {
    const event = req.body;
    const data = (event.event === 'charge.success')
      ? {
        amount: event.data.amount,
        email: event.data.customer.email,
        firstname: event.data.customer.first_name,
        lastname: event.data.customer.last_name,
        phone: event.data.customer.phone,
        description: event.data.status
      }
      : false;
    await addDonation(data);
  }
  return res.sendStatus(200);
};

export const signInUser = async () => { };
