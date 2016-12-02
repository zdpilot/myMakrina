/**
 * Created by yeoman generator-makrina:model 0.4.1 on 2/12/2016.
 */
var mongoose = require('mongoose');
var types = mongoose.Schema.Types;

var nodeSchema = new mongoose.Schema({
  name: String
});

module.exports = mongoose.model('Node', nodeSchema);
