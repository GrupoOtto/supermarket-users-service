const error = require('http-errors');
const User = require('../models/User');
const checkers = require('../utils/checkers');

const required = checkers.required("No user found");

exports.all = async (args) => User.find(args, '-password');

exports.get = async _id => required(User.findById({ _id }, '-password'));

exports.update = async (_id, args) => User.findOneAndUpdate({ _id }, args, {new: true});

exports.update = async (_id, args) => {
  const user = await User.findOne({ _id });
  user.set(args);
  await user.save();
  user.password = undefined;
  return user
}

exports.delete = async _id => User.deleteOne({ _id });

exports.create = async args => User.create(args);
