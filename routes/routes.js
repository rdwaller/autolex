const express = require('express');
const router = express.Router();
const config = require('../config.js');

//=== CONFIGURE OXFORD DICTIONARY AUTHENTICATION ===//

const Dictionary = require("oxford-dictionary");

const configuration = {
  app_id : config.app_id,
  app_key : config.app_key,
  source_lang : config.source_lang,
};
  
  const dict = new Dictionary(configuration);

//=== END CONFIGURE OXFORD DICTIONARY AUTHENTICATION ===//

router.get('/oxford_api/:word', (req, res, next) => {

  const word = req.params.word;
  const getRoot = dict.inflections(word);
  getRoot.then(inflectionData => {
    const rootWord = inflectionData['results'][0]['lexicalEntries'][0]['inflectionOf'][0]['text'];
    const lookupRoot = dict.definitions(rootWord);
    lookupRoot.then(definitionData => {
      res.json(definitionData);
    })
  });
});

module.exports = router;