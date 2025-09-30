const http = require("node:http");
const fs = require("node:fs/promises");
// http (App Server)

async function listener(req, res) {
    // TODO: Logic goes here to serve user
    res.setHeader("Content-Type", "text/html");
    if (req.url === "/contact.html") {
        html = await fs.readFile("contact.html", "utf-8");
    } else {
        html = await fs.readFile("index.html", "utf-8");
    }
    res.end(html);
};

const server = http.createServer(listener);
server.listen(8000);
console.log("Server is running");
// ! http://localhost:8000