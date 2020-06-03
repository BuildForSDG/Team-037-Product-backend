import { saveFarm, editFarmLand, findFarm } from '../services/farmer_land.services';
import { findUser } from '../services/users.services';
import {
  NO_USER,
  SERVER_ERROR_MESSAGE, NOT_ACTIVATED, ONLY_FARMER, FARM_SUCCESS, NO_FARM, UPDATE_FARM, GET_FARM
} from '../utils/constant';


/* create a farm land,
 check if user is a farmer,
 check if user is verified,
 if all this passed then user can create information else throws an error */

export const createFarmLand = async (req, res) => {
  try {
    const { id: userId } = req.token;

    const farmer = await findUser(userId);
    if (!farmer || farmer === undefined) {
      return res.status(404).json({ status: 404, message: NO_USER });
    }

    if (farmer.verified === false) {
      return res.status(401).json({ status: 401, message: NOT_ACTIVATED });
    }
    if (farmer.userType !== 'farmer') {
      return res.status(401).json({ status: 401, message: ONLY_FARMER });
    }
    const farm = await saveFarm({ ...req.body, userId });
    return res.status(201).json({ status: 201, message: FARM_SUCCESS, data: farm });
  } catch (error) {
    return res.status(500).json({ status: 500, message: SERVER_ERROR_MESSAGE });
  }
};

/* Updates farm Information,
 check if user is verified,
 if all this passed then user can update information else throw an error */

export const updateFarmInformation = async (req, res) => {
  try {
    const { id: farmerId } = req.token;
    const { farmId } = req.params;
    const farmer = await findUser(farmerId);

    if (farmer.userType !== 'farmer') {
      return res.status(401).json({ status: 401, message: ONLY_FARMER });
    }

    const farm = await findFarm(farmId);

    if (farm === undefined || !farm) {
      return res.status(404).json({ status: 404, message: NO_FARM });
    }

    const update = await editFarmLand(farmId, req.body);
    return res.status(200).json({ status: 200, message: UPDATE_FARM, data: update });
  } catch (error) {
    return res.status(500).json({ status: 500, message: SERVER_ERROR_MESSAGE });
  }
};


/* Retrieve a single farm, no
auth because its an open route,
user can view a specific farm, farmers can also view their own farm */
export const getFarm = async (req, res) => {
  try {
    const { farmId } = req.params;
    const farm = await findFarm(farmId);
    if (farm === undefined || !farm) {
      return res.status(404).json({ status: 404, message: NO_FARM });
    }
    return res.status(200).json({ status: 200, message: GET_FARM, data: farm });
  } catch (error) {
    return res.status(500).json({ status: 500, message: SERVER_ERROR_MESSAGE });
  }
};
