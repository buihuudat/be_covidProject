const mongoose = require("mongoose");

const tagsModel = new mongoose.Schema({
  name: String,
});

module.exports = mongoose.Schema("Tag", tagsModel);
