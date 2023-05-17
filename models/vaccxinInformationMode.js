const mongoose = require("mongoose");

const vaccxinInformationModel = new mongoose.Schema(
  {
    name: String,
    description: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("VaccxinInformation", vaccxinInformationModel);
