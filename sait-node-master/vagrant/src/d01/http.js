// built a web server


//require is an expression telling node we want to use its http module code
//it will export the code, put into var http.
//const hhtp can be named whatever, second half of code stays same
const http = require('http');
const url = require("url");

//or!!! http.createServer(function(request,response) {
//standard ES6 fat arrow way
//callback function, a function that contains code that is not run until server gets a request from browser (car thats not turned on)
http.createServer((request,response) => {
  // Set the response HTTP header with HTTP status and Content



  if(request.url === '/'){

  //html converts the code, if you just write plain, your tags will appear on browser
  response.writeHead(200, {"Content-Type": "text/html"});
 
  response.end("<h1>Hello World!</h1>");
 
  } else if (request.url === '/about') {
    response.writeHead(200, {"Content-Type": "text/html"});
    response.end("<h1>About page</h1>");
  
  } else if (request.url === '/api') {
    response.writeHead(200, {"Content-Type": "application/json"});
    const obj = {
      firstname: 'John',
      lastname: 'Wick'
    }

    response.end(JSON.stringify(obj));
  }
  
})



  // Send the response body "Hello World"

  // Pass in a function as the 2nd argument to listen() so that we log a message to the console when the server is running.
//method called listen that starts up the server
//callback, can jsut have .listen(8080)
.listen(8080, () => {
      console.log(`Server running on port 8080`);
  });

  //built a web server in 15 lines of code
  //dobbie sent a request for local host 8080, controller ran call back that writes header with code 200 and content type text/html
  // so that writes the head, and then sends the response, in this case hello world