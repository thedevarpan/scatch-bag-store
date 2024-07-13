const express = require("express");
const router = express.Router();
const { has } = require("config");
const { use } = require("./ownersRouter");
const {registerUser, loginUser} = require("../controllers/authController");



router.get("/", function (req, res) {
    res.send("Hey");
});

router.post("/register", registerUser);
router.post("/login", loginUser);

module.exports = router;