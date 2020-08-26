const express = require("express");
const router = express.Router();
const monk = require("monk");
const config = require("config");
const db = config.get("mongoURI");
const mongoose = require("mongoose");
const connectDB = () => {
  mongoose
    .connect(db, {
      useNewURLParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
    })
    .then(() => console.log("mongoDB connected"))
    .catch((err) => {
      console.error(err.message);
      process.exit(1);
    });
};

const faqs = db.get("faqs");
// Reads all the posts
router.get("/", (req, res, next) => {
  res.json({
    message: "Hi read all",
  });
});

// Reads one post

router.get("/:id", async (req, res) => {
  try {
    const items = await faqs.find({});
    res.json(items);
  } catch (err) {
    console.error(err);
  }
});

// creates one post

router.post("/:id", (req, res, next) => {
  res.json({
    message: "Hi create one",
  });
});

// updates one post

router.put("/:id", (req, res, next) => {
  res.json({
    message: "Hi update one",
  });
});

// Deletes one post
router.delete("/:id", (req, res, next) => {
  res.json({
    message: "Hi delete one",
  });
});

module.exports = router;
