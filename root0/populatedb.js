#! /usr/bin/env node

console.log('This script adds a text to the db - e.g.: populatedb mongodb://your_username:your_password@your_dabase_url');

// Get arguments passed on command line
var userArgs = process.argv.slice(2);
if (!userArgs[0].startsWith('mongodb://')) {
    console.log('ERROR: You need to specify a valid mongodb URL as the first argument');
    return
}

const async = require('async')
const Text = require('./models/text')


const mongoose = require('mongoose');
const mongoDB = userArgs[0];
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
const db = mongoose.connection;
mongoose.connection.on('error', console.error.bind(console, 'MongoDB connection error:'));

var texts = []

function textCreate(text_string, cb) {
  textdetail = {text_string:text_string }
  
  var text = new Text(textdetail);
       
  text.save(function (err) {
    if (err) {
      cb(err, null)
      return
    }
    console.log('New Text: ' + text);
    texts.push(text)
    cb(null, text)
  }  );
}


function createTexts(cb) {
    async.parallel([
        function(callback) {
          textCreate('Who looks outside, dreams; who looks inside, awakes.', callback);
        }
      ],
      cb);
}


async.series([
    createTexts
],
// Optional callback
function(err, results) {
    if (err) {
        console.log('FINAL ERR: '+err);
    }
    else {
        console.log('Texts created');
    }
    // All done, disconnect from database
    mongoose.connection.close();
});