var moment = require('moment');

console.log(moment().format());

var now = moment();
console.log('current timestamp', now.unix());

var timestamp = 1491234104;
var currentMomemnt = moment.unix(timestamp);
console.log('current moment', currentMomemnt.format('MMMM Do, YYYY @ h:mm A'));
