const Cart = require(`./../models/Cart.js`);

const Controller = {};

Controller.create = (req, res) => {
  let data = req.body;
  console.log(data);

  Cart.create(
    {
      cartname: data.cartname,
      itemname: data.itemname,
      quantity: data.quantity,
      priceperitem: data.priceperitem
    },
    (error, response) => {
      if (error) {
        return res.status(500).send({
          status: false,
          message: `failed to create cart`
        });
      }

      return res.status(200).send({
        status: true,
        message: `Success`,
        data: response
      });
    }
  );
};

Controller.retrieve = (req, res) => {
  let data = req.body;
  console.log(data);

  Cart.find({cartname: data.cartname}, (error, response) => {
  if (error) {
    return res.status(500).send({
      status: false,
      message: `failed to retrieve value`,
      error: error
    });
  }

  return res.status(200).send({
    status: true,
    message: `Success`,
    data: response
  });
}
)}

Controller.update = (req, res) => {
  let data = req.body;

  Cart.update({cartname: data.cartname}, (error, response) => {
  if (error) {
    return res.status(500).send({
      status: false,
      message: `wrong cartname`
    });
  }

  return res.status(200).send({
    status: true,
    message: `Success`,
    data: response
  });
}
)}

Controller.remove = (req, res) => {
  let data = req.body;

  Cart.deleteOne({cartname: data.cartname}, (error, response) => {
  if (error) {
    return res.status(500).send({
      status: false,
      message: `failed to delete value`
    });
  }

  return res.status(200).send({
    status: true,
    message: `Success`,
    data: response
  });
}
)}

module.exports = Controller;
