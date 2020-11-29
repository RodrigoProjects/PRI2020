var createError = require('http-errors');
var express = require('express');
var path = require('path');
var logger = require('morgan');
const formidableMiddleware = require('express-formidable');

// ---------- MONGODB CONNECTION ----------

var mongoose = require('mongoose')

var mongoDB = 'mongodb://127.0.0.1/PRI2020'

mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true})

var db = mongoose.connection

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error...'));
db.once('open', function() {
    console.log("Conexão ao MongoDB realizada com sucesso...")
});

// ----------------------------------------

var indexRouter = require('./routes/index');
const { findOne } = require('./models/aluno');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(formidableMiddleware({
  uploadDir: 'public/avatars/',
},
[
  {
    event: 'fileBegin',
    action: function (req, res, next, name, file) {

      file.path = file.path + "." + file.type.split('/')[file.type.split('/').length - 1]
      
    }
  }
]));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;