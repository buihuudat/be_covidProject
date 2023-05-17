const userModel = require("../models/userModel");
const jwt = require("jsonwebtoken");

const TOKEN_SECRET_KEY = process.env.TOKEN_SECRET_KEY;

const getToken = (id) =>
  jwt.sign({ id }, TOKEN_SECRET_KEY, {
    expiresIn: "24h",
  });

exports.authController = {
  login: async (req, res) => {
    const { phone } = req.body;
    try {
      const user = await userModel.findOne({ phone }).select("-password");
      return res.status(200).json({ token: getToken(user._id) });
    } catch (err) {
      return res.status(500).json(err);
    }
  },

  register: async (req, res) => {
    try {
      const user = await userModel.create(req.body);
      return res.status(201).json({ token: getToken(user._id) });
    } catch (err) {
      return res.status(500).json(err);
    }
  },

  verifyToken: (req, res) => {
    return res.status(200).json({ user: req.user });
  },
};
