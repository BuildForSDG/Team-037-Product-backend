import models from '../../database/models';

const { Donation } = models;

export const saveDonation = async (body) => {
  try {
    const donation = await Donation.create(body);
    return { status: 201, data: donation };
  } catch (error) {
    return { status: 409, data: error };
  }
};

export const deleteDonation = async () => {};
