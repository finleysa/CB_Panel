const SerialPort = require('serialport');
var io = require('socket.io');

exports.SocketServer = (app, server) => {
  io = io(server);
  io.on('connection', (socket) => {
    console.log('user connected');
    socket.on('GetSerialPorts', exports.getSerialPorts)
  });
};

exports.getSerialPorts = () => {
  SerialPort.list(function (err, ports) {
    console.log("Serial Port stuff", ports);
    if (err) console.error('Get Serialports Error');
    io.emit('EmitPorts', ports)
  });
};
