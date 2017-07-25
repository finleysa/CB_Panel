const SerialPort = require('serialport');
var io = require('socket.io');

exports.SocketServer = (app, server) => {
  io = io(server)
}

SerialPort.list(function (err, ports) {

});
