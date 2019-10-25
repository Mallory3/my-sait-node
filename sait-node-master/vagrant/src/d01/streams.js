var fs = require('fs');
//'utf8' prevents wierd buffer thing. highWaterMark is size of buffer, so we have a 75k chunk in total so we should see 5 chunks (remove encoding: 'utf8', to see chunks). highwater mark can be changed. Its the chunk of code thats ran at a time.
var readable = fs.createReadStream(__dirname + '/assets/lorem.txt', { encoding: 'utf8', highWaterMark: 16 * 1024 });

var writable = fs.createWriteStream(__dirname + '/assets/newLorem.txt');

//anytime a stream finishes logging a stream into memory, it uses this callback to fire chunk
//everytime that chunk is written, it frees up memory
readable.on('data', function(chunk) {
	console.log(chunk);
	writable.write(chunk);
});