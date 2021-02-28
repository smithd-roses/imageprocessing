const express = require('express');
const passImage = require('../');

var app = express();

app.get('/', async (req, res) => {
  res.contentType('image/x-png');
  let stream = await passImage('https://steamuserimages-a.akamaihd.net/ugc/1676995131621784740/D3EDB9D1D91D8243B8F31E07CAD55CCB0CE35960/');
  stream.pipe(res);
});

app.listen(3000);
