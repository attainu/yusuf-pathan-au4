const db = require('../db');
const Sequelize = require('sequelize');

let Category = db.define(
  'categories',
  {
    category: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);

module.exports = Category;
