const Post = require('../Models/Post');
const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
  try {
    let posts = await Post.findAll();
    return res.status(200).json({
      message: 'success',
      posts: posts,
    });
  } catch (error) {
    console.log(error);
    return res.status(400);
  }
});

router.get('/:user', async (req, res) => {
  const userid = req.query.userid;
  if (!userid) {
    return res.status(400);
  }
  try {
    let post = await Post.findAll({
      where: {
        userid: userid,
      },
    });
    res.status(200).json({
      message: 'success',
      post: post,
    });
  } catch (error) {
    console.log(error);
    return res.status(400);
  }
});

router.post('/', async (req, res) => {
  try {
    const { userid, post, name, email } = req.body;
    if (!userid || !post || !email || !name) {
      return res.status(400).send('invalid credentials');
    }
    console.log(userid, post);
    let createpost = await Post.create({
      userid: userid,
      name: name,
      email: email,
      post: post,
    });
    return res.status(201).json({
      message: 'post added',
      post: createpost,
    });
  } catch (error) {
    console.log(error);
    return res.status(400);
  }
});

module.exports = router;
