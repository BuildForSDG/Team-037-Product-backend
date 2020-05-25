import dotenv from 'dotenv';
import models from '../database/models';
import authHelper from '../utils/authHelper';

dotenv.config();

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
      socialId, name, lastName, email, verified, id
    } = dbUser;
    const payload = {
      socialId,
      name,
      lastName,
      email,
      verified,
      token: authHelper({ id })
    };
    // const token = authHelper(payload);
    // return res.send(`${req.user}?token=${token}`);
    return res.status(200).json({
      success: true,
      message: 'User successfully login',
      data: payload
      // token
    });
    // return res.redirect('https://twitter.com/ore_kolade');
  } catch (e) {
    return res.status(500).send({ status: e, message: 'Server Error' });
  }
};

export default socialController;
