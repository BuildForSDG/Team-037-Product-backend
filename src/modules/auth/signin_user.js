import { findUser } from '../../services/users/users.services';
import Security from '../../utils/security';
import { SERVER_ERROR_MESSAGE, LOGIN_SUCESS, INVALID_USER } from '../../utils/constant';

export const logInUser = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await findUser(username);
    if (user) {
      const isValidpassword = await Security.comparePassword(password, user.id);
      if (isValidpassword) {
        const jwtToken = await Security.generateNewToken({
          id: user.id,
          email: user.email,
          phone: user.phone,
          type: user.userType
        });
        return res.status(200).json({
          status: 200, message: LOGIN_SUCESS, user, jwtToken
        });
      }

      return res.status(401).json({ status: 401, message: INVALID_USER });
    }
    return res.status(401).json({ status: 401, message: INVALID_USER });
  } catch (error) {
    return res.status(500).json({ status: 500, message: SERVER_ERROR_MESSAGE });
  }
};

export const loginWithGoogle = async () => { };
