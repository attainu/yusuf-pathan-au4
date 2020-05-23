const express = require('express');
const cors = require('cors');
const app = express();
const logger = require('morgan');
const City = require('./Models/City');
const Category = require('./Models/Category');
const Seller = require('./Models/Seller');

const API_PORT = process.env.API_PORT || 5000;

//middlewares
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(logger('dev'));

app.get('/cities', async (req, res) => {
  try {
    let cities = await City.findAll();
    console.log(cities);
    res.send(cities);
  } catch (error) {
    console.log(error);
  }
});

app.get('/categories', async (req, res) => {
  try {
    let categories = await Category.findAll();
    console.log(categories);
    res.send(categories);
  } catch (error) {
    console.log(error);
  }
});

app.post('/seller', async (req, res) => {
  const { body } = req;
  if (
    body.productname == '' ||
    body.productprice == '' ||
    body.discountprice == '' ||
    body.category == '' ||
    body.sellername == '' ||
    body.sellernumber == '' ||
    body.city == ''
  ) {
    return (res.send({
      message: "Please enter all the fields"
    }))
  }
  try {
    let seller = await Seller.create({
      productname: body.productname,
      productprice: body.productprice,
      discountprice: body.discountprice,
      category: body.category,
      sellername: body.sellername,
      sellernumber: body.sellernumber,
      city: body.city,
    });
    console.log('seller', seller);
    res.send(seller);
  } catch (error) {
    console.log(error);
  }
});

app.get('/seller', async (req, res) => {
  try {
    let sellers = await Seller.findAll();
    console.log(sellers);
    res.send(sellers);
  } catch (error) {
    console.log(error);
  }
});

app.listen(API_PORT, () => console.log(`listening on port ${API_PORT}`));

module.exports = app;
