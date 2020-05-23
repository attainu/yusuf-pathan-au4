const Category = require('../Models/Category');
const express = require('express');
const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const { body } = req;
    console.log('Body >>>>', body);
    let category = await Category.create({ categoryname: body.category });
    res.json(category);
  } catch (error) {
    console.log(error);
  }
});

router.get('/', async (req, res) => {
  try {
    let category = await Category.findAll();
    res.send({ category: category });
  } catch (error) {
    console.log(error);
  }
});

router.put('/categoryname', async (req, res) => {
  try {
    const body = req.body;
    console.log('body', body);
    let category = await Category.update(
      {
        categoryname: body.newcategory,
      },
      {
        where: { categoryname: body.oldcategory },
      }
    );
    console.log(category);
    res.json({ category });
  } catch (error) {
    console.log(error);
  }
});

router.delete('/', async (req, res) => {
  try {
    const body = req.body;
    console.log('Body >> ', body);
    const category = await Category.destroy({
      where: {
        categoryid: body.id,
      },
    });
    res.json({ category });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
