// Node.js Basics:
// Introduction to Node.js.
// Installing Node.js and npm.

// npm init -y -----------<  package.json

// Working with modules.
// File system operations.
// understanding HTTP module


const fs = require('fs');

// writefile
// appendfile
// copyfile
// rename
// unlink

// // ------------------------// writefile
// fs.writeFile("hey.txt", "hey lksdf", function(err){
//     if(err) console.log(err);
//     else console.log("done");
// })


// // ------------------------// appendfile
// fs.appendFile("hey.txt", " adding some data appending some data", function(err){
//     if(err) console.log(err);
//     else console.log("done appending");
// })


// // // ------------------------// rename
// fs.rename("hey.txt", "hello.txt", function(err){
//     if(err) console.error(err);
//     else console.log("done");
// })



// // ------------------------// copyfile
// fs.copyFile("hello.txt", "./copy/copy_hello.txt", function(err){
//     if(err) console.error(err);
//     else console.log("done copying");

// })


// // ------------------------// unlink
// fs.unlink("./copy/copy_hello.txt", function(err){
//     if(err) console.error(err);
//     else console.log("done deleting");
// })




//   43:30