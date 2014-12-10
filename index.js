var moment = require('moment');

module.exports = function (inputs) {
  var msSinceMidnight = moment.utc().diff(moment.utc({hour: 0}));
  var msPerDay = 24*60*60*1000;
  var index = Math.floor(msSinceMidnight/msPerDay * inputs.length);
  console.log(index);
  return inputs[index];
};
