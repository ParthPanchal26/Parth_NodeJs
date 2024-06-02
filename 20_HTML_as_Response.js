const http = require('node:http');
const fs = require('node:fs');

const PORT = 3000;

const server = http.createServer((req, res) => {
    res.writeHead(200, {"content-type": "text/HTML"});
    // const HTML = fs.readFileSync("./20_HTML_as_Response.html", "utf-8");
    fs.createReadStream(__dirname + "/20_HTML_as_Response.html").pipe(res)
    // res.end(HTML);
    // res.writeHead(200, {"content-type": "text/plain"});
    // res.end("Hello World!");
});

server.listen(PORT, () => {
    console.log(`Server listening on http://localhost:${PORT}`);
});