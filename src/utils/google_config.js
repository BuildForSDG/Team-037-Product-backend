import { google } from 'googleapis';
import 'dotenv/config';

// configures google OAuth2

export const googleConfig = {
  clientId: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  redirect: process.env.REDIRECT_URL
};


const defaultScope = [
  'https://www.googleapis.com/auth/plus.me',
  'https://www.googleapis.com/auth/userinfo.email'
];

// initialize connection

export const initializeConnection = () => new google.auth.OAuth2(
  googleConfig.clientId,
  googleConfig.clientSecret,
  googleConfig.redirect
);
// get connection
export const getConnectionUrl = async (auth) => {
  const authurl = await auth.generateAuthUrl({
    access_type: 'offline',
    prompt: 'consent',
    scope: defaultScope
  });

  return authurl;
};


export const urlGoogle = async () => {
  const auth = await initializeConnection();
  const url = await getConnectionUrl(auth);
  return url;
};


export const getGooglePlusAPI = async (auth) => {
  google.plus({ version: 'v1', auth });
};
