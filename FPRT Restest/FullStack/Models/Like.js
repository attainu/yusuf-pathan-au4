const db = require('../db');
const Sequelize = require('sequelize');

const Like = db.define(
  'likes',
  {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    postid: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    userid: {
      type: Sequelize.INTEGER,
    },
  },
  {
    timestamps: false,
    freezeTableName: true,
  }
);

db.sync().then(() => console.log('likes db has been created'));

module.exports = Like;
