const mongoose = require("mongoose");

const paymentsModel = new mongoose.Schema({
  name: String,
});

module.exports = mongoose.model("Payment", paymentsModel);
