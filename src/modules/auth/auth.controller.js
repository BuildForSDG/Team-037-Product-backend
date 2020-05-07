import { saveUser, savePassword } from '../../services/users/users.services';
import Security from '../../utils/security';
import { SERVER_ERROR_MESSAGE, SUCCESS } from '../../utils/constant';

export const createUser = async (req, res) => {
  try {
    const { password } = req.body;
    const user = await saveUser(req.body);
    const { id, email, userType } = user;
    await savePassword(password, id);

    const jwtToken = await Security.generateNewToken({ id, email, userType });

    return res.status(201).json({
      status: 200, message: SUCCESS, data: { user, jwtToken }
    });
  } catch (error) {
    return res.status(500).json({ status: 500, message: SERVER_ERROR_MESSAGE });
  }
};

export const signInUser = async () => { };
