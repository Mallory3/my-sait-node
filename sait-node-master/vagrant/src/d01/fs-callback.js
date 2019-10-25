const fs = require('fs');

//creating file system
//_dirname is giving it a path
//sychronus
const greet = fs.readFileSync(__dirname + '/assets/greet.txt', 'utf8');

console.log(greet);
//assynchronus way
//a callback function wont run until the end of the script
const greet2 = fs.readFile(__dirname + '/assets/greet.txt', 'utf8', function(err, data) {
  console.log(data);
})

console.log('Done!')