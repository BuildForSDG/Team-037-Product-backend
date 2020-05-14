import models from '../../database/models';

const { Donation } = models;

export const saveDonation = async (body) => {
  // {userid: u, amount: a, description: d}
  try {
    const donation = Donation.create(body)
      .then((d) => ({ status: 201, data: d }))
      .catch((e) => ({ status: 400, data: e }));
    return donation;
  } catch (error) {
    return error;
  }
};

export const deleteDonation = async () => {};
