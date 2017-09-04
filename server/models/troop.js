var mongoose = require('mongoose');

module.exports = mongoose.model('Troop',{
  cardname: String,
  type: String,
  race: String,
  habilities: String,
  created_by:String,
  modified_by: String,
  created: String,
  modified: String,
  cost: Number,
  life: Number,
  movement: Number,
  attack: Number
});
