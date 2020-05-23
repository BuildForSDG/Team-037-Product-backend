import passport from 'passport';
import { Strategy as PassportGoogle } from 'passport-google-oauth20';
import { ExtractJwt, Strategy as JWTStrategy } from 'passport-jwt';
import dotenv from 'dotenv';
import callback from './callback';

dotenv.config();

const passportGoogleConfig = {
  clientID: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  callbackURL: '/api/v1/auth/google/callback'
};

const passportJWTConfig = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.SECRET_KEY
};

const jwtHandler = (payload, done) => {
  done(null, payload);
};

const setPassportMiddleware = (server) => {
  server.use(passport.initialize());
  passport.use(new PassportGoogle(passportGoogleConfig, callback));
  passport.use(new JWTStrategy(passportJWTConfig, jwtHandler));
};

export default setPassportMiddleware;
