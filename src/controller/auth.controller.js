import { saveUser, savePassword, findUser } from '../services/users.services';
import Security from '../utils/security';
import { urlGoogle } from '../utils/google_config';
import {
  SERVER_ERROR_MESSAGE, SUCCESS, LOGIN_SUCCESS, INVALID_USER
} from '../utils/constant';
import 'dotenv/config';

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

export const logInUser = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await findUser(username);
    if (user) {
      const isValidPassword = await Security.comparePassword(password, user.id);
      if (isValidPassword) {
        const jwtToken = await Security.generateNewToken({
          id: user.id,
          email: user.email,
          phone: user.phone,
          type: user.userType
        });
        return res.status(200).json({
          status: 200, message: LOGIN_SUCCESS, user, jwtToken
        });
      }

      return res.status(401).json({ status: 401, message: INVALID_USER });
    }
    return res.status(401).json({ status: 401, message: INVALID_USER });
  } catch (error) {
    return res.status(500).json({ status: 500, message: SERVER_ERROR_MESSAGE });
  }
};

export const getASpecificUser = async (req, res) => {
  try {
    const { id } = req.token.payload;
    const user = await findUser(id);

    if (user === undefined || !user) {
      return res.status(404).json({ message: 'User retrieved successfully' });
    }

    if (user === undefined || user.type === 'user') {
      return res.status(404).json({ message: 'User retrieved successfully' });
    }
    return res.status(200).json({ status: 200, message: 'User retrieved successfully', data: user });
  } catch (error) {
    return res.status(500).json({ status: 500, message: 'Internal Server Error' });
  }
};

export const getLoginUrlFromGoogle = async (req, res) => {
  const googleUrl = await urlGoogle();
  res.status(200).send(googleUrl);
  return res.status(500).json({ status: 500, message: 'Internal Server Error' });
};


// export const getCodeAccountFromCode = async (req, res) => {
//   try {
//     const { code } = req.query;
//     const authData = initializeConnection();

//     const data = await authData.getToken(code);
//     const { tokens } = data;
//     // add the tokens to the google api so we have access to the account
//     authData.setCredentials(tokens);
//     const plus = await getGooglePlusAPI({
//       clientId: process.env.GOOGLE_CLIENT_ID,
//       clientSecret: process.env.GOOGLE_CLIENT_SECRET
//     });
//     const me = await plus.people.get({ userId: 'me' });
//     await jwt.verify(tokens.access_token, process.env.JWT_SECRET);

//     return res.status(200).send(me);
//   } catch (error) {
//     return res.status(500).json({ status: 500, message: 'Internal Server Error' });
//   }
// };
