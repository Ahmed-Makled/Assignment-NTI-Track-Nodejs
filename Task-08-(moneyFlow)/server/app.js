var createError = require('http-errors');
var express = require('express');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const authRoutes = require('./routes/auth.routes')
const swiftRoutes = require('./routes/swift.routes')
const cors = require('cors')
const { connectDB } = require('./db/connect');
connectDB()

var app = express();


app.use(cors())
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/auth', authRoutes)
app.use('/swift', swiftRoutes)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  console.log(err)
  res.json({err})
});

module.exports = app;
