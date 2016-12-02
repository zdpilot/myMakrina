/**
 * Created by yeoman generator-makrina 0.4.1 on 2/12/2016.
 */
var mongoose = require('./mongoose');
var session = require('express-session');
var MongoStore = require('connect-mongo')(session);

var sessionConfig = function() {
  return session({
    secret: 'b136c239-4c1f-4686-bb24-6316057a2273',
    resave: false,
    saveUninitialized: false,
    store: new MongoStore({
      mongooseConnection: mongoose.connection,
      collection: 'session',
      ttl: 24 * 60 * 60 // 1 day
    })
  });
};

module.exports = sessionConfig;
