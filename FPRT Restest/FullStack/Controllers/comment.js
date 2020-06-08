const Comment = require('../Models/Comment');
const express = require('express');
const router = express.Router();

router.get('/:postid', async (req, res) => {
  try {
    const postid = req.query.postid;
    if(!postid) {
        return res.status(400)
    }
    let comments = await Comment.findAll({
      where: {
        postid: postid,
      },
    });
    console.log(comments);
    return res.status(200).json({
      message: 'success',
      comments: comments,
    });
  } catch (error) {
    console.log(error);
    return res.status(400);
  }
});

router.post('/', async (req, res) => {
  const { postid, comment, userid, name, email } = req.body;

  if (!postid || !comment || !userid || !email || !name) {
    return res.status(400);
  }

  try {
    let commentcreate = await Comment.create({
      postid: postid,
      comment: comment,
      userid: userid,
      name: name,
      email: email,
    });
    return res.status(201).json({
      message: 'success',
      comment: commentcreate,
    });
  } catch (error) {
    console.log(error);
    return res.status(400);
  }
});

module.exports = router;
