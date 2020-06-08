const User = require('../Models/User');
const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
  try {
    let users = await User.findAll();
    return res.status(200).json({
      message: 'success',
      users: users,
    });
  } catch (error) {
    console.lof(error);
    res.status(400);
  }
});

router.post('/', async (req, res) => {
  const { name, email, password } = req.body;
  try {
    if (!name || !email || !password) {
      return res.status(404).json({
        message: 'credentials not found',
      });
    }

    let userexist = await User.findOne({
      where: {
        email: email,
      },
    });

    if (userexist) {
      return res.status(200).json({
        message: 'user exists',
      });
    }

    let user = await User.create({
      name: name,
      email: email,
      password: password,
    });
    return res.status(201).json({
      message: 'created successfully',
      user: user,
    });
  } catch (error) {
    console.log(error);
    return res.status(404).json({
      message: 'could not create user',
    });
  }
});

router.get('/:user', async (req, res) => {
  console.log('yusuf');
  const email = req.query.email;
  const password = req.query.password;

  if (!email || !password) {
    return res.status(400).send('credentials not found');
  }

  let user = await User.findOne({
    where: { email: email },
  });

  if (!user) {
    return res.status(400).send('invalid email');
  }

  if (user.password != password) {
    return res.status(400).send('invalid password');
  }

  return res.status(200).json({
    message: 'success',
    user: user,
  });
});

router.post('/search', async (req, res) => {
  try {
    const name = req.body.params.user;
    if (!name) {
      return res.status(400);
    }

    let user = await User.findAll({
      where: {
        name: name,
      },
    });
    return res.status(200).json({
      message: 'success',
      user: user,
    });
  } catch (error) {
    console.log(error);
    res.status(400);
  }
});

module.exports = router;
