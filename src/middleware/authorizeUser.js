import { findUser } from '../services/users.services';
import {
  NO_USER, NOT_ACTIVATED, ONLY_AUTHORIZE
} from '../utils/constant';
/**
 *
 * @param {object} roleArray an array of userType
 * @returns {*} json or next
 */
const authorizeUser = (roleArray) => async (req, res, next) => {
  const { id: userId } = req.token;
  const user = await findUser(userId);
  if (!user) {
    return res.status(404).json({ status: 404, message: NO_USER });
  }
  const { userType, verified } = user;
  if (verified === false) {
    return res.status(401).json({ status: 401, message: NOT_ACTIVATED });
  }
  if (!roleArray.includes(userType)) {
    return res.status(401).json({ status: 401, message: ONLY_AUTHORIZE });
  }
  return next();
};

export default authorizeUser;
