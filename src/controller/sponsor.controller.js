import { findFarm } from '../services/farmer_land.services';
import {
  NO_FARM, GET_FARM, SERVER_ERROR_MESSAGE
} from '../utils/constant';

/* Sponsor can view a farm
*/
const listOneFarm = async (req, res) => {
  try {
    const { farmId } = req.params;
    const farm = await findFarm(farmId);
    if (!farm) {
      return res.status(404).json({ status: 404, message: NO_FARM });
    }
    return res.status(200).json({ status: 200, message: GET_FARM, data: farm });
  } catch (error) {
    return res.status(500).json({ status: 500, message: SERVER_ERROR_MESSAGE });
  }
};

export default listOneFarm;
