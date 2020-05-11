import model from '../../database/models';
import { randomNumber, generateURL } from '../../utils';
import Security from '../../utils/security';

const env = 'NODE_ENV';

const { Activation } = model;
/**
 *
 * @param {*} userID
 * @returns {*} saves to the activation table
 */
const activationCreator = async (user, type = 'activate', length = 9999) => {
  try {
    const code = await randomNumber(length);
    const hash = await Security.hashPassword(user.id);
    let path = '';
    if (type === 'reset') {
      path = `?token=${code}--${user.id}&wk=${hash}`;
    } else {
      path = `${type}/${code}/${user.id}`;
    }
    let activationToken = '';
    if (env === 'production') {
      const shortUrl = await generateURL(path);
      activationToken = { code, url: shortUrl.url };
    } else {
      const url = `${process.env.BACKEND_URL}/${path}`;
      activationToken = { code, url };
    }
    await Activation.create({ userId: user.id, token: code });
    return activationToken;
  } catch (err) {
    return err;
  }
};

export default activationCreator;
