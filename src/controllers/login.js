const errors = require('http-errors');
const User = require('../models/User');


exports.signIn = async (email, password) => {
  const user = await User.findOne({ email });

  if(!await user.validPassword(password))
    throw errors(401, "Invalid Password");

  return user
};
