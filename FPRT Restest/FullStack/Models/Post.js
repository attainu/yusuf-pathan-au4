const db = require('../db');
const Sequelize = require('sequelize');

const Post = db.define(
  'posts',
  {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    post: {
      type: Sequelize.STRING,
      allowNull: false,
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
    like: {
      type: Sequelize.INTEGER,
    },
  },
  {
    timestamps: false,
    freezeTableName: true,
  }
);

db.sync().then(() => console.log('posts db has been created'));

module.exports = Post;
