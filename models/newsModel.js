const mongoose = require("mongoose");

const newsModel = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    tags: [
      {
        type: mongoose.Types.ObjectId,
        ref: "Tags",
      },
    ],
    topic: {
      type: mongoose.Types.ObjectId,
      ref: "Topic",
    },
    description: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    author: {
      type: mongoose.Types.ObjectId,
      ref: "User",
    },
    images: Array,
    numberOfReads: {
      type: Number,
      default: 0,
    },
    comments: {
      type: mongoose.Types.ObjectId,
      ref: "PostComment",
    },
  },
  { timestamps: true }
);

newsModel.pre("save", async (next) => {
  const user = await mongoose.model("User").findById(this.author);
  if (user.role === "user") {
    const error = new Error("Author must not be a regular user");
    next(error);
  }
  next();
});

module.exports = mongoose.model("New", newsModel);
