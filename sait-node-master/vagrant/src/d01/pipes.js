const fs = require('fs');
const zlib = require('zlib');

//does not accept a callback, there are callbacks, you just dont see it
const readable = fs.createReadStream(__dirname + '/assets/lorem.txt');

const writable = fs.createWriteStream(__dirname + '/assets/newLorem.txt');

readable.pipe(writable);

//creating another write stram, called compressed
var compressed = fs.createWriteStream(__dirname + '/assets/lorem.txt.gz');

//piped to the file handler gzip
var gzip = zlib.createGzip();

//pipes into actual file and writes it
//chaining pipes together
readable.pipe(gzip).pipe(compressed);