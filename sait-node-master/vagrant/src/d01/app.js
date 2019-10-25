//creating a function that takes a callback
function greet(callback) {
  //making object
  const user = {
    firstName: 'John',
    lastName: 'Wick',
    salutation: 'Mr.'
  }

  //envoke callback
  callback(user);

}

function formal (user) {
  //need to use back ticks!
  console.log(`Greetings, ${user.salutation} ${user.lastname}`)
}

function threat (user) {
  //need to use back ticks!
  console.log(`Prepare to die, ${user.lastname}!`)
}


//ENVOKE

greet(formal);
greet(threat);