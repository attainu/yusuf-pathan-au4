const db = require('../db');
const Sequelize = require('sequelize');

const Card = db.define(
  'cards',
  {
    cardid: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    taskname: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    categoryname: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    taskstatus: {
        type: Sequelize.STRING,
      allowNull: false,
    }
  },
  {
    timestamps: false,
    freezeTableName: true,
  }
);

db.sync().then(() => console.log('cards DB has created'));

module.exports = Card;
