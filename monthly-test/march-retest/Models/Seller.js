const db = require('../db');
const Sequelize = require('sequelize');

let Seller = db.define(
  'sellers',
  {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    productname: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    productprice: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    discountprice: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    category: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    sellername: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    sellernumber: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    city: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);

module.exports = Seller;
