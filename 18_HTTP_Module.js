/*  HTTP:
    -> Hypertext Transfer Protocol.
    -> A protocol that defines a format for client and server to speak to each other.
    -> The client sends an HTTP request and the server responds with an HTTP response

    HTTP and Node:
    -> We can create a web server using NodeJs.
    -> NodeJs has access to operating system functionality like networking.
    -> Node has an event loop to run tasks asynchronously and is perfect for creating webs servers that can simultaneously handel large volumes of requesrs.
    -> The node server we create should still respect HTTP format.
    -> The HTPP module allows us to creation of web servers that can transfer data over HTTP.
*/

const http = require('node:http');
const PORT = 3000;

const server = http.createServer((req, res) => {
    
    const superHero = {
        "firstName": "Captain",
        "lastName": "America"
    };
    
    // res.writeHead(200, {"content-type": "application/json"});
    res.writeHead(200, {"content-type": "text/plain"});
    // res.end(JSON.stringify(superHero));
    res.end("Hello World");
});

server.listen(PORT, () => {
    console.log(`Server listening on http://localhost:${PORT}`);
});

/*  
    -> First we imported http module.
    -> Then we created createserver method to create server, That accepts a request listener callback that executes on every request.
    -> Node automaticallu injects the request and response arguments into the callback function.
    -> The requst object gives us information about the incoming request whereas response object is used to send back a response to the client.
    -> Finally we specify that the created server should listen to incoming request on PORT 3000.
*/