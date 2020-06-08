const Like = require('../Models/Like');
const express = require('express');
const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const { postid, userid } = req.body;
    if(!postid || !userid) {
        return res.status(400)
    }
    let likexist = await Like.findAll({
      where: {
        postid: postid,
        userid: userid,
      },
    });

    if (likexist) {
      return res.status(200).json({
        message: 'already liked',
      });
    }

    let like = await Like.create({
      userid: userid,
      postid: postid,
    });
    return res.status(200).json({
      message: 'success',
      like: like,
    });
  } catch (error) {
    console.log(error);
    return res.status(400)
  }
});

// router.get('/', async (req, res) => {
//   let like = await Like.findAll;
// });

module.exports = router;
