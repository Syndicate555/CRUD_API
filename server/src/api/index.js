// This index.js files controls all the routes inside the api folder

const express = require("express");

const faqs = require("./faqs");
const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    message: "API - 👋🌎🌍🌏",
  });
});

// mounting the router
router.use("/faqs", faqs);
module.exports = router;
