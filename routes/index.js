const express = require("express");
const question = require("../models/question");
var router = express.Router();

/* GET home page. */
router.get("/", async function (req, res, next) {
  res.render("index", { title: "asd" });
});

module.exports = router;
