const greet = require("./greet.js")
const express = require('express')

console.log(typeof express)

console.log(greet())
console.log(greet.spanish())
console.log(greet.data.firstname)