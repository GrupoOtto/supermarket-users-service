const mongoose = require('mongoose');
const faker = require('faker');
const users = require('./controllers/users');

const User = (username, email, password, avatar) => users.create({ username, email, password, avatar });

mongoose.connect(process.env.DB_URL).then(async () => {
  for (let index = 0; index < 5; index++) {
    const description = faker.commerce.department();
    const username = faker.internet.userName();
    const email = faker.internet.email(username);
    const avatar = faker.internet.avatar();
    const user = User(username, email, "12345", avatar)
    console.log(type);
  }
});
