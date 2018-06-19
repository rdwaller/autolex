
//const app = express();
const express = require('express');
const router = express.Router();
const Signature = require('../models/signature.js')

// === ROOT DIRECTORY  ===//

router.get('/', function(req,res) {
  res.json('you did it');
  console.log('GET request received');
});

// === //

// === GET ALL SIGNATURES === //
router.get('/api/signatures', function(req, res) {
  Signature.find({}).then(eachOne => {
    res.json(eachOne);
    console.log('GET request received');
  })
});

// === //

// === POST NEW SIGNATURE == //


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



/*

// wiki.js - Wiki route module.

var express = require('express');
var router = express.Router();

// Home page route.
router.get('/', function (req, res) {
  console.log('index router activated')
  //res.redirect('http://www.philosophersmag.com')
});

module.exports = router;

*/