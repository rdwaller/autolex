const express = require('express');
const router = express.Router();

//=== CONFIGURE OXFORD DICTIONARY AUTHENTICATION ===//
const Dictionary = require("oxford-dictionary");
const config = require('./config.js');
const configuration = {
  app_id : config.app_id,
  app_key : config.app_key,
  source_lang : config.source_lang,
};
const dict = new Dictionary(configuration);
//=== END CONFIGURE OXFORD DICTIONARY AUTHENTICATION ===//

router.get('/oxford_api/:word', (req, res, next) => {
  const word = req.params.word;
  const getRoot = new Promise((resolve, reject) => {
    resolve(dict.inflections(word));
  });
  getRoot.then(inflectionData => {
    const rootWord = inflectionData['results'][0]['lexicalEntries'][0]['inflectionOf'][0]['text'];
    const lookupRoot = dict.definitions(rootWord);
    return lookupRoot;
    throw "Could not look up root word";
  }).catch(e => {
    console.log(e);
  }).then(definitionData => {
    return res.json(definitionData);
    throw "Could not look up definition data";
  }).catch(e => {
    console.log(e);
  })
});

module.exports = router;