const express = require("express");
const question = require("../models/question");
var router = express.Router();

/* GET home page. */
router.get("/", async function (req, res, next) {
  console.log("a");
  console.log(await question.findById(1));
  res.render("index", { baslik: "asd" });
});

module.exports = router;
