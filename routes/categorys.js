const express = require("express");
const router = express.Router();
const category = require("../models/category");

router.get("/add", async function (req, res, next) {
  res.sets;
  const add = await category.create({
    category: req.query.category,
    icon: req.query.icon,
    added_time: Date.now(),
  });

  res.send(JSON.stringify({ ok: true, item: add }));
});

module.exports = router;
