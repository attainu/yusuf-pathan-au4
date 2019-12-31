const mongoose = require(`mongoose`);

const cartSchema = new mongoose.Schema({
    cartname: {
        type: String,
        required: true
    },
    itemname: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    priceperitem: {
        type: Number,
        required: true
    }
}, {
    collection: `cart`
});

const Cart = mongoose.model(`Cart`, cartSchema);

module.exports = Cart;