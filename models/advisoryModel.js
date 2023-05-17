const mongoose = require("mongoose");

const advisoryModel = new mongoose.Schema(
  {
    fullName: {
      firstName: String,
      lastName: String,
    },
    sex: {
      type: String,
      enum: ["male", "female", "other"],
      default: "male",
    },
    email: {
      type: String,
    },
    phone: String,
    dateOfAdvisory: Date,
    timeOfAdvisory: Time,
    method: String, //phuong thuc
    note: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Advisory", advisoryModel);
