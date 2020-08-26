const express = require("express");
const router = express.Router();
const monk = require("monk");

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
