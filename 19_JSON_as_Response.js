const http = require('node:http');
const PORT = 3000;

const server = http.createServer((req, res) => {
    
    const superHero = {
        "firstName": "Captain",
        "lastName": "America"
    };
    
    res.writeHead(200, {"content-type": "application/json"});
    res.end(JSON.stringify(superHero));
});

server.listen(PORT, () => {
    console.log(`Server listening on http://localhost:${PORT}`);
});