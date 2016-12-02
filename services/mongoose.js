/**
 * Created by yeoman generator-makrina 0.4.1 on 2/12/2016.
 */
var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
require('../models/node-api');

mongoose.connect('mongodb://127.0.0.1/knobleInd', function(err) {
  if (err) console.log('connection error', err);
  else console.log('connection successful');
});

module.exports = mongoose;
