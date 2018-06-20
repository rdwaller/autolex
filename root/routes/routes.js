
//const app = express();
const express = require('express');
const router = express.Router();
const Signature = require('../models/signature.js')

router.get('/', function(req, res) {
    console.log('GET request received');
});

router.post('/', function(req, res) {
  console.log('POST request received');
});


  /* Signature.create({
    guestSignature: req.body.SignatureOfGuest,
    message: req.body.MessageofGuest,
  }).then(signature => {
    res.json(signature)
    console.log('POST request received');
  });
}); */

// === //

module.exports = router;