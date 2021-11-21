var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const mongoose = require("mongoose");
const session = require("express-session");
const expressLayouts = require("express-ejs-layouts");
const bodyParser = require("body-parser");

mongoose.connect("mongodb://127.0.0.1:27017/panel");

var indexRouter = require("./routes/index");
var questionsRouter = require("./routes/questions");
var categorysRouter = require("./routes/categorys");

var app = express();

// view engine setup

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(expressLayouts);
app.set("layout", path.join(__dirname, "views/app.ejs"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use(
  session({
    secret: "WKMB-YUSUFUSTA",
    resave: false,
    saveUninitialized: true,
  })
);

app.use("/", indexRouter);
app.use("/questions", questionsRouter);
app.use("/categorys", categorysRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

mongoose.connection.on("connected", function () {
  console.log("mongoose connection ready");
});
mongoose.connection.on("error", function () {
  console.log("mongoose connection error");
});
mongoose.connection.on("disconnected", function () {
  console.log("mongoose connection disconnected");
});

module.exports = app;
