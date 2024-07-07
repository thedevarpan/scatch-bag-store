const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    fullname: {
        type: String,
        required: true,
    },

    email: {
        type: String,
        required: true,
        trim: true,
    },

    password: {
        type: String,
        // required: true,
        trim: true,
    },

    cart: {
        type: Array,
        default: [],
    },

    orders: {
        type: Array,
        default: [],
    },

    contact: {
        type: Number,
        // required: true,
    },

    picture: {
        type: String,
        // required: true,
    },

})

module.exports = mongoose.model('user', userSchema);