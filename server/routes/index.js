const express = require('express');
const router = express.Router();
const duino = require('../bin/duinoFive');
const RelayRequest = require('../models/relayRequest');
global.connectedToDuino = false;

router.get('/', function(req, res, next) {
  res.status(200).sendFile('/dist/index.html');
});

router.post('/duinostart', function(req, res) {
  let port = req.body.port;
  duino.start(port, (cb) => {
    if(cb.connected = true) {
      global.connectedToDuino = true;
      res.status(200).send(cb);
    } else {
      global.connectedToDuino = false;
      res.status(400).send(cb);
    }
  });
});

router.post('/popbreaker', function(req, res) {
  let relayRequest = new RelayRequest(req.body);
  duino.change(relayRequest, () => res.status(200).send('Success'));
})

module.exports = router;
