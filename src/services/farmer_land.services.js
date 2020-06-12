import { Op } from 'sequelize';
import validator from 'validator';
import models from '../database/models';

const { FarmLand } = models;

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
    return await FarmLand.findOne(where);
  } catch (err) {
    return err;
  }
};

export const findAllFarm = async () => {
  try {
    return await FarmLand.findAll();
  } catch (err) {
    return err;
  }
};


export const saveFarm = async (item) => {
  try {
    return await FarmLand.create({ ...item });
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
    return FarmLand.update(parameter, where);
  } catch (error) {
    return error;
  }
};
