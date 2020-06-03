import { Op } from 'sequelize';
import validator from 'validator';
import models from '../database/models';

const { farmLand } = models;

export const findFarm = async (farmNameOrId) => {
  try {
    let where = {
      where: { [Op.or]: [{ farmName: farmNameOrId }, { id: farmNameOrId }] }
    };
    if (validator.isUUID(farmNameOrId)) {
      where = {
        where: { id: farmNameOrId }
      };
    }
    return await farmLand.findOne(where);
  } catch (err) {
    return err;
  }
};

export const saveFarm = async (item) => {
  try {
    return await farmLand.create({ ...item });
  } catch (err) {
    return err;
  }
};


export const editFarmLand = async (farmId, item) => {
  try {
    const parameter = item;
    const where = {
      where: {
        id: farmId
      },
      returning: true
    };
    return farmLand.update(parameter, where);
  } catch (error) {
    return error;
  }
};
