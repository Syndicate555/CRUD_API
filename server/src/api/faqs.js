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

router.get("/:id", (req, res, next) => {
  res.json({
    message: "Hi read one",
  });
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
