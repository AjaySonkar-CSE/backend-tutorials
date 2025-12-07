// Simple node.js server
const http = require('http');

const server = http.createServer((req, res) =>{
    // Log concise request info instead of the full object
    console.log(`${new Date().toISOString()} - ${req.method} ${req.url}`);
    // console.log(req)
    // res.writeHead(200, { 'Content-Type': 'text/plain' });
    // res.end('OK');
    // process.exit();
    console.log(req.url, req.method, req.headers)
});

const PORT = 3001;
server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`)
})