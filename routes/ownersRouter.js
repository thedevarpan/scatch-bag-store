const express  = require("express");
const router = express.Router();
const ownerModel = require('../models/owner-model');



router.get("/", function (req, res) {
    res.send("Hey");
});

// console.log(process.env.NODE_ENV)
// $env:NODE_ENV="development" 
// npx nodemon app.js

router.get("/create", function (req, res) {
    res.send("Hey");
});




module.exports = router;