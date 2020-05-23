const db = require('../db');
const Sequelize = require('sequelize');

let City = db.define(
  'cities',
  {
    city: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);

module.exports = City;
