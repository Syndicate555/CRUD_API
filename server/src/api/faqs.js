const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
  res.json({
    message: "Hi read all",
  });
});
router.post("/:id", (req, res, next) => {});
router.put("/:id", (req, res, next) => {});
router.delete("/:id", (req, res, next) => {});
