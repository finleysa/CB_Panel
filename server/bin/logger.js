const winston = require('winston');

exports.connect = () => {
  try{
    global.logger = new (winston.Logger)({
      transports: [
        new (winston.transports.Console)(),
        new (winston.transports.File)({ filename: 'webmap.log' })
      ]
    });
  }
  catch(err)
  {
    console.log('Could not start Winston Logger: ' + err);
  }
};
