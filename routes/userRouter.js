const express = require("express");
const router = express.Router();
const userModel = require("../models/user-model");
const bcrypt = require("bcrypt");
const { has } = require("config");
const jwt = require("jsonwebtoken");
const { use } = require("./ownersRouter");
const { genereateToken } = require("../utils/generateToken");

router.get("/", function (req, res) {
    res.send("Hey");
});

router.post("/register", function (req, res) {
    try {
        let { email, fullname, password } = req.body;

        bcrypt.genSalt(10, function (err, salt) {
            bcrypt.hash(password, salt, async function (err, hash) {
                if (err) {
                    return res.send(err.message);
                }
                else {
                    let user = await userModel.create({
                        email,
                        fullname,
                        password: hash
                    });
                    let token = genereateToken(user);
                    // let token = jwt.sign({ email, id: user._id }, "secretkey");
                    res.cookie("token", token);
                    res.send("user created successfully");
                }
            });
        });

    } catch (err) {
        res.send(err.message)
    }
});


module.exports = router;