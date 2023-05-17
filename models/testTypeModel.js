const mongoose = require("mongoose");

const testTypeModel = new mongoose.Schema(
  {
    images: Array,
    typeName: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    price: Number,
  },
  { timestamps: true }
);

module.exports = mongoose.model("TestType", testTypeModel);
