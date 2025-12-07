// Shim: forward to the actual server in the complete_backend folder
// This allows running `node create_server.js` from the repository root.
module.exports = require('./complete_backend/create_server.js');
