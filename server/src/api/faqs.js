const express = require("express");
const router = express.Router();

// Reads all the posts
router.get("/", (req, res, next) => {
  res.json({
    message: "Hi read all",
  });
});
router.get("/:id", (req, res, next) => {
  res.json({
    message: "Hi read one",
  });
});
router.post("/:id", (req, res, next) => {
  res.json({
    message: "Hi create one",
  });
});
router.put("/:id", (req, res, next) => {
  res.json({
    message: "Hi update one",
  });
});
router.delete("/:id", (req, res, next) => {
  res.json({
    message: "Hi delete one",
  });
});

module.exports = router;
