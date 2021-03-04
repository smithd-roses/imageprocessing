const express = require('express');
const passImage = require('../');

var app = express();

app.get('/', async (req, res) => {
  try {
    res.contentType('image/x-png');
    let stream = await passImage('https://steamuserimages-a.akamaihd.net/ugc/1676995131621784740/D3EDB9D1D91D8243B8F31E07CAD55CCB0CE35960/');
    stream.pipe(res);
  } catch (err) {
    res.contentType('text/plain');
    res.status(500).send('Cannot process image');
  }
});

app.get('/err', async (req, res) => {
  try {
    res.contentType('image/x-png');
    let stream = await passImage('');
    stream.pipe(res);
  } catch (err) {
    res.contentType('text/plain');
    res.status(500).send('Cannot process image');
  }
});

app.listen(3000);
