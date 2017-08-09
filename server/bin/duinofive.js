var address, register, breakerNumber, popDuration;


exports.change = (data, cb) => {
  console.log(data);
  address = data.address;
  register = data.register;
  breakerNumber = data.breakerNumber;
  popDuration = data.popDurationEvent;
  cb();
}

exports.start = (port, cb) => {
  try {
    let five = require("johnny-five");
    let board = new five.Board({
      port: port
    });

    address = 0x00;
    register = 0x00;
    breakerNumber = 0x00;

    board.on("ready", function () {
      cb({connected: true});

      console.log('Arduino is ready!');
      this.io.i2cConfig();
      this.io.i2cWrite(0x20, 0x00, 0x00);
      this.io.i2cWrite(0x20, 0x01, 0x00);
      this.io.i2cWrite(0x21, 0x00, 0x00);

      let that = this;
      let waiting = false;

      this.loop(200, () => {
        if (waiting === false) {
          that.io.i2cWrite(address, register, [breakerNumber]);
        }
        if (breakerNumber !== 0x00 && waiting === false) {
          waiting = true;
          setTimeout(() => {
            breakerNumber = 0x00;
            that.io.i2cWrite(address, register, [breakerNumber]);
            waiting = false;
          }, popDuration);
        }

      }); // end loop
    }); // board.on(ready)

    board.on("exit", function (event) {
      console.log("%s sent a 'fail' message: %s", event.class, event.message);
    });

  } catch (e) {
    cb({connected: false});
    console.error(e);
  }
}
