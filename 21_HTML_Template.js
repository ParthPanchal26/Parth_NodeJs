const http = require('node:http');
const fs = require('node:fs');

const PORT = 3000;

const server = http.createServer((req, res) => {
    const name = "Parth";
    res.writeHead(200, {"content-type": "text/HTML"});
    let HTML = fs.readFileSync("./21_HTML_Template.html", "utf-8");
    HTML = HTML.replace("{{name}}", name)
    res.end(HTML);
});

server.listen(PORT, () => {
    console.log(`Server listening on http://localhost:${PORT}`);
});