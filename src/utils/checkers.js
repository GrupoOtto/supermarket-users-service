const error = require("http-errors");

exports.required = message => async handler => {
  const result = await handler;
  if (!result) {
    throw error(404, message)
  }
  return result
}
