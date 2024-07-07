const express = require("express");
const router = express.Router();
const ownerModel = require('../models/owner-model');


// console.log(process.env.NODE_ENV)
// $env:NODE_ENV="development" 
// $env:NODE_ENV="production" 
// npx nodemon app.js

if (process.env.NODE_ENV === "development") {
    router.post("/create", async function (req, res) {
        let owners = await ownerModel.find();
        if (owners.length > 0) {
            return res.status(504).send("Don't have to permisson create owners");
        }

        let {fullname, email, password} = req.body
        let createOwner = await ownerModel.create({
            fullname, 
            email, 
            password,
        })

        res.status(201).send(createOwner);
    });
};


router.get("/", function (req, res) {
    res.send("Hey");
});

module.exports = router;