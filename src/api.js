const status = require('http-status');
const users = require('./controllers/users');
const userValidator = require('./validators/users');

const handle = fn => (req, res, next) => fn(req, res, next).catch(next);

module.exports = app => {
  const resource = require('./utils/resource')(app);

  app.get('/valid', handle(async (req, res) => {
    const { id } = req.params;
    res.status(status.OK).json(await users.valid(id));
  }));

  app.post('/login', handle(async (req, res) => {
      const { id } = req.params;
      res.status(status.OK).json(await users.buy(id));
  }));

  resource('/', users, userValidator);
};
