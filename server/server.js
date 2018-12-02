const express = require('express');
const app = express();
const routes = require('./routes.js');
const port = process.env.PORT || 5000;
const bodyParser = require('body-parser');

//=== activate bodyParser middleware ===//
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
//=== end activate bodyParser middleware ===//

//=== add Cross Origin Resource Sharing (CORS) header ===//
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
//=== end add Cross Origin Resource Sharing (CORS) header ===//

app.use('/', routes); 

app.listen(port, () => console.log(`Listening on port ${port}`));
