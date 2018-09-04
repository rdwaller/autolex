const express = require('express');
const router = express.Router();
//const mongoose = require('mongoose');
const TextInput = require('../models/textModel.js');

const app = express();
const port = process.env.PORT || 5000;
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

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

router.get('/dictionary_test', function(req, res) {
  console.log('GET request received');


  // OXFORD DICTIONARY USE TEST  //

  const lookup = dict.find("awesome");

  lookup.then(function(res) {
      console.log(res);
  },
  function(err) {
      console.log(err);
  });

  // END OXFORD DICTIONARY USE TEST //  
});

module.exports = router;