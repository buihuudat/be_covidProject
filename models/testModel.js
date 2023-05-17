const mongoose = require("mongoose");

const testModel = new mongoose.Schema(
  {
    name: String,
    email: String,
    phone: String,
    testType: {
      type: mongoose.Types.ObjectId,
      ref: "TestType",
    },
    price: Number,
    dateOfPayment: Date,
    dateOfTest: Date,
    paymentStatus: {
      type: Boolean,
      default: 0,
    },
    address: String,
    bloodCollectionSite: String, // dia diem lay mau
    payments: {
      type: mongoose.Types.ObjectId,
      ref: "Payment",
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Test", testModel);
