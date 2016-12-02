/**
 * Created by yeoman generator-makrina 0.4.1 on 2/12/2016.
 */
var express = require('express');
var router = express.Router();
var pack = require('../package.json');

/* GET home page. */
router.get('/:locale(el|en)?', function(req, res, next) {
  if (req.params.locale) req.setLocale(req.params.locale);
  res.render('index', {
    title: 'Knoble Industries',
    lang: req.getLocale(),
    description: 'This will provide a platform for contractors and subcontractors to post and bid for jobs, exchange contracts and post payments for completed jobs.',
    version: pack.version
  });
});

// The following works as well
//router.get('/:locale(el|en)?/about', function(req, res, next) {

module.exports = router;
