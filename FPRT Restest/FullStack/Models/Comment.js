const db = require('../db');
const Sequelize = require('sequelize');

const Comment = db.define(
  'comments',
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
    comment: {
      type: Sequelize.STRING,
    },
    userid: {
      type: Sequelize.INTEGER,
    },
    name: {
      type: Sequelize.STRING,
    },
    email: {
      type: Sequelize.STRING,
    },
  },
  {
    timestamps: false,
    freezeTableName: true,
  }
);

db.sync().then(() => console.log('comments db has been created'));

module.exports = Comment;
