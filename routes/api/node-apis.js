/**
 * Created by yeoman generator-makrina:model 0.4.1 on 2/12/2016.
 */
var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Node = mongoose.model('Node');
var Promise = require('bluebird');

var status = {
  ok: 200,
  multipleChoices: 300,
  unauthorized: 401,
  accessDenied: 403,
  notFound: 404,
  notPermitted: 409,
  requestEntityTooLarge: 419,
  badGateway: 502 // database error
};

router.get('/', function(req, res, next) {
  if (req.query.nodeId) {
    Node.findById(req.query.nodeId).exec(function(err, node) {
      if (err || !node) return res.status(status.notFound).send('Not found.');
      res.json(node);
    });
  }
  else {
    Node.find().populate('parent').exec(function(err, nodes) {
      if (err) return next(err);
      res.json(nodes);
    });
  }
});

router.post('/', function(req, res, next) {
  if (!req.session.login) return res.redirect('/admin/login');
  Node.findByIdAndUpdate(req.body._id, req.body).exec()
    .then(function (node) {
      if (!node) {
        node = new Node(req.body);
        return node.save();
      }
      return new Promise.resolve(node);
    })
    .then(function (node) {
      res.json(node);
    })
    .catch(function (err) {
      return next(err);
    });
});

router.delete('/', function(req, res, next) {
  if (!req.session.login) return res.redirect('/admin/login');
  Node.findByIdAndRemove(req.query.nodeId, function (err, node) {
    if (err) return next(err);
    res.json(node);
  });
});

module.exports = router;
