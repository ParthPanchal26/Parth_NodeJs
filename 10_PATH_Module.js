/* Path 
   => The path module provides utilities for working with file and directory path.

   const path = require("node:path");

   -> Here path is the name of our built-in module and we prefix it with node to indicate that it is built in module.
   -> It is also important to note that there is no dot-slash at the beginning.
   -> Once we have the module loaded we can access the various properties and methods exposed by that module.
   -> Now the path module has 14 different properties and methods but we are going to focus on 7 which are regularly used.
   -> For most we will use the readily availabel __filename and __dirname, convenience variables availabel in every module 
*/

const path = require('node:path');

console.log('----------------------------');
console.log(__filename);
console.log(__dirname);
console.log('----------------------------');

// Let's take look at different methods availabel in path module.

// 1. Basename -> Returns last portion of a path.

console.log(path.basename(__filename));
console.log(path.basename(__dirname));
console.log('----------------------------');

// 2. EXT -> Returns extention of path

console.log(path.extname(__filename));
console.log(path.extname(__dirname));
console.log('----------------------------');

// 3. Parse -> Returns object whose properties represent significant elements of the path
// You can access its properties using dot notation because it is an object.
console.log(path.parse(__filename));
console.log('----------------------------');

// 4. Format -> Returns a path string given an object.

console.log(path.format(path.parse(__filename)));
console.log('----------------------------');

// 5. isAbsolute -> Returns whether a path is absolute or not

console.log(path.isAbsolute(__filename));
console.log(path.isAbsolute("./08_data.json"));
console.log('----------------------------');

// 6.Join -> Which joins all given path segments together using platform specific separator as a delimiter and then normalizes the resulting path 

console.log(path.join("folder1", "folder2", "index.html"));
console.log(path.join("/folder1", "folder2", "index.html"));
console.log(path.join("/folder1", "//folder2", "index.html"));
console.log(path.join("/folder1", "//folder2", "../index.html"));
console.log(path.join(__dirname, "data.json"));
console.log('----------------------------');

/* 7.Resolve
   -> In output each log statements the path starts with / indicating an absolute path.
   -> The path is completely dependent on the arguments you pass in.
   -> If your arguments don't contain a forward slash as it case with our first statement, resolve will add an absolute path to the current folder and join the argument.
   -> If you specify forward slash resolve will return the absolute path from that forward slash.
   -> If / occures later in the sequence as is the case in statement 3 here result will consider that as aroot and ignore the previous path.
   -> In statement 4, where folder2 is root but we go up one folder and hence only index.html is logged.
   -> Since __dirname name is already an absolute path we see that with data.json returned by the result method.
*/
console.log(path.resolve("folder1", "folder2", "index.html"));
console.log(path.resolve("/folder1", "folder2", "index.html"));
console.log(path.resolve("/folder1", "//folder2", "index.html"));
console.log(path.resolve("/folder1", "//folder2", "../index.html"));
console.log(path.resolve(__dirname, "data.json"));
console.log('----------------------------');

/* node: Protocol
   => On line no.13 we have used `const path = require('node:path')` here node: is optional but it also has some benifits.

   -> Makes it perfectly clear that the import is a NodeJS built in module.
   -> Makes the import identifier a valid absolute URL.
   -> Avoid conflicts for future NodeJS built in modules.
*/