const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const GOOGLE_ID = process.env.GOOGLE_ID || require('../config').GOOGLE_ID;
const GOOGLE_SECRET = process.env.GOOGLE_SECRET || require('../config').GOOGLE_SECRET;
const callbackURL = 'https://mentors-beyond-borders.herokuapp.com/auth/google/callback';

module.exports = (passport) => {
  passport.serializeUser((user, done) => {
    done(null, user);
  });
  passport.deserializeUser((user, done) => {
    done(null, user);
  });
  passport.use(new GoogleStrategy({
      clientID: GOOGLE_ID,
      clientSecret: clientSecret,
      callbackURL: callbackURL
    },
    (token, refreshToken, profile, done) => {
      return done(null, {
        profile: profile,
        token: token
      });
    }));
};
