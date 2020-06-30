import dotenv from 'dotenv';
import {
  NO_TOKEN_ERROR, ACTIVATION_SUCCESS, SERVER_ERROR_MESSAGE, NO_USER
} from '../utils/constant';

import {
  findActivationToken,
  destroyAnActivation
} from '../services/activation';
import { findUser, updateUser } from '../services/users.services';

dotenv.config();
export const activateUserViaToken = async (req, res) => {
  try {
    const { token } = req.body;

    const userToken = await findActivationToken(token);

    if (userToken === false || !userToken) {
      return res.status(404).json({
        status: 404,
        message: NO_USER
      });
    }

    const user = await findUser(userToken.userId);

    await updateUser(userToken.userId, true, user.type);

    await destroyAnActivation(userToken.userId);

    return Response(res, {
      status: 200,
      message: ACTIVATION_SUCCESS
    });
  } catch (err) {
    return res.status(500).json({
      status: 500,
      message: SERVER_ERROR_MESSAGE
    });
  }
};

/* they're both the same, but I separated it, because they might have to
 be an adjustment with the implementation */
export const verifyUserTokenViaEmail = async (req, res) => {
  try {
    const { token } = req.query;
    const userToken = await findActivationToken(token);

    if (userToken === false || !userToken) {
      return res.status(404).json({
        status: 404,
        message: NO_TOKEN_ERROR
      });
    }
    const user = await findUser(userToken.userId);
    if (user === undefined || !user) {
      return res.status(404).json({ status: 404, message: 'User not found' });
    }
    await updateUser(true, user.userType, userToken.userId);

    await destroyAnActivation(userToken.userId);
    // return res.redirect(`${process.env.FRONTEND_URL}/confirm-email-success`);

    return res.status(200).json({ message: 'account verification successful' });
  } catch (error) {
    return res.status(500).json({
      status: 500,
      message: SERVER_ERROR_MESSAGE
    });
  }
};
