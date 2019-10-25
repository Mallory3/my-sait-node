//from slides
const canadianDollar = 0.76;
function roundTwo(amount) {
return Math.round(amount * 100) / 100;
}

exports.canadianToUS = canadian => roundTwo(canadian * canadianDollar);
exports.USToCanadian = us => roundTwo(us / canadianDollar);

//original
// Load currency module, basically doing all work, wrapping code in iffy
const currency = require("./currency");

// Use functions from currency module
console.log(`50 Canadian dollars equals ${currency.canadianToUS(50)} US dollars.`);

console.log(`50 US dollars equals ${currency.USToCanadian(50)} Canadian dollars.`);
