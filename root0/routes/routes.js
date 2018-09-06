const express = require('express');
const app = express();
const router = express.Router();
//const mongoose = require('mongoose');
//const TextInput = require('../models/textModel.js');

const port = process.env.PORT || 5000;
const bodyParser = require('body-parser');

// SET bodyParser MIDDLEWARE //
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

//END SET bodyParser MIDDLEWARE //

// CONFIGURE OXFORD DICTIONARY AUTHENTICATION //
  const Dictionary = require("oxford-dictionary");
  
  const config = {
    app_id : "101f8bca",
    app_key : "03895f27fbe4428f3906e604a23e82f3",
    source_lang : "en"
  };
  
  const dict = new Dictionary(config);
// END CONFIGURE OXFORD DICTIONARY AUTHENTICATION //


router.post('/textSubmissions', function(req, res) {

  TextInput.create({
    submittedText: req.body.textSubmission
  }).then(console.log('POST request received'));
  
});

router.get('/textSubmissions', function(req, res) {
  console.log('GET request received');
});

router.get('/dictionary_test/:wordId', (req, res, next) => {
  const lookup = dict.find("apple");
  lookup.then(result => {
    console.log(result);
    res.json(result);
  }, err => {
    console.log(err);
    res.sendStatus(500);
  });
});

module.exports = router;

/* CODE THAT FINDS A DEFINITION 
wordDef =  res['results'][0]['lexicalEntries'][0]['entries'][0]['senses'][0]['definitions'];
}
*/