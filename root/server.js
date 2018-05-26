const express = require('express');
const mongoose = require('mongoose');

const app = express();
const port = process.env.PORT || 5000;

//START MONGOOSE

//Set up default mongoose connection
var mongoDB = 'mongodb://rdwaller:DonPal1d07@ds129540.mlab.com:29540/autolex'; 
mongoose.connect(mongoDB);
//Get Mongoose to use the global promise library
mongoose.Promise = global.Promise;
//Get the default connection
var db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error'));

// Define a schema
var Schema = mongoose.Schema;

var SomeModelSchema = new Schema ({
  name : String
});

// Compile model from schema
var SomeModel = mongoose.model('SomeModel', SomeModelSchema );

// Create an instance of model SomeModel
var awesome_instance = new SomeModel({ name: 'awesome' });

// Save the new model instance, passing a callback
awesome_instance.save(function (err) {
  if (err) return handleError(err);
  // saved!
});
  // here is a way to create and save at the same time:
SomeModel.create({ name: 'also_awesome' }, function (err, awesome_instance) {
  if (err) return handleError(err);
    // saved!
});

// END MONGOOSE


app.get('/api/hello', (req, res) => {
  res.send({ express: 'Hello From Express' });
});

app.listen(port, () => console.log(`Listening on port ${port}`));