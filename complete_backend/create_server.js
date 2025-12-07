// Simple node.js server
const http = require('http');

const server = http.createServer((req, res) =>{
    // Log concise request info instead of the full object
    console.log(`${new Date().toISOString()} - ${req.method} ${req.url}`);
    // console.log(req)
    // res.writeHead(200, { 'Content-Type': 'text/plain' });
    // res.end('OK');
    // process.exit();{

// -----------------------  Routing---------------------
    console.log(req.url, req.method, req.headers)
    if (req.url === '/demo'){
            res.setHeader('Content-Type', 'text/html');
            res.write('<html>');
            res.write('<head><title>My first page</title></head>');
            res.write('<body><h1>home page</h1></body>');
            res.write('</html>');
            return res.end();
    } else if(req.url === '/products'){
            res.setHeader('Content-Type', 'text/html');
            res.write('<html>');
            res.write('<head><title>My first page</title></head>');
            res.write('<body><h1>Product page</h1></body>');
            res.write('</html>');
            return res.end();

// -----------------user input page----------------
    } else if (req.url === '/'){
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>My first page</title></head>');
        res.write('<body>');
        res.write('<form action="/submit-details>');// 2:52
        res.write('<h1>user input page</h1>');
        res.write('<input type="text" id="name" name="name" placeholder="Enter your name"><br><br>');
        res.write('<label for="male">Male</label>');
        res.write('<input type="radio" id="male" name="gender" value="male" />');
        res.write('<label for="female">female</label>');
        res.write('<input type="radio" id="female" name="gender" value="female" />');
        res.write('<input type="submit" value="Submit">');
        res.write('</form>');
        res.write('</body');
        res.write('</html>');
        return res.end();
    }
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>My first page</title></head>');
    res.write('<body><h1>default page</h1></body>');
    res.write('</html>');
    res.end();
});

const PORT = 3001;
server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`)
})