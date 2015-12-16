var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/tessel', function(){
  console.log('mongo connected');

})

module.exports = mongoose
