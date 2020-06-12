import shortId from 'shortid';
import {
  addDonation, findDonation, updateDonationStatus, findAllDonations
} from '../services/donations.services';
import { initializeDonation, verifyTransaction } from '../services/payment';
import {
  SERVER_ERROR_MESSAGE, PAID, DONATE, NO_DONATION, DONATION_FOUND
} from '../utils/constant';


export const makeDonation = async (req, res) => {
  try {
    const transactionId = shortId.generate();
    const {
      firstName, lastName, email, amount, phone, description
    } = req.body;
    const money = parseFloat(amount);
    await addDonation({
      firstName, lastName, email, amount, paymentType: 'cardpayment', phone, description, transactionId
    });

    const data = {
      email,
      amount: money * 100,
      reference: transactionId,
      currency: 'NGN'
    };

    const result = await initializeDonation(data);

    return res.status(201).json({ status: 201, message: DONATE, data: result });
  } catch (err) {
    return res.status(500).json({ status: 500, message: SERVER_ERROR_MESSAGE });
  }
};

const getEnv = process.env;
export const updateDonation = async (req, res) => {
  try {
    const [, , transactionId] = req.originalUrl.split('=');
    if (transactionId) {
      const transaction = await verifyTransaction(transactionId);
      if (transaction.status) {
        const update = await updateDonationStatus({ PaymentStatus: PAID }, transactionId);

        res.status(200).send(update);
        return res.redirect(301, getEnv.PAYMENT_SUCCESS_URL);
      }
    }
    return res.redirect(301, getEnv.PAYMENT_FAILURE_URL);
  } catch (err) {
    return res.redirect(301, getEnv.PAYMENT_FAILURE_URL);
  }
};

export const getSpecificDonation = async (req, res) => {
  try {
    const { donationId } = req.params;

    const find = await findDonation(donationId);
    if (!find || find === undefined) {
      return res.status(404).json({ status: 404, message: NO_DONATION });
    }
    return res.status(200).json({ status: 200, message: DONATION_FOUND, data: find });
  } catch (err) {
    return res.status(500).json({ status: 500, message: SERVER_ERROR_MESSAGE });
  }
};


export const fetchAllDonations = async (req, res) => {
  try {
    const { donationId } = req.params;

    const find = await findAllDonations(donationId);
    if (find.length === 0) {
      return res.status(404).json({ status: 404, message: NO_DONATION });
    }
    return res.status(201).json({ status: 200, message: DONATION_FOUND, data: find });
  } catch (err) {
    return res.status(500).json({ status: 500, message: SERVER_ERROR_MESSAGE });
  }
};
