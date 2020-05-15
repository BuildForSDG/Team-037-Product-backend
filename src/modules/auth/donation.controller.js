import { addDonation } from '../../services/donations/donations.services';

const crypto = require('crypto');

export const makeDonation = async (req, res) => {
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
export const listDonations = async () => { };
