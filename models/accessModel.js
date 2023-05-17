const mongoose = require("mongoose");

const accessModel = new mongoose.Schema({
  count: {
    type: Number,
    default: 0,
  },
});

module.exports = mongoose.model("Access", accessModel);
