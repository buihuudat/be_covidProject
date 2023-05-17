const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");

const tokenDecode = (req) => {
  const bearerHeader = req.headers["authorization"];
  if (bearerHeader) {
    const bearer = bearerHeader.split(" ")[1];
    try {
      const tokenDecoded = jwt.verify(bearer, process.env.TOKEN_SECRET_KEY);
      return tokenDecoded;
    } catch (err) {
      return false;
    }
  } else {
    return false;
  }
};

exports.verifyToken = async (req, res, next) => {
  const tokenDecoded = tokenDecode(req);
  if (tokenDecoded) {
    const user = await userModel.findById(tokenDecoded.id);
    if (!user) return res.status(401).json("Unathorized");
    req.user = user;
    next();
  } else {
    res.status(401).json("Unathorized");
  }
};
