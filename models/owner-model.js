const mongoose = require('mongoose');

const ownerSchema = mongoose.Schema({
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

    products: {
        type: Array,
        default: [],
    },

    picture: {
        type: String,
        required: true,
    },

    gstin: String,
})

module.exports = mongoose.model('owner', ownerSchema);