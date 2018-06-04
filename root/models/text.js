var mongoose = require('mongoose');

var textSchema = mongoose.Schema ({
  content: String
});

var Text = mongoose.model('Text', textSchema);

/*
var genericText = new Text({ content: 'Who looks outside, dreams; who looks inside, awakes.'});

genericText.save(function (err, genericText) {
  if (err) return console.error(err);
});
*/

//Export model
module.exports = mongoose.model('Text', textSchema);