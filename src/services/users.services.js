import { Op } from 'sequelize';
import validator from 'validator';
import models from '../database/models';
import Security from '../utils/security';

const { User, passwordManager } = models;

export const findUser = async (item) => {
  let where = {
    where: {
      [Op.or]: [{ email: item }, { phone: item }]
    }
  };
  if (validator.isUUID(item)) {
    where = { where: { id: item } };
  }
  const user = await User.findOne(where);
  return user;
};

export const saveUser = async (body) => {
  try {
    const user = await User.create(body);
    return user;
  } catch (error) {
    return error;
  }
};

export const savePassword = async (password, userId) => {
  try {
    const hash = await Security.generateNewPassword(password);
    return await passwordManager.create({
      userId,
      current_password: hash
    });
  } catch (error) {
    return error;
  }
};

export const updateUser = async (updateVerify, type, userId) => {
  const parameter = { verified: updateVerify };
  const where = {
    where: {
      id: userId,
      userType: type
    }
  };
  const update = await User.update(parameter, where);
  return update;
};

export const editProfile = async (userId, body) => {
  try {
    const where = { where: { id: userId }, returning: true };
    const userData = await User.update(body, where);
    return userData;
  } catch (error) {
    return error;
  }
}

