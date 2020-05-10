import models from '../../database/models';

const { Donation } = models;

export const addDonation = async (body) => {
  // {userid: u, amount: a, description: d}
  try {
    const donation = await Donation.create(body);
    return { status: 200, message: donation };
  } catch (error) {
    return { status: 409, message: error };
  }
};

export const deleteDonation = async () => {};
