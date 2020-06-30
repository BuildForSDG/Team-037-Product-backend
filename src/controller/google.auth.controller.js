import dotenv from 'dotenv';
import models from '../database/models';
import security from '../utils/security';
import SERVER_ERROR_MESSAGE from '../utils/constant';

dotenv.config();
const { generateNewToken } = security;
const { SocialPassword } = process.env;

const { User } = models;
const socialController = async (req, res) => {
  const { user } = req;
  const userData = {
    socialId: user.socialId,
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email,
    verified: user.verified,
    password: SocialPassword,
    imageUrl: user.imageUrl
  };
  try {
    let dbUser = await User.findOne({
      where: { socialId: user.socialId }
    });
    if (!dbUser) {
      dbUser = await User.create(userData);
    }
    const {
      socialId, 
      firstName, 
      lastName, 
      email, 
      verified, 
      id, 
      imageUrl,
      country,
      state,
      city,
      address,
      phone,
      dateOfBirth,
      accountName,
      accountNumber,
      bankName,
      userType
    } = dbUser;
    const payload = {
      socialId,
      firstName,
      lastName,
      email,
      verified,
      imageUrl,
      country,
      state,
      city,
      address,
      phone,
      dateOfBirth,
      accountName,
      accountNumber,
      bankName,
      userType,
      token: await generateNewToken({ id })
    };
    const token = await generateNewToken(payload);
    return res.redirect(`${process.env.FRONTEND_URL}?token=${token}`);
  } catch (e) {
    return res.redirect(`${process.env.FRONTEND_URL}`);
  }
};

export default socialController;
