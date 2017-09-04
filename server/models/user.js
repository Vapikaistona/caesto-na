var mongoose = require('mongoose');

module.exports = mongoose.model('User',{
  firstname: String,
  password: String,
  username: String,
  lastname:String,
  lastname2: String,
  gender: String,
  email: String,
  age: Number,
  lvl: Number,
  confirmed: Boolean,
  decks:[]
});
