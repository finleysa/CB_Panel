const SerialPort = require('serialport');
var io = require('socket.io');
const duino = require('./duinofive');

exports.SocketServer = (app, server) => {
  io = io(server);
  io.on('connection', (socket) => {
    console.log('user connected');
    socket.on('GetSerialPorts', getSerialPorts)
    emitDuinoConnectionStatus();
  });
};

function getSerialPorts() {
  SerialPort.list(function (err, ports) {
    console.log("Serial Port stuff", ports);
    if (err) console.error('Get Serialports Error');
    io.emit('EmitPorts', ports)
  });
};

function emitDuinoConnectionStatus() {
  setInterval(() => { io.emit('DuinoStatus', { status: global.connectedToDuino }) }, 2000);
};
