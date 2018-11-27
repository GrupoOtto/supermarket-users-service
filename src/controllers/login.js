const error = require('http-errors');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

const secret = "Shhhhhh"
const options = {
  expiresIn: "1d",
}

exports.signIn = async (email, password) => {
  const user = await User.findOne({ email });

  if(!await user.validPassword(password))
    throw error(401, "Invalid Password");

  const { id: sub, username, avatar } = user
  const payload = { sub, avatar, username, email }
  return { token: jwt.sign(payload, secret, options) }
};

exports.valid = async (token) => {
  try {
    const payload = jwt.verify(token, secret)
    return { payload }
  } catch(err) {
    throw error(401, "Invalid Token")
  }
};
