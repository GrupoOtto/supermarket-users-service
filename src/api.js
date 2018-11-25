const status = require('http-status');
const error = require('http-errors');
const users = require('./controllers/users');
const login = require('./controllers/login');
const userValidator = require('./validators/users');

const handle = fn => (req, res, next) => fn(req, res, next).catch(next);

const regex = /(\S+)\s+(\S+)/;

module.exports = app => {
  const resource = require('./utils/resource')(app);

  app.get(
    '/valid',
    handle(async (req, res) => {
      const { authorization } = req.headers;
      if (!authorization) {
        throw error(401, 'No authorization header provied');
      }

      const token = authorization.match(regex)[2];
      if (!token) {
        throw error(401, 'No jwt provied');
      }

      res.status(status.OK).json(await login.valid(token));
    })
  );

  app.post(
    '/login',
    handle(async (req, res) => {
      const { email, password } = req.body;
      res.status(status.OK).json(await login.signIn(email, password));
    })
  );

  resource('/', users, userValidator);
};
