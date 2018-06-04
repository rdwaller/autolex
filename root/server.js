const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
const indexRouter = require('./routes/index.js');
const Text = require ('./models/text.js');

const app = express();
const port = process.env.PORT || 5000;

//START MONGOOSE

//Set up default mongoose connection

const dbUri = process.env.DB_URI;

mongoose.connect(dbUri);
//Get Mongoose to use the global promise library
mongoose.Promise = global.Promise;
//Get the default connection
var db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error'));

var genericText = new Text({ content: 'Who looks outside, dreams; who looks inside, awakes.'});

genericText.save(function (err, genericText) {
  if (err) return console.error(err);
});

// END MONGOOSE

app.use('/', indexRouter);


app.listen(port, () => console.log(`Listening on port ${port}`));