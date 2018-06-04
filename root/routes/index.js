// wiki.js - Wiki route module.

var express = require('express');
var router = express.Router();

// Home page route.
router.get('/', function (req, res) {
  res.redirect('http://www.philosophersmag.com')
});



module.exports = router;