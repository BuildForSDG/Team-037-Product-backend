import sendGrid from '@sendgrid/mail';
import {
  saveUser, savePassword, findUser, editProfile
} from '../services/users.services';
import Security from '../utils/security';
import accountConfirmationHelper from '../helper/activation/account_confirmation';
import {
  SERVER_ERROR_MESSAGE, SUCCESS, LOGIN_SUCCESS, INVALID_USER, NO_FARM_PRODUCT_FOUND, FIND_PRODUCT
} from '../utils/constant';
import { findAllFarmProduct } from '../services/product';
import 'dotenv/config';

sendGrid.setApiKey(process.env.SENDGRID_API_KEY);
export const createUser = async (req, res) => {
  try {
    const { password, confirmationType } = req.body;
    const user = await saveUser(req.body);
    const { id, email, userType } = user;

    await savePassword(password, id);
    await accountConfirmationHelper(confirmationType, user, 'ACCOUNT SIGNUP VERIFICATION');

    const jwtToken = await Security.generateNewToken({ id, email, userType });

    return res.status(201).json({
      status: 201, message: SUCCESS, user, jwtToken
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
    return res.status(500).json({ status: 500, message: error });
  }
};

export const updateProfile = async (req, res) => {
  try {
    const { id } = req.token;
    const user = await findUser(id);
    if (user === undefined || !user) {
      res.status(404).json({
        status: 404,
        message: 'User does not exist'
      });
    }

    const profile = await editProfile(id, req.body);
    return res.status(200).json({
      status: 200,
      message: 'User Updated Successfully',
      data: profile
    });
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

/* User can view all farm product without login or login
*/
export const listAllFarmProduct = async (req, res) => {
  try {
    const allFarmProduct = await findAllFarmProduct();
    if (!allFarmProduct) {
      return res.status(404).json({ status: 404, message: NO_FARM_PRODUCT_FOUND });
    }
    return res.status(200).json({ status: 200, message: FIND_PRODUCT, data: allFarmProduct });
  } catch (error) {
    return res.status(500).json({ status: 500, message: SERVER_ERROR_MESSAGE });
  }
};

export const logOut = (req, res) => {
  try {
    return res.status(200).json({
      message: 'Logout was successful'
    });
  } catch (error) {
    return res.status(500).json({ status: 500, message: SERVER_ERROR_MESSAGE });
  }
};
