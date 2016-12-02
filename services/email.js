/**
 * Created by yeoman generator-makrina 0.4.1 on 2/12/2016.
 */
var Promise = require('bluebird');
var nodemailer = require('nodemailer');

var transporter = Promise.promisifyAll(
  nodemailer.createTransport({
    host: '',
    auth: {
      user: '',
      pass: ''
    },
    secure: true
    // tls: {rejectUnauthorized: false}
  })
);

module.exports = transporter;
