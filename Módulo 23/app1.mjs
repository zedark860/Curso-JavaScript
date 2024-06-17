import http from "node:http";

const server = http.createServer();

server.on("request", (req, res) => {
    res.writeHead(200, {
        "Content-Type": "application/json"
    });

    res.write("Olá, mundo!");

    res.end();
});


server.listen(3000);