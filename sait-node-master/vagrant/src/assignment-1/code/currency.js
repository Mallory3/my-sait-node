const http = require('http');

http.createServer((request,response) => {

  // Set the response HTTP header with HTTP status and Content
  response.writeHead(200, {"Content-Type": "text/javascript"});
  
  // Send the response body "Hello World"
  response.end();
})


// //from slides
// const canadianDollar = 0.76;
// function roundTwo(amount) {
// return Math.round(amount * 100) / 100;
// }

// exports.canadianToUS = canadian => roundTwo(canadian * canadianDollar);
// exports.USToCanadian = us => roundTwo(us / canadianDollar);

// //original


// // Use functions from currency module
// console.log(`50 Canadian dollars equals ${currency.canadianToUS(50)} US dollars.`);

// console.log(`50 US dollars equals ${currency.USToCanadian(50)} Canadian dollars.`);

function getRate(rateName) {

const rateName = 'CadToUsd' || 'UsdToCad'

function CadToUsd(amount) {
  const rateValue = 1.5;
  returns (amount * rateValue)
}

function UsdToCad(amount) {
  const rateValue = 0.5;
  returns (amount * rateValue)
}

function setRate(rateName, rateValue) {
  if(rateName === 'CadToUsd') {
    const rateValue = 5;
    return true && CadToUsd(amount);
  } else {
    return false
  }
} 
CadToUsd(amount)
UsdToCad(amount)
setRate(rateName, rateValue)
}

exports.getRate = rateName => (rateName);


// Set a new exchange rate with setRate()
// if (currency.setRate('CadToUsd', 5)) {
//   console.log(`Changed currency rate.`); 
// } else {
//   console.log(`Couldn't change currency rate.`)
// }

// - setRate(rateName, rateValue)
// - checks if rateName exists
// - returns true if rate is successfully changed
// - returns false if rate doesn't exist

// function setRate(rateName, rateValue) {
//   if(rateName === true) {
//     return rateName === rateValue;
// }
// }

// exports.setRate = rateName, rateValue => (rateName===rateValue);



// currency = {
//   data: {
//     cadToUsdRate: 1.5,
//     usdToCadRate: 0.5
//   },

//   CadToUsd: function(amount) {
//     return amount * rateValue
//   },
  
//   UsdToCad: function(amount) {
//     return amount * this.usdToCadRate
//   },

//   setRate: function(rateName, rateValue){
//     if(rateValue === 50) {
//       return true;
//     } else {
//       return false
//     }
//   },
  
//   getRate: function(rateName){
//     return CadToUSD.rate
//   }
    
//   }

 


