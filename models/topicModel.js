const mongoose = require("mongoose");

const topicModel = new mongoose.Schema(
  {
    name: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Topic", topicModel);
