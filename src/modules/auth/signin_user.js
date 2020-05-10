import { findUser } from '../../services/users/users.services';
import Security from '../../utils/security';
import { urlGoogle } from '../../utils/google_config';
import { SERVER_ERROR_MESSAGE, LOGIN_SUCCESS, INVALID_USER } from '../../utils/constant';
import 'dotenv/config';

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
