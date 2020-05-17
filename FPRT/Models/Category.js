const db = require('../db');
const Sequelize = require('sequelize');

const Category = db.define(
  'categories',
  {
    categoryid: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    categoryname: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: false,
    freezeTableName: true,
  }
);

db.sync()
.then(() => console.log('categories DB has created'))

module.exports = Category;