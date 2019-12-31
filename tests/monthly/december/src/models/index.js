const mongoose = require(`mongoose`);

const Cart = require(`./Cart.js`);

connect = () => {
    return mongoose.connect(`mongodb://localhost:27017/test-eagle`, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
}

module.exports = {
    models: {
        Cart: Cart
    },
    connect: connect
};