var mongoose = require('mongoose');

module.exports = mongoose.model('Deck',{
  name: String,
  race: String,
  description: String,
  commander: String,
  troops:[],
  created_by:String,
  modified_by: String,
  created: String,
  modified: String,
});
