var mongoose = require('mongoose');
var Commander = require('./commander')
module.exports = mongoose.model('Deck',{
  name: String,
  race: String,
  description: String,
  commander: {},
  troops:[],
  created_by:String,
  modified_by: String,
  created: String,
  modified: String,
});
