import Sequelize from 'sequelize';

import model from '../../database/models';

const { Op } = Sequelize;
const { Activation } = model;

export const findActivationToken = async (item) => {
  try {
    const [token] = item.split('/');

    const where = {
      where: { token }
    };

    const findToken = await Activation.findOne(where);

    if (!findToken) {
      return false;
    }
    return findToken;
  } catch (err) {
    return err;
  }
};

export const findUserViaToken = async (token) => {
  try {
    const where = {
      where: {
        [Op.or]: [{ token }]
      }
    };
    const findToken = await Activation.findOne(where);
    if (findToken) {
      return findToken;
    }
    return false;
  } catch (err) {
    return err;
  }
};

export const getActivation = async (userId, token) => {
  try {
    return await Activation.findOne({
      where: { userId, token }
    });
  } catch (err) {
    return false;
  }
};

export const destroyAnActivation = async (item) => {
  try {
    const where = {
      where: {
        [Op.or]: [{ userId: item }]
      }
    };
    return await Activation.destroy(where);
  } catch (err) {
    return err;
  }
};
