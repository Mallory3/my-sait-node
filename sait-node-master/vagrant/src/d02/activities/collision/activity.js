//starting all modules ie. http module, file 

const builtin = require("module").builtinModules;
console.log(builtin);

//build a webserver

const http = require('http');
const url = require("url");
const fs = require("fs");

http.createServer((request,response) => {

  fs.readFile(".d02/activities/collision/index.html", (err, data) => {
    if (err) {
      response.writeHead(404, { "Content-Type": "text/html" });
      response.write("<h1>404: Page Not Found</h1>");
      return response.end();
    } else if {
      response.writeHead(200, {"Content-Type": "text/html"});
 
      response.write(data);
      response.end();
    
    }

    })

})

  .listen(8080, () => {
    console.log(`Server running on port 8080`);
});


