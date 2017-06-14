var express = require('express');
var router = express.Router();
var mime = require('mime');
var path = require('path');
var duino = require('../bin/duinoFive');
var RelayRequest = require('../models/relayRequest');

router.get('/', function(req, res, next) {
  res.status(200).sendFile('/dist/index.html');
});

router.post('/popbreaker', function(req, res, next) {
  var relayRequest = new RelayRequest(req.body);
  duino.change(relayRequest, () => res.status(200).send('Success'));
})
module.exports = router;
