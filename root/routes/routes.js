const express = require('express');
const app = express();
const router = express.Router();

//=== CONFIGURE OXFORD DICTIONARY AUTHENTICATION ===//

  const Dictionary = require("oxford-dictionary");
  
  const config = {
    app_id : "101f8bca",
    app_key : "03895f27fbe4428f3906e604a23e82f3",
    source_lang : "en"
  };
  
  const dict = new Dictionary(config);

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