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


router.get('/oxford_api/:word', (req, res, next) => {

  const word = req.params.word;
  
  //FIND ROOT   
  
  // wordData['data']['results'][0][lexicalEntries][0][inflectionOf][0][text];

  const getRoot = dict.inflections(word);
  getRoot.then(inflectionData => {
    const rootWord = inflectionData['results'][0]['lexicalEntries'][0]['inflectionOf'][0]['text'];
    console.log(rootWord)
    const lookupRoot = dict.definitions(rootWord);
    lookupRoot.then(definitionData => {
      res.json(definitionData);
    })
  });
  
  //INFLECTIONS UNSPECIFIED
  /*
  const lookup = dict.find(word);
  lookup.then(wordData => {
    console.log(wordData);
    res.json(wordData);
  }, err => {
    console.log(err);
    res.sendStatus(500);
  });
  */

});

module.exports = router;

/* CODE THAT FINDS A DEFINITION 
wordDef =  res['results'][0]['lexicalEntries'][0]['entries'][0]['senses'][0]['definitions'];
}
*/