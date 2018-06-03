var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var TextSchema = new Schema(
  {
    text_string: {type: String, required: true},
  }
);

//Export model
module.exports = mongoose.model('Text', TextSchema);