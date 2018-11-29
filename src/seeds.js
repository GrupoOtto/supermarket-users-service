const mongoose = require('mongoose');
const faker = require('faker');
const users = require('./controllers/users');

const User = (username, email, password, avatar, _id ) => users.create({ _id, username, email, password, avatar });

console.log(process.env.DB_URL);

mongoose.connect(process.env.DB_URL).then(async () => {
    let username = "Employee";
    let avatar = faker.internet.avatar();
    let email = "employee@ksupermarket.com";
    let id = "5bfaf2408587d4003a2b0ded";
    let user = await User(username, email, "employee", avatar, id)
    console.log(user);

    username = "user";
    avatar = faker.internet.avatar();
    email = "user@ksupermarket.com";
    user = await User(username, email, "user", avatar)
    console.log(user);

    process.exit();
});
