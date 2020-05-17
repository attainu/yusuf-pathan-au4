const Card = require('../Models/Card');
const express = require('express');
const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const { body } = req;
    console.log('Body >>>>>', body);
    let card = await Card.create({
      taskname: body.taskname,
      categoryname: body.categoryname,
      taskstatus: body.taskstatus,
    });
    res.json(card);
  } catch (error) {
    console.log(error);
  }
});

router.get('/', async (req, res) => {
  try {
    const body = req.query.categoryname;
    console.log('params>>>', body);
    let card = await Card.findAll({
      where: {
        categoryname: body,
      },
    });
    res.send({card});
  } catch (error) {
    console.log(error);
  }
});

router.put('/', async (req, res) => {
  try {
    const newname = req.body.newname;
    const oldname = req.body.oldname;
    console.log(oldname, newname);
    let taskname = await Card.update(
      {
        taskname: newname,
      },
      {
        where: { taskname: oldname },
      }
    );
    console.log(taskname);
    res.send(taskname);
  } catch (error) {
    console.log(error);
  }
});

router.put('/:taskstatus', async (req, res) => {
  try {
    const body = req.body;
    // console.log('Body >>>>>> ', body);
    let taskstatus = await Card.update(
      {
        taskstatus: body.newstatus,
      },
      {
        where: { taskname: body.taskname },
      }
    );
    console.log(taskstatus);
    res.send(taskstatus);
  } catch (error) {
    console.log(error);
  }
});

router.post('/category', async (req, res) => {
  try {
    const body = req.body;
    console.log('Body >>>>>> ', body);
    let category = await Card.update(
      {
        categoryname: body.newcategory,
      },
      {
        where: { taskname: body.taskname },
      }
    );
    console.log(category);
    res.send(category);
  } catch (error) {
    console.log(error);
  }
});

router.post('/categorychange', async (req, res) => {
  try {
    const body = req.body;
    console.log('Body >>>>>> ', body);
    let category = await Card.update(
      {
        categoryname: body.newcategory,
      },
      {
        where: { categoryname: body.oldcategory },
      }
    );
    console.log(category);
    res.send(category);
  } catch (error) {
    console.log(error);
  }
});

router.delete('/', async (req, res) => {
  try {
    const body = req.body;
    console.log('Body >> ', body);
    const card = await Card.destroy({
      where: {
        cardid: body.id,
      },
    });
    res.json({ card });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
