const express = require('express');
const app = express();
var cors = require('cors');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

const users = require('./Controllers/user');
const posts = require('./Controllers/post');
const comments = require('./Controllers/comment');
const follows = require('./Controllers/follow');
const likes = require('./Controllers/like')

app.use('/user', users);
app.use('/post', posts);
app.use('/comment', comments);
app.use('/follow', follows);
app.use('/like', likes);


module.exports = app;
