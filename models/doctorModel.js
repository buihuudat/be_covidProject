const mongoose = require("mongoose");

const doctorModel = new mongoose.Schema(
  {
    name: String,
    position: {
      type: mongoose.Types.ObjectId,
      ref: "DoctorPosition",
      required: true,
    },
    note: String,
    avatar: {
      type: String,
      default:
        "https://res.cloudinary.com/ddtagvynp/image/upload/v1684056751/doctor_ldhitt.png",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Doctor", doctorModel);
