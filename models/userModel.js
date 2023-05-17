const mongoose = require("mongoose");

const userModel = new mongoose.Schema(
  {
    fullName: {
      firstName: String,
      lastName: String,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    phone: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
    },
    address: {
      type: String,
      default: "",
    },
    sex: {
      type: String,
      enum: ["male", "female", "other"],
      default: "male",
    },
    avatar: {
      type: String,
      default:
        "https://res.cloudinary.com/ddtagvynp/image/upload/v1684052315/pngegg_3_jguori.png",
    },
    role: {
      type: String,
      enum: ["user", "admin", "staff", "doctor", "nurse", "boss"],
      default: "user",
    },
    activeStatus: {
      type: Boolean,
      default: 1,
    },
    lastActiveAt: {
      type: Date,
      default: Date.now(),
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userModel);
