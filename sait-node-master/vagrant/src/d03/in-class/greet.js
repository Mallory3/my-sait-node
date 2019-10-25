greeting = {
  data: {
    firstName: 'Mandy',
    lastName: 'Micheal'
},
  spanish: function(data) {
    console.log(`Hola, ${this.data.firstName}!`);
}, english: function(data){
  console.log(`Hello, ${this.data.firstName}.`);
}
}

console.log(typeof spanish)
//turned all this into a function
// function greet(callback) {

//   const data = {
//     firstName: "John",
//     lastName: "Wick",
//     salutation: "Mr."
//   }

//   callback(data);

// }

// function spanish(data) {
//   console.log(`Hola, ${data.firstName}!`);
// }

// function english(data){
//   console.log(`Hello, ${data.firstName}.`);
// }

// // greet(threat);

// // greet(formal);

module.exports = greeting;