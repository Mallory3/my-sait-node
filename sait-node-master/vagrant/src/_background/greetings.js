//types of functions

function greet() {
  // console.log("hello")
}

// console.log(typeof greet);

greet()

const greet2 = function() {
  // console.log("hello again")
  return 'Hey!';
}

console.log(typeof greet2)
console.log(typeof greet2())

const greet3 = function() {
  console.log(`Hello, ${name}!`)
}('John Wick');