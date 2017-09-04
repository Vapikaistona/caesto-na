var mongoose = require('mongoose');

module.exports = mongoose.model('CardType',{
  active: Boolean,
  name: String
});
