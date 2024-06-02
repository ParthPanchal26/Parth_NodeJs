const http = require('node:http');
const fs = require('node:fs');

const PORT = 3000;

const server = http.createServer((req, res) => {
    if(req.url === '/' || req.url === '/home') {
        res.writeHead(200, {"Content-Type": "text/plain"});
        res.end("Home Page");
    } else if(req.url === '/about') {
        res.writeHead(200, {"Content-Type": "text/plain"});
        res.end("About Page");
    } else if(req.url === '/api') {
        res.writeHead(200, {"Content-Type": "application/json"});
        const api = {
            "FirstName": "Parth",
            "LastName": "Panchal",
            "Age": 18,
            "Contact-No": 7486863095,
            "Email-Id": "parthpanchal2602@gmail.com",
            "Password": "123P54343@r##t@#@hOOAA654^"
        }
        res.end(JSON.stringify(api));
    } else {
        res.writeHead(404);
        res.end("::: ... ::: ... Requested Page Not Found! 404 ... ::: ... :::")
    }
});

server.listen(PORT, () => {
    console.log(`Server listening on http://localhost:${PORT}`);
});