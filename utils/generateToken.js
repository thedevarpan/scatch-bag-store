const jwt = require("jsonwebtoken");

const genereateToken = (user) => {
    // console.log(process.env.JWT_KEY)
    return jwt.sign({ email: user.email, id: user._id }, process.env.JWT_KEY);

}

module.exports.genereateToken = genereateToken;