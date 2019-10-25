
const fs = require('fs');

//adds text to greet.txt
fs.appendFile('./assets/greet.txt', "Hello world (again)...\n", err => {
  if (err) throw err;
  console.log('File saved.');
})

//error first callback
//created newFile.txt in assets
fs.open('./assets/newFile.txt', 'w', (err, file) => {
  if (err) throw err;
  console.log('File saved.');
});

//creating and writting to new file2
//if you write to file thats already made, it will override everything!! with no undo :(
fs.writeFile("./assets/newfile2.txt", "Hello world!", err => {
  if (err) throw err;
  console.log("File saved.");
});

//deleting file (unlink in memory)
//delete file2 
//error busy
fs.unlink("./assets/newfile2.txt", err => {
  if (err) throw err;
  console.log("File deleted.");
});

//rename file
//error busy
fs.rename("./assets/newfile.txt", "./assets/renamedFile.txt", err => {
  if (err) throw err;
  console.log("File renamed.");
});