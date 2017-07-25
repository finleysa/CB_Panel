var five = require("johnny-five");
var board = new five.Board({
  port: "COM1"
});

exports.address = 0x00;
exports.register = 0x00;
exports.breakerNumber = 0x00;

exports.change = (data, cb) => {
  console.log(data);
  exports.address = data.address;
  exports.register = data.register;
  exports.breakerNumber = data.breakerNumber;
  cb();
}

board.on("ready", function () {
  console.log('Arduino is ready!');
  this.io.i2cConfig();
  this.io.i2cWrite(0x20, 0x00, 0x00);
  this.io.i2cWrite(0x20, 0x01, 0x00);
  this.io.i2cWrite(0x21, 0x00, 0x00);

  var that = this;
  var waiting = false;

  this.loop(500,() => {
    if(waiting ==false){
      that.io.i2cWrite(exports.address, exports.register, [exports.breakerNumber]);
    }
    if(exports.breakerNumber != 0x00 && waiting == false) {
      waiting = true;
      setTimeout(() => {
        exports.breakerNumber = 0x00;
        that.io.i2cWrite(exports.address, exports.register, [exports.breakerNumber]);
        waiting = false;
      }, 4000);
    }
  });
});
