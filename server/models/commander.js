var mongoose = require('mongoose');

module.exports = mongoose.model('Commander',{
  cardname: String,
  race: String,
  habilities: String,
  created_by:String,
  modified_by: String,
  created: String,
  modified: String,
  resources: Number,
  life: Number,
  movement: Number
});
