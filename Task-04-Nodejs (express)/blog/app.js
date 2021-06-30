/***********************************************
 *  Import modules
 **********************************************/
var createError = require("http-errors");
var express = require("express");
// var path = require("path");

/***********************************************
 *  Dependencies
 **********************************************/
var cookieParser = require("cookie-parser");
var logger = require("morgan");

/***********************************************
 *  import router module
 **********************************************/
var articlRouter = require("./routes/article");

/***********************************************
 *  Start up an instance of app
 **********************************************/
var app = express();

/***********************************************
 *  view engine setup
 **********************************************/

// app.set("views", path.join(__dirname, "views"));
// app.set("view engine", "jade");

/***********************************************
 *  Format Requset Terminal
 **********************************************/
app.use(logger("dev"));
app.use(express.json());
/***********************************************
 *  Middleware
 **********************************************/
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

/***********************************************
 *  Initialize the main project folder
 **********************************************/
// app.use(express.static(path.join(__dirname, "public")));
/***********************************************
 * Set-ROUTES! Request
 **********************************************/
app.use("/article", articlRouter);

/***********************************************
 * catch 404 and forward to error handler
 **********************************************/
app.use(function (req, res, next) {
  next(createError(404));
});

/***********************************************
 * error handler
 **********************************************/
app.use(function (err, req, res, next) {
  console.log(err);
  res.status(err.status || 500);
  res.json({ err });
});

//export module
module.exports = app;
