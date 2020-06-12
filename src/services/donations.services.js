import { Op } from 'sequelize';
import models from '../database/models';

const { Donation } = models;

export const findDonation = async (item) => {
  try {
    const where = {
      where: {
        [Op.or]: [{ id: item }, { transactionId: item }]
      }
    };
    return await Donation.findOne(where);
  } catch (err) {
    return err;
  }
};
export const addDonation = async (body) => {
  try {
    const donation = await Donation.create(body);
    return donation;
  } catch (error) {
    return error;
  }
};

export const updateDonationStatus = async (data, transactionId) => {
  try {
    const updatedData = await Donation.update(data, {
      where: { transactionId },
      returning: true
    });
    return updatedData;
  } catch (err) {
    return err;
  }
};

export const findAllDonations = async () => {
  try {
    return await Donation.findAll({ order: [['createdAt', 'DESC']] });
  } catch (err) {
    return err;
  }
};
