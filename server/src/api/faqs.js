const express = require("express");
const router = express.Router();

// Read All
router.get("/", (req, res, next) => {
  res.json({
    message: "Hello ",
  });
});

// Create
router.post("/:id", (req, res, next) => {
  res.json({
    message: "Hello read one ",
  });
});

// Update
router.put("/", (req, res, next) => {
  res.json({
    message: "Hello ",
  });
});

//Delete
router.delete("/", (req, res, next) => {});
