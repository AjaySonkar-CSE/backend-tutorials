//  3:34:00

// Simple node.js server
const http = require('http');
const fs = require('fs');


const server = http.createServer((req, res) =>{
    // Log concise request info instead of the full object
    // console.log(`${new Date().toISOString()} - ${req.method} ${req.url}`);
    // console.log(req)
    // res.writeHead(200, { 'Content-Type': 'text/plain' });
    // res.end('OK');
    // process.exit();{

// -----------------------  Routing---------------------
    console.log(req.url, req.method)
    // if (req.url === '/demo'){
    //         res.setHeader('Content-Type', 'text/html');
    //         res.write('<html>');
    //         res.write('<head><title>My first page</title></head>');
    //         res.write('<body><h1>home page</h1></body>');
    //         res.write('</html>');
    //         return res.end();
    // } else if(req.url === '/products'){
    //         res.setHeader('Content-Type', 'text/html');
    //         res.write('<html>');
    //         res.write('<head><title>My first page</title></head>');
    //         res.write('<body><h1>Product page</h1></body>');
    //         res.write('</html>');
    //         return res.end();
    // }

    console.log(req.url, req.method)
// -----------------user input page----------------
    if (req.url === '/'){
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>My first page</title></head>');
        res.write('<body>');
        res.write('<form action="/submit-details" method="POST">');// 2:52
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
    } else if (req.url.toLowerCase() === "/submit-details" && req.method.toLowerCase() === "post") {
        const body = [];
        req.on('data', chunk => {
            console.log('Received chunk:', chunk.toString());
            body.push(chunk);
        });


        req.on('end', () => {
            const parsed = Buffer.concat(body).toString();
            
            const params = new URLSearchParams(parsed);
            console.log('Parsed parameters:', params);
            const bodyObject = {};
            for (const [key, value] of params.entries()){
                bodyObject[key] = val;

            }
            console.log(bodyObject);





            // save received body (fallback to placeholder if empty)
            fs.writeFileSync('user.txt', parsed || 'Prashant jain');
            res.statusCode = 302;
            res.setHeader('Location', '/');
            return res.end();
        });
    }
    // res.setHeader('Content-Type', 'text/html');
    // res.write('<html>');
    // res.write('<head><title>My first page</title></head>');
    // res.write('<body><h1>default page</h1></body>');
    // res.write('</html>');
    
});

const PORT = 3001;
server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`)
})