const express = require('express');
const router = express.Router();
//const mongoose = require('mongoose');
const TextInput = require('../models/textModel.js');

const app = express();
const port = process.env.PORT || 5000;
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

router.get('/', function(req, res) {
    console.log('GET request received');
});

router.post('/textSubmissions', function(req, res) {

  TextInput.create({
    submittedText: req.body.textSubmission
  }).then(console.log('POST request received'));
  
});

module.exports = router;