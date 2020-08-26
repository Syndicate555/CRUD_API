const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
  res.json({
    message: "Hi read all",
  });
});
router.post("/:id", (req, res, next) => {
  res.json({
    message: "Hi read one",
  });
});
router.put("/:id", (req, res, next) => {
  res.json({
    message: "Hi update one",
  });
});
router.delete("/:id", (req, res, next) => {
  res.json({
    message: "Hi read all",
  });
});
