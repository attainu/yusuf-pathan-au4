const Follow = require('../Models/Follow');
const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
  try {
    let follows = await Follow.findAll();
    return res.status(200).json({
      message: 'success',
      follows: follows,
    });
  } catch (error) {
    console.log(error);
    return res.status(400);
  }
});

router.get('/:userid', async (req, res) => {
  try {
    const userid = req.query.userid;
    if(!userid){
        return res.status(404)
    }
    let follows = await Follow.findAll({
      where: {
        userid: userid,
      },
    });
    return res.status(200).json({
      message: 'success',
      follows: follows,
    });
  } catch (error) {
    console.log(error);
    return res.status(400)
  }
  
});

router.post('/', async (req, res) => {
  const { userid, followid, followname, followemail } = req.body;
  if (!userid || !followid || !followname || !followemail) {
    return res.status(400);
  }
  try {
    let followexist = await Follow.findOne({
      where: {
        userid: userid,
        followid: followid,
      },
    });

    if (followexist) {
      return res.status(200).json({
        message: 'already followed',
      });
    }

    let follow = await Follow.create({
      userid: userid,
      followname: followname,
      followid: followid,
      followemail: followemail,
    });
    console.log(follow);
    res.status(201).json({
      message: 'success',
      follow: follow,
    });
  } catch (error) {
    console.log(error);
    return res.status(400)
  }
});

module.exports = router;
