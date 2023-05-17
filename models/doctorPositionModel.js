const mongoose = require("mongoose");

const doctorPositionModel = new mongoose.Schema({
  position: String,
});

module.exports = mongoose.model("DoctorPosition", doctorPositionModel);
