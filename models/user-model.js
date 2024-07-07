const mongoose = require('mongoose');
mongoose.connect("mongodb://127.0.0.1/27017");

const userSchema = mongoose.Schema({
    fulname: {
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
        required: true,
        trim: true,
    },

    cart: {
        type: Array,
        default: [],
    },

    isadmin: {
        type: Boolean,
        default: false,
    },

    orders: {
        type: Array,
        default: [],
    },

    contact: {
        type: Number,
        required: true,
    },

    picture: {
        type: String,
        required: true,
    },

})

module.exports = mongoose.model('user', userSchema);