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

const canadianRate = 1.5
const usRate = .5
const rateName = CadToUsd || UsdToCad

function CadToUsd() {
}

exports.CadToUsd = amount => (amount * canadianRate);


function UsdToCad() {
}
exports.UsdToCad = amount => (amount * usRate);


function setRate(rateName, rateValue) {
   if(rateName === CadToUsd || UsdToCad) {
    
  } 
}

exports.setRate = rateName, rateValue => (rateValue === 5);


function getRate(rateName) {
  if(rateName === true) {
    return canadianDollar;
}
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

 


