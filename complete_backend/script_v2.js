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

// ------------------------// writefile
fs.writeFile("hey.txt", "hey lksdf", function(err){
    if(err) console.log(err);
    else console.log("done");
})
