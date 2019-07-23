'use strict';
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const hbs = require('hbs');
const mongoose = require('mongoose');

const indexRouter = require('./routes/index');
const celebritiesRouter = require('./routes/celebrities');
const moviesRouter = require('./routes/movies');

const app = express();

mongoose.connect('mongodb://localhost/adriPolRockIt', {
  keepAlive: true,
  useNewUrlParser: true,
  reconnectTries: Number.MAX_VALUE
});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
hbs.registerPartials(path.join(__dirname, '/views/partials'));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/celebrities', celebritiesRouter);
app.use('/movies', moviesRouter);

app.use((req, res, next) => {
    res.status(404);
    res.render('not-found');
  });

  app.use((err, req, res, next) => {
    console.error('ERROR', req.method, req.path, err);
    if (!res.headersSent) {
      res.status(500);
      res.render('error');
    }
  });

module.exports = app;
