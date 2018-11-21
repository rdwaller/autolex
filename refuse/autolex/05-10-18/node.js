
const express = require('express');
const app = express();
const path = require('path');
const formidable = require('formidable');

app.use(express.static(path.join(__dirname)));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + '/index.html'));
});

app.post('/', function(req, res) {
  var form = new formidable.IncomingForm();

  form.parse(req);

  form.on('fileBegin', function(name, file){
    file.path = __dirname + '/uploads/' + file.name;
  });

  form.on('file', function(name, file) {
    console.log('Uploaded ' + file.name);
  });

  res.sendFile(__dirname + '/index.html');

});

app.listen(7001, () => console.log('Example app listening on port 7001!'));