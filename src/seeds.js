const mongoose = require('mongoose');
const faker = require('faker');

const products = require('./controllers/products');
const types = require('./controllers/types');

const Product = (name, salePrice, costPrice, type) =>
  products.create({ name, salePrice, costPrice, type });
const Type = (initials, description) => types.create({ initials, description });

mongoose.connect(process.env.DB_URL).then(async () => {
  for (let index = 0; index < 5; index++) {
    const description = faker.commerce.department();
    const type = await Type(
      description.toUpperCase().substring(0, 2),
      description
    );
    console.log(type);

    for (let index = 0; index < 20; index++) {
      const name = faker.commerce.productName();
      const costPrice = faker.commerce.price();
      const salePrice = costPrice * (index / 20 + 1);
      const product = await Product(name, costPrice, salePrice, type._id);
      console.log(product);
    }
  }
});
