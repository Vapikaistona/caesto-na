var mongoose = require('mongoose');

module.exports = mongoose.model('Race',{
  active: Boolean,
  name: String
});
