const fs = require('node:fs');
const zlib = require('node:zlib');

const gzip = zlib.createGzip();

const readableStream = fs.createReadStream('./15_file.txt', {
   encoding: 'UTF-8',
   highWaterMark: 2,
});

readableStream.pipe(gzip).pipe(fs.WriteStream('./17_file.txt.gz'));

const writeableStream = fs.createWriteStream('./15_greet.txt');

// Pipe returns a destination stream which enables chaining. Condition is that the destination stream has to be readable duplex or a transform stream.
readableStream.pipe(writeableStream);

// In this example we have a writeableStream so we can not chain by calling .pipe.
// Instead let's make use of another built-in module which is "zlib".

// The "zlib" modulel provides compression functionality implemented using "gzip" algorithm OR in simple terms zlib allowes us to create zipped files if we can call it that.
// The "zlib" has the built-in transform stream.

