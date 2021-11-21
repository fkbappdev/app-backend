const express = require("express");
const router = express.Router();
const question = require("../models/question");
const category = require("../models/category");

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.render("questions/add", { title: "asd" });
});

router.get("/get", async function (req, res, next) {
  if (!req.query.amount || !req.query.category) {
    return res.send("error");
  }
  const amount = req.query.amount;
  const categorys = req.query.category.split("|");
  const questions = await question
    .find({ category: { $in: categorys } })
    .limit(parseInt(amount));

  res.send(JSON.stringify(questions));
});

router.get("/add", async function (req, res, next) {
  const categorys = await category.find({});
  res.render("questions/add", {
    title: "asd",
    categorys: JSON.stringify(categorys),
  });
});

router.post("/add", async function (req, res, next) {
  /*question.create(req.body);*/
  const type = req.body["question-type"];
  const answers = [];

  if (type == "0") {
    Array.from(Object.keys(req.body)).map((c, i) => {
      if (c.startsWith("answer-")) {
        answers.push({
          answer: c,
          is_correct: c == req.body.answer,
        });
      }
    });
  } else {
    answers.push({
      answer: "true",
      is_correct: "answer-true" == req.body.answer,
    });

    answers.push({
      answer: "false",
      is_correct: "answer-false" == req.body.answer,
    });
  }

  const result = await question.create({
    question: req.body.question,
    answers: JSON.stringify(answers),
    category: req.body.category,
    added_time: Date.now(),
    difficulty: req.body.hard,
  });
  res.send(JSON.stringify(result));
});

module.exports = router;
