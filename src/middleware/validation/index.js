import { findUser } from '../../services/users.services';
import { ALREADY_EXIST, SERVER_ERROR_MESSAGE } from '../../utils/constant';

export const emailPhoneValidator = async (req, res, next) => {
  try {
    const { email, phone } = req.body;
    const emailExist = await findUser(email);
    let phoneExist = false;
    if (phone) {
      phoneExist = await findUser(phone);
    }

    if ((emailExist && emailExist.isNewRecord === false)
      || (phoneExist && phoneExist.isNewRecord === false)) {
      return res.status(409).json({ status: 409, message: ALREADY_EXIST });
    }
    return next();
  } catch (error) {
    return res.status(500).json({ status: 500, message: SERVER_ERROR_MESSAGE });
  }
};

export const adminVerification = async () => { };
