const db = require('../db');
const Sequelize = require('sequelize');

const Follow = db.define(
  'follows',
  {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    userid: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    followid: {
      type: Sequelize.INTEGER,
    },
    followname: {
      type: Sequelize.STRING,
    },
    followemail: {
      type: Sequelize.STRING,
    },
  },
  {
    timestamps: false,
    freezeTableName: true,
  }
);

db.sync().then(() => console.log('follows db has been created'));

module.exports = Follow;
