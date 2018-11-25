const bcrypt = require('bcrypt');
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  avatar: String,
});

UserSchema.method({
  encryptPassword: function () {
    return bcrypt.hash(this.password, 7);
  },
  validPassword: function (password) {
    return bcrypt.compare(password, this.password);
  }
});

UserSchema.pre('save', async function () {
  if (this.isModified('password')) {
    this.password = await this.encryptPassword();
  }
});

UserSchema.statics = {};

module.exports = mongoose.model('User', UserSchema);
