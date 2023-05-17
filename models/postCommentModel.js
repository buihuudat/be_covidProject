const mongoose = require("mongoose");

const postCommentModel = new mongoose.Schema(
  {
    author: {
      type: mongoose.Types.ObjectId,
      ref: "User",
    },
    content: String,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("PostComment", postCommentModel);
