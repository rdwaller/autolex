//====LIST DEPENDENCIES===//

//const parseurl = require('parseurl');
const path = require('path');
//const expressValidator = require('express-validator');
//const Signature = require('./models/signature.js')
const TextInput = require('./models/textModel.js');
//const url = 'mongodb://localhost:27017/signatures';

const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
const routes = require('./routes/routes.js');
//const Text = require ('./models/text.js');

//=========================//

const app = express();
const port = process.env.PORT || 5000;
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(bodyParser.json()); app.use(bodyParser.urlencoded({ extended: true }));

/* START MONGOOSE */

  //Set up default mongoose connection

const dbUri = process.env.DB_URI;

mongoose.connect(dbUri, function (err, db) {
  if (err) {
    console.log('Unable to connect to the mongoDB server. Error:', err);
  } else {
    console.log('Connection established to', dbUri);
  }
});
  //Get Mongoose to use the global promise library
mongoose.Promise = global.Promise;
  //Get the default connection
var db = mongoose.connection;

  //Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error'));

/* END MONGOOSE */

app.use('/', routes); 


app.listen(port, () => console.log(`Listening on port ${port}`));