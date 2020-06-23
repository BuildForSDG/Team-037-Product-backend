import { BitlyClient } from 'bitly';
import 'dotenv/config';

export const randomNumber = (number = 9999, min = 0) => {
  const adjusted = min + 1;
  return Math.floor((Math.random() + adjusted) * number);
};
export const generateURL = async (path) => {
  const bitly = new BitlyClient(process.env.BITLY_TOKEN, {});
  const bit = await bitly.shorten(`${process.env.BACKEND_URL}/${path}`);
  return bit;
};
