const Joi = require('joi');
const { stringSchema } = require('../utils/validations');

exports.all = {
  query: Joi.object({
    username: stringSchema,
    email: stringSchema,
  }).unknown(false)
};

exports.create = {
  body: Joi.object({
    username: Joi.string().required(),
    email: Joi.string().required(),
    password: Joi.string().required(),
  }).unknown(false)
};

exports.get = {
  params: {
    id: Joi.string().hex()
  }
};

exports.update = {
  params: {
    id: Joi.string().hex()
  },
  body: Joi.object({
    username: Joi.string().required(),
    email: Joi.string().required(),
    password: Joi.string().required(),
  }).unknown(false)
};

exports.patch = {
  params: {
    id: Joi.string().hex()
  },
  body: Joi.object({
    username: Joi.string(),
    email: Joi.string(),
    password: Joi.string(),
  }).unknown(false)
};

exports.delete = {
  params: {
    id: Joi.string().hex()
  }
};
