var duinoFive = ('../bin/duinofive');

module.exports = RelayRequest;

function RelayRequest(data, cb){
  this.address = data.address || 0x00;
  this.breakerNumber = data.breakerNumber || 0x00;
  this.register = data.register || 0x00;
  this.duration = data.duration || 5;
  this.port = data.port || "COM1";
}
//
// RelayRequest.sendRequest = () => {
//   console.log(this)
//   duinoFive.change(this);
// }
