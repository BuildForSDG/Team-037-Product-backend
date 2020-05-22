const callback = (accessToken, refreshToken, profile, done) => {
  const { id, provider } = profile;
  const user = { socialId: id, type: provider };
  if (provider === 'google') {
    const {
      given_name: firstName,
      family_name: lastName,
      email,
      email_verified: verified,
      picture: imageUrl
    } = profile._json;
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.verified = verified;
    user.imageUrl = imageUrl;
  }
  return done(null, user);
};

export default callback;
