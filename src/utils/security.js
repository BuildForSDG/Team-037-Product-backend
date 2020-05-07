import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import 'dotenv/config';

const SIGN_OPTION = {
  issuer: 'Authorization/Resource/OneKiosk Africa',
  subject: 'Authentication Bearer',
  expiresIn: '30d'
};

const secret = process.env.JWT_SECRET;

export default class Security {
  static async generateNewPassword(password) {
    try {
      const hash = await bcrypt.hash(password, 6);
      return hash;
    } catch (error) {
      return error;
    }
  }

  static async generateNewToken(payload) {
    try {
      const token = await jwt.sign({ payload }, secret, SIGN_OPTION);
      return token;
    } catch (error) {
      return error;
    }
  }
}
